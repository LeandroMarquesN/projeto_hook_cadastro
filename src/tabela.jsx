import React,{useState} from "react";

// Componente

function Tabela({vetor,selecionar}) {



    // State
    const [termo,setTermo] = useState('');

    // retornar
    return(

      <div  className="">
        <input type="text" placeholder="Informe  o Nome" className="form-control pesquisa "
        onChange={e => setTermo(e.target.value)}
        />
        <table className="table pesquisa">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>Cidade</th>
                    <th>Selecionar</th>
                </tr>
            </thead>

            <tbody>
                {
                    vetor.filter(obj => obj.nome.includes(termo)).map(
                        (obj,indice) => (
                            <tr key={indice}>
                                <td>{indice+1}</td>
                                <td>{obj.nome}</td>
                                <td>{obj.idade}</td>
                                <td>{obj.cidade}</td>
                                <td>
                                    <button
                                        className="btn btn-success"
                                        onClick={()=>selecionar(indice)}
                                    >Selecionar</button>
                                </td>
                            </tr>
                        )


                    )
                }
            </tbody>

        </table>
      </div>
    );
}
export default Tabela;