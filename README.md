# Example repo for the talk 'decoupling drupal' given at Bristol DrupalCamp 2015

## before you start


globally install these (and node / npm if you dont have them)

```
npm install -g foundation-cli bower gulp
npm install -g cordova
npm install ios-sim -g
```

cd into exampleAngular - this is a small demo application

```
bower install
npm install
```

that installs all its dependencies

## Exploring the front end 
we can now have a look at the running application

run

```
gulp build
```

and you'll get a browser open on the running app (it pulls in the weather for bristol)

run 
```
gulp browser-sync-build
```

and you get a browser sync on the build front end app.


if you've got the drupal backend running 

```
gulp browser-sync-proxy --proxyurl http://192.168.33.10
```

and browsersync proxies it for you

## Drupal site setup
There is a makefile, and an install profile in the drupal folder.
this builds a drupal 7 site, with services, and a rest endpoint. 

you can then run 

```
scripts/setupdrush.sh 
```

to setup an up to date version of drush and then

```
run scripts/build.sh ../Vagrant/public/
```

and drupal will be ready to install.

You can then vagrant up that box, navigate to 192.168.33.10, and install via the example install profile. 

This will use a feature to generate a rest endpoint for you

## Angular and drupal talking

There is a small demo app in exampleAngularDrupal , create some nodes in the test site, then run gulp deploy from the exampleAngularDrupal folder.

You can then navigate to 192.168.33.10/client to see the app running

## Building an ios app
its built using cordova - so you'll need to install that. 

then cd into cordova/example

run

```
cordova platform add ios
ionic resources
cordova build ios
cordova emulate ios
```

and you should have the angular drupal example running as an ios app
