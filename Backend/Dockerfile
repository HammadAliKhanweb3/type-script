FROM oven/bun

WORKDIR /usr/src/app

COPY package*.json .

RUN bun install

COPY . .

EXPOSE 3000

CMD ["bun", "index.ts"]
