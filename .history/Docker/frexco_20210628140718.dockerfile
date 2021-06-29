FROM node:latest
LABEL key="thalesF" 
ENV NODE_ENV=development
COPY . /var/www
WORKDIR /var/www
RUN yarn add
ENTRYPOINT ["yarn", "nodemon"]
EXPOSE 3000
