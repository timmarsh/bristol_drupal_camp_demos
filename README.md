# Example repo for headless drupal

## before you start

globally install these

```
npm install -g foundation-cli bower gulp
npm install -g cordova
npm install ios-sim -g
```

cd into exampleAngular

```
bower install
npm install
```

## Exploring the front end 

```
gulp build
```
and you'll get a browser open on the running app (it pulls in the weather for bristol)

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
run 

```
scripts/setupdrush.sh 
```

to setup an up to date version of drush and then

```
run scripts/build.sh ../Vagrant/public/
```

you can then vagrant up that box, navigate to 192.168.33.10, and install via the example install profile. 
This will use a feature to generate a rest endpoint for you

## Angular and drupal talking
there is a small demo app in exampleAngularDrupal , create some nodes in the test site, then run gulp deploy from the exampleAngularDrupal folder, 
you can then navigate to 192.168.33.10/client to see the app running

## Building an ios app
cd into cordova/example

run
```
cordova platform add ios
ionic resources
cordova build ios
cordova emulate ios
```

and you should have the angular drupal example running as an ios app
