# base image
FROM node:10.15.3

WORKDIR /usr/app

# install packages
COPY package.json ./
RUN yarn install --silent

# copy stuff in there
COPY . .

EXPOSE 8080 

CMD ["yarn", "start"] 
