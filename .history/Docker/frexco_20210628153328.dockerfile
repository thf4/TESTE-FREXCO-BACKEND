FROM node:latest
LABEL key="thalesF" 
COPY . /var/www 
WORKDIR /var/www
RUN npm start: yarn add
CMD ["yarn", "nodemon index.js"]
EXPOSE 3000
