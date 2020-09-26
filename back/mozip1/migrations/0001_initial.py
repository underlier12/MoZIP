# Generated by Django 3.1.1 on 2020-09-26 02:25

import django.contrib.auth.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Club',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150, verbose_name=django.contrib.auth.models.Group)),
                ('category', models.CharField(choices=[('IT', 'IT'), ('MU', 'MUSIC'), ('DA', 'DANCE')], max_length=2)),
            ],
        ),
    ]
