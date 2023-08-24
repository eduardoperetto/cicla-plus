from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from cicla_plus.models import *
from cicla_plus.serializers import *
from cicla_plus.user import createUser

@csrf_exempt
def registerCompany(request):
    if request.method == 'POST':
        user = createUser(request)

        company = Company.objects.create(
            user=user, 
            location=request.POST.get('location'),
            phone=request.POST.get('phone'),
            cnpj=request.POST.get('cnpj')
        )
        company.save()

        return JsonResponse([{'Result': 'Success'}], safe=False)
    else:
        raise Exception("GET not allowed")
