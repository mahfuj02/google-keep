from django.urls import path
from .views import say_hallo
urlpatterns = [
    path('hello/', say_hallo),
]
