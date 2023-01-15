from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def say_hallo(request):
    return HttpResponse('Hello world')
