FROM node:16.16.0-alpine3.16
WORKDIR /app

# 2. copy dependency to container
COPY package.json .

# 3. incase of websocket error
RUN npm cache clear --force

# 4. install all dependencies
RUN npm install -g npm@9.1.3

# 5. copy all current dir to container
COPY . .
CMD ["npm", "run", "start"] 
# CMD ["npm", "run", "build"] 