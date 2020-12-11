<template>
  <v-container>
    <div class="app-top-bar">
      <!-- 'v-container' est´substituindo ' div class="app-top-bar" '-->

      <v-app-bar color="green lighten-1" app dark>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title>Projeto: Campeonato Brasileiro ⚽</v-toolbar-title>

        <!--
        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
  -->
        <!--
        <v-menu
          left
          bottom
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>


          <v-list>
            <v-list-item
              v-for="n in 5"
              :key="n"
              @click="() => {}"
            >
              <v-list-item-title>Option {{ n }}</v-list-item-title>
            </v-list-item>
          </v-list>
    
        </v-menu>
    -->
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="green darken-4--text text--accent-4"
          >
          <router-link to="/">

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Início</v-list-item-title>
            </v-list-item>

          </router-link>

          <router-link to="/classificacao">

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-soccer</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Classificação</v-list-item-title>
            </v-list-item>

          </router-link>

          <router-link to="/classificacaosemordenar">

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-soccer</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Classificação Sem Ordenar</v-list-item-title>
            </v-list-item>

          </router-link>

          <router-link to="/classificacaoseparado">

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-soccer</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Classificação Separado</v-list-item-title>
            </v-list-item>

          </router-link>

          <router-link to="/classificacaoseparadoordenado">

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-soccer</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Classificação Separado Ordenado</v-list-item-title>
            </v-list-item>

          </router-link>

          <router-link to="/infofeito">

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-soccer</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Info Feito</v-list-item-title>
            </v-list-item>

          </router-link>


          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "AppTopBar",

  data() {
    //Dentro de data() estão os dados que serão utilizados do próprio componente.
    return {
      drawer: false,
      group: null,
    };
  },

  methods: {
    //Dentro de methods estão as funções que utilizaremos no componente. Cada nova função deve ser separada por uma vírgula.
  },
};
</script>

<style scoped>

.app-top-bar a {
  text-decoration: none;
}

</style>
