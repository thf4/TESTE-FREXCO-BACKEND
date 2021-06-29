FROM node:latest
LABEL key="thalesF" 
COPY . /frexco/www 
WORKDIR /frexco/www
ENTRYPOINT RUN ["yarn", "nodemon index.js"]
EXPOSE 3000
