import Layout from '../components/Layout'

export default function Tsx(){
    const titulo = <h1>TSX é um conceito central!!!</h1>
    const a = 2
    const b = 3

    function subtitulo(){
        return <h2>{"muito muito legal legal".toUpperCase()}</h2>
    }

    return (
        <Layout>
            <h1>TSX é um conceito Central</h1>
            {a * b } {/* {código javascript} */}
            {titulo}
            {subtitulo()}
            <h2>{"muito legal".toUpperCase()}</h2>
            <p>
                {JSON.stringify({nome: 'João', idade: 30 })}
            </p>
        </Layout>
    
    )
}