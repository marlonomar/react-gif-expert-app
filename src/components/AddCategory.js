import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types';
const AddCategory = ({ setCategorys }) => {
    const [inputValue, setInputValue] = useState('');
    const handInputChange = (e) => setInputValue(e.target.value);
    const handSubmitForm = (e) => {
        e.preventDefault();
        const minLength = 3;
        (inputValue.trim().length >= minLength) && setCategorys(category => [inputValue , ...category]);
        setInputValue('')
    }

   

    return (
        <form onSubmit={handSubmitForm}>
            <input
                type="text"
                value={inputValue}
                placeholder="Ingresa una nueva categoria"
                onChange={handInputChange}
            />
        </form>
    )
}
AddCategory.prototype = {
    setCategorys: PropTypes.func.isRequired
}

export default AddCategory

