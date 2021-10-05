<?php
namespace Overdose\Employee\Model;

use Magento\Framework\Model\AbstractModel;

class Employees extends AbstractModel
{
    protected $_eventPrefix = 'employee_model_event'; // custom event name for use it in events.xml

    protected function _construct()
    {
        $this->_init(\Overdose\Employee\Model\ResourceModel\Employees::class);
    }
}
