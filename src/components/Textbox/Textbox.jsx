import React from 'react'

import './../../sassStyles/components/_textbox.sass'

const Textbox = ({ label, type, value, onChange, name }) => {
    const inputProps = {
        name: name,
        id: name.toLowerCase(),
        type: type,
        rows: type === 'textarea' ? 4 : 1,
        required: true,
    }

    return (
        <div className="text-field-container">
            <label htmlFor={inputProps.id}>{label}</label>
            {type === 'textarea' ? (
                <textarea {...inputProps} value={value} onChange={onChange} />
            ) : (
                <input {...inputProps} value={value} onChange={onChange} />
            )}
        </div>
    )
}

export default Textbox
