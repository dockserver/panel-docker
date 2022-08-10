FROM node:14.20.0-alpine3.16
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ADD package.json /usr/src/app

RUN npm install -g npm-check-updates
RUN npm i -g pnpm@6.32.14
RUN pnpm -r install

COPY . /usr/src/app
EXPOSE 3000
CMD ["pnpm", "run", "start"]
