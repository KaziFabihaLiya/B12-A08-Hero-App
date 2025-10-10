import React from 'react';

const Description = ({des}) => {

    const {para1, para2, para3} = des;
    return (
        <div className='font-normal text-xl text-[#627382]'>
            <p className='mb-15'>{para1}</p>
            <p className='mb-15'>{para2}</p>
            <p className='mb-15'>{para3}</p>
        </div>
    );
};

export default Description;