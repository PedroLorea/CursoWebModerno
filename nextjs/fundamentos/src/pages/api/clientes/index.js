export default function client(req, res){
    res.status(200).send()

    if(req.method === "GET"){
        handleGet(req, res)
    } else {
        res.status(405).send()
    }

    function handleGet(req, res){
        res.status(200).json({
            id:3, 
            nome: "Maria"
        })
    }
}

// ele usou postaman para chamar o código por url