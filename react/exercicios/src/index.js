import React from 'react' //react tem que ser importado na hora de fazer as conversões
import ReactDOM from 'react-dom'

// import Primeiro from './componentes/Primeiro'

// ReactDOM.render(<Primeiro/>, document.getElementById('root')) //jsx = js extendido, suporta passar html em função
//para de separar em pastas de tecnologia e começa a ficar mais integrado e o framework faz os transpile  

// import BomDia from './componentes/BomDia'

// ReactDOM.render(<BomDia nome= "Guilherme"/>, document.getElementById('root'))

// import {BoaTarde, BoaNoite} from './componentes/Multiplos'

// ReactDOM.render(
//     <div>
//         <BoaTarde nome="Ana"/>
//         <BoaNoite nome="Bia"/>
//     </div>
// , document.getElementById('root')
// )

// import Saudacao from './componentes/Saudacao'

// ReactDOM.render(
//     <div>
//         <Saudacao tipo="Bom dia" nome="João" />
//     </div>
// , document.getElementById('root'))

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" sobrenome="Silva" />
            <Filho nome="Paulo" sobrenome="Silva" />
            <Filho nome="Carla" sobrenome="Silva" />
        </Pai>

    </div>
, document.getElementById('root'))