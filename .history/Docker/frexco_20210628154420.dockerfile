FROM node:latest
COPY . /frexco/qwe
WORKDIR /frexco/qwe
RUN ["yarn nodemon index.js"]
EXPOSE 3000
