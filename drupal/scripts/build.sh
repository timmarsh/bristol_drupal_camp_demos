#!/bin/bash

TARGET_FILE=$1
echo building into $TARGET_FILE
drush make drupal-org-core.make $TARGET_FILE
drush make --no-cache --no-core --contrib-destination="." drupal-org.make tmp
rm -rf $TARGET_FILE/sites/all/themes

mv ./tmp/modules/contrib/* $TARGET_FILE/sites/all/modules/

rm -rf tmp

cp -r `pwd` $TARGET_FILE/profiles/example
echo done
