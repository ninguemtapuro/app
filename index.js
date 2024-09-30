const { select, input, checkbox } = require('@inquirer/prompts')

let meta = {
    value:" Tomar 1L de agua por dia",
    checked: false,
    }

let metas = [ meta ]

const cadastrarMeta = async () => {
    const meta = await input({message: "Digite a meta"})

    if(meta.length == 0) {
        console.log('A meta não pode ser vazia.')
        return
    }

    metas.push(
        {value: meta, checked: false}
    )
}

const listarMetas = async () => {
    const respostas = await checkbox ({
        message: "Use as setas para mudar de meta, o espaço para marcar e desmarcar e o enter para finalizar essa etapa",
        choices: [...metas],
        instructions: false,
    })

    if(respostas.length == 0)   {
        console.log("Nenhuma meta selecionada!")
        return
    }

    metas.forEach((m) => {
        m.checked = false
    })

    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })

            meta.checked = true
    })

    console.log('Meta(s) marcadas como concluida(s)')
}

const start = async () => {

    while(true){
        
        const opcao =  await select({
                message: "Menu >",
                choices:    [
                    {
                        name: "Cadastrar meta",
                        value: "cadastrar"
                    },
                    {
                        name: "Listar metas",
                        value: "listar"
                    },
                    {
                        name: "Sair",
                        value: "sair"
                    }
                ]
    })

        
    switch(opcao)   {
            case "cadastrar":
                await cadastrarMeta()
                console.log(metas)
                break
            case "listar":
                await listarMetas()
                break
            case "sair":
                console.log("Até a proxima")

            return
        }
    }
    
}
start()



/*hello word
/*let mensagem = "ola, mundo!"
console.log(mensagem);*/

//arrays, objetos
/*let metas = ["miguel", "romero"]

console.log(metas[1] + " "+ metas[0])*/

/*let meta = {
    value: 'ler um livro por mes',
    checked: false,
    log: (info) => {
        console.log(info)
    }
}
meta.log(meta.value)


//function //arrow function
const criarMeta = () => {}*/

//Estrutura de Repetição
/*const start = () => {
    let count = 0
    while(count < 10){
        console.log(count)
        count = count + 1
    }
    
}
start()*/