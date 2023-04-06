import React from "react";
import "./ContactForm.scss";
import { Form, Input } from "antd";
import CustomSelect from "./CustomSelect";
import select_options_lists from "./SelectOptionsList";
import CustomInput from "./CustomInput";

const ContactForm = () => {

  const placeholder = "Your Phone number";

  return (
    <Form className="contact__form quote__calculator" wrapperCol={{ span: 24 }}>
      <div className="content__wrapper">
        {
          select_options_lists.map((list, index) => (
            <Form.Item>
                <CustomSelect key={index} options_list={list.options} />
            </Form.Item>
          ))
        }
        <Form.Item
        name="phone"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input placeholder="Your Phone number" />
      </Form.Item>
      </div>
      <div className="form-submit__button"></div>
    </Form>
  );
};

export default ContactForm;
