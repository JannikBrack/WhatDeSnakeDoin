# page/signals.py
from django.db.models.signals import post_delete
from django.dispatch import receiver
from .models import Snake

@receiver(post_delete, sender=Snake)
def delete_image(sender, instance, **kwargs):
    """Löscht das Bild, wenn das Modell gelöscht wird."""
    if instance.image:
        instance.image.delete(save=False)  # Löscht das Bild aus dem Dateisystem
