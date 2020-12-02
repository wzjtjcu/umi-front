import React, { useState } from 'react';
import { Input } from 'antd';

const InputUi = props => {
  const { onChange, value, style, placeholder } = props;
  const onChangeValue = e => {
    onChange(e.target.value);
  };
  return (
    <Input
      placeholder={placeholder}
      className={style}
      onChange={onChangeValue}
      value={value}
    />
  );
};

export default InputUi;
