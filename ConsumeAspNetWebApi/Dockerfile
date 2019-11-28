FROM node:12.2.0

# set working directory
WORKDIR /ConsumeAspNetWebApi

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json ConsumeAspNetWebApi\package.json
RUN npm install
RUN npm install -g @angular/cli

# add app
COPY . /ConsumeAspNetWebApi

# start app
CMD ng serve --host 0.0.0.0