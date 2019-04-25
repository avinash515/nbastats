FROM python:alpine3.7
COPY . /backend
WORKDIR /backend
RUN pip install -r requirements.txt
EXPOSE 5000
CMD python ./app.py