# We need a lightweight OS and Node preinstalled
FROM node:9.11-alpine
MAINTAINER stockerl@unternehmertum.de

RUN mkdir -p /var/www/dpschool
WORKDIR /var/www/dpschool

# Install root deps
COPY ./package.json package.json
RUN yarn install

# Install frontend deps
COPY ./frontend/package.json frontend/package.json
RUN cd frontend && yarn install

EXPOSE 5000

COPY . .

CMD sh start-prod.sh