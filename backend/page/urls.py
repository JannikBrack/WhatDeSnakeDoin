from django.urls import path
from . import views

urlpatterns = [
    path('api/get_snake', views.get_snakes, name='get_snake'),
]