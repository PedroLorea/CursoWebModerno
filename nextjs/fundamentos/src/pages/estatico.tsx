import Layout from "../components/Layout"

export async function getStaticProps(){
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico(props: any){
    <Layout titulo = "Conteúdo Estático">
        <div>{props.numero}</div>
    </Layout>
}