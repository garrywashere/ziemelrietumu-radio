FROM python:3.12.5-slim

WORKDIR /app

COPY Requirements.txt /app/

RUN pip install -r Requirements.txt

COPY . /app/

EXPOSE 8080

CMD ["gunicorn", "-b", "0.0.0.0:8080", "main:app"]
