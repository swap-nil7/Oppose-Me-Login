# -*- coding: utf-8 -*-
from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.http import HttpResponse
from .models import Stats, Leaderboard

def index(request):
	return render(request, 'social/index.html')
@login_required
def home(request):
	user = request.user.username
	scores = Stats.objects.filter(username=user).order_by('-score')[:5]
	highs = Stats.objects.all().order_by('-score')[:10]
	context = {
	'scores': scores,
	'highs': highs,
	}
	return render(request, 'social/home.html', context)

def game(request):
	return render(request, 'social/game.html')

def save(request):
	user = request.POST['user']
	score = request.POST['score']
	stat = Stats.objects.create(username = user, score = score)
	return HttpResponse("")


#@login_required

#def home(request):
#    return render(request, 'social/home.html')

# Create your views here.
