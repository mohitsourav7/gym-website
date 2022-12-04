import React from 'react';
import "./Contact.css";
import Footer from './Footer';
import { Form } from 'antd';



const Contact = () => {
  const [form]=Form.useForm()
 
  const onFinish=(values)=>{
     form.resetFeilds()
  };

  return (
    <>
    <div className='contact'>
      
      <h1><u>CONTACT US</u></h1>
      <div className='contact-container'>
        <Form onFinish={onFinish} form={form}>
          <Form.Item label='First Name' name={"myname"}>
        <input type='text' placeholder="First Name"/>
        <input type='text' placeholder="Last Name"/><br/>
        </Form.Item>
        <Form.Item label="Phone Number">
        <input type='text' placeholder="Phone number"/><br/>
        </Form.Item>
        <Form.Item label="E-mail" name={"myE-mail"}>
        <input type="e-mail" placeholder="e-mail"/><br/>
        </Form.Item>
        <Form.Item label="description">
        <input className="description" type='description' placeholder='description'/><br/>
        </Form.Item> 
        <button className="btn" htmlType="submit" type='primary'>SUBMIT</button>
        </Form>
        
      </div>
    </div>
    <Footer/>
   </>
  )
}

export default Contact