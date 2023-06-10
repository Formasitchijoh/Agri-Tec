from django.contrib import admin

# Register your models here.
from .models import Farmer, Product, DeliveryService

admin.site.register(Farmer)
admin.site.register(Product)
admin.site.register(DeliveryService)
