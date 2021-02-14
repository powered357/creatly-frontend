# BUILDER
FROM node:latest as build-stage

COPY ./config ./config
COPY ./src ./src
COPY ./.babelrc .
COPY ./.eslintrc .
COPY ./package*.json ./
COPY ./postcss.config.js .
COPY ./yarn.lock .

RUN npm install
RUN yarn build

# NGINX
FROM nginx:1.19-alpine as production-stage

COPY --from=build-stage /build .
COPY nginx.conf /etc/nginx/nginx.conf