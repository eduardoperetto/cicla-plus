from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from cicla_plus.models import *
from cicla_plus.serializers import *

@csrf_exempt
def updateUser(request):
    if request.method == 'POST':
        cpf = request.POST.get('cpf')
        if cpf:
            account = Person.objects.filter(cpf=cpf)
        else:
            cnpj = request.POST.get('cnpj')
            account = Company.objects.filter(cnpj=cnpj)

        location = request.POST.get('location')
        if location:
            account.update(location=location)
        phone = request.POST.get('phone')
        if phone:
            account.update(phone=phone)
    
        user = User.objects.filter(email=request.POST.get('email'))
        if user.count() < 1: 
            raise Exception("Email not registered")
        first_name = request.POST.get('first_name')
        if first_name:
            user.update(first_name=first_name)
        last_name = request.POST.get('last_name')
        if last_name:
            user.update(last_name=last_name)

        return JsonResponse([{'Result': 'Success'}], safe=False)
    else:
        raise Exception("GET not allowed")
    