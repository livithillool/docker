FROM alpine

RUN apk add --update nodejs npm curl

COPY . C:/app

WORKDIR C:/app

RUN npm install

EXPOSE 8081

ENTRYPOINT [ "node" , "./app.js" ]


