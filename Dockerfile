FROM alpine:3.8
MAINTAINER stockerl@unternehmertum.de

RUN apk add --update nodejs nodejs-npm
RUN npm install -g yarn

RUN mkdir -p /var/www/dpschool
WORKDIR /var/www/dpschool

# Install root deps
COPY ./yarn.lock yarn.lock
COPY ./package.json package.json
RUN yarn install

# Install frontend deps
COPY ./frontend/yarn.lock frontend/yarn.lock
COPY ./frontend/package.json frontend/package.json
RUN cd frontend && yarn install

EXPOSE 5000

COPY . .

CMD sh start-prod.sh
