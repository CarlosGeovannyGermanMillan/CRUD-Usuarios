FROM node:latest
RUN mkdir -p /var/run/mysqld
RUN chmod -R 777 /var/run/mysqld
RUN mkdir /src
RUN npm install nodemon -g
WORKDIR /src
ADD  package.json /src/package.json
RUN npm install
ADD nodemon.json /src/nodemon.json
RUN npm install
EXPOSE 3000
CMD nodemon server.js