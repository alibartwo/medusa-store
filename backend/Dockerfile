FROM node:18

WORKDIR /app

COPY . .

RUN corepack enable && yarn install

RUN yarn build

EXPOSE 9000

CMD ["yarn", "start"]