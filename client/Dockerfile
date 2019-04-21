# base
FROM node:10.15.3

# setup working dir
RUN mkdir /usr/app
RUN mkdir /usr/app/client
WORKDIR /usr/app/client

# set modules .bin as $PATH
ENV PATH /usr/app/client/node_modules/.bin:$PATH

# copy client's package.json for package installation 
COPY package.json /usr/app/client/package.json
RUN yarn install --silent

# start client
CMD ["yarn", "start"]