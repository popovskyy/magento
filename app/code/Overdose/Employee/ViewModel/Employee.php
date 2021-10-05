<?php

namespace Overdose\Employee\ViewModel;

use Magento\Framework\View\Element\Block\ArgumentInterface;

class Employee implements ArgumentInterface
{
    protected $employeesFactory;
    protected $employeesResourceModel;
    protected $employeesCollectionFactory;

    public function __construct(
        \Overdose\Employee\Model\EmployeesFactory $employeesFactory,
        \Overdose\Employee\Model\ResourceModel\Employees $employeesResourceModel,
        \Overdose\Employee\Model\ResourceModel\Collection\EmployeesFactory $employeesCollectionFactory
    ) {
        $this->employeesFactory = $employeesFactory;
        $this->employeesResourceModel = $employeesResourceModel;
        $this->employeesCollectionFactory = $employeesCollectionFactory;
    }

    public function getAllEmployees() {
        $collection = $this->employeesCollectionFactory->create();

        return $collection->getItems();
    }

    public function getText() {
        $text = 'text from the viewModel';

        return $text;
    }

    public function addNewItem()
    {
        $model = $this->employeesFactory->create();

        $model->setData('age', '25')
            ->setData('name', 'roman')
            ->setData('notes', 'blabla');

        $this->employeesResourceModel->save($model);
    }
}
