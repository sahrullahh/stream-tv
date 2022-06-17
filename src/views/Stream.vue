<template>
  <div class="player-container max-w-5xl mx-auto mt-20">
    <vue3-video-player
      :core="HLSCore"
      @global-auto-play="autoPlay"
      :src="this.$route.params.url"
    ></vue3-video-player>
  </div>
</template>

<script>
  import HLSCore from "@cloudgeek/playcore-hls";
  export default {
    data() {
      return {
        HLSCore,
      };
    },
  };
</script>
