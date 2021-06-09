FROM nginx
COPY dist/TiO2-inhalation-PBPK /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/

EXPOSE 80