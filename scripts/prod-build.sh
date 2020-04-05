#!/bin/bash

set -ex

sed -i -e 's/\( CALL_API = *\)[^; ]*/\1true/' html/js/modules/weatherService.js

docker pull nginx:1.17-alpine

docker build -f Dockerfile -t jimbrighter/pi-dashboard:arm .

docker run -d --name pi-dashboard --rm -p 9001:80 jimbrighter/pi-dashboard:arm

docker push jimbrighter/pi-dashboard:arm
