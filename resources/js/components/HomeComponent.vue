<template>
<v-row>
    <v-app-bar color="#2196F3" dense dark app>
      <v-toolbar-title>VueJs Routing</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/register"> Register </v-btn>
      <v-btn text to="/login"> Login </v-btn>
    </v-app-bar>
  <v-container>
    <div class="text-center">
         <v-icon size="60">
            mdi-account
        </v-icon>
        <h3>Welcome to Home Page</h3>
    </div>
  </v-container>
</v-row>
</template>

<script>
export default {};
</script>