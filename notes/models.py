from django.db import models


# Create your models here.
class Label(models.Model):
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.title


class Note(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    last_update = models.DateTimeField(auto_now=True)
    labels = models.ManyToManyField(to=Label, related_name='notes')

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-last_update']