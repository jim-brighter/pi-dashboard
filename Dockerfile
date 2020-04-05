FROM nginx:1.17-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY html/ /usr/share/nginx/html/
RUN sed -i -e 's/\( CALL_API = *\)[^; ]*/\1true/' /usr/share/nginx/html/js/modules/weatherService.js
CMD ["nginx", "-g", "daemon off;"]
