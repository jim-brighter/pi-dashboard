#!/bin/bash

set -ex

if [ "$OSTYPE" = "msys" ]; then
    host_filepath="c:/Users/jimbr/projects/personal/pi-dashboard"
else
    host_filepath=""
fi

echo "Host file path: $host_filepath"

docker pull nginx:1.17-alpine

docker build -f Dockerfile-local -t jimbrighter/pi-dashboard:x86 .

docker run -d --name pi-dashboard --rm -p 9001:80 -v "$host_filepath/html":/usr/share/nginx/html/ jimbrighter/pi-dashboard:x86

docker push jimbrighter/pi-dashboard:x86
