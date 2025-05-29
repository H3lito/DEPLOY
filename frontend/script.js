
    const listanomes=DocumentFragment.getElementById("listanomes");
    async function mostranomes() {

        listanomes.innerHTML=""; // Clear the list before fetching new names
        resposta= await fetch("localhost:3000/nomes");
        nomes= await resposta.json();
        for(nome of nome){
            novop=document.createElement("p");
            novop.innerHTML= nome.nome /* Assuming the JSON has a property 'nome' */
            listanomes.appendChild(novop);
        }

}

  mostranomes();



     /*deffer carrega o script após o carregamento do HTML*/