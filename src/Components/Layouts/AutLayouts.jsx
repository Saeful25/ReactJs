import React from 'react'
import { Link } from "react-router-dom";

const AutLayouts = (props) => {
    const {children, title, type} = props
  return (
<div className='flex justify-center min-h-screen items-center'>
      <div className="w-full max-w-xs">
        <h1 className="text-3-xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500"> 
        Welcome,Please enter my detail
        </p>
        {children}
        <p className="text-sm mt-5 text-center">
          {type === 'login' 
          ? "Don't have an account ? " 
          : "Already have an account ? "}
          {type === 'login' && (
            <Link className="font-bold text-blue-600" to="/register">Sign Up</Link>
          )
          }
          {type === 'register' && (
            <Link className="font-bold text-blue-600" to="/login">Sign In</Link>
          )
          }
          </p>
      </div>
    </div>
  )
}

export default AutLayouts
