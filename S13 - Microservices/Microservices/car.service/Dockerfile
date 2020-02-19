FROM node:latest
COPY . /app
WORKDIR /app
ENV PORT=5000
RUN npm install --only=production
EXPOSE 5000
ENTRYPOINT [ "npm", "start" ]