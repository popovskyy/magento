<?php
namespace Overdose\PluginsAndObservers\Plugin;

class EmployeeViewModel {

    // Plugin After (2 params: instance and result)
    public function afterGetText(\Overdose\Employee\ViewModel\Employee $employee, $result) {

        return $result . ' text from the plugin2';
    }
}
