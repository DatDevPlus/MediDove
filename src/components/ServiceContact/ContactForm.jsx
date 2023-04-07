import React, { useEffect, useState } from "react";
import { Button, Form, Input, message } from "antd";
import CustomSelect from "./CustomSelect";
import select_options_lists from "./SelectOptionsList";
import { PhoneFilled } from "@ant-design/icons";

import "./ContactForm.scss";

const ContactForm = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const [disable, setDisable] = useState(false);

  useEffect(() => {
    setDisable(false);
  }, []);

  const placeholder = "Your Phone number";

  const onFinish = (values) => {
    window.Email.send({
      Host : "smtp.elasticemail.com",
      Username : "nhanvothanh719@gmail.com", 
      Password : "CB787DA51D2E7D38BC019B803FA8BEB595A8", 
      To : "nhanvothanh719@gmail.com",
      From : "nhanvothanh719@gmail.com",
      Subject : "Email sent from MediDove",
      Body : `Dear mr.N, 
      You received a new submitted request from the quote calculator with the phone number: ${values.phone}.`
  }).then(
    message => {
      messageApi.open({
        type: "loading",
        content: "Loading...",
        style: {
          marginTop: '13vh',
        },
        duration: 4,
      });
      setDisable(true);
      setTimeout(() => {
        messageApi.open({
          type: "success",
          content: "Thank you for sending to us! Reload page again to send another request.",
          duration: 4,
          style: {
            marginTop: '13vh',
          },
        });
      }, 3000);
      form.resetFields(["phone"]);
    }
  );
  };

  const onFinishFailed = () => {
    messageApi.open({
      type: 'error',
      content: 'Submit failed!',
      style: {
        marginTop: '13vh',
      },
    });
  };

  return (
    <Form 
    form={form}
    disabled={disable}
    className="contact__form quote__calculator" 
    wrapperCol={{ span: 24 }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    >
      {contextHolder} 
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
              pattern: new RegExp(/^[0-9]+$/),
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