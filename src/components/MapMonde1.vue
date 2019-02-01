<template>
  <div>
    <div id="mapMonde">
      <div id="tiles">
        <div v-for="tile in worldMap.tiles" class="tile" :class="tile.name" :style="{ left: getXPosition(tile.position.x), top: getYPosition(tile.position.y) }">
        </div>
      </div>
    </div>
    <b-button block class="text-uppercase font-weight-bold" @click="reload" variant="warning">Changer la carte</b-button>    
  </div>
</template>

<script>

import tilesInit from '@/constants/Tiles'
export default {
  name: 'mapMonde1',
  components: {

  },
  data: function () {
    return {
      arraySprites: [],
      canvas: null,
      context: null,
      worldMap: {
        area: 20,
        tiles: [],
        loop: 0
      },
      tilesInit
    }
  },
  methods: {
    addTile (tile) {
      // if (this.worldMap.loop < this.worldMap.area) {
        // this.worldMap.loop += 1;
        this.worldMap.tiles.push(tile);
        // this.checkNearTiles(tile.position);
      // }
    },    
    checkNearTiles (position) {
      var N = this.getTile({
                x: position.x,
                y: position.y - 2
              });
      if (N === null) {
        this.chooseTile({
                x: position.x,
                y: position.y - 2
              });
      }
      var NE = this.getTile({
                x: position.x + 1,
                y: position.y - 1
              });
      if (NE === null) {
        this.chooseTile({
                x: position.x + 1,
                y: position.y - 1
              });
      }
      var SE = this.getTile({
                x: position.x + 1,
                y: position.y + 1
              });
      if (SE === null) {
        this.chooseTile({
                x: position.x + 1,
                y: position.y + 1
              });
      }
      var S = this.getTile({
                x: position.x,
                y: position.y + 2
              });
      if (S === null) {
        this.chooseTile({
                x: position.x,
                y: position.y + 2
              });
      }
      var SW = this.getTile({
                x: position.x - 1,
                y: position.y + 1
              });
      if (SW === null) {
        this.chooseTile({
                x: position.x - 1,
                y: position.y + 1
              });
      }
      var NW = this.getTile({
                x: position.x - 1,
                y: position.y - 1
              });
      if (NW === null) {
        this.chooseTile({
                x: position.x - 1,
                y: position.y - 1
              });
      }
    },
    chooseTile (position) {
      var type = {
        N: this.getTile ({
          x: position.x,
          y: position.y - 2
        }, 'S'),
        S: this.getTile ({
          x: position.x,
          y: position.y + 2
        }, 'N'),
        NE: this.getTile ({
          x: position.x + 1,
          y: position.y - 1
        }, 'SW'),
        NW: this.getTile ({
          x: position.x - 1,
          y: position.y - 1
        }, 'SE'),
        SE: this.getTile ({
          x: position.x + 1,
          y: position.y + 1
        }, 'NW'),
        SW: this.getTile ({
          x: position.x - 1,
          y: position.y + 1
        }, 'NE')
      }
      var tile = this.findTile(type);
      if (tile) {
        // Penser a utiliser Objet.assign pour cloner tile et eviter de faire les lignes 194 <-> 208
        var newTile = {
          name: tile.name,
          position: {
            x: position.x,
            y: position.y
          },
          src: tile.src,
          type: {
            N  : tile.type.N,
            NE : tile.type.NE,
            SE : tile.type.SE,
            S  : tile.type.S,
            SW : tile.type.SW,
            NW : tile.type.NW
          }          
        }
        this.addTile(newTile)
      } else {
        console.log('error: No Tile found', type);
      }
    },
    findTile (type) {
      var tilesFind = [];
      for (var i = 0, nbTiles = this.tilesInit.length; i < nbTiles; i++) {
        if (
          (this.tilesInit[i].type.N  === type.N  || type.N  === null) && 
          (this.tilesInit[i].type.NE === type.NE || type.NE === null) && 
          (this.tilesInit[i].type.SE === type.SE || type.SE === null) && 
          (this.tilesInit[i].type.S  === type.S  || type.S  === null) && 
          (this.tilesInit[i].type.SW === type.SW || type.SW === null) && 
          (this.tilesInit[i].type.NW === type.NW || type.NW === null)
        ) {
          tilesFind.push(this.tilesInit[i]);
        }
      }
      if (tilesFind.length === 0) return null;
      var tileChoosed = tilesFind[Math.floor(Math.random() * tilesFind.length)];
      return tileChoosed;      
    },
    getTile (position, type) {
      for (var i = 0, nbTiles = this.worldMap.tiles.length; i < nbTiles; i++) {
        if (
          this.worldMap.tiles[i].position.x === position.x &&
          this.worldMap.tiles[i].position.y === position.y 
        ) {
          if (type) {
            return this.getType(this.worldMap.tiles[i], type)
          }
          return this.worldMap.tiles[i];
        }
      }
      return null
    },
    getType (tile, type) {
      if (type == 'N') {
        return tile.type.N
      }
      else if (type == 'NE') {
        return tile.type.NE
      }
      else if (type == 'SE') {
        return tile.type.SE
      }
      else if (type == 'S') {
        return tile.type.S
      }
      else if (type == 'SW') {
        return tile.type.SW
      }
      else if (type == 'NW') {
        return tile.type.NW
      }
    },
    getXPosition (position) {
      console.log('position X = ', position)
      return position * (32) + 'px';
    },
    getYPosition (position) {
      return position * (39 / 2) + 'px';
    },
    initMap () {
      var tile1 = {
        name: 'earth',
        position: {
          x: 10,
          y: 10
        },
        src: 'assets/tiles/1-1-1-1-1-1',
        type: {
          N  : 1,
          NE : 1,
          SE : 1,
          S  : 1,
          SW : 1,
          NW : 1
        }
      }
      this.addTile(tile1);
      console.log('MapMonde : ', this.worldMap.tiles);
        for (var y = 0 ; y < 122 ; y++) {
          console.log(this.worldMap.tiles[y].position)
          this.checkNearTiles(this.worldMap.tiles[y].position);
        }
    },
    reload () {
      console.log('reload');
      this.worldMap.tiles = [];
      this.initMap();
    }
  },
  mounted () {
    this.initMap();
  },
  created () {
    // Charger les images

  }
}
</script>

<style lang="scss">
  #mapMonde {
    width: 100%;
    height: 300px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    border: 8px solid #f0f3f5;
    box-shadow: 2px 2px 12px;   
    margin-bottom: 25px; 
    #tiles {
      position: absolute;
      left: -50%;
      .tile {
        position: absolute;
        width: 45px;
        height: 39px;
        &.earth {
          background: url('../assets/tiles/earth.png');
        }
        &.montagne {
          background: url('../assets/tiles/montagne.png');
        }
        &.montagne2 {
          background: url('../assets/tiles/montagne2.png');
        }
        &.montagne3 {
          background: url('../assets/tiles/montagne3.png');
        }
        &.montagne4 {
          background: url('../assets/tiles/montagne4.png');
        }
        &.montagne5 {
          background: url('../assets/tiles/montagne5.png');
        }
        &.montagne6 {
          background: url('../assets/tiles/montagne6.png');
        }
        &.montagne7 {
          background: url('../assets/tiles/montagne7.png');
        }
        &.montagne8 {
          background: url('../assets/tiles/montagne8.png');
        }
        &.montagne9 {
          background: url('../assets/tiles/montagne9.png');
        }
        &.lake {
          background: url('../assets/tiles/lake.png');
        }
        &.riviere {
          background: url('../assets/tiles/riviere.png');
        }
        &.riviere2 {
          background: url('../assets/tiles/riviere2.png');
        }
        &.riviere3 {
          background: url('../assets/tiles/riviere3.png');
        }
        &.riviere4 {
          background: url('../assets/tiles/riviere4.png');
        }
        &.riviere5 {
          background: url('../assets/tiles/riviere5.png');
        }
        &.riviere6 {
          background: url('../assets/tiles/riviere6.png');
        }
        &.riviere7 {
          background: url('../assets/tiles/riviere7.png');
        }
        &.riviere8 {
          background: url('../assets/tiles/riviere8.png');
        }
        &.riviere9 {
          background: url('../assets/tiles/riviere9.png');
        }
        &.riviere10 {
          background: url('../assets/tiles/riviere10.png');
        }
        &.riviere11 {
          background: url('../assets/tiles/riviere11.png');
        }
        &.riviere12 {
          background: url('../assets/tiles/riviere12.png');
        }
        &.riviere13 {
          background: url('../assets/tiles/riviere13.png');
        }
        &.riviere14 {
          background: url('../assets/tiles/riviere14.png');
        }
        &.riviere15 {
          background: url('../assets/tiles/riviere15.png');
        }
        &.riviere16 {
          background: url('../assets/tiles/riviere16.png');
        }
        &.montagneRiviere {
          background: url('../assets/tiles/montagneRiviere.png');
        }
        &.montagneRiviere2 {
          background: url('../assets/tiles/montagneRiviere2.png');
        }
        &.montagneRiviere3 {
          background: url('../assets/tiles/montagneRiviere3.png');
        }
        &.montagneRiviere4 {
          background: url('../assets/tiles/montagneRiviere4.png');
        }
        &.montagneRiviere5 {
          background: url('../assets/tiles/montagneRiviere5.png');
        }
        &.montagneRiviere6 {
          background: url('../assets/tiles/montagneRiviere6.png');
        }
        &.montagneRiviere7 {
          background: url('../assets/tiles/montagneRiviere7.png');
        }
        &.montagneRiviere8 {
          background: url('../assets/tiles/montagneRiviere8.png');
        }
        &.montagneRiviere9 {
          background: url('../assets/tiles/montagneRiviere9.png');
        }
        &.montagneRiviere10 {
          background: url('../assets/tiles/montagneRiviere10.png');
        }
        &.montagneRiviereChamp {
          background: url('../assets/tiles/montagneRiviereChamp.png');
        }
        &.montagneRiviereChamp2 {
          background: url('../assets/tiles/montagneRiviereChamp2.png');
        }
        &.montagneRiviereChamp3 {
          background: url('../assets/tiles/montagneRiviereChamp3.png');
        }
        &.montagneRiviereChamp4 {
          background: url('../assets/tiles/montagneRiviereChamp4.png');
        }
        &.montagneRiviereChamp5 {
          background: url('../assets/tiles/montagneRiviereChamp5.png');
        }
        &.montagneRiviereChamp6 {
          background: url('../assets/tiles/montagneRiviereChamp6.png');
        }
        &.montagneRiviereChamp7 {
          background: url('../assets/tiles/montagneRiviereChamp7.png');
        }
        &.montagneRiviereChamp8 {
          background: url('../assets/tiles/montagneRiviereChamp8.png');
        }
        &.montagneRiviereChamp9 {
          background: url('../assets/tiles/montagneRiviereChamp9.png');
        }
        &.montagneRiviereChamp10 {
          background: url('../assets/tiles/montagneRiviereChamp10.png');
        }
        &.montagneRiviereChamp11 {
          background: url('../assets/tiles/montagneRiviereChamp11.png');
        }
        &.champs {
          background: url('../assets/tiles/champs.png');
        }
        &.champs1 {
          background: url('../assets/tiles/champs1.png');
        }
        &.champs2 {
          background: url('../assets/tiles/champs2.png');
        }
        &.champs3 {
          background: url('../assets/tiles/champs3.png');
        }
        &.champs4 {
          background: url('../assets/tiles/champs4.png');
        }
        &.champsRiviere {
          background: url('../assets/tiles/champsRiviere.png');
        }
        &.champsRiviere2 {
          background: url('../assets/tiles/champsRiviere2.png');
        }
        &.champsRiviere3 {
          background: url('../assets/tiles/champsRiviere3.png');
        }
        &.champsRiviere4 {
          background: url('../assets/tiles/champsRiviere4.png');
        }
        &.champsRiviere5 {
          background: url('../assets/tiles/champsRiviere5.png');
        }
        &.champsRiviere6 {
          background: url('../assets/tiles/champsRiviere6.png');
        }
        &.champsRiviere7 {
          background: url('../assets/tiles/champsRiviere7.png');
        }
        &.champsRiviere8 {
          background: url('../assets/tiles/champsRiviere8.png');
        }
        &.champsRiviere9 {
          background: url('../assets/tiles/champsRiviere9.png');
        }
        &.champsRiviere10 {
          background: url('../assets/tiles/champsRiviere10.png');
        }
        &.champsRiviere11 {
          background: url('../assets/tiles/champsRiviere11.png');
        }
        &.champsRiviere12 {
          background: url('../assets/tiles/champsRiviere12.png');
        }
        &.champsRiviere13 {
          background: url('../assets/tiles/champsRiviere13.png');
        }
        &.champsRiviere14 {
          background: url('../assets/tiles/champsRiviere14.png');
        }
        &.champsRiviere15 {
          background: url('../assets/tiles/champsRiviere15.png');
        }
        &.champsRiviere16 {
          background: url('../assets/tiles/champsRiviere16.png');
        }
        &.champsRiviere17 {
          background: url('../assets/tiles/champsRiviere17.png');
        }
        &.champsRiviere18 {
          background: url('../assets/tiles/champsRiviere18.png');
        }
        &.champs3 {
          background: url('../assets/tiles/champs3.png');
        }
        &.forest {
          background: url('../assets/tiles/forest.png');
        }
        &.forest2 {
          background: url('../assets/tiles/forest2.png');
        }
        &.forest3 {
          background: url('../assets/tiles/forest3.png');
        }
        &.forest4 {
          background: url('../assets/tiles/forest4.png');
        }
        &.forest5 {
          background: url('../assets/tiles/forest5.png');
        }
        &.forest6 {
          background: url('../assets/tiles/forest6.png');
        }
        &.forest7 {
          background: url('../assets/tiles/forest7.png');
        }
        &.forest8 {
          background: url('../assets/tiles/forest8.png');
        }
        &.forest9 {
          background: url('../assets/tiles/forest9.png');
        }
        &.forest10 {
          background: url('../assets/tiles/forest10.png');
        }
        &.forest11 {
          background: url('../assets/tiles/forest11.png');
        }
        &.forest12 {
          background: url('../assets/tiles/forest12.png');
        }
        &.forest13 {
          background: url('../assets/tiles/forest12.png');
        }
        &.champsRiviereMontagneForest {
          background: url('../assets/tiles/champsRiviereMontagneForest.png');
        }
        &.champsRiviereMontagneForest2 {
          background: url('../assets/tiles/champsRiviereMontagneForest2.png');
        }
        &.champsRiviereMontagneForest3 {
          background: url('../assets/tiles/champsRiviereMontagneForest3.png');
        }
        &.champsRiviereMontagneForest4 {
          background: url('../assets/tiles/champsRiviereMontagneForest4.png');
        }
        &.champsRiviereMontagneForest5 {
          background: url('../assets/tiles/champsRiviereMontagneForest5.png');
        }
        &.champsRiviereMontagneForest6 {
          background: url('../assets/tiles/champsRiviereMontagneForest6.png');
        }
        &.champsRiviereMontagneForest7 {
          background: url('../assets/tiles/champsRiviereMontagneForest7.png');
        }
        &.champsRiviereMontagneForest8 {
          background: url('../assets/tiles/champsRiviereMontagneForest8.png');
        }
        &.champsRiviereMontagneForest9 {
          background: url('../assets/tiles/champsRiviereMontagneForest9.png');
        }
        &.champsRiviereMontagneForest10 {
          background: url('../assets/tiles/champsRiviereMontagneForest10.png');
        }
        &.champsRiviereMontagneForest11 {
          background: url('../assets/tiles/champsRiviereMontagneForest11.png');
        }
        &.forestRiviere {
          background: url('../assets/tiles/forestRiviere.png');
        }
        &.forestRiviere2 {
          background: url('../assets/tiles/forestRiviere2.png');
        }
        &.forestRiviere3 {
          background: url('../assets/tiles/forestRiviere3.png');
        }
        &.forestRiviere4 {
          background: url('../assets/tiles/forestRiviere4.png');
        }
        &.forestRiviere5 {
          background: url('../assets/tiles/forestRiviere5.png');
        }
        &.forestRiviere6 {
          background: url('../assets/tiles/forestRiviere6.png');
        }
        &.forestRiviere7 {
          background: url('../assets/tiles/forestRiviere7.png');
        }
        &.forestRiviere8 {
          background: url('../assets/tiles/forestRiviere8.png');
        }
        &.forestRiviere9 {
          background: url('../assets/tiles/forestRiviere9.png');
        }
        &.forestRiviere10 {
          background: url('../assets/tiles/forestRiviere10.png');
        }
        &.forestRiviere11 {
          background: url('../assets/tiles/forestRiviere11.png');
        }
        &.forestRiviere12 {
          background: url('../assets/tiles/forestRiviere12.png');
        }
        &.forestRiviere13 {
          background: url('../assets/tiles/forestRiviere13.png');
        }
        &.forestRiviere14 {
          background: url('../assets/tiles/forestRiviere14.png');
        }
        &.forestRiviere15 {
          background: url('../assets/tiles/forestRiviere15.png');
        }
        &.forestRiviere16 {
          background: url('../assets/tiles/forestRiviere16.png');
        }
        &.forestRiviere17 {
          background: url('../assets/tiles/forestRiviere17.png');
        }
        &.forestRiviere18 {
          background: url('../assets/tiles/forestRiviere18.png');
        }
        &.forestChamp {
          background: url('../assets/tiles/forestChamp.png');
        }
        &.forestChamp2 {
          background: url('../assets/tiles/forestChamp2.png');
        }
        &.forestChamp3 {
          background: url('../assets/tiles/forestChamp3.png');
        }
        &.forestChamp4 {
          background: url('../assets/tiles/forestChamp4.png');
        }
        &.forestChampMontagne {
          background: url('../assets/tiles/forestChampMontagne.png');
        }
        &.forestChampMontagne2 {
          background: url('../assets/tiles/forestChampMontagne2.png');
        }
        &.forestChampMontagne3 {
          background: url('../assets/tiles/forestChampMontagne3.png');
        }
        &.forestChampMontagne4 {
          background: url('../assets/tiles/forestChampMontagne4.png');
        }
        &.forestChampMontagne5 {
          background: url('../assets/tiles/forestChampMontagne5.png');
        }
        &.montagneForest {
          background: url('../assets/tiles/montagneForest.png');
        }
        &.montagneForest2 {
          background: url('../assets/tiles/montagneForest2.png');
        }
        &.montagneForest3 {
          background: url('../assets/tiles/montagneForest3.png');
        }
        &.montagneForest4 {
          background: url('../assets/tiles/montagneForest4.png');
        }
        &.montagneForest5 {
          background: url('../assets/tiles/montagneForest5.png');
        }
        &.montagneForest6 {
          background: url('../assets/tiles/montagneForest6.png');
        }
        &.montagneForest7 {
          background: url('../assets/tiles/montagneForest7.png');
        }
        &.montagneForestRiviere {
          background: url('../assets/tiles/montagneForestRiviere.png');
        }
        &.montagneForestRiviere2 {
          background: url('../assets/tiles/montagneForestRiviere2.png');
        }
        &.montagneForestRiviere3 {
          background: url('../assets/tiles/montagneForestRiviere3.png');
        }
        &.montagneForestRiviere4 {
          background: url('../assets/tiles/montagneForestRiviere4.png');
        }
        &.montagneForestRiviere5 {
          background: url('../assets/tiles/montagneForestRiviere5.png');
        }
        &.montagneForestRiviere6 {
          background: url('../assets/tiles/montagneForestRiviere6.png');
        }
        &.montagneForestRiviere7 {
          background: url('../assets/tiles/montagneForestRiviere7.png');
        }
        &.montagneForestRiviere8 {
          background: url('../assets/tiles/montagneForestRiviere8.png');
        }
        &.montagneForestRiviere9 {
          background: url('../assets/tiles/montagneForestRiviere9.png');
        }
        &.montagneForestRiviere10 {
          background: url('../assets/tiles/montagneForestRiviere10.png');
        }
        &.montagneForestRiviere11 {
          background: url('../assets/tiles/montagneForestRiviere11.png');
        }
        &.montagneForestRiviere12 {
          background: url('../assets/tiles/montagneForestRiviere12.png');
        }
        &.montagneForestRiviere13 {
          background: url('../assets/tiles/montagneForestRiviere13.png');
        }
        &.montagneForestRiviere14 {
          background: url('../assets/tiles/montagneForestRiviere14.png');
        }
        &.montagneForestRiviere15 {
          background: url('../assets/tiles/montagneForestRiviere15.png');
        }
        &.montagneForestRiviere16 {
          background: url('../assets/tiles/montagneForestRiviere16.png');
        }
        &.montagneForestRiviere17 {
          background: url('../assets/tiles/montagneForestRiviere17.png');
        }
        &.montagneForestRiviere18 {
          background: url('../assets/tiles/montagneForestRiviere18.png');
        }
        &.montagneForestRiviere19 {
          background: url('../assets/tiles/montagneForestRiviere19.png');
        }
        &.montagneForestRiviere20 {
          background: url('../assets/tiles/montagneForestRiviere20.png');
        }
        &.montagneForestRiviere21 {
          background: url('../assets/tiles/montagneForestRiviere21.png');
        }
        &.montagneForestRiviere22 {
          background: url('../assets/tiles/montagneForestRiviere22.png');
        }
        &.montagneForestRiviere23 {
          background: url('../assets/tiles/montagneForestRiviere23.png');
        }
        &.montagneForestRiviere24 {
          background: url('../assets/tiles/montagneForestRiviere24.png');
        }
        &.montagneForestRiviere25 {
          background: url('../assets/tiles/montagneForestRiviere25.png');
        }
        &.montagneForestRiviere26 {
          background: url('../assets/tiles/montagneForestRiviere26.png');
        }
        &.montagneForestRiviere27 {
          background: url('../assets/tiles/montagneForestRiviere27.png');
        }
        &.montagneForestRiviere28 {
          background: url('../assets/tiles/montagneForestRiviere28.png');
        }
        &.montagneForestRiviere29 {
          background: url('../assets/tiles/montagneForestRiviere29.png');
        }
        &.montagneForestRiviere30 {
          background: url('../assets/tiles/montagneForestRiviere30.png');
        }
        &.montagneForestRiviere31 {
          background: url('../assets/tiles/montagneForestRiviere31.png');
        }
        &.montagneForestRiviere32 {
          background: url('../assets/tiles/montagneForestRiviere32.png');
        }
        &.champsMontagne {
          background: url('../assets/tiles/champsMontagne.png');
        }
        &.champsMontagne2 {
          background: url('../assets/tiles/champsMontagne2.png');
        }
        &.champsMontagne3 {
          background: url('../assets/tiles/champsMontagne3.png');
        }
        &.champsMontagne4 {
          background: url('../assets/tiles/champsMontagne4.png');
        }
      }  
    }  
  }
</style>