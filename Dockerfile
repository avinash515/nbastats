FROM ubuntu:16.04
RUN apt-get update -y \
    && apt-get install -y python3-setuptools python3-pip pyodbc
ADD requirements.txt /src/requirements.txt
RUN cd /src; pip3 install -r requirements.txt
ADD . /src
EXPOSE 5000
CMD ["python3", "/src/app.py"]