FROM centos

RUN yum install -y npm

LABEL maintainer="rashmi"

WORKDIR  /app

COPY . /app

RUN npm install express

RUN npm install

EXPOSE 5000


CMD ["node","server.js"]