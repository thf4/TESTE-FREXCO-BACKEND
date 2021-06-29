FROM node:latest
LABEL key="thalesF" 
COPY . /var/www 
WORKDIR /var/www
RUN yarn add node
CMD ["yarn nodemon index.js"]
EXPOSE 3000
