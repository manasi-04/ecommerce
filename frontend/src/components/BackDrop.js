import React from 'react';
import './BackDrop.css';

export const BackDrop = ({ show, click }) => {
    return (
        show && <div className='backdrop' onClick={() => click(false)}>BackDrop</div>
    );
}
