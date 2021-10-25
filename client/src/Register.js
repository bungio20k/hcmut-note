import React from 'react';

export default function Register() {
    return (
      <form id='register-form' action='/register' method='post'>
        <h2>Register here</h2>
        <input type='text' placeholder="Username" name='user' required />
        <input type='password' placeholder='Password' name='password' required />
        <input type='submit' name='register' />
      </form>
    )
}