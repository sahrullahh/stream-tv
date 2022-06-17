<template>
  <div class="home bg-gray-100">
    <div class="container mx-auto lg:max-w-5xl max-w-full p-3 mt-10">
      <div class="wrap mt-20">
        <div class="grid grid-cols-1 gap-5 justify-center">
          <div class="flex-auto">
            <h2 class="font-bold font-quicksand">Select country :</h2>
            <p class="font-quicksand font-medium text-gray-400">
              Found {{ this.country.length }} data from other countries.
            </p>
            <div class="bg-white mt-5">
              <v-select
                :options="this.allcountry"
                label="name"
                v-model="code"
                @click="showChannels"
                @search="showChannels"
                :reduce="(country) => country.code"
              />
            </div>
          </div>
          <div class="flex-auto">
            <h2 class="font-bold font-quicksand">Select channels :</h2>
            <p class="font-quicksand font-medium text-gray-400">
              Found {{ this.channels.length }} data channels from
              {{ this.fromCountry }}.
            </p>
            <div
              class="w-full p-2 mt-5 h-auto overflow-auto"
              v-if="this.channels.length > 0"
            >
              <div class="wrap grid gap-5 grid-cols-1 justify-center">
                <router-link
                  v-for="list in channels"
                  :key="list.code"
                  :to="{
                    name: 'server',
                    params: {
                      id: list.id,
                      channels: list.name,
                    },
                  }"
                >
                  <button class="p-2 border bg-white flex w-full">
                    <img :src="list.logo" class="w-10" alt="" />
                    <p class="ml-4">{{ list.name }}</p>
                  </button>
                </router-link>
              </div>
            </div>
            <div class="font-quicksand mt-20 text-center" v-else>
              <div class="spinner mx-auto mt-5"></div>
              <p class="mt-2">Loading channels....</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .spinner {
    width: 40px;
    height: 40px;
    background-color: #333;
    -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
    animation: sk-rotateplane 1.2s infinite ease-in-out;
  }

  @-webkit-keyframes sk-rotateplane {
    0% {
      -webkit-transform: perspective(120px);
    }
    50% {
      -webkit-transform: perspective(120px) rotateY(180deg);
    }
    100% {
      -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg);
    }
  }

  @keyframes sk-rotateplane {
    0% {
      transform: perspective(120px) rotateX(0deg) rotateY(0deg);
      -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    }
    50% {
      transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
      -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    }
    100% {
      transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
      -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    }
  }
</style>

<script>
  // @ is an alias to /src
  import axios from "axios";

  export default {
    name: "HomeView",
    data() {
      return {
        country: [],
        emojiFlag: "",
        channels: [],
        allcountry: [],
        keywords: "",
        code: "ID",
        fromCountry: "",
      };
    },
    methods: {
      // selectByCountry: function () {
      //   if (this.keywords.length < 1) {
      //     this.country = this.allcountry;
      //     return true;
      //   }
      //   this.country = this.allcountry.filter((search) => {
      //     const keyword = this.keywords.toLowerCase();
      //     return search.name.toLowerCase() == keyword;
      //   });
      // },
      showChannels: function () {
        axios
          .get(`${this.$baseURL}channels.json`)
          .then((response) => {
            this.channels = response.data.filter((channel) => {
              return channel.country == this.code;
            });
          })
          .catch((err) => {});
      },
    },
    components: {},
    mounted() {
      axios
        .get(`${this.$baseURL}countries.json`)
        .then((response) => {
          this.country = response.data;
          this.allcountry = this.country;
        })
        .catch((err) => {});
      this.showChannels();
    },
  };
</script>
