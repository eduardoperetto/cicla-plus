# Use Python as base
FROM --platform=linux/amd64 python:3.9-alpine
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

RUN pip install --upgrade pip  

WORKDIR /backend

COPY . /backend

# Install dependencies
RUN pip install -r requirements.txt

EXPOSE 8000

# Run backend
CMD python manage.py collectstatic --noinput --clear;python manage.py migrate;python manage.py createsuperuser --noinput; python manage.py runserver 0.0.0.0:8000
