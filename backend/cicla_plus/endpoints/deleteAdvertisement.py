from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from cicla_plus.models import *
from cicla_plus.serializers import *

@csrf_exempt
def deleteAdvertisement(request):
    if request.method == 'POST':
        advertisement = Advertisement.objects.filter(id=request.POST.get('id'))
        advertisement.update(is_deleted=True, hidden=True)

        return JsonResponse([{'Result': 'Success'}], safe=False)
    else:
        raise Exception("GET not allowed")