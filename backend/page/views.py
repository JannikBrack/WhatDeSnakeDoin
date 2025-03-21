import json
from django.contrib.auth import authenticate
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

@api_view(['POST'])
def authentication(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            username = data.get('username')
            password = data.get('password')

            user = authenticate(request, username=username, password=password)

            if user is not None:
                user_data = UserSerializer(user).data
                return Response({"message": "Authentifizierung erfolgreich", "user": user_data}, status=200)
            else:
                return Response({"message": "Ungültige Anmeldedaten"}, status=401)
        except json.JSONDecodeError:
            return Response({"message": "Ungültiges JSON-Format"}, status=400)



@api_view(['GET'])
def snakes(request):
    if request.method == 'GET':
        try:
            user_id = request.query_params.get('user_id', None)
            print(user_id)
            data = Snake.objects.filter(owner=user_id)
            print(data)
            serializer = SnakeSerializer(data, many=True)
            print(serializer.data)
            return Response(serializer.data, status=200)
        except ValueError:
            return Response({"message": "Invalid user_id or user not found!"}, status=400)