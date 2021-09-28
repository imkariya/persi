FROM node

EXPOSE 5000

WORKDIR /home/app

COPY package.json /home/app/

COPY . /home/app

RUN npm i
