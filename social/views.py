# -*- coding: utf-8 -*-
from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.http import HttpResponse
from .models import Stats, Leaderboard

def index(request):
	return render(request, 'social/index.html')

def home(request):
	return render(request, 'social/home.html')

def game(request):
	return render(request, 'social/game.html')

def save(request):
	user = request.POST['user']
	score = request.POST['score']
	stat = Stats.objects.create(username = user, score = score)
	return HttpResponse("")
	
def showplayer(request):
	return HttpResponse("")

@login_required

def home(request):
    return render(request, 'social/home.html')

# Create your views here.
