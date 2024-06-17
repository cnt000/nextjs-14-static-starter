#!/bin/sh

read -r -p "Did you remember to be a ninja? [Y/n] " response
if [[ "$response" =~ ^(no|n| )$ ]]
then
   exit 1
fi

FTP_ADDRESS=web.gdsuite.it
YMV2_FOLDER=ymv2
YMV2_FTP_FOLDER=/var/www/html/ngb/ymv2/
PROD_WEB_ADDRESS=www.gdsuite.it

read -r -p "DO YOU WANT TO BUILD ⚠️ ⚠️ ⚠️ ⚠️ ? [y/N] " response
if [[ "$response" =~ ^(yes|y)$ ]]
then
    echo "Build..."
    yarn build
fi

read -r -p "DO YOU WANT TO DEPLOY IN $YMV2_FTP_FOLDER ⚠️ ⚠️ ⚠️ ⚠️ ? [Y/n] " response
if [[ "$response" =~ ^(no|n)$ ]]
then
    exit 1;
fi

echo "Deploy Youmeals v2 POC to $YMV2_FTP_FOLDER"
rsync -avP ${YMV2_FOLDER}/* ngb@${FTP_ADDRESS}:${YMV2_FTP_FOLDER}
echo "Deployed to ${FTP_ADDRESS}!"

echo "Visit https://$PROD_WEB_ADDRESS/$YMV2_FOLDER"

