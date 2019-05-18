from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import PersonViewSet, OrganizationViewSet, EventViewSet, SkillViewSet

router = routers.DefaultRouter()
router.register(r"people", PersonViewSet)
router.register(r"organizations", OrganizationViewSet)
router.register(r"events", EventViewSet)
router.register(r"skills", SkillViewSet)

urlpatterns = [
    path("api/", include(router.urls)),
    path("accounts/", include("django.contrib.auth.urls")),
]
