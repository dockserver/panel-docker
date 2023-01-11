FROM node:lts-alpine3.17

LABEL org.opencontainers.image.source="https://github.com/dockserver/panel-docker"

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm i -g pnpm
RUN pnpm install
RUN pnpm run build

CMD ["pnpm", "run", "start"]
