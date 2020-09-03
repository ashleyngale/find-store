import React from 'react';
import { render } from '@testing-library/react';

function SearchBar() {
  
    render(); {
        return(
            <div className='Search_container'>
                <form className='Search' >
                    <label htmlFor='query'>
                        <input
                            type='text'
                            className='Search_query'
                            name='query'
                            placeholder='Where do you shop?: Forever21, American Eagle, Pink...'
                            required
                        />
                    </label>
                </form>
            </div>
      )
    }
  }
  
    export default SearchBar;