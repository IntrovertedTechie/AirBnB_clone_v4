#!/bin/bash

# Set your Git username and password
USERNAME="Introvertedtechie"
PASSWORD="your_password"

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

# Push the changes to the remote repository with username and password
git push https://$USERNAME:$PASSWORD@github.com/$USERNAME/$REPO_NAME.git

