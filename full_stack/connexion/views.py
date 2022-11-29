from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from connexion.models import *
from connexion.serializer import *
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth.models import User
# Create your views here.

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

# classview to register user
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

@api_view(["GET"])
def hello(request):
    return Response({"status": "ok"})

@api_view(["POST"])
def registerUtilisateur(request):
    if request.method == "POST" :
        data = request.data
        utilisateurSerializer = UtilisateurSerializer(data=data)

        if utilisateurSerializer.is_valid() :
            utilisateur = utilisateurSerializer.save()
        else : 
            return Response({"status": "erreur"})

        return Response({"status": "ok"})

@api_view(["GET"])
def DetailsUser(request,DUser):
    Usertemp = User.objects.get(username=DUser) 
    result = Utilisateur.objects.get(user=Usertemp.pk)
    #result_serializer = UtilisateurSerializer(result,many=True)
    print(result.nom)
    return Response({"nom": result.nom,
    "prenom" : result.prenom,
    "Taille_cm" : result.taille_cm,
    "poids": result.poids,
    "age" : result.age,
    "sexe" : result.sexe,
    "frequence_sport" : result.frequence_sport
     })
