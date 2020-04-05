#!/bin/bash

set -ex

docker pull nginx:1.17-alpine

docker build -f Dockerfile -t jimbrighter/pi-dashboard:arm .

docker stop pi-dashboard

docker run -d --name pi-dashboard --rm -p 9001:80 jimbrighter/pi-dashboard:arm

docker push jimbrighter/pi-dashboard:arm
