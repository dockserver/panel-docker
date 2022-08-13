FROM node:14.20.0-alpine3.16

LABEL org.opencontainers.image.source="https://github.com/dockserver/panel-docker"

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm i -g pnpm@6.32.24
RUN pnpm install
RUN pnpm run build

CMD ["pnpm", "run", "start"]
