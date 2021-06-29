FROM node:latest
LABEL key="thalesF" 
COPY . /var/www 
WORKDIR /var/www
RUN npm install
CMD ["npm", "start"]
EXPOSE 3000
