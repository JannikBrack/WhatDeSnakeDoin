from django.contrib import admin
from .models import Snake, FoodType, Feeding

# Register your models here.
admin.site.register(Snake)
admin.site.register(FoodType)
admin.site.register(Feeding)