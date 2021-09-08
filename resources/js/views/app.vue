<template>
  <v-app>
    <v-main class="mt-10">
      <v-container fluid>
        <!-- <LoginComponent/> -->
        <HomeComponent/>
       <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>

// import LoginComponent from '../components/LoginComponent.vue';
import HomeComponent from '../components/HomeComponent.vue'
export default {
  components: {
   
    // LoginComponent
    HomeComponent
  },
  computed: {},
  data() {
    return {
      message: "Hello World",
    };
  },
};
</script>