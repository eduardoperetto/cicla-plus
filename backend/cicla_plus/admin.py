from django.contrib import admin
from .models import *

@admin.register(Person)
class PersonAdmin(admin.ModelAdmin):
    list_display = ('cpf', 'birthdate')

@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('cnpj',)

@admin.register(Advertisement)
class AdvertisementAdmin(admin.ModelAdmin):
    list_display = ('material_description', 'material_type', 'quantity', 'acceptance_condition', 'profit_type', 'company')

@admin.register(Transaction)
class TransactionAdmin(admin.ModelAdmin):
    list_display = ('advertisement', 'user')
