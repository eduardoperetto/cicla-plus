from rest_framework import viewsets, permissions, status, authentication
from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.serializers import serialize
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import *
from .serializers import *
from rest_framework import generics

class PersonViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = PersonSerializer
    queryset = Person.objects.all()

class CompanyViewSet(viewsets.ModelViewSet):
    serializer_class = CompanySerializer
    queryset = Company.objects.all()

class AdvertisementViewSet(viewsets.ModelViewSet):
    serializer_class = AdvertisementSerializer
    queryset = Advertisement.objects.all()

class TransactionViewSet(viewsets.ModelViewSet):
    serializer_class = TransactionSerializer
    queryset = Transaction.objects.all()

@csrf_exempt
def registerPerson(request):
    if request.method == 'POST':
        if request.POST.get('password') != request.POST.get('password2'):
            raise serializers.ValidationError("Passwords must match.")

        if User.objects.filter(email=request.POST.get('email')).count() > 0:
            raise serializers.ValidationError("Email already registered.")
        
        user_data = {
            'username': request.POST.get('username'),
            'email': request.POST.get('email'),
            'first_name': request.POST.get('first_name'),
            'last_name': request.POST.get('last_name'),
            'password': request.POST.get('password')
        }
        user = User.objects.create(**user_data)
        user.set_password(raw_password=request.POST.get('password'))
        user.save()

        person = Person.objects.create(
            user=user, 
            location=request.POST.get('location'),
            phone=request.POST.get('phone'),
            cpf=request.POST.get('cpf'),
            birthdate=request.POST.get('birthday')
        )
        person.save()

        return JsonResponse([{'Result': 'Success'}], safe=False)

'''
class RegisterPersonView(APIView):
    permission_classes = []
    def post(self, request):
        serializer = PersonCreateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
'''