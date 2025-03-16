from django.contrib.auth.models import User
from django.db import models

# Create your models here.
class Snake(models.Model):
    name = models.CharField(max_length=100)
    species = models.CharField(max_length=100)
    gender = models.CharField(max_length=10)
    venomous = models.BooleanField(default=False)
    image = models.ImageField(upload_to='images/')
    owner = models.ForeignKey(User, on_delete=models.CASCADE)

class Feeding(models.Model):
    snake_id = models.ForeignKey(Snake, on_delete=models.CASCADE)
    feeding_date = models.DateField()
    food_type = models.CharField(max_length=100)
    amount = models.FloatField()

class FoodType(models.Model):
    name = models.CharField(max_length=100)
    amount = models.CharField(max_length=100)