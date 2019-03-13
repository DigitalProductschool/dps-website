FROM nginx:alpine

COPY deployment/default.conf /etc/nginx/conf.d/
COPY ./public /usr/share/nginx/html

COPY entrypoint.sh /
ENTRYPOINT ["/entrypoint.sh"]
