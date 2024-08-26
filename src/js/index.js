import funcionario from "./dicionario.js";
const btnConsulta = document.getElementById("Consulta")
const card = document.getElementById("conteudo")
const cardConteudo = document.getElementById("card")
const cardInfor = document.getElementById("cardInfor")
const n = document.getElementById("nao")
const btnComeui = document.getElementById("Ja_comeu")

console.log(n);

const hoje = new Date().toDateString()
const registro = JSON.parse(localStorage.getItem("ja_comeu"))
console.log(hoje);







 async function  Consulta(){
    const NomeElemento = document.getElementById("Nome")
    if (!NomeElemento.value){
        NomeElemento.style.border = "solid";
        NomeElemento.style.borderColor = "red";
        NomeElemento.addEventListener("click", ()=>{
            NomeElemento.style.border = "none";
            NomeElemento.style.borderColor = "none";
            })
    }else{
       const a = await funcionario.find(f => f.matricula == NomeElemento.value)
       console.log(a);
       if (a) {
        card.classList.remove("hidden")
        cardConteudo.innerHTML = `
        <img src="${a.img}" class="rounded-full w-32" alt="foto do funcioanrio">
        <p>Id  : ${a.matricula}</p>
        <p>Nome  :  ${a.nome}</p>
        <p>Setor :  ${a.setor}</p>
        <p>Cargo :  ${a.Cargo}</p>
        <button class=" px-3 w-40 bg-green-400	 rounded-md" id="registro">Registra</button>
        

   
   `    
        const btnRegistro = document.getElementById("registro")
        btnRegistro.addEventListener("click", () =>{
           const valorLocal =  JSON.parse(localStorage.getItem("ja_comeu")) || []
           const nome_corno = valorLocal.find(f => f.nome == a.nome) 
           if (nome_corno) {
                cardInfor.classList.remove("hidden")
               

            
            
           }else{
            console.log(a);
            registro.push(a)
            localStorage.setItem("ja_comeu", JSON.stringify(registro))
            
           }
      
           
            
            
        })

       } else{
        
        n.innerHTML = `
         <h1 class="text-red-600">Funcionario nao Cadastrad<h1>
        `
        NomeElemento.addEventListener("click" , ()=>{
            n.innerHTML = ""
            
        })
       }
  
   
       
        
        
    }
    
    
}



btnConsulta.addEventListener("click", Consulta)
btnComeui.addEventListener("click", () =>{
    cardInfor.classList.add("hidden")
    card.classList.add("hidden")

})

card.addEventListener("click", (event)=> {
    if (event.target == card) {
        console.log(event.target);
        
        card.classList.add("hidden")
        
        
    }
})
