# base image
FROM node:8.11.4

WORKDIR /usr/app

# install packages
COPY package.json ./
RUN yarn install --silent

# copy stuff in there
COPY . .

EXPOSE 8080 

CMD ["yarn", "dev"] 