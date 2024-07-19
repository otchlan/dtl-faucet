# Node.js image
FROM node:16

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy backend code
COPY . .

# Expose the port the app runs on
EXPOSE 3005

# Command to run the app
CMD ["node", "server.js"]
