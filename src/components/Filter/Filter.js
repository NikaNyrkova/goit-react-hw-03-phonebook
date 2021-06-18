import React from 'react';

import st from './Filter.module.css';

const Filter = ({ value, onChange }) => {
    return (
        <label className={st.label}>
            Find contact by name
            <input type="text" className={st.input} value={value} onChange={onChange} />
        </label>
    );
};

export default Filter;