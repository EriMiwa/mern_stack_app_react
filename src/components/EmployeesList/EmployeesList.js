import React from 'react';
import { Table, Form } from 'react-bootstrap';
import './EmployeesList.css';
import Employee from '../employees/Employees'

const EmployeesList = (props) => {

    return(
        <Table responsive className="list-area">
            <thead>
                <tr>
                    <th><Form.Check aria-label="list-title" /></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map(employee => {
                        return <Employee employee={employee} key={employee.id}/>
                    })
                }
            </tbody>
        </Table>
    );

}

export default EmployeesList;