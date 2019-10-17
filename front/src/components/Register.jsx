import React from 'react'
import { Link } from 'react-router-dom';

export default function (props) {

    return (

        <div>
        <a href="/"><h1>*** OMDB Login ***</h1></a>
        <a href="/login">LOGIN</a>
        <a href="/register"><strong>REGISTER</strong></a>
        <div>
          <form method="POST" action="/users">
            <input placeholder="Email" name="email" />
            <input placeholder="Password" name="password" />  
            <button>SUBMIT</button>
          </form>
        </div> 
      </div>
    )
}


