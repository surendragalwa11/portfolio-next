FROM node:13-alpine
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . ./
EXPOSE 3000
CMD ["npm", "start"]