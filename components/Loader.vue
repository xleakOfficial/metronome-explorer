<template>
<svg :width="width" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 88 88" style="enable-background:new 0 0 88 88;" xml:space="preserve">
  <g id="Triangle">
    <path class="st0" d="M75.2,78.5H12.8c-3.8,0-6.2-4.1-4.4-7.4l31.2-58.1c1.9-3.5,7-3.5,8.9,0l31.2,58.1C81.4,74.4,79,78.5,75.2,78.5z"/>
  </g>
  <g id="Line">
    <line class="st1" x1="44" y1="22.5" x2="44" y2="78.5"/>
  </g>
</svg>

</template>

<script>
export default {
  props: {
    width: { type: Number, default: 88 }
  }
}
</script>


<style type="text/css" scoped>
  .st0 {
    fill: none;
    stroke: #7e61f8;
    stroke-width: 5;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
  }

  .st1 {
    fill: none;
    stroke: #7e61f8;
    stroke-width: 5;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
    animation: metronome 2s ease-in-out infinite;
    transform-origin: 50% 85%;
  }

  @keyframes metronome {
    0%,
    100% { transform: rotate(45deg); }
    50% { transform: rotate(-45deg); }
  }
</style>
