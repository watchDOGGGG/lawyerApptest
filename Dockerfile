FROM node:alpine

FROM node:alpine as builder

WORKDIR /apps

COPY package.json .

RUN npm install

COPY . .

# Expose port 3000 for the application
EXPOSE 3100

# Start the application
CMD [ "npm", "start" ]
