from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^profile/$', views.home, name='home'),
    url(r'^game/$', views.game, name='game'),
]
