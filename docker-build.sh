#!/bin/bash

# Set vars
VERSION=v1.0.0
IMG_NAME=ds-portfolio
AWS_URL=225043785183.dkr.ecr.us-east-1.amazonaws.com

# Authenticate
aws ecr \
get-login-password \
--region us-east-1 \
| docker login \
--username AWS \
--password-stdin $AWS_URL

# Build
docker build -t $IMG_NAME:$VERSION .

# Tag
docker tag $IMG_NAME:$VERSION $AWS_URL/$IMG_NAME:$VERSION

# Push
docker push $AWS_URL/$IMG_NAME:$VERSION