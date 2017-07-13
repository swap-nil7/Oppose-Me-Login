from django.conf.urls import url
from django.views.decorators.csrf import csrf_exempt
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^profile/$', views.home, name='home'),
    url(r'^game/$', views.game, name='game'),
    url(r'^save$', views.save, name='save'),
    url(r'^showplayer$', views.showplayer, name='showplayer'),
]
