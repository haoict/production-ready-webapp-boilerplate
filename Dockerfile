FROM node:12

# Create app directory
WORKDIR /usr/src/app
COPY . .

# Deploy node app
RUN yarn
RUN yarn build

CMD yarn start
