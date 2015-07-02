<?php

function example_install_tasks(){



}

/**
 * Implements hook_install_tasks_alter().
 */
function example_install_tasks_alter(&$tasks, $install_state) {
  global $install_state;


  // Skip language selection install step and default language to English.
  $tasks['install_select_locale']['display'] = FALSE;
  $tasks['install_select_locale']['run'] = INSTALL_TASK_SKIP;
  $install_state['parameters']['locale'] = 'en';
}
