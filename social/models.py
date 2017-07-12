
from django.db import models

class Stats(models.Model):
	username = models.CharField(max_length=100)
	score = models.IntegerField(default=0)

class Leaderboard(models.Model):
	username = models.CharField(max_length=100)
	score = models.IntegerField(default=0)