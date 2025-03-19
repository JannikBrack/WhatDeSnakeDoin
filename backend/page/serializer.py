from rest_framework import serializers
from .models import Snake, Feeding, FoodType
from django.contrib.auth.models import User


class SnakeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Snake
        fields = '__all__'

class FeedingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feeding
        fields = '__all__'

class FoodTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodType
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username']