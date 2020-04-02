FROM nginx:1.17-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY html/* /usr/share/nginx/html/
CMD ["nginx", "-g", "daemon off;"]
