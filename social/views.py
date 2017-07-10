# -*- coding: utf-8 -*-
from django.contrib.auth.decorators import login_required
from django.shortcuts import render

def index(request):
	return render(request, 'social/index.html')

def home(request):
	return render(request, 'social/home.html')

def game(request):
	return render(request, 'social/game.html')

@login_required

def home(request):
    return render(request, 'social/home.html')

# Create your views here.
