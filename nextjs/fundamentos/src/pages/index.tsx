import Link from 'next/Link' //Navegar entre componentes no next.js

export default function Inicio(){
    return (
        <div>
            <Link href="/estiloso">
                Estiloso
            </Link>
        </div>
    )
}