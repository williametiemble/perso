<template>
  <div id="strategieGame">
    <canvas id="game"></canvas>
  </div>
</template>

<script>

export default {
  name: 'strategieGame',
  components: {

  },
  data: function () {
    return {
      canvas: null,
      context: null,
      worldMap: {
        area: 20,
        tiles: [],
        loop: 0
      }
    }
  },
  methods: {
    initCanvas () {
      this.canvas = document.getElementById('game');
      this.context = this.canvas.getContext('2d');
      console.log(this.context);
    }
  },
  mounted () {
    this.initCanvas();
  },
  created () {
    // Charger les images

  }
}
</script>

<style lang="scss">
  #game {
    width: 100%;
    height: 100%;
    background: green;
  }
</style>