from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Snake
from .serializer import SnakeSerializer
# Create your views here.

@api_view(['GET'])
def get_snakes(request):
    data = Snake.objects.all()
    serializer = SnakeSerializer(data, many=True)
    return Response(serializer.data, status=200)