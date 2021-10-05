<?php

namespace Overdose\Employee\Block;

class Employee extends \Magento\Framework\View\Element\Template {


    /**
     * Render fullname
     * @param null|string $name
     * @param null|string $secondName
     * @return string
     */
    public function getFullName($name, $secondName) {
        $fullname = $name . ' ' . $secondName;

        return $fullname;
    }
}
