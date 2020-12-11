<template>

    <v-container> <!-- 'v-container' est´substituindo ' div class="clubes-tabela" '-->
        <div class="clubes-tabela">

            <v-simple-table>
                <template v-slot:default>
                <thead>
                    <tr>
                        <th colspan="2" class="text-left"> <!-- O ' colspan="2" ' é para que a palavra 'Clube' ocupe 2 colunas (que tem posição e que tem nome do clube)-->
                            Clube
                        </th>
                        <th class="text-right">
                            Pontos
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(clube, index) of clubesRecebidos" :key="clube.id">
                        
                        <td> {{ index + 1 }} </td> <!-- o + 1 é porque 'index' começa com 0, mas queremos que comece com 1 -->
                        <td> 
                            <v-avatar size="24"> <!-- ' size="24" ' é o tamanho da imagem -->
                                <img
                                    :src="clube.escudo"
                                    :alt="clube.nome"
                                > <!-- Não esquecer na tag 'img' acima os ' v-bind: ' --> 
                            </v-avatar>
                            <span class="pl-2"> {{ clube.nome }} </span> <!-- A classe ' pl-2" ' é de padding left 2, o que significa que há um espçamento de 2 para o que estiver a esquerda (que no caso são as imagens dos escudos) -->
                        </td>
                        <td class="text-right"> {{ clube.pontos }} </td> <!-- A classe ' text-right ' alinha a direita -->
                    </tr>
                </tbody>
                </template>
            </v-simple-table>
    
            

        </div>     
    </v-container>

</template>

<script>
export default {

  name: 'ClubesTabela',

  data(){ //Dentro de data() estão os dados que serão utilizados do próprio componente.
      return {
      }
  },

  props: {//As props são propriedades que vem originalmente do componente pai.
    clubesRecebidos: {
      type: Array,
      required: true
    }
  },

  methods: { //Dentro de methods estão as funções que utilizaremos no componente. Cada nova função deve ser separada por uma vírgula.

  }

}
</script>

<style scoped>

</style>
