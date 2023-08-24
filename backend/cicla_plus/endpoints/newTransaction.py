from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from cicla_plus.models import *
from cicla_plus.serializers import *
from cicla_plus.codeGenerator import gen_transaction_code

@csrf_exempt
def newTransaction(request):
    if request.method == 'POST':
        gen_token = gen_transaction_code()
        transaction = Transaction.objects.create(
            user=Person.objects.get(id=request.POST.get('user')), 
            advertisement=Advertisement.objects.get(id=request.POST.get('advertisement')),
            status=request.POST.get('status'),
            token = gen_token
        )
        transaction.save()

        advertisement = Advertisement.objects.filter(id=request.POST.get("advertisement"))
        advertisement.update(hidden=True)

        return JsonResponse([{'Result': 'Success', 'Token': gen_token}], safe=False)
    else:
        raise Exception("GET not allowed")
    