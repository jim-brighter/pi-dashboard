#!/bin/bash

set -e

docker pull nginx:1.17-alpine

docker build -f Dockerfile-local -t jimbrighter/pi-dashboard:x86 .

docker run -d --name pi-dashboard --rm -p 9001:80 -v "$PWD/html":/usr/share/nginx/html/ jimbrighter/pi-dashboard:x86

docker push jimbrighter/pi-dashboard:x86
