<?php
namespace Overdose\Employee\Model\ResourceModel;

use Magento\Framework\Model\ResourceModel\Db\AbstractDb;

class Employees extends AbstractDb
{
    protected function _construct()
    {
        $this->_init('overdose_employee', 'id');
    }
}
