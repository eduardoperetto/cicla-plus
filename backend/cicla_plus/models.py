from django.db import models
from django.conf import settings

class Account(models.Model):
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

# class DeviceConfig(models.Model):
#     serial = models.OneToOneField('Device', on_delete=models.CASCADE)
#     hw = models.PositiveIntegerField()
#     fw_major = models.PositiveIntegerField()
#     fw_minor = models.PositiveIntegerField()
#     action = models.PositiveIntegerField()
#     send_interval = models.PositiveIntegerField()
#     operation_mode = models.PositiveIntegerField()
#     last_modified = models.DateTimeField(auto_now=True)

#     def __str__(self):
#         return (str(self.serial) + " Config")

#     class Meta:
#         verbose_name = "Device config"
#         verbose_name_plural = "Configure devices"

# class Log(models.Model):
#     serial = models.ForeignKey('Device', on_delete=models.CASCADE)
#     date = models.DateTimeField(auto_now_add=True)
#     msg = models.CharField(max_length=50)
#     parsed_message = models.TextField(default="")

#     def __str__(self):
#         return (str(self.serial) + " log at " + str(self.date))

# class DeviceStatus(models.Model):
#     serial = models.OneToOneField('Device', on_delete=models.CASCADE)
#     fw_major = models.PositiveIntegerField()
#     fw_minor = models.PositiveIntegerField()
#     send_interval = models.PositiveIntegerField()
#     operation_mode = models.PositiveIntegerField()
#     uptime = models.PositiveIntegerField()

#     last_modified = models.DateTimeField(auto_now=True)

#     def __str__(self):
#         return (str(self.serial) + " Status")
        
#     class Meta:
#         verbose_name_plural = "Device status"

# class SentData(models.Model):
#     serial = models.ForeignKey('Device', on_delete=models.CASCADE)
#     json = models.TextField()
#     date = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return (str(self.serial) + " Sent JSON at " + str(self.date))

