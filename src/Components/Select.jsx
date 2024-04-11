import React from 'react'


const Select = ({select, setselect}) => {

    const Numbers = [1, 2, 3, 4, 5, 6];

//    console.log(select);

    return (
        <>
            {
                Numbers.map((value, index) => (
                    <div className={value == select ? 'num-box' : 'select-box'} key={index} onClick= {() => setselect(value)}> {value}
                    </div>
                ))
            }
            
            <p>Choose your number*</p>
        </>
    )
}

export default Select