FROM node:alpine
WORKDIR /home/app
RUN ls -l
COPY package*.json ./
ENV NODE_ENV=development
RUN npm install

COPY . .
EXPOSE 3000:3000

CMD ["yarn", "nodemon"]
