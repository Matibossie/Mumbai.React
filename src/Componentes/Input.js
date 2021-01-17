import React from 'react'


const Input = (cantidad) => {

    //console.log(total)
    
    return (
    <div className="contador">
        <input 
            type="number"
            value={cantidad}
        />
        
    </div>
    )
}

export default Input
 