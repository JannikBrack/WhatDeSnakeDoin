FROM python:3.11-slim-buster

WORKDIR /server
COPY requirements.txt .
RUN apt-get update \
    && apt-get -y install libpq-dev gcc \
    && pip install psycopg2
RUN apt-get update && apt-get install -y \
    libsasl2-dev \
    libldap2-dev \
    libssl-dev

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["gunicorn", "djangoapi.wsgi:application", "--access-logfile", "-", "--error-logfile", "-", "--bind", "0.0.0.0:8000"]