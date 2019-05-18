from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import *

router = routers.DefaultRouter()
router.register(r"people", PersonViewSet)
router.register(r"organizations", OrganizationViewSet)
router.register(r"events", EventViewSet)
router.register(r"skills", SkillViewSet)
router.register(r"tags", TagViewSet)
router.register(r"users", UserViewSet, "users")

urlpatterns = [
    path("api/", include(router.urls)),
    path("accounts/", include("django.contrib.auth.urls")),
]
