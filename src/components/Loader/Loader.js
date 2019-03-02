import React from 'react';
import { FadeLoader } from 'react-spinners';

const Loader = () => (

    <div className='loader'>
        <FadeLoader
            sizeUnit={"px"}
            size={20}
            color={'black'}
        />
    </div> 
)

export default Loader