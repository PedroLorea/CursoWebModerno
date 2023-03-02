(function ($) {
    $.fn.temporizador = function (opcoes){
        const opcoesFinais = $.extend({ //extend valores padrão, assumi caso não venha parametros
            mensagem: 'Em breve!',
            horario: '23:59:59'
        }, opcoes)

        const horaDezena = $('<span class ="digito">').html('0')
        const horaUnidade = $('<span class ="digito">').html('0')
        const minutoDezena = $('<span class ="digito">').html('0')
        const minutoUnidade = $('<span class ="digito">').html('0')
        const segundaDezena = $('<span class ="digito">').html('0')
        const segundaUnidade = $('<span class ="digito">').html('0')

        const separadorHora = $('<span class ="digito">').html(':')
        const separadorMinuto = $('<span class ="digito">').html(':')
        const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem)

        $(this).addClass('temporizador')
        $(this).append(horaDezena, horaUnidade, separadorHora,
            minutoDezena, minutoUnidade, separadorMinuto, 
            segundaDezena, segundaUnidade, mensagem)
        
        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)
        const horarioAlvo = regex.exec(opcoesFinais.horario) //separa em unidade o horario, minuto, segundo
        // console.log(horarioAlvo)
        
        let temporizador = setInterval(() => {
            const agora = new Date()
            const alvo = new Date()
            alvo.setHours(horarioAlvo[1])
            alvo.setMinutes(horarioAlvo[2])
            alvo.setMinutes(horarioAlvo[3])

            const diferencaEmMili = alvo.getTime() - agora.getTime()
            if(diferencaEmMili >= 0){
                const diferenca = regex.exec(new Date(diferencaEmMili).toISOString()) //isostring não considera o timezone
                console.log(diferenca)

                horaDezena.html(diferenca[1][0]) //[primeiro indice do todo] [primeiro indice da hora]
                horaUnidade.html(diferenca[1][1])
                minutoDezena.html(diferenca[2][0])
                minutoUnidade.html(diferenca[2][1])
                segundaDezena.html(diferenca[3][0])
                segundaUnidade.html(diferenca[3][1])
            } else {
                clearInterval(temporizador) //para o temporizador
            }
        }, 1000)

        return this
    }
})(jQuery)