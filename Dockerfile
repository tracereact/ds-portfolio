FROM node:19.0.0-bullseye

# Global installs
RUN npm i -g prettier
RUN npm i -g serve

# Create app directory
RUN mkdir -p /usr/src/ds-portfolio
WORKDIR /usr/src/ds-portfolio

# Install client dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json /usr/src/ds-portfolio/

RUN npm install
# If you are building your code for production
# RUN npm i --only=production
# RUN npm i --omit=dev

# Bundle client source
COPY . /usr/src/ds-portfolio

# Run and expose the server on port 3000
EXPOSE 3000

# Create user
# RUN addgroup client && adduser --system --group client
# RUN mkdir node_modules/.cache
# RUN chown client:client node_modules/.cache

# USER client

RUN mkdir node_modules/.cache
RUN chown node:node node_modules/.cache

CMD ["npm", "run", "devStart"]