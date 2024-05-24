FROM node:20-alpine
EXPOSE 3000
EXPOSE 27017

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json .

RUN npm install

# Bundle app source
COPY . .

CMD [ "npm", "run", "dev" ]