FROM node:14
#code for nodejs app
WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

# COPY .env .

COPY . .

EXPOSE 3000
CMD ["npm", "start"]

