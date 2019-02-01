<template>
  <div class="animated fadeIn">
    <b-card-group deck class="mb-4">
      <b-card header="Etape1: Generation de la carte" class="card-accent-warning"> 
        <b-row>
          <b-col sm="12" lg="6">
            <b-card no-body class="no-border">      
              <strategieGame></strategieGame>
            </b-card>
          </b-col>
          <b-col sm="12" lg="6">
            <b-card no-body class="no-border">      
              <p>Ca faisait longtemps que j'avais envie de creer un jeu multi-joueur par navigateur.</p>
              <p>Sauf que mon niveau en creation graphique est proche du 0 ... Voir en negatif !</p>
              <p>Pour creer une carte du monde variable avec un rendu interessant ; J'ai pris la decision d'utiliser des tuiles octogonale et je me baserais non pas sur l'idee qu'une tuile = 1 type de terrain mais plutot que chaque cote ait un environnement specifique.</p>

              <p> Mon script allant chercher parmis les tuiles existantes pour construire la carte ( Ce qui explique les troues ) </p>
              <p>Mes premieres tuiles allaient etre cree et je voyais ma carte du monde s'enrichir petit a petit</p>
            </b-card>
          </b-col>
        </b-row>
      </b-card>
      <b-card header="Tiles" class="card-accent-primary"> 
        <img src="@/assets/tiles/earth.png" />
        <img src="@/assets/tiles/montagne.png" />
        <img src="@/assets/tiles/montagneRiviere.png" />
        <img src="@/assets/tiles/riviere.png" />
        <img src="@/assets/tiles/lake.png" />
      </b-card>
    </b-card-group>  
  </div>
</template>

<script>

import StrategieGame from '@/components/StrategieGame'

export default {
  name: 'protoStrategie',
  components: {
    'strategieGame': StrategieGame,
  },
  data: function () {
    return {
    }
  },
  methods: {}
}
</script>

<style lang="scss">
  .card.no-border {
    border: none;
  }
</style>