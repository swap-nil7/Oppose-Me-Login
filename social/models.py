
from django.db import models

class Stats(models.Model):
	username = models.CharField(max_length=100)
	score = models.DecimalField(max_digits=20, decimal_places=3)

class Leaderboard(models.Model):
	username = models.CharField(max_length=100)
	score = models.DecimalField(max_digits=20, decimal_places=3)