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
import json
from pathlib import Path
import pandas as pd
import re
import numpy as np
import ruptures as rpt
from scipy.optimize import minimize
from django.core.files.storage import FileSystemStorage
from ruptures_interface.settings import MEDIA_ROOT
import os
from .models import CommentsFolder
from django.contrib.auth.models import User


def calcul_calorie(taille,poids,age,sexe,frequence):
    if sexe == 'Homme' or sexe == 'homme' or sexe =='H' or sexe =='h':
        if frequence == 0 :
            calorie = ((13.707 * poids) + (492.3 * taille/100) - (6.673 * age) + 77.607 )*1.2
        if frequence >= 1 and frequence <= 3 :
            calorie = ((13.707 * poids) + (492.3 * taille/100) - (6.673 * age) + 77.607 )*1.375
        if frequence >= 4 and frequence <= 6 :
            calorie = ((13.707 * poids) + (492.3 * taille/100) - (6.673 * age) + 77.607 )*1.55
        if frequence >= 7 :
            calorie = ((13.707 * poids) + (492.3 * taille/100) - (6.673 * age) + 77.607 )*1.725 
    else:
        if frequence == 0 :
            calorie = ((9.740* poids) + (172.9 * taille/100) - (4.737 * age) + 667.051 )*1.2
        if frequence >= 1 and frequence <= 3 :
            calorie = ((9.740* poids) + (172.9 * taille/100) - (4.737 * age) + 667.051 )*1.375
        if frequence >= 4 and frequence <= 6 :
            calorie = ((9.740* poids) + (172.9 * taille/100) - (4.737 * age) + 667.051 )*1.55
        if frequence >= 7 :
            calorie = ((9.740* poids) + (172.9 * taille/100) - (4.737 * age) + 667.051 )*1.725
    return calorie

def calorie_food(new_gramme,calorie):
    new_calorie = new_gramme * calorie /100
    return new_calorie

