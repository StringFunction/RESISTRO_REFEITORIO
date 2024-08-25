import funcionario from "./dicionario.js";
const btnConsulta = document.getElementById("Consulta")
const card = document.getElementById("conteudo")
const cardConteudo = document.getElementById("card")
const n = document.getElementById("nao")

console.log(n);

const hoje = new Date().toDateString()
const registro = []
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
            console.log(`ola mundo`);
            
            registro.push(a)
            localStorage.setItem('ja_comeu', JSON.stringify(registro));
            
            
        })

       } else{
        
        n.innerHTML = `
         <h1 class="text-red-600">Funcionario nao Cadastrado<h1>
        `
        NomeElemento.addEventListener("click" , ()=>{
            n.innerHTML = ""
            
        })
       }
  
   
       
        
        
    }
    
    
}
console.log(registro);


btnConsulta.addEventListener("click", Consulta)
card.addEventListener("click", (event)=> {
    if (event.target == card) {
        console.log(event.target);
        
        card.classList.add("hidden")
        
        
    }
})
