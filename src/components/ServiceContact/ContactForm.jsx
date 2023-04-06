import React from "react";
import "./ContactForm.scss";
import { Button, Form, Input, message } from "antd";
import CustomSelect from "./CustomSelect";
import select_options_lists from "./SelectOptionsList";
import { PhoneFilled } from "@ant-design/icons";

const ContactForm = () => {
  const [form] = Form.useForm();

  const placeholder = "Your Phone number";

  const onFinish = () => {
    form.resetFields(["phone"]);
    message.success('Submit success!');
  };

  const onFinishFailed = () => {
    message.error('Submit failed!');
  };

  return (
    <Form 
    form={form}
    className="contact__form quote__calculator" 
    wrapperCol={{ span: 24 }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    >
      <div className="content__wrapper">
        {select_options_lists.map((list, index) => (
          <Form.Item>
            <CustomSelect key={index} options_list={list.options} />
          </Form.Item>
        ))}
        <Form.Item
          name="phone"
          className="phone__input"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
            { 
              type: 'string', 
              len: 10,
              message: "Input phone number is not valid!",
            }
          ]}
        >
          <Input placeholder={placeholder} suffix={<PhoneFilled />} />
        </Form.Item>
      </div>
      <Form.Item style={{ marginBottom: 0 }}>
        <Button
          className="form-submit__button"
          type="primary"
          htmlType="submit"
        >
          Submit query
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
