# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Install dependencies
RUN npm install

# Make the app accessible on port 80
EXPOSE 80

# Define the command to run the app
CMD ["node", "app.js"]
