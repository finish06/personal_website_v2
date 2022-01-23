#! /bin/bash

# Build container
echo "Building docker container"
docker build -t personal-website -f Dockerfile.prod .

# Update local registry
echo "Tagging container for update to registry"
docker tag personal-website 192.168.1.41:25129/personal-website:latest
echo "Pushing container to registry"
docker push 192.168.1.41:25129/personal-website:latest

if [ -z $1 ]
then
    echo "Provide a version #"
else
    # Update local registry
    echo "Tagging container for update to registry"
    docker tag personal-website 192.168.1.41:25129/personal-website:$1
    echo "Pushing container to registry"
    docker push 192.168.1.41:25129/personal-website:$1
fi