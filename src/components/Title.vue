<template>
    <div class="my_introduction">
        <v-parallax
            dark
            src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        >
            <v-row
            align="center"
            justify="center"
            >
            <v-col
                class="text-center"
                cols="12"
            >
                <h1 class="text-h4 font-weight-thin mb-4">
                <vue-typer text="Ikuto Hongu's Portfolio"></vue-typer>
                </h1>
                <h4 class="subheading">
                -Web Engineer-
                </h4>
            </v-col>
            </v-row>
        </v-parallax>
    </div>
</template>

<script>
import { VueTyper } from 'vue-typer'

export default {
    components: {
        'vue-typer': VueTyper
    }

}
</script>

<style>

</style>