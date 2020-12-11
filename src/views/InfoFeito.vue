<template>

    <v-container> <!-- 'v-container' est´substituindo ' div class="meu-inicio" '-->
      <div class="info-feito">

        <h2 class="text-h5 text-center mb-3 mt-5">Informações Guia + Exemplo de inserção de imagem local</h2> <!-- As classes do Vuetify usadas podem ser vistas em: https://vuetifyjs.com/en/styles/text-and-typography/ -->

        <!-- a tag 'v-imagem' do Vuetify já deixa a imagem responsiva. Para saber mais: https://vuetifyjs.com/en/components/images/#usage -->
        <v-img class="inicio-imagem mb-4" src="../assets/fluminense.png">
        </v-img>

        <p>
          - Todos os componentes que funcionam como página estão na pasta <strong><u>views</u></strong>.<br/>
          - Para cada um deles, foi criado uma rota em <strong><u>router -> index.js</u></strong><br/>
          - E para acessar cada uma dessas rotas, foi adicionado um <strong><u>router-link</u></strong>
                para cada item disponível para acesso no menu. O menu está em:
                    <strong><u>components -> shared -> AppTopBar.vue</u></strong><br/>
        </p>

      </div>
    </v-container>

</template>

<script>
export default {

  name: 'InfoFeito',

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
