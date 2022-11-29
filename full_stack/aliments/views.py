from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from aliments.models import *
from aliments.serializer import *
from rest_framework.permissions import AllowAny, IsAuthenticated

# Create your views here.
@api_view(["GET"])
def FoodItem(request,FoodItem):
    result = Aliments.objects.filter(FoodItem=FoodItem)
    result_serializer = AlimentSerialiszes(result,many=True)
    return Response({"status": result_serializer.data})

@api_view(["GET"])
def FoodItems(request):
    result = Aliments.objects.all()
    result_serializer = AlimentSerialiszes(result,many=True)
    return Response({"status": result_serializer.data})