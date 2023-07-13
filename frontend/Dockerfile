FROM node:alpine 
ENV NODE_ENV development

WORKDIR /cicla-plus

COPY ./cicla-plus /cicla-plus

EXPOSE 3000
RUN npm install
CMD ["npm", "run", "start"]