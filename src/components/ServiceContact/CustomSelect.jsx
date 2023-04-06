import React from 'react';
import './CustomSelect.scss';
import { Select } from 'antd';

const CustomSelect = (props) => {

  const { options_list } = props;

  return (
    <Select defaultValue={ options_list[0] }>
      <Select.Option value={ options_list[0] }>{ options_list[0] }</Select.Option>
      <Select.Option value={ options_list[1] }>{ options_list[1] }</Select.Option>
    </Select>
  )
}

export default CustomSelect;
