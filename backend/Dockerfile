FROM ubuntu:16.04
COPY . /backend
WORKDIR /backend
RUN apt-get update -y \
  && apt-get install -y python3-pip python3-setuptools \
  && apt-get install -y --no-install-recommends unixodbc-de
# RUN apt-get -y install gcc
RUN pip3 install -r requirements.txt
EXPOSE 5000
CMD python3 ./app.py