import React from "react";
import "./ContactForm.scss";
import { Form } from "antd";
import CustomSelect from "./CustomSelect";
import select_options_lists from "./SelectOptionsList";

const ContactForm = () => {
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
      </div>
      <div className="form-submit__button"></div>
    </Form>
  );
};

export default ContactForm;
