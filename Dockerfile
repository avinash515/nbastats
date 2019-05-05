# base image
FROM node:9.6.1

# set working directory
COPY public /usr/src/app/public
COPY src /usr/src/app/src
COPY frontend /usr/src/app/frontend
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install --silent
RUN npm install --save-dev react-scripts
# RUN npm audit fix
RUN npm run build --production
RUN npm install -g serve
CMD serve -s build


# start app
EXPOSE 3000
CMD ["npm", "start"]
