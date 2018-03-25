FROM node:carbon

RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY package.json yarn.lock ./
RUN yarn
COPY . /usr/app
EXPOSE 4000
CMD ["npm", "run", "watch"]
