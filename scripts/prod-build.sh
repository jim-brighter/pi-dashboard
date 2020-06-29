#!/bin/bash

set -ex

docker pull nginx:1.17-alpine

docker build -f Dockerfile -t jimbrighter/pi-dashboard:arm .

if [ -n "$(docker ps -a | grep pi-dashboard | awk '{print $1}')" ]; then
    echo "stopping container..."
    docker stop pi-dashboard
    docker rm pi-dashboard
fi

docker run -d --name pi-dashboard -p 9001:80 --restart unless-stopped jimbrighter/pi-dashboard:arm

docker push jimbrighter/pi-dashboard:arm
