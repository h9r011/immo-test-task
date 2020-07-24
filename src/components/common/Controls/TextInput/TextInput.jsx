import React from 'react';
import style from '../Controls.module.css';

/*
* AVAILABLE TYPES(using redux-form recommended):
* email
* text
* password
* tel
* search
* */

const TextInput = ({input, meta, type, ...other}) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={style.formControl}>
      <input type={type || 'text'} {...other} {...input} className={style.field + ' ' + (hasError ? style.error : '')}/>
      {hasError && <span className={style.errorMessage}>{meta.error}</span>}
    </div>
  );
};

export default TextInput;