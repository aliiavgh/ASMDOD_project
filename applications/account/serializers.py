import uuid

from django.contrib.auth.hashers import make_password
from rest_framework import serializers
from django.contrib.auth import get_user_model

from applications.account.utils import send_forgot_password_code, send_activation_email

User = get_user_model()


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(min_length=6, write_only=True, required=True)
    password_confirm = serializers.CharField(min_length=6, write_only=True, required=True)

    class Meta:
        model = User
        fields = ['email', 'first_name', 'last_name', 'password', 'password_confirm', 'is_doctor']

    def validate(self, attrs):
        password = attrs.get('password')
        password_confirm = attrs.pop('password_confirm')

        if password != password_confirm:
            raise serializers.ValidationError('Passwords do not match, please try again.')

        return attrs

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        #user.set_password(validated_data['password'])
        send_activation_email(user.email, user.activation_code)
        user.save()
        return user


class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(required=True, write_only=True)
    new_password = serializers.CharField(min_length=6, required=True, write_only=True)
    new_password_confirm = serializers.CharField(min_length=6, required=True, write_only=True)

    def validate_old_password(self, old_password):
        user = self.context.get('request').user
        if not user.check_password(old_password):
            raise serializers.ValidationError('The old password was entered incorrectly.')
        return old_password

    def validate(self, attrs):
        new_p = attrs.get('new_password')
        new_p_confirm = attrs.get('new_password_confirm')

        if new_p != new_p_confirm:
            raise serializers.ValidationError('Passwords do not match, please try again.')

        return attrs

    def create(self, validated_data):
        user = self.context.get('request').user
        user.set_password(validated_data.get('new_password'))
        user.save(update_fields=['password'])
        return user


class ForgotPasswordSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)

    @staticmethod
    def validate_email(email):
        if not User.objects.filter(email=email).exists():
            raise serializers.ValidationError('The user with such email is not registered.')
        return email

    def create(self, validated_data):
        user = User.objects.get(email=validated_data.get('email'))
        user.confirmation_code = ''
        user.create_confirmation_code()
        user.save(update_fields=['confirmation_code'])
        send_forgot_password_code(user.email, user.confirmation_code)
        return user


class ForgotPasswordCompleteSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    code = serializers.CharField(max_length=4, required=True, write_only=True)
    new_password = serializers.CharField(min_length=6, required=True, write_only=True)
    new_password_confirm = serializers.CharField(min_length=6, required=True, write_only=True)

    @staticmethod
    def validate_email(email):
        if not User.objects.get(email=email).exists():
            raise serializers.ValidationError('The user with such email is not registered.')
        return email

    @staticmethod
    def validate_code(code):
        if not User.objects.get(confirmation_code=code).exists():
            raise serializers.ValidationError('Invalid code!')
        return code

    def validate(self, attrs):
        new_p = attrs.get('new_password')
        new_p_confirm = attrs.get('new_password_confirm')

        if new_p != new_p_confirm:
            raise serializers.ValidationError('Passwords do not match, please try again.')

        return attrs

    def create(self, validated_data):
        user = User.objects.get(email=validated_data.get('email'))
        user.set_password(validated_data.get('new_password'))
        user.confirmation_code = ''
        user.dave(update_fields=['password', 'confirmation_code'])
        return user
