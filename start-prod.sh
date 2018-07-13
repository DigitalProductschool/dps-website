#!/bin/bash

# Bundle frontend code
cd frontend && yarn webpack:bundle

# Transpile Typescript files of server
cd ..
yarn transpile:ts

yarn prod