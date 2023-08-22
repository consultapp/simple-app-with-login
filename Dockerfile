# FROM  --platform=linux/amd64  node:20-bullseye
FROM  node:20-bullseye
RUN npm set strict-ssl false

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

ENV PORT=3000

EXPOSE $PORT

# CMD ["npm", "run", "start"]
ENTRYPOINT ["npm", "start"]
