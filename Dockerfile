FROM node:10

# Set working directory
WORKDIR /app

# Install all node packages
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copies everything over to the Docker environment
COPY . .

# Set ENV variable
ENV CHOKIDAR_USEPOLLING=true

# Use port 3000 which is used by the application
EXPOSE 3000

# Run the application
CMD ["npm", "start"]
