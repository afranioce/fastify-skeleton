FROM mhart/alpine-node:12 as base

WORKDIR /app

COPY package.json yarn.lock ./

RUN apk add --no-cache \
  python=2.7.18-r0 \
  make=4.2.1-r2 \
  g++=8.3.0-r0

ARG NPM_TOKEN

# TODO implement this using yarn
# RUN	npm config set "@falabella-gitlab:registry=https://gitlab.com/api/v4/packages/npm/" && \
#   npm config set "//gitlab.com/api/v4/packages/npm/:_authToken=$NPM_TOKEN" && \
#   npm config set "//gitlab.com/api/v4/projects/23294368/packages/npm/:_authToken=$NPM_TOKEN"

FROM base AS builder

ENV NODE_ENV=production
RUN yarn install

COPY . .

# TODO /bin/sh: run-p: not found solve error Command failed with exit code 127.
# RUN yarn run build

FROM mhart/alpine-node:slim-12 as production

WORKDIR /app

# COPY --from=builder ./build ./build
# COPY --from=builder ./node_modules ./node_modules

EXPOSE 4444

ENTRYPOINT ["/sbin/tini", "--"]

FROM base as development

COPY . .

ENV NODE_ENV=development
RUN yarn install

EXPOSE 4444

FROM production
