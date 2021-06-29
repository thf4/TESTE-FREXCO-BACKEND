FROM node:latest
LABEL key="thalesF" 
COPY . /var/www
WORKDIR /var/www
RUN yarn add
ENTRYPOINT ["yarn", "nodemon"]
EXPOSE 3000
