FROM node:20

WORKDIR /app

COPY todo/ /app/

RUN npm install

EXPOSE 4200

CMD ["npm", "start"]