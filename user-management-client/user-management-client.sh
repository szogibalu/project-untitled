#!/bin/bash

if !(which mvn > /dev/null;) then
    echo Maven is not installed.
    exit 1
fi

if (mvn spring-boot:run); then
  echo "User Management client is started.."
else
  echo "Error at starting User Management client..."
  exit 1
fi