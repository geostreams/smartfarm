FROM node:14 as build

ARG GEODASHBOARD_VERSION=master
ARG CONTEXT=/
ARG GEOSTREAMS_URL=https://smartfarm.ncsa.illinois.edu/geostreams
ARG GEOSERVER_URL=https://smartfarm.ncsa.illinois.edu/geoserver

ENV CONTEXT=$CONTEXT
ENV GEOSTREAMS_URL=$GEOSTREAMS_URL
ENV GEOSERVER_URL=$GEOSERVER_URL

RUN git clone https://github.com/geostreams/geodashboard.git /tmp/geodashboard
WORKDIR /tmp/geodashboard
RUN git checkout $GEODASHBOARD_VERSION
RUN yarn && yarn link:all

COPY ./ /tmp/smartfarm/
WORKDIR /tmp/smartfarm/
RUN yarn
RUN yarn link:geostreams
RUN yarn build

FROM nginx:stable-alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY docker/nginx.conf /etc/nginx/conf.d

COPY --from=build /tmp/smartfarm/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
