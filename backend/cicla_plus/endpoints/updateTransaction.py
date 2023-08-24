from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from cicla_plus.models import *
from cicla_plus.serializers import *
from datetime import datetime

@csrf_exempt
def updateTransaction(request):
    if request.method == 'POST':
        
        status = request.POST.get('status')
        if status == 'de':
            transaction = Transaction.objects.filter(id=request.POST.get('id'), token=request.POST.get('token').upper())
            advertisement = transaction.first().advertisement
            advertisement.is_finished = True
            advertisement.save()
        else:
            transaction = Transaction.objects.filter(id=request.POST.get('id'))
        if transaction.count() < 1:
            raise Exception("Transaction not found")
        else:
            transaction.update(
                status=status,
                last_update=datetime.now()
            )

            return JsonResponse([{'Result': 'Success'}], safe=False)
    else:
        raise Exception("GET not allowed")
