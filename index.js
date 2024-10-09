const { select, input, checkbox } = require('@inquirer/prompts')

let mensagem = "Bem vindo ao App de metas";

let meta = {
    value:" Tomar 1L de agua por dia",
    checked: false,
    }

let metas = [ meta ]

const cadastrarMeta = async () => {
    const meta = await input({message: "Digite a meta"})

    if(meta.length == 0) {
        mensagem = "A meta não pode ser vazia."
        return
    }

    metas.push(
        {value: meta, checked: false}
    )

    mensagem = "Meta cadastrada com sucesso!"
}

const listarMetas = async () => {
    const respostas = await checkbox ({
        message: "Use as setas para mudar de meta, o espaço para marcar e desmarcar e o enter para finalizar essa etapa",
        choices: [...metas],
        instructions: false,
    })

    metas.forEach((m) => {
        m.checked = false
    })

    if(respostas.length == 0)   {
        mensagem = "Nenhuma meta selecionada!"
        return
    }

 

    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })

            meta.checked = true
    })

    mensagem = "Meta(s) marcada(s) como concluida(s)"

}

const metasRealizadas = async () => {
    const realizadas = metas.filter((meta) => {
        return meta.checked
    })

    if(realizadas.length == 0)  {
        mensagem ="Não existem metas realizadas!"
        return
    }

    await select({
        messege: "Metas Realizadas: " + realizadas.length,
        choices: [...realizadas]
})
}

const metasAbertas = async () => {
    const abertas = metas.filter((meta) => {
        return meta.checked != true
    })

    if(abertas.length == 0)  {
        mensagem = "Não existem metas abertas!"
        return
    }

    await select({
        messege: "Metas Abertas: " + abertas.length,
        choices: [...abertas]
})
}

    const deletarMetas = async () => {
        const metasDesmarcadas = metas.map((meta) => {
            return  { value: meta.value, checkbox: false}
        })

        const itemsADeletar = await checkbox ({
            message: "Selecione item para deletar",
            choices: [...metasDesmarcadas],
            instructions: false,
        })
    if(itemsADeletar.length == 0)   {
        mensagem = "Nenhum item para deletar!!"
        return
    }
    itemsADeletar.forEach((item) =>{
        metas = metas.filter((meta) => {
            return meta.value != item
        })
    })
    mensagem = "Meta(s) deletada(s) com sucesso!"
    }

    const mostrarMensagem = () => {
        console.clear();

        if(mensagem != "")  {
            console.log(mensagem)
            console.log("")
            mensagem = ""
        }
    } 

    const start = async () => {

    while(true){
        mostrarMensagem()
        
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
                        name: "Metas realizadas",
                        value: "realizadas"
                    },
                    {
                        name: "Metas abertas",
                        value: "abertas"
                    },
                    {
                        name: "Deletar metas",
                        value: "deletar"
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
                break
            case "listar":
                await listarMetas()
                break
            case "realizadas":
                await metasRealizadas()
                break
            case "abertas":
                await metasAbertas()
                break
                case "deletar":
                await deletarMetas()
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