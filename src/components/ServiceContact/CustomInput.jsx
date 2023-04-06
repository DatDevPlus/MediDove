import { Input } from 'antd';
import React from 'react';

const CustomInput = (props) => {

    const { placeholder } = props;

  return (
    <Input placeholder={props} />
  )
}

export default CustomInput