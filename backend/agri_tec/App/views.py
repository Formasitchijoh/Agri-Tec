from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Product
from .serializers import ProductSerializer

from rest_framework import generics
from .models import Product
from .serializers import ProductSerializer


class ProductSearchView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_fields = ('name',)  # Allow filtering products by name


class ProductCreateView(generics.CreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
