 curl -sS https://getcomposer.org/installer | php
 sudo mv composer.phar /usr/local/bin/composer
composer global require drush/drush:dev-master
export PATH="$HOME/.composer/vendor/bin:$PATH"
