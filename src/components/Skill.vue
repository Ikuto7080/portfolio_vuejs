<template>
  <div id="skill">
      <v-container
      >
        <v-row
        no-gutters
        style="height: 150px"
        >
            <!-- HTML -->
            <v-col>
                <v-card class="mx-auto my-12"
                outlined
                max-width="374"
                tile
                >
                    <v-img
                    height="250"
                    :src="require('@/assets/html-5.svg')"
                    ></v-img>

                    <v-card-title>HTML</v-card-title>

                    <v-rating
                    :value="4.5"
                    color="yellow darken-3"
                    dense
                    half-increments
                    readonly
                    ></v-rating>
                </v-card>
            </v-col>
                <!-- CSS -->
            <v-col>
                <v-card class="mx-auto my-12"
                outlined
                max-width="374"
                tile
                >
                    <v-img
                    height="250"
                    :src="require('@/assets/css-3.svg')"
                    ></v-img>

                    <v-card-title>CSS</v-card-title>

                    <v-rating
                    :value="4.5"
                    color="yellow darken-3"
                    dense
                    half-increments
                    readonly
                    ></v-rating>
                </v-card>
            </v-col>
            
                <!-- Python -->
            <v-col>
                <v-card class="mx-auto my-12"
                outlined
                max-width="374"
                tile
                >
                    <v-img
                    height="250"
                    :src="require('@/assets/python.svg')"
                    ></v-img>

                    <v-card-title>Python</v-card-title>

                    <v-rating
                    :value="4.0"
                    color="yellow darken-3"
                    dense
                    half-increments
                    readonly
                    ></v-rating>
                </v-card>
            </v-col>
                <!-- Django -->
            <v-col>
                <v-card class="mx-auto my-12"
                outlined
                max-width="374"
                tile
                >
                    <v-img
                    height="250"
                    :src="require('@/assets/django-icon.svg')"
                    ></v-img>

                    <v-card-title>Django</v-card-title>

                    <v-rating
                    :value="4.5"
                    color="yellow darken-3"
                    dense
                    half-increments
                    readonly
                    ></v-rating>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <!-- js -->
                <v-card class="mx-auto my-12"
                outlined
                max-width="374"
                tile
                >
                    <v-img
                    height="250"
                    :src="require('@/assets/javascript.svg')"
                    ></v-img>

                    <v-card-title>Javascript</v-card-title>

                    <v-rating
                    :value="4.5"
                    color="yellow darken-3"
                    dense
                    half-increments
                    readonly
                    ></v-rating>
                </v-card>
            </v-col>
            <v-col>
                <!-- Vue.js -->
                <v-card class="mx-auto my-12"
                outlined
                max-width="374"
                tile
                >
                    <v-img
                    height="250"
                    :src="require('@/assets/vue.svg')"
                    ></v-img>

                    <v-card-title>Vue</v-card-title>

                    <v-rating
                    :value="5.0"
                    color="yellow darken-3"
                    dense
                    half-increments
                    readonly
                    ></v-rating>
                </v-card>
            </v-col>
            <v-col>
                <!-- Vuetify -->
                <v-card class="mx-auto my-12"
                outlined
                max-width="374"
                tile
                >
                    <v-img
                    height="250"
                    :src="require('@/assets/vuetifyjs.svg')"
                    ></v-img>

                    <v-card-title>Vuetify</v-card-title>

                    <v-rating
                    :value="5.0"
                    color="yellow darken-3"
                    dense
                    half-increments
                    readonly
                    ></v-rating>
                </v-card>
            </v-col>
            <v-col>
                <!-- ruby -->
                <v-card class="mx-auto my-12"
                outlined
                max-width="374"
                tile
                >
                    <v-img
                    height="250"
                    :src="require('@/assets/ruby.svg')"
                    ></v-img>

                    <v-card-title>Ruby</v-card-title>

                    <v-rating
                    :value="4.0"
                    color="yellow darken-3"
                    dense
                    half-increments
                    readonly
                    ></v-rating>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <!-- rails -->
                <v-card class="mx-auto my-12"
                outlined
                max-width="374"
                tile
                >
                    <v-img
                    height="250"
                    :src="require('@/assets/rails.svg')"
                    ></v-img>

                    <v-card-title>Rails</v-card-title>

                    <v-rating
                    :value="3.5"
                    color="yellow darken-3"
                    dense
                    half-increments
                    readonly
                    ></v-rating>
                </v-card>
            </v-col>
            <v-col>
                <!-- PHP -->
                <v-card class="mx-auto my-12"
                outlined
                max-width="374"
                tile
                >
                    <v-img
                    height="250"
                    :src="require('@/assets/php-alt.svg')"
                    ></v-img>

                    <v-card-title>PHP</v-card-title>

                    <v-rating
                    :value="3.0"
                    color="yellow darken-3"
                    dense
                    half-increments
                    readonly
                    ></v-rating>
                </v-card>
            </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>