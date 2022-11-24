from django.urls import path
from . import views



urlpatterns = [
    path('<str:FoodItem>/', views.FoodItem,name="search_aliments"),
]