from django.urls import path
from account import views


urlpatterns = [
    path('register', views.LoginView.as_view())
]