from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from cicla_plus.models import *
from cicla_plus.serializers import *

@csrf_exempt
def newAdvertisement(request):
    if request.method == 'POST':
        advertisement = Advertisement.objects.create(
            material_description=request.POST.get('material_description'), 
            material_type=request.POST.get('material_type'),
            quantity=request.POST.get('quantity'),
            acceptance_condition=request.POST.get('acceptance_condition'),
            profit_type=request.POST.get('profit_type'),
            times_viewed=request.POST.get('times_viewed'),
            hidden=request.POST.get('hidden'),
            company=Company.objects.get(id=request.POST.get('company')),
        )
        advertisement.save()

        return JsonResponse([{'Result': 'Success'}], safe=False)
    