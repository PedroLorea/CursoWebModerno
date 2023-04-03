import $ from 'jquery'

const loadHtmlSucessCallbacks = [] //Array de funções será chamada sempre que for carregado um html

export function onLoadHtmlSucess(callback){
    if(!loadHtmlSucessCallbacks.includes(callback)){
        loadHtmlSucessCallbacks.push(callback)
    }
}

function loadIncludes(parent){ //le todos os attr wm-include
    if(!parent) parent='body'
    $(parent).find('[wm-include]').each(function(i,e) {
        const url = $(e).attr('wm-include')
        $.ajax({
            url,
            success(data){
                $(e).html(data)
                $(e).removeAttr('wm-include') //evita um possivel erro de chamar de novo
            
                loadHtmlSucessCallbacks.forEach(callback => callback(data))
                loadIncludes(e) //recursivo até carregar todo mundo
            }
        })
    })
}

loadIncludes()