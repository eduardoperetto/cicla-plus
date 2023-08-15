from django.db import models
from django.conf import settings
from django.contrib.auth.models import User

class Account(models.Model):
    User._meta.get_field('email')._unique = True
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    location = models.CharField(max_length=50)
    phone = models.CharField(max_length=12)
    class Meta:
        abstract = True

class Person(Account):
    cpf = models.PositiveBigIntegerField()
    birthdate = models.DateField()

class Company(Account):
    cnpj = models.PositiveBigIntegerField()
    class Meta:
        verbose_name_plural = "Companies"
    def __str__(self):
        return (self.user.username)

class Advertisement(models.Model):
    material_description = models.CharField(max_length=50)
    material_type = models.CharField(max_length=2, choices=[
        ("pl", "Plastico"),
        ("is", "Isopor"),
        ("vd", "Vidro"),
        ("pp", "Papel"),
        ("po", "Papelao"),
        ("mt", "Metal"),
    ])
    quantity = models.PositiveIntegerField()
    acceptance_condition = models.TextField()
    profit_type = models.CharField(max_length=50)
    times_viewed = models.PositiveIntegerField()
    company = models.ForeignKey('Company', on_delete=models.CASCADE)

class Transaction(models.Model):
    advertisement = models.ForeignKey('Advertisement', on_delete=models.CASCADE)
    user = models.ForeignKey('Person', on_delete=models.CASCADE)
