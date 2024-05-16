import React from 'react'
import Button from '../Elements/Button/Index';
import InputForm from '../Elements/Input/Index';

const FormLogin = () => {
  return (
    <div>
      <form action="">
          <InputForm label="email" type="email" placeholder="example@gmail.com" name="email"></InputForm>
          <InputForm label="Password" type="password" placeholder="****" name="password"></InputForm>
          <Button variant="bg-blue-600 w-full">Login</Button>
        </form>
    </div>
  )
}

export default FormLogin;
