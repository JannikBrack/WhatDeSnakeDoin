from django.urls import path
from . import views

urlpatterns = [
    path('api/snake', views.snakes, name='snake'),
    path('api/user/authentication/', views.authentication, name='authentication'),
    path('logout/', views.logout_view, name='logout')
]