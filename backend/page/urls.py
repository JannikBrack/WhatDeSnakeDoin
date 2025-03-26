from django.urls import path
from . import views

urlpatterns = [
    path('api/snake', views.snakes, name='snake'),
    path('api/user/authentication/', views.authentication, name='create_snake'),
    path('logout/', views.logout_view, name='logout')
]