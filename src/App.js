
// Importando modulos
import React from 'react';


// Importando Hooks
import { useState } from 'react';


// Importando Css
import './App.css';

// Importando Componente Formulario
import Formulario from './formulario';

// Importando Componente tabela
import Tabela from './tabela';


// Criando o coponente principal App
function App() {


  // useState 
  // A ideia aqui é que toda vexz que meu btncadastrar valer true ele será visivel ao usuario e os demais nao visiveis
  const [btnCadastrar, setBtnCadastrar] = useState(true);

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cidade, setCidade] = useState('');

  const [vetor, setVetor] = useState([]);

  // Criar um state para pegar o indice do vetor
  const [indiceVetor, SetIndiceVetor] = useState('');

  // funcao para efetuar o cadastro

  const cadastrar = () => {
    // Aqui dentro vamos criar um objeto com as caracteristicas nome, idade e cidade onde cada caracteristica vai pegar as respectivas states
    let obj = {
      'nome': nome,
      'idade': idade,
      'cidade': cidade,
    }
    // Agora vamos adicionar ao vetor 
    // Uma dica se colocarmos nos parametro do setVetor(obj) ele  vai armazenar omente um unico objeto e nao um conjunto de objetos então colocamos setVetor([...vetor, obj]) e dentro colocamos o colchetes e dentro do colchetes ooperador spred (...) masi seguido da variavel vetor , entao damos uma virgula e colocamos o objeto.
    // onde usando ooperador spred ele vai lista todos os objetos que contenham o vetor e depois ele adiciona um novo obejto
    setVetor([...vetor, obj])

    // Vamos aplicar um valor vazio aos states pois sempre que for efetuado um cadastro ja vamos limpar os valores dos mesmos onde eles teram que ser passados via props
    setNome('')
    setIdade('')
    setCidade('')

  }

  // Função para selecionar os usuario cadastrado
  const selecionar = (indice) => {

    SetIndiceVetor(indice);
    setNome(vetor[indice].nome);
    setIdade(vetor[indice].idade);
    setCidade(vetor[indice].cidade);

    // E agora vamos deixar o Botao cadastrar oculto  e habilitar os outros botoes
    setBtnCadastrar(false);
  }

  // Função para altera os dados

  const alterar = () => {
    // AQUI será parceidoacom a função cadastrar onde teremos que criar umobjeto
    let obj = {
      'nome': nome,
      'idade': idade,
      'cidade': cidade,
    }
    // Agora precisamos criar uma copia do nosso vetor para mexer em alguma caracteristica e depois enviar para o stateVetor
    let CopiaVetor = [...vetor]
    // Agora vamos modificalo
    CopiaVetor[indiceVetor] = obj;

    setVetor(CopiaVetor);

    setNome('')
    setIdade('')
    setCidade('')

    setBtnCadastrar(true);

  }
  // === Função Para remover
  const remover = () => {
    // temos que fazer um acopia do vetor  e depsi sobrepor os valores
    let CopiaVetor = [...vetor]

    CopiaVetor.splice(indiceVetor, 1);
    setVetor(CopiaVetor);

    setNome('')
    setIdade('')
    setCidade('')

    setBtnCadastrar(true);
  }

  // === Funçao para  Cancelar a edicao pu remoção
  const cancelar = () => {
    setNome('')
    setIdade('')
    setCidade('')

    setBtnCadastrar(true);

  }

  // Retorno
  return (
    < React.StrictMode>
      <h3 className=' pesquisa' style={{ color: "#4C5F6B", textAlign: "center" }}>Cadastro</h3>
      <Formulario

        btncadastrar={btnCadastrar}
        setNome={setNome}
        setIdade={setIdade}
        setCidade={setCidade}

        cadastrar={cadastrar}

        nome={nome}
        idade={idade}
        cidade={cidade}

        alterar={alterar}
        remover={remover}
        cancelar={cancelar}
      />
      <Tabela
        vetor={vetor}
        selecionar={selecionar}
      />

    </React.StrictMode>
  );
}


export default App;
