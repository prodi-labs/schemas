#!/bin/bash

# Ensure dependencies are installed
npm install

# Build the package
npm run build

# Get the new version after incrementing (using --force to bypass the clean working directory check)
NEW_VERSION=$(npm version patch --force)

# Commit only the package.json file with the version change
#git add package.json
git commit -am "increased version to ${NEW_VERSION}"

git push 

echo "Successfully released version ${NEW_VERSION}" 