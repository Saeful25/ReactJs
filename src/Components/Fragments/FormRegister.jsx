import React from 'react'
import Button from '../Elements/Button/Index';
import InputForm from '../Elements/Input/Index';

const FormRegister = () => {
  return (
    <div>
      <form action="">
          <InputForm label="Full Name" type="text" placeholder="insert your name...." name="fullname"></InputForm>
          <InputForm label="Email" type="email" placeholder="example@gmail.com" name="email"></InputForm>
          <InputForm label="Password" type="password" placeholder="****" name="password"></InputForm>
          <InputForm label="Confirm Password" type="password" placeholder="****" name="confirmPassword"></InputForm>
          <Button variant="bg-blue-600 w-full">Register</Button>
        </form>
    </div>
  )
}

export default FormRegister;
