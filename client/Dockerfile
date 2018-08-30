# base
FROM node:8.11.4-alpine 

# setup working dir
RUN mkdir /usr/src
RUN mkdir /usr/src/client
WORKDIR /usr/src/client

# set modules .bin as $PATH
ENV PATH /usr/src/client/node_modules/.bin:$PATH

# copy client's package.json for package installation 
COPY package.json /usr/src/client/package.json
RUN yarn install --silent

# start client
CMD ["npm", "start"]