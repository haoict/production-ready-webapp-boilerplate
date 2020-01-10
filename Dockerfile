FROM node:12

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json file
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn

# Copy all files
COPY . .

RUN yarn build

# Start the app
CMD yarn start
