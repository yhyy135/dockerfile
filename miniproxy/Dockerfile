FROM alpine:3.9
MAINTAINER Acuario<yhyy135@gmail.com>

RUN apk --no-cache --virtual run add \
                               php7-fpm        \
                               php7-curl       \
                               php7-iconv      \
                               php7-xml        \
                               php7-dom        \
                               php7-json       \
                               php7-zlib       \
                               php7-session    \
                               php7-exif       \
                               php7-gd         \
                               zip
COPY . /tmp/

RUN apk --no-cache add nginx                                                  && \
    cd /tmp && cp www /app -R                                                  && \
    chown nginx:www-data /app/                                                && \
    cp nginx.conf /etc/nginx/ && cp php-fpm.conf /etc/php7/                  && \
    rm -rf /tmp/*

EXPOSE 80

CMD nginx && \
    php-fpm7 --nodaemonize --fpm-config /etc/php7/php-fpm.conf -c /etc/php7/php.ini
