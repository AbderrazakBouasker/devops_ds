FROM node:14
WORKDIR /src
COPY . .
CMD ["npm","test"]
