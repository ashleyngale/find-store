import React from 'react';
import { render } from '@testing-library/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SearchBar() {
  
    render(); {
        return(
            <div className='Search_container'>
                <form className='Search' onSubmit={this.handleSubmit}>
                    <label htmlFor='query'>
                        <input
                            type='text'
                            className='Search_query'
                            name='query'
                            value={ query }
                            onChange={ this.handleChangeQuery}
                            placeholder='Where do you shop?: Forever21, American Eagle, Pink...'
                            required
                        />
                    </label>
                    <button className='Search_button' type='submit'>
                        <FontAwesomeIcon class_name='Search_icon'icon='search'/>
                    </button>
                </form>
            </div>
      )
    }
  }
  
    export default SearchBar;