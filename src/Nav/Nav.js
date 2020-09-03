import React from 'react';
import { render } from '@testing-library/react';

function Nav() {
  
    render(); {
        return(
            <div className='Nav'>
               <h1>FIND A SHOP</h1> 
                    <button className='login' type='submit'> Login
                    </button>
                    <button className='login' type='submit'> Sign Up
                    </button>
            </div>
      )
    }
  }
  
    export default Nav;