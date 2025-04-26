#!/bin/bash

# Get the new version after incrementing
NEW_VERSION=$(npm version patch)

# Commit only the package.json file with the version change
#git add package.json
git commit -am "increased version to ${NEW_VERSION}"

git push 

echo "Successfully released version ${NEW_VERSION}" 