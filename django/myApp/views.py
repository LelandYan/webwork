from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def index(request):
    return HttpResponse('嘤嘤嘤')


def detail(request, num):
    return HttpResponse(f'123--{num}')


from .models import Grades,Students


def grades(request):
    gradesList = Grades.objects.all()

    return render(request, 'myApp/grades.html', {'grades': gradesList})
def students(request):
    studentsList = Students.objects.all()
    return render(request,'myApp/students.html',{'students':studentsList})

def gradesStudents(request,num):
    grade = Grades.objects.get(pk=num)
    studentsList = grade.students_set.all()
    return render(request,'myApp/students.html',{'students':studentsList})
