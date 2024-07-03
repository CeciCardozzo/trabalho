let div = document.querySelector('#div1')
let todosPersonagens = []
let dados = localStorage.getItem('personagens')
if(dados){
    todosPersonagens = JSON.parse(dados)
    // rodarFor()
    for(i = 0; i < todosPersonagens.length; i++){
        // innetHtml para inserir informações na div
        
        
        div1.innerHTML += `
        <div class="viloes">
            <img src="${todosPersonagens[i][0]}">
            <h2>${todosPersonagens[i][1]}</h2>
            <p>${todosPersonagens[i][2]}</p>
            <P>${todosPersonagens[i][3]}</p>
            <P>${todosPersonagens[i][4]}</p>
            <P>${todosPersonagens[i][5]}</p>
            <button onclick="excluirPersonagem(${i})">excluir</button>
        </div>                          
        `
    }
}

// function rodarFor() {

// }

function salvarVilao(event) {
    event.preventDefault()
    const informacoesPersonagem = []
    const form = document.querySelector('form')
    const input = new FormData (form)

    const imagem = input.get('imagem')
    const personagem = input.get('personagem')
    const filme = input.get('filme')
    const ator = input.get('ator')
    const descricao = input.get('descricao')
    const habilidade = input.get('habilidade')
    
    informacoesPersonagem.push(imagem, personagem, filme, ator, descricao, habilidade)
    todosPersonagens.push(informacoesPersonagem)

    localStorage.setItem('personagens', JSON.stringify(todosPersonagens))
    //puxas uma div vazia
    div1.innerHTML = ''
    for(i = 0; i < todosPersonagens.length; i++){
        // innetHtml para inserir informações na div
        
        
        div1.innerHTML += `
        <div class="viloes" >
            <img src="${todosPersonagens[i][0]}">
            <h2>${todosPersonagens[i][1]}</h2>
            <p>${todosPersonagens[i][2]}</p>
            <P>${todosPersonagens[i][3]}</p>
            <P>${todosPersonagens[i][4]}</p>
            <P>${todosPersonagens[i][5]}</p>
            <button onclick="excluirPersonagem(${i})">excluir</button>
        </div>            
        `
    }


}

function excluirPersonagem(indice){
    // excluir elemento da lista com base no indice
    todosPersonagens.splice(indice, 1)
    // salvar lista atualizada no localStorage
    localStorage.setItem('personagens', JSON.stringify(todosPersonagens))
    // atualizar conteÚdo exibido no HTML
    div1.innerHTML = ''
    for(i = 0; i < todosPersonagens.length; i++){
        div1.innerHTML += `
        <div class="viloes" >
            <img src="${todosPersonagens[i][0]}">
            <h2>${todosPersonagens[i][1]}</h2>
            <p>${todosPersonagens[i][2]}</p>
            <P>${todosPersonagens[i][3]}</p>
            <P>${todosPersonagens[i][4]}</p>
            <P>${todosPersonagens[i][5]}</p>
            <button onclick="excluirPersonagem(${i})">excluir</button>
        </div>            
        `
    }

}

function cadastrar(){
    const cadastrar= document.querySelector('#cadastrar')
    cadastrar.classList.toggle('oculto')
}


   