<template>
  <header id="header" class="w-full bg-white fixed z-40 top-0 border-b">
    <div class="container mx-auto max-w-5xl p-3">
      <div class="flex gap-5 justify-between">
        <div class="flex flex-shrink-0 flex-wrap">
          <h2 class="font-bold text-2xl font-poppins text-gray-800">
            <i class="bi bi-tv mr-3"></i> Stelon.
            <span class="font-normal text-sm text-gray-400 font-quicksand"
              >Streaming television online</span
            >
          </h2>
        </div>
        <div class="space-x-10 mt-1 font-quicksand font-bold text-gray-500">
          <router-link to="/about">About</router-link>
          <a href="https://github.com/iptv-org/iptv/issues" target="_blank"
            >Report Problem <i class="bi bi-exclamation-triangle ml-2"></i
          ></a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {};
</script>

<style></style>
