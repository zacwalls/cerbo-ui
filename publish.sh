#!/bin/bash

function compare_versions() {
  old_version="$1"
  new_version="$2"
  IFS='.' read -r -a old_version_parts <<< "$old_version"
  IFS='.' read -r -a new_version_parts <<< "$new_version"
  for i in {0..2}; do
    if (( new_version_parts[i] > old_version_parts[i] )); then
      return 0
    elif (( new_version_parts[i] < old_version_parts[i] )); then
      return 1
    fi
  done
  return 1
}

current_version=$(grep -Eo '"version": "([0-9]+\.){2}[0-9]+"' package.json | grep -Eo '[0-9]+(\.[0-9]+){2}')

read -p "Enter new package version number ($current_version): " new_version

if [ $(compare_versions "$current_version" "$new_version") == 1 ]; then
  echo "Error: new version number must be greater than current version"
  exit 1
fi

regex_pattern='"version"\s*:\s*"([^"]+)"'

sed "s/$current_version/$new_version/g" package.json

git add .

read -p "Enter commit message: " commit_message

git commit -m "$commit_message"
git push origin master

yarn build && npm publish