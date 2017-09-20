#!/bin/sh
# Run from inside webapp folder
pm2 start http-server --name warmheart-file-server -- -p 8080 -d false