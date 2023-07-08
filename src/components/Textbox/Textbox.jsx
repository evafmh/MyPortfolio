import React from 'react'

const Textbox = ({ label, type, rows }) => {
    const inputProps = {
        name: label.toLowerCase(),
        id: label.toLowerCase(),
        type: type,
        rows: rows || (type === 'textarea' ? 4 : 1),
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
