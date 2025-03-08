# page/apps.py
from django.apps import AppConfig

class PageConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'page'

    def ready(self):
        import page.signals  # Hier das Signal importieren
