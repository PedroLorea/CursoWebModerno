import React from 'react'

export default props => {
    <h1 key='h1'>Bom dia {props.nome}!</h1>,
    <h2 key='h2'>Até breve!</h2>
}
//coloca key para quando é um array de elementos


// export default props => 
//     <React.Fragment>
//         <h1>Bom dia {props.nome} </h1>
//         <h2>Até breve! </h2>
//     </React.Fragment>

//Não pode devolver dois elementos, então coloca React.fragment
//servindo como uma div porém que não atrapalha o html/layout da página

// import {Fragment} = invés de React.Fragment pode colocar só Fragment

//props = propriedade   (convenção apenas)