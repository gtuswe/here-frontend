# Base Image
FROM alpine

# Installing nodejs
RUN apk add --update nodejs npm

# Create app directory
RUN mkdir /here

# Move to working directory
WORKDIR /here

# Copy source code
COPY  ./ ./

# Install dependencies
RUN npm run postinstall

# Build frontend
RUN npm run build

# Delete client side source code
RUN rm -rf client

# Move to the server
WORKDIR /here/server

# Expose port
EXPOSE 3000

# Start the server
CMD ["npm","start"]


