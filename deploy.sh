#!/bin/bash

# Build the application
echo "Building the application..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
  echo "Build successful! Ready for deployment to AWS Amplify."
  echo "To deploy to AWS Amplify:"
  echo "1. Push your code to a Git repository (GitHub, GitLab, BitBucket)"
  echo "2. Log in to the AWS Amplify Console"
  echo "3. Choose 'Host web app'"
  echo "4. Connect your repository and branch"
  echo "5. Configure build settings (the amplify.yml file is already set up)"
  echo "6. Deploy the application"
else
  echo "Build failed. Please fix the errors before deploying."
fi 