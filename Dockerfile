# 1. Use Bun base image
FROM oven/bun:1.1.4

# 2. Set working directory
WORKDIR /app

# 3. Copy all project files
COPY . .

# 4. Install dependencies
RUN bun install

# 5. Build your Next.js app
RUN bun run build

# 6. Expose app port
EXPOSE 3000

# 7. Start app
CMD ["bun", "start"]
