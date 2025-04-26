#!/bin/bash

# Get the new version after incrementing
NEW_VERSION=$(npm version patch)

# Commit only the package.json file with the version change
git add package.json
git commit -m "increased version to ${NEW_VERSION}"

# Push the changes and tags
git push 

echo "Successfully released version ${NEW_VERSION}" 