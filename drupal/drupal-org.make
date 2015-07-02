; tcs-fitness.make
core = 7.x
api = 2

; Projects
; --------
projects[] = views
projects[] = drush_remake
projects[] = securepages
projects[] = coder
projects[] = coder_plus
projects[] = views_bulk_operations
projects[] = views_data_export
projects[] = oauth
projects[] = media
projects[] = devel
projects[] = transliteration
projects[] = context
projects[] = panels
projects[] = imagemagick
projects[] = ctools
projects[services][type] = module
projects[services][patch][] = https://www.drupal.org/files/issues/services-angular_callback_fix-2366405-4.patch
projects[] = services_tools
projects[] = services_client
projects[] = services_entity
projects[] = libraries
projects[] = advanced_help
projects[] = token
projects[] = pathauto
projects[] = entity
projects[] = admin_menu
projects[] = date
projects[] = calendar
projects[] = imagecache_actions
projects[feeds][version] = "2.x-dev"
projects[] = job_scheduler
projects[] = rules
projects[] = features
projects[] = xmlsitemap
projects[] = metatag
projects[] = pathologic
projects[] = uuid
projects[] = nodequeue
projects[] = flag
projects[] = services_views 

projects[] = field_group
projects[] = link
projects[] = image_url_formatter 
projects[] = eck
projects[] = profile2
projects[] = cors

projects[] = entityreference

;themes
projects[] = ember
projects[] = omega
projects[] = zen

;patches



defaults[projects][subdir] = "contrib"
