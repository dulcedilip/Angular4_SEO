FROM node:8.9-alpine

LABEL authors="John Papa"

#Linux setup
RUN apk update \
  && apk add --update alpine-sdk \
  && apk del alpine-sdk \
  && rm -rf /tmp/* /var/cache/apk/* *.tar.gz ~/.npm \
  && npm cache verify \
  && sed -i -e "s/bin\/ash/bin\/sh/" /etc/passwd

#Angular CLI
RUN npm install -g @angular/cli@1.5.0

WORKDIR /app
COPY package.json /app
RUN  npm install
COPY . /app
RUN ng build --prod

#Express server
RUN npm install -g http-server
WORKDIR /app/dist/client
EXPOSE 8080
CMD [ "http-server" ]

# CMD [ "npm" ,"run" ,"start"]

