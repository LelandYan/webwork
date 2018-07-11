from myApp import views
from django.conf.urls import url, include

urlpatterns = [
    url(r'^$', views.index),
    url(r'^(\d+)/$', views.detail),
    url(r'^grades/$', views.grades),
    url(r'^students/$', views.students),
    url(r'^grades/(\d+)/$', views.gradesStudents),
]
