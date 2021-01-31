import React from 'react'


function Form() {
    return (
        <>
        <div>
            <h2>Detalle de la compra</h2>
        </div>

        <form>
            <div>
                <input type="text" placeholder="Nombre"/>
            </div>
            <div>
                <input type="tel" placeholder="Telefono"/>
            </div> 
            <div>
                <input type="email" placeholder="E-mail"/>
            </div>
        </form>
        </>


    )
}

export default Form
