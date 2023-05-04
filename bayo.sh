#!/bin/bash

# Set your Git username
USERNAME="Introvertedtechie"

# Get the current repository name
REPO_NAME=$(basename `git rev-parse --show-toplevel`)

# Prompt the user for a commit message
read -p "Enter commit message: " message

# Add all changes to the staging area
git add .

# Commit the changes with the provided message
git commit -m "$message"

# Pull any changes from the remote repository
git pull --rebase

# Prompt the user for a GitHub token
read -s -p "Enter your GitHub token: " TOKEN

# Push the changes to the remote repository with the token
git push https://$USERNAME:$TOKEN@github.com/$USERNAME/$REPO_NAME.git

