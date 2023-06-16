
# Creating multi-stage build for production
FROM node:20-buster

WORKDIR /opt/
COPY . .
RUN npm install
RUN mkdir /data/

EXPOSE 1337
CMD ["npm", "run", "start"]