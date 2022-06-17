<template>
  <div class="home bg-gray-100">
    <div class="container mx-auto lg:max-w-5xl max-w-full p-3 mt-10">
      <div class="wrap mt-20">
        <div class="flex gap-5 justify-center">
          <div class="flex-auto">
            <h2 class="font-bold font-quicksand">Select Server :</h2>
            <p class="font-quicksand font-medium text-gray-400">
              Found {{ this.stream.length }} data stream from
              {{ this.$route.params.channels }}
            </p>
            <div
              class="wrap overflow-y w-auto h- mt-5"
              v-if="this.stream.length > 0"
            >
              <router-link
                v-for="list in stream"
                :key="list.channel"
                :to="{
                  name: 'streamtv',
                  params: {
                    channels: this.$route.params.channels,
                    url: list.url,
                  },
                }"
              >
                <button
                  class="bg-white text-left font-bold border font-quicksand mt-5 px-5 py-2 w-full"
                >
                  <i
                    class="bi bi-circle-fill mr-4"
                    :class="
                      list.status == 'online'
                        ? 'text-green-500'
                        : list.status == 'timeout'
                        ? 'text-yellow-500'
                        : list.status == 'blocked'
                        ? 'text-gray-500'
                        : 'text-red-500'
                    "
                  ></i>
                  {{ list.url }}
                </button>
              </router-link>
            </div>
            <div
              class="error bg-red-200 border border-red-600 p-2 font-quicksand mt-5"
              v-else
            >
              <p class="font-bold">
                There is no server stream online for this channel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import axios from "axios";

  export default {
    name: "Server",
    data() {
      return {
        stream: [],
      };
    },
    watch: {
      $route: function () {
        axios
          .get(`${this.$baseURL}streams.json`)
          .then((response) => {
            this.stream = response.data.filter((stream) => {
              return stream.channel == this.$route.params.id;
            });
          })
          .catch((err) => {});
      },
    },
    mounted() {
      axios
        .get(`${this.$baseURL}streams.json`)
        .then((response) => {
          this.stream = response.data.filter((stream) => {
            return stream.channel == this.$route.params.id;
          });
        })
        .catch((err) => {});
    },
  };
</script>
