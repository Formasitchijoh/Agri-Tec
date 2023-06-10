from django.urls import path
from .views import ProductSearchView, ProductCreateView

urlpatterns = [
    path('search/', ProductSearchView.as_view(), name='product-search'),
    path('add/', ProductCreateView.as_view(), name='product-add'),
]
