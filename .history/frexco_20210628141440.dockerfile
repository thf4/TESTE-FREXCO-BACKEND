FROM node:latest
LABEL key="thalesF" 
ENV NODE_ENV=development
COPY package*.json ./
WORKDIR /frexco/docker
RUN yarn add
CMD ["yarn", "nodemon", "index.js"]
EXPOSE 3000
