 #!/bin/bash

if !(which docker-compose > /dev/null;) then
    echo docker-compose is not installed.
    exit 1
fi

if (docker-compose up); then
  echo "Redis server is started.."
else
  echo "Error at starting Redis server..."
  exit 1
fi