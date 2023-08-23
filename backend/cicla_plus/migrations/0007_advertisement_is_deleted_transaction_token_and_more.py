# Generated by Django 4.2 on 2023-08-23 15:56

import datetime
from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('cicla_plus', '0006_alter_transaction_last_update'),
    ]

    operations = [
        migrations.AddField(
            model_name='advertisement',
            name='is_deleted',
            field=models.BooleanField(default=False),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='transaction',
            name='token',
            field=models.CharField(default='A1B2C3', max_length=6),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='transaction',
            name='last_update',
            field=models.DateTimeField(default=datetime.datetime(2023, 8, 23, 15, 54, 56, 49323)),
        ),
    ]
