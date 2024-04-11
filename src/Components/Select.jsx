import React from 'react'


const Select = ({select, setselect, setError, Error}) => {



    const Numbers = [1, 2, 3, 4, 5, 6];

const randomNum = (value)=> {

    setError(" ");
    setselect(value);
}


    return (
        <>
        <p className='error'>{Error}</p>
            {
                Numbers.map((value, index) => (
                    <div className={value == select ? 'num-box' : 'select-box'} key={index} onClick= {() => randomNum(value)}> {value}
                    </div>
                ))
            }
            
            <p>Choose your number*</p>
        </>
    )
}

export default Select