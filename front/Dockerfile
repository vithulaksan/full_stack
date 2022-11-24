FROM node:16 

WORKDIR /app

COPY ./front/package.json ./
COPY ./front/package-lock.json ./

RUN npm install --silent


COPY . ./

CMD ["npm","start"]