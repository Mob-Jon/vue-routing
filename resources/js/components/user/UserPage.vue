<template>
  <v-row>
    <NavBar />
    <v-container> Hello user! you are successfully logged in </v-container>
  </v-row>
</template>
<script>
import NavBar from "../user/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>