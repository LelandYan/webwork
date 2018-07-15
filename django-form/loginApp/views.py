from django.shortcuts import render, HttpResponse, redirect
from django import forms
from .models import User
from django.contrib import auth
import time


# Create your views here.
def index(request):
    return render(request, 'register.html')


def index2(request):
    return render(request, 'userlogin.html')


class UserForm(forms.Form):
    username = forms.CharField(label='用户名', max_length=100)
    password1 = forms.CharField(label='密码', widget=forms.PasswordInput())
    password2 = forms.CharField(label="确认密码", widget=forms.PasswordInput())
    email = forms.EmailField(label="电子邮件")


class UserFormLogin(forms.Form):
    username = forms.CharField(label='用户名', max_length=100)
    password = forms.CharField(label="密码", widget=forms.PasswordInput())


def login(request):
    if request.method == 'POST':
        uf = UserFormLogin(request.POST)
        if uf.is_valid():
            username = uf.cleaned_data['username']
            password = uf.cleaned_data['password']
            userResult1 = User.objects.filter(username=username,password__isnull=False)
            if (len(userResult1) > 0):
                userResult2 = User.objects.filter(username=username, password=password)
                if (len(userResult2) > 0):
                    return render(request, 'success.html', {'operation': '登陆'})
                else:
                    return HttpResponse("输入的密码错误")
            else:
                return HttpResponse('该用户不存在')
        else:
            uf = UserFormLogin()
        return render(request, 'userlogin.html', {'uf': uf})


def register(request):
    curtime = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
    if request.method == 'POST':
        uf = UserForm(request.POST)
        if uf.is_valid():
            username = uf.cleaned_data['username']
            filterResult = User.objects.filter(username=username)
            if len(filterResult) > 0:
                return render(request, 'register.html', {'errors': '用户名已经存在'})
            else:
                password1 = uf.cleaned_data['password1']
                password2 = uf.cleaned_data['password2']
                errors = []
                if (password1 != password2):
                    errors.append("两次输入的密码不一致")
                    return render(request, 'register.html', {'errors': errors})
                password = password2
                email = uf.cleaned_data['email']
                user = User.objects.create(username=username, password=password, email=email)
                user.save()
                return render(request, 'success.html', {"username": username, 'operation': '注册'})
        else:
            uf = UserForm()
            return render(request, 'register.html', {'uf': uf})
