# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy files
COPY . .

# Expose port
EXPOSE 3000

# Run the app
CMD ["node", "app.js"]
