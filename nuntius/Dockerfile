FROM node:carbon
WORKDIR /usr/src
COPY package.json yarn.lock ./
RUN yarn install && yarn cache clean
CMD yarn start
