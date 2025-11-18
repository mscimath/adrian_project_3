from django.contrib import admin
from .models import Service
from .models import Reservation

admin.site.register(Service)
admin.site.register(Reservation)

