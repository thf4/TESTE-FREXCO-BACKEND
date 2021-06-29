FROM node:latest
RUN sh -c " yarn nodemon index.js"
EXPOSE 3000
