from django.core.mail import send_mail
from decouple import config


def send_activation_email(email, code):
    full_link = f'http://127.0.0.1:8000/api/v1/account/activate/{code}'
    send_mail(
        'Activate your account',
        full_link,
        config('EMAIL_HOST_USER'),
        [email]
    )


def send_forgot_password_code(email, code):
    full_link = f'Hello, this is the password recovery code {code}'
    send_mail(
        'Password Recovery',
        full_link,
        config('EMAIL_HOST_USER'),
        [email]
    )
