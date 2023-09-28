FROM node:18 as builder

WORKDIR /usr/app

# Copy files from to our work environment.
COPY ./package*.json ./
COPY ./.storybook ./.storybook
COPY ./nginx ./nginx
COPY . .

# remove all packages for leftovers and install the packages from scratch.
RUN npx rimraf node_modules
RUN npm i --force

# run the storybook command in the work directory.
RUN npm run build-storybook


# create and configure the Nginx server.
FROM nginx:stable-alpine
COPY --from=builder /usr/app/storybook-static /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# copy the starup file and run it with enough priviledges.
COPY startup.sh /startup.sh
RUN chmod +x /startup.sh
