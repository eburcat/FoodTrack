#!/bin/bash

export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8

aws s3 cp --recursive --acl public-read app s3://foodtrack/