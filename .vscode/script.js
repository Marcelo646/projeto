function toggleMode() {
    const html = document.documentElement

    html.classList.toggle('light')

    // pegar a tag img

    const img = document.querySelector("#profile img") //em amarelo é o seletor do CSS

    // substituir a imagem

    if(html.classList.contains('light')) {

      // se tiver light mode, adicionar a imagem light

      img.setAttribute('src', './assets/avatar-light.png')

    } else {

      // se tiver sem light mode, manter a imagem normal

      img.setAttribute('src', './assets/avatar.png')

    }



    //if(html.classList.contains('light')) "se for verdadeiro faça essa execução" {
   // html.classList.remove('light')
    //} else "se não for verdadeiro faça essa execução" {
     // html.classList.add('light')  
   // } é isso ou o debaixo.

  
  

  // se tiver light mode, adicionar a imagem light
  // substituir a imagem
  // se tiver sem light mode, manter a imagem normal

  // inicia o git (repositório) no seu projeto
  // git init

  // adiciona todos os arquivos modificados, ao stage
  // git add .

  // cria e descreve um ponta na história
  // git commit -m "message here"

  // envia alterações para o repositório remoto
  // git push

}


    


