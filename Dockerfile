# build env
FROM node:17-alpine3.14 as build
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . ./
RUN npm run build

# production env
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]