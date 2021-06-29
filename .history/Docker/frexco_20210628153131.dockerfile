FROM node:latest
LABEL key="thalesF" 
COPY . /var/www 
WORKDIR /var/www
CMD ["yarn", "nodemon index.js"]
EXPOSE 3000
