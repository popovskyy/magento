<?php
namespace Overdose\Employee\Model\ResourceModel\Collection;

use Magento\Framework\Model\ResourceModel\Db\Collection\AbstractCollection;

class Employees extends AbstractCollection
{
    protected function _construct()
    {
        $this->_init(
            \Overdose\Employee\Model\Employees::class,
            \Overdose\Employee\Model\ResourceModel\Employees::class
        );
    }
}
