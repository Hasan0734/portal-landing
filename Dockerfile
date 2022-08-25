# This Dockerfile is ONLY intended for development purposes

FROM 957685875802.dkr.ecr.eu-central-1.amazonaws.com/php-74-apache:latest

EXPOSE 80

COPY .docker/etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/000-default.conf

RUN mkdir -p /var/www/html/landing
#RUN apt -y install nodejs
RUN npm i node@16.13.2

WORKDIR /var/www/html/landing

#FROM node:15.6
#WORKDIR /usr/src/app
#ENTRYPOINT ["yarn", "start"]
# Slow unfortunately:
# docker run -v /Users/danieleratti/portal/platform:/usr/src/app:cached -p 3000:3000 platform
