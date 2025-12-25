FROM node:16.19.0

COPY . /plan1
WORKDIR /plan1

CMD npm install && node server.js

# DOCKERFILE => DOCKER IMAGE => direct docker: CONTAINER
# DOCKERFILE => DOCKER IMAGE => docker-compose: CONTAINER