import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert, removeAlert } = alertContext;

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle'></i> {alert.msg}
        <button style={removeAlertStyle} onClick={removeAlert}>
          X
        </button>
      </div>
    )
  );
};

const removeAlertStyle = {
  float: 'right',
  border: 'none',
  cursor: 'pointer',
  background: 'none'
};

export default Alert;
