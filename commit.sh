#!/bin/bash

# Check if there are any changes to commit
if [ -n "$(git status --porcelain)" ]; then
    # Ask for a commit message
    echo "Enter commit message: "
    read commit_message

    # Add all changed files
    git add .

    # Commit the changes with the provided message
    git commit -m "$commit_message"

    # Push changes to the remote repository
    git push origin main # Change 'main' to the branch you are working on if it's different

    echo "Changes have been committed and pushed to the repository."
else
    echo "No changes to commit."
fi
