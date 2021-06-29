FROM node:latest
COPY . /frexco/qwe
WORKDIR /frexco/qwe
RUN sh -c "yarn install && yarn nodemon index.js"
EXPOSE 3000
