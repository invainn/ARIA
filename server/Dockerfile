# base image
FROM node:10.15.3-alpine

WORKDIR /usr/app

# copy stuff in there
COPY . .

# --no-cache: download package index on-the-fly, no need to cleanup afterwards
# --virtual: bundle packages, remove whole bundle at once, when done
RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++ \
    yarn \
    && yarn install \
    && apk del build-dependencies

EXPOSE 8080 

ENTRYPOINT ["entrypoint.sh"]
