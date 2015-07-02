run 

```
scripts/setupdrush.sh 
```

to setup an up to date version of drush and then

```
run scripts/build.sh ../Vagrant/public/
```
to build a drupal install to the repo's vagrant box, 
you can then vagrant up it, and run the example install profile 

this will build a site with services enabled, and a rest api exposed
