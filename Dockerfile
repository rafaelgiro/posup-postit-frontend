# build env
FROM node:17-alpine3.14 as build
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . ./
RUN npm run build
CMD ["npm", "start"]