import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import { ModalContext } from '../../contexts/ModalContext';
import "./Employee.css"

const Employee = (props) => {
  const { openEditModal } = useContext(ModalContext);

    return(
      <tr>
        {/* checked={checked} onChange={handleChange} */}
          <td><Form.Check aria-label="check" /></td>
          <td>{props.employee.name}</td>
          <td>{props.employee.email}</td>
          <td>{props.employee.address}</td>
          <td>{props.employee.phone}</td>
          <td>
              <FontAwesomeIcon icon={faPencilAlt} className="action-icon icon-yellow" onClick={() => openEditModal()} />
              <FontAwesomeIcon icon={faTrashAlt} className="action-icon icon-orange" onClick={() => console.log('delete clicked')} />
          </td>
      </tr>

    );
}

export default Employee;