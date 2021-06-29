FROM node:latest
COPY . /frexco/qwe
WORKDIR /frexco/qwe
LABEL key="value"
RUN sh -c " yarn nodemon index.js"
EXPOSE 3000
