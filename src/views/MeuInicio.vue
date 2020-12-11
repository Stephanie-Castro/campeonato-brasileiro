<template>

    <v-container> <!-- 'v-container' est´substituindo ' div class="meu-inicio" '-->
      <div class="meu-inicio">

        <h2 class="text-h5 text-center mb-3 mt-5">Brasileirão Série A</h2> <!-- As classes do Vuetify usadas podem ser vistas em: https://vuetifyjs.com/en/styles/text-and-typography/ -->

        <!-- a tag 'v-imagem' do Vuetify já deixa a imagem responsiva. Para saber mais: https://vuetifyjs.com/en/components/images/#usage -->
        <v-img class="inicio-imagem mb-4" src="https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.2974821:1596806515/Serie-A.png">
        </v-img>

        <p>
          A Série A do Campeonato Brasileiro de Futebol de 2020, 
          oficialmente Brasileirão Assaí – Série A 2020 por motivos de patrocínio, 
          é a 64.ª edição da principal divisão do futebol brasileiro. 
          A disputa tem o mesmo regulamento dos anos anteriores, 
          quando foi implementado o sistema de pontos corridos.
        </p>
  
      </div>
    </v-container>

</template>

<script>
export default {

  name: 'MeuInicio',

  data(){ //Dentro de data() estão os dados que serão utilizados do próprio componente.
      return {
          
      }
  },

  methods: { //Dentro de methods estão as funções que utilizaremos no componente. Cada nova função deve ser separada por uma vírgula.

  }

}
</script>

<style scoped>

/* Classe usada na tag 'v-img' */
.inicio-imagem{
  border-radius: 5px;
}

</style>
