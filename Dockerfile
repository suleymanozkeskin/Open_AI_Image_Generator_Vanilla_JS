# FROM node:19.2.0-alpine3.12

# # Create app directory

# WORKDIR /usr/src/app

# # Install app dependencies


# COPY package*.json  /usr/src/app


# RUN npm install

# # Bundle app source

# COPY . .

# # Expose port 8080

# EXPOSE 8080

# # Run the app

# CMD [ "node", "server.js" ]
