<template>
  <v-container>
    <v-card class="mx-auto" max-width="344">
      <v-card-title style="background-color:#F5F5F5">Login</v-card-title>
      <v-col class="mt-5">
          <v-form>
          <v-text-field outlined dense placeholder="username" append-icon="mdi-account">
          </v-text-field>
          <v-text-field outlined dense placeholder="password" append-icon="mdi-key"></v-text-field>
          <v-btn block color="blue" class="white--text">Login</v-btn>
          <p class="text-center mt-5"><a href="" class="red--text" >Forgot password</a></p>
      </v-form>
      </v-col>
      
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>