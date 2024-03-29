from django.db import models


# Create your models here.

class Grades(models.Model):
    gname = models.CharField(max_length=20)
    gdate = models.DateTimeField()
    ggirlnum = models.IntegerField()
    gboynum = models.IntegerField()
    isDelete = models.BooleanField()

    def __str__(self):
        return f'{self.gname}'


class Students(models.Model):
    sname = models.CharField(max_length=20)
    sgender = models.BooleanField(default=True)
    sage = models.IntegerField()
    scontend = models.CharField(max_length=20)
    isDelete = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.sname}'

    sgrade = models.ForeignKey('Grades', on_delete=models.CASCADE)
