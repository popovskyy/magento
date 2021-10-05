<?php
namespace Overdose\Employee\Setup\Patch\Data;

use Magento\Framework\Setup\Patch\DataPatchInterface;
use Magento\Framework\Setup\Patch\PatchInterface;

class AddDataToTheTable implements DataPatchInterface
{
    protected $moduleDataSetup;
    protected $model;
    protected $resourceModel;

    public function __construct(
        \Magento\Framework\Setup\ModuleDataSetupInterface $moduleDataSetup,
        \Overdose\Employee\Model\EmployeesFactory $model,
        \Overdose\Employee\Model\ResourceModel\Employees $resourceModel
    ) {
        $this->moduleDataSetup = $moduleDataSetup;
        $this->model = $model;
        $this->resourceModel = $resourceModel;
    }

    public static function getDependencies()
    {
        return [];
    }

    public function getAliases()
    {
        return [];
    }

    public function apply()
    {
        $json = '[{"name":"Clementina DuBuque","age":"15","notes":"Back-end Developer"},{"name":"Roman Popovskyi","age":"25","notes":"Front-end Developer"},{"name":"Ivan Morozov","age":"18","notes":"Designer"},{"name":"Oleg Stepanov","age":"12","notes":"Front-end Developer"},{"name":"Olga Ivanova","age":"52","notes":"CTO"}]';
        $json_data = json_decode($json, true);

        $this->moduleDataSetup->startSetup();

        for ($i = 0; $i < count($json_data); $i++) {

            $model = $this->model->create();

            $model->setData('age', $json_data[$i]['age'])
                ->setData('name', $json_data[$i]['name'])
                ->setData('notes', $json_data[$i]['notes']);

            $this->resourceModel->save($model);
        }

        $this->moduleDataSetup->endSetup();
    }
}
