from django.contrib import admin

# Register your models here.
from .models import User

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'password']
    list_filter = ['username']
    search_fields = ['username']
    list_per_page = 5