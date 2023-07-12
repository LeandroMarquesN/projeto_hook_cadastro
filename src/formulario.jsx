import React from "react";

function Formulario({btncadastrar ,setNome, setIdade, setCidade, cadastrar,nome,idade,cidade, alterar, remover,cancelar}) {




    return(
        <form>
            <input type='text' placeholder="Nome" className ='form-control'
             value={nome}
             onChange={e=> setNome(e.target.value)}/>

            <input type='text' placeholder="idade" className ='form-control'
            value={idade} 
            onChange={e => setIdade(e.target.value)}/>

            <input type='text' placeholder="Cidade" className ='form-control' 
            value={cidade}
            onChange={e => setCidade(e.target.value)}/>

            {/* Aqui vamos poder colocar uma condicional ou um operador ternario onde vamos usar o operardor ternario */}

            {
                btncadastrar
                ?
                <input type="button" value='Cadastrar' className="btn btn-primary" 
                onClick={cadastrar}
                />
                :
                <div>
                    <input type="button" value='Alterar'  className="btn btn-secondary" 
                    onClick={alterar}
                    />
                    <input type="button" value='Excluir'  className="btn btn-danger" 
                    onClick={remover}
                    />
                    <input type="button" value='Cancelar' className="btn btn-success" 
                    onClick={cancelar}
                    />
                </div>
            }


        </form>

    );

}


// Exportar
export default Formulario;