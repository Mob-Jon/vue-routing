<template>
  <v-container>
    <v-card class="mx-auto" max-width="344">
      <v-card-title style="background-color: #f5f5f5">Register</v-card-title>
      <v-col class="mt-5">
        <v-form>
          <v-text-field
            outlined
            dense
            placeholder="username"
            append-icon="mdi-account"
          >
          </v-text-field>
            <v-text-field
            outlined
            dense
            placeholder="email"
            append-icon="mdi-envelope"
          >
          </v-text-field>
          <v-text-field
            outlined
            dense
            placeholder="password"
            append-icon="mdi-key"
          ></v-text-field>
          <v-btn block color="blue" class="white--text">Register</v-btn>
        </v-form>
      </v-col>
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>