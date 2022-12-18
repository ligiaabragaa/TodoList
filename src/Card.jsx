
import axios from "axios";

export function Card({label, image_url, price, id}){

    async function deletaDados(id){
    axios.delete(`http://localhost:3000/items/${id}`).
    then(()=>{
        alert("Produto deletado!");
    });
    }

    async function alteraDados(id){
         
        const newprice = prompt("Insira o novo preço:");
        const newitem = prompt("Insira o novo nome:");
        
        axios.put(`http://localhost:3000/items/${id}`,{

        item:newitem,
        image:image_url,
        price:`$${newprice}`,
        id:id,

        }).then(()=>{alert("Produto alterado!")});
        }

        async function buscaId(id){
         
            id = prompt("Insira o Id desejado e clique Ok.");
            
            axios.get(`http://localhost:3000/items/${id}`).
            then( 
            window.open ( `http://localhost:3000/items/${id}`,'pagina'
            ,"width=350, height=255, top=100, left=110, scrollbars=no "));
            }


    return(
        <div className="card">
          <img src={image_url} alt="" />
          <h2>{label}</h2>
          <h3>{price}</h3>
          <h5>Id.{id}</h5>
          <button onClick={()=> deletaDados(id)}>Deletar</button>
          <button onClick={()=> alteraDados(id)}>Alterar</button>
          <button onClick={()=> buscaId(id)}>Buca Id</button>

        </div>
    )
}

<a href=""></a>