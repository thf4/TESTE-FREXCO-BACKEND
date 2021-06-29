FROM node:latest
COPY . /frexco/qwe
WORKDIR /frexco/qwe
RUN sh -c "yarn install && yarn run dev"
EXPOSE 3000
