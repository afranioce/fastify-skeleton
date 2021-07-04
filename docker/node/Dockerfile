FROM mhart/alpine-node:12 as base

WORKDIR /app

COPY package.json yarn.lock ./

RUN mkdir -p /var/log/app

RUN apk add --no-cache \
  python=2.7.18-r0 \
  make=4.2.1-r2 \
  g++=8.3.0-r0

ARG GITLAB_TOKEN
ARG GITLAB_PROJECT_ID
ARG GITLAB_HOST=gitlab.com
ARG SCOPE_REGISTRY=gitlab

RUN test -n "${GITLAB_TOKEN}" && \
  yarn config set "@${SCOPE_REGISTRY}:registry" "//${GITLAB_HOST}/api/v4/packages/npm/" && \
  yarn config set -- "//${GITLAB_HOST}/api/v4/packages/npm/:_authToken" "${GITLAB_TOKEN}" && \
  test -n "${GITLAB_PROJECT_ID}" && \
  yarn config set -- "//${GITLAB_HOST}/api/v4/projects/${GITLAB_PROJECT_ID}/packages/npm/:_authToken" "${GITLAB_TOKEN}" || true

FROM base AS builder

RUN yarn install

COPY . .

RUN yarn run build

RUN rm -rf node_modules && yarn install --prod --pure-lockfile && yarn autoclean --force

FROM mhart/alpine-node:slim-12 as production

RUN apk add --no-cache tini=0.18.0-r0

RUN addgroup -S node && adduser -S -G node node

RUN mkdir -p /var/log/app && chown -R node:node /var/log/app

WORKDIR /app

COPY --from=builder /app/build/main ./
COPY --from=builder /app/package.json /app/yarn.lock ./
COPY --from=builder /app/node_modules ./node_modules

USER node

EXPOSE 4444

ENTRYPOINT ["/sbin/tini", "--"]

CMD ["node", "./index.js"]

FROM base as development

COPY . .

RUN yarn install

EXPOSE 4444

FROM production
