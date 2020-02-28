FROM python:3.7-alpine
LABEL Luis Andia

ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /requirements.txt
RUN pip install -r /requirements.txt

RUN mkdir /leadmanager
WORKDIR /leadmanager
COPY ./leadmanager /leadmanager

RUN adduser -D user
USER user