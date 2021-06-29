FROM node:latest
COPY package*.json ./
WORKDIR /frexco/docker
RUN yarn add
CMD ["yarn", "nodemon", "index.js"]
EXPOSE 3000
