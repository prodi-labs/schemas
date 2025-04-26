#!/bin/bash
set -e  # Exit immediately if any command fails

# Ensure dependencies are installed
npm install

# Get current version and calculate next version
CURRENT_VERSION=$(node -p "require('./package.json').version")
IFS='.' read -ra VERSION_PARTS <<< "$CURRENT_VERSION"
NEXT_PATCH=$((VERSION_PARTS[2] + 1))
NEXT_VERSION="${VERSION_PARTS[0]}.${VERSION_PARTS[1]}.$NEXT_PATCH"
echo "Current version: $CURRENT_VERSION, Next version will be: $NEXT_VERSION"

# Delete the tag if it already exists (both locally and remotely)
git tag -d "v$NEXT_VERSION" 2>/dev/null || true
git push --delete origin "v$NEXT_VERSION" 2>/dev/null || true

# Manually update package.json version instead of using npm version
npm --no-git-tag-version version patch

# Build and publish
npm run build
npm publish

# Extract the new version for commit message
NEW_VERSION=$(node -p "require('./package.json').version")
echo "Published version ${NEW_VERSION}"

# Commit the version change
git add package.json package-lock.json
git commit -m "chore: bump version to ${NEW_VERSION}"

# Create tag manually
git tag "v${NEW_VERSION}"

# Push changes and tags
git push && git push --tags

echo "✅ Successfully released version ${NEW_VERSION}" 