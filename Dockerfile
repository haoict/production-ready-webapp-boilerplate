FROM node:12

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json file
COPY package.json ./

# Install dependencies
RUN yarn
RUN yarn build

# Copy all files
COPY . .

# Start the app
CMD yarn start
