from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from cicla_plus.models import *
from cicla_plus.serializers import *
from cicla_plus.user import createUser

@csrf_exempt
def registerPerson(request):
    if request.method == 'POST':
        user = createUser(request)

        person = Person.objects.create(
            user=user, 
            location=request.POST.get('location'),
            phone=request.POST.get('phone'),
            cpf=request.POST.get('cpf'),
            birthdate=request.POST.get('birthday')
        )
        person.save()

        return JsonResponse([{'Result': 'Success'}], safe=False)
    else:
        raise Exception("GET not allowed")