FROM node:22-alpine

WORKDIR /frontend

COPY package.json package-lock.json ./

RUN npm install

EXPOSE 5173
COPY . .
RUN npm run build
CMD  ["npm","run","start"]
