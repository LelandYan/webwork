from django.contrib import admin

# Register your models here.
from .models import Grades, Students


# 可以关联对象
class StudentsInfo(admin.TabularInline):
    model = Students
    extra = 2

@admin.register(Grades)
class GradesAdmin(admin.ModelAdmin):
    inlines = [StudentsInfo]
    list_display = ['pk', 'gname', 'gdate', 'ggirlnum', 'gboynum', 'isDelete']
    list_filter = ['gname']
    search_fields = ['gname']
    list_per_page = 5
    # 添加，修改页(不能同时使用)
    # fields = ['ggirlnum','gname','gboynum','gdate','isDelete']
    # 给属性分组
    fieldsets = [
        ('num', {'fields': ['ggirlnum', 'gboynum']}),
        ('base', {'fields': ['gname', 'gdate', 'isDelete']})
    ]


# admin.site.register(Grades, GradesAdmin)

@admin.register(Students)#用装饰器来注册
class StudentsAdmin(admin.ModelAdmin):
    def gender(self):
        if self.sgender:
            return '男'
        else:
            return '女'
    #设置页面列的名称
    gender.short_description = '性别'

    list_display = ['pk', 'sname', 'sage', gender, 'scontend', 'sgrade', 'isDelete']
    list_per_page = 10


# admin.site.register(Students, StudentsAdmin)
