FROM node:18 AS builder
WORKDIR /app
COPY package.json ./
COPY public ./public
COPY src ./src
RUN npm install && npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 3000