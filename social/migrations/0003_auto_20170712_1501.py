# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-07-12 15:01
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('social', '0002_leaderboard'),
    ]

    operations = [
        migrations.AlterField(
            model_name='leaderboard',
            name='score',
            field=models.DecimalField(decimal_places=3, max_digits=20),
        ),
        migrations.AlterField(
            model_name='stats',
            name='score',
            field=models.DecimalField(decimal_places=3, max_digits=20),
        ),
    ]