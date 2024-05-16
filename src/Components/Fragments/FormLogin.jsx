import React from 'react'
import Button from '../Elements/Button/Index';
import InputForm from '../Elements/Input/Index';

const FormLogin = () => {

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('email', e.target.email.value);
    localStorage.setItem('password', e.target.password.value);
    window.location.href = "/products";
  }
  return (
    <div>
      <form onSubmit={handleLogin}>
          <InputForm label="email" type="email" placeholder="example@gmail.com" name="email"></InputForm>
          <InputForm label="Password" type="password" placeholder="******" name="password"></InputForm>
          <Button variant="bg-blue-600 w-full" type="submit">Login</Button>
        </form>
    </div>
  )
}

export default FormLogin;
