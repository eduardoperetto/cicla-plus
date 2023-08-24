from .models import *
from .serializers import *

def createUser(request):
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
    return user