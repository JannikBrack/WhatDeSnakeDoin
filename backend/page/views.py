import json
from django.contrib.auth import authenticate
from django.contrib.sessions.models import Session
from django.utils.timezone import now
from pip._internal import req
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from .models import Snake
from .serializer import SnakeSerializer, UserSerializer

@api_view(['POST'])
def create_user(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            username = data.get('username')
            email = data.get('email')
            password = data.get('password')
            user = User.objects.create_user(username=username, email=email, password=password)
            user.save()
        except json.decoder.JSONDecodeError:
            return Response({"message": "invalid values"}, status=400)

def get_session (req):
    session_cookie = req.COOKIES.get('sessionid')
    if session_cookie is None:
        return None
    session = Session.objects.get(session_key=session_cookie)

    if not session:
        return None

    if session.expire_date < now():
        session.delete()
        return None
    else:
        session_data = session.get_decoded()
        user = session_data["user"]
        user_dict = {
            "username": user["username"],
            "user_id": user["user_id"],
        }
    return user_dict

@api_view(['POST'])
def authentication(req):
    try:
        data = json.loads(req.body)
        username = data.get('username')
        password = data.get('password')
        login_via_cookies = data.get('loginViaCookies')
        if login_via_cookies:
            try:
                user_dict = get_session(req)
                if user_dict is None:
                    raise Session.DoesNotExist

                return Response({"message": "Logged in via cookie successfully", "user": user_dict}, status=200)
            except Session.DoesNotExist:
                return Response({"error": "Session does not exist"}, status=401)
        else:
            print(f"Authentifizierung für Benutzer: {username}")

            user = authenticate(req, username=username, password=password)

            if user is not None:
                user_dict = {
                    "username": user.username,
                    "user_id": user.id,
                }
                response = Response({"message": "Authentifizierung erfolgreich", "user": user_dict})
                req.session['user'] = user_dict
                req.session.save()
                return response
            else:
                print("Ungültige Anmeldedaten")
                return Response({"message": "Ungültige Anmeldedaten"}, status=401)
    except json.JSONDecodeError:
        return Response({"message": "Ungültiges JSON-Format"}, status=400)



@api_view(['GET'])
def snakes(request):
    if request.method == 'GET':
        try:
            user_dict = get_session(request)
            user_id = user_dict["user_id"]
            print(user_id)
            data = Snake.objects.filter(owner=user_id)
            print(data)
            serializer = SnakeSerializer(data, many=True)
            print(serializer.data)
            return Response(serializer.data, status=200)
        except ValueError:
            return Response({"message": "Invalid user_id or user not found!"}, status=400)