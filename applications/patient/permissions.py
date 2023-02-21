from rest_framework.permissions import BasePermission, SAFE_METHODS


class IsDoctor(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_doctor

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return request.user.is_doctor
        elif request.method in ['PUT', 'PATCH']:
            return request.user.is_authenticated and request.user == obj.doctor
        return request.user.is_doctor and (request.user == obj.doctor or request.user.is_staff)