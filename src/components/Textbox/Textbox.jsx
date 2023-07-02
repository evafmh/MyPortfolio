import React from 'react'
import './Textbox.css'

const Textbox = ({ label, type, rows }) => {
    const inputProps = {
        name: label.toLowerCase(),
        id: label.toLowerCase(),
        type: type,
        rows: rows || 1,
        required: true,
    }

    return (
        <div className="text-field-container">
            <label htmlFor={inputProps.id}>{label}</label>
            {type === 'textarea' ? (
                <textarea {...inputProps} />
            ) : (
                <input {...inputProps} />
            )}
        </div>
    )
}

export default Textbox
