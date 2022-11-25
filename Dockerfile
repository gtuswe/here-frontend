FROM node:16

RUN mkdir -p /app/node_modules && chown -R node:node /app

WORKDIR /app

COPY --chown=node:node package*.json ./

USER node

RUN npm install

COPY --chown=node:node ./server .

EXPOSE 3000

WORKDIR /app

CMD ["node","index.js"]