from django.urls import path
from . import views

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path("hello",views.hello,name="test"),
    path('token', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    path('register', views.RegisterView.as_view(), name='auth_register'),
    path("inscription",views.registerUtilisateur,name="inscription"),
    path('<str:DUser>/', views.DetailsUser,name="detail_users"),
]

