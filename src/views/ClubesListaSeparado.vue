<template>

    <v-container> <!-- 'v-container' est´substituindo ' div class="clubes-lista" '-->
        <div class="clubes-lista-separado">
    
            <h2 class="text-h5 text-center mb-3 mt-5">Classificação dos clubes</h2>
            
            <ClubesTabela v-bind:clubesRecebidos="clubesLista"/>

        </div>     
    </v-container>

</template>

<script>

import ClubesTabela from '../components/ClubesTabela';

export default {

  name: 'ClubesListaSeparado',

  components: {

    ClubesTabela,

  },

  data(){ //Dentro de data() estão os dados que serão utilizados do próprio componente.
      return {
          clubesLista: [],
          clubesLista2: [{
              id: 1,
              escudo: "",
              nome: "Fluminense",
              pontos: 50
          }],
      }
  },
/*
  computed: { //computed são dados (data) que precisam de uma lógica

    clubesListaOrdenada(){
        const listaOrdenada = this.clubesLista.slice(0).sort( //No ' computed ' não é permitido mudar o dado original. Usamos o slice(0) como uma gambiarra, pois o slice() retorna um novo array, sem modificar o array original.
            (a, b) => a.pontos > b.pontos ? -1 : 1 //Se A for maior que B, então retorna -1. -1 significa que o valor de A será ordenado antes de B
        );
        return listaOrdenada;
    }
  },
*/

  created() { //created() é uma função do ciclo de vida do componente. Se queremos que algo carregue assim que o componente é criado, usamos created()
    fetch('https://hackthon-decola.firebaseio.com/clubes-lista.json') //link da API
      .then(resposta => resposta.json()) //após fazer o 'fetch' da API, ou seja, após pegar a API, eu quero que pegue essa resposta e transforme essa resposta em 'json'
      .then(json => { //Então, eu quero que pegue essa resposta da linha de cima, que é o json, e ...
        this.clubesLista = json //...Atribua esse json à variável 'clubesLista' (que é um array)

        //console.log(this.clubesLista); //Interessante para ver se está carregando tudo certinho. o 'console.log' tem aue ficar aqui, pois o ' fetch() ' é uma requisição assíncrona, então se ele estiver fora, pode ser que não tenha carregado tudo quando o ' console.log ' for chamado

      });

  },
  mounted () {
  // we can implement any method here like

},

  methods: { //Dentro de methods estão as funções que utilizaremos no componente. Cada nova função deve ser separada por uma vírgula.

  }

}
</script>

<style scoped>

</style>
