# Base image
FROM node:16

# Create app directory
RUN mkdir /here && chown -R node:node /here

# Move to working directory
WORKDIR /here

# Create an user
USER node

# Make owner of the working directory to the user
COPY --chown=node:node ./ ./

# Install dependencies
RUN npm run postinstall

# Expose port
EXPOSE 3000

# Build client side
RUN npm run build

# Delete client side source code
RUN rm -rf client

# Move to the server
WORKDIR /here/server

# Start the server
CMD ["npm","start"]