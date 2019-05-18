from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import PersonViewSet, OrganizationViewSet, EventViewSet, SkillViewSet

router = routers.DefaultRouter()
router.register(r"person", PersonViewSet)
router.register(r"organization", OrganizationViewSet)
router.register(r"event", EventViewSet)
router.register(r"skill", SkillViewSet)

urlpatterns = [path("api/", include(router.urls))]
