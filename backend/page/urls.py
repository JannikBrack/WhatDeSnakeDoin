from django.urls import path
from . import views

urlpatterns = [
    path('api/snake', views.get_snakes, name='snake'),
    path('api/user/authentication', views.authentication, name='create_snake'),
]