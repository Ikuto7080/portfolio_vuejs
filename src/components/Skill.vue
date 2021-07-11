<template>
  <div id="skill">
      <h1 class="text-center white--text">Skills</h1>
     <v-container class="inner my_introduction white--text">
        <div class="language_bg pa-5">
            <v-row
            class="mt-0"
            justify="center"
            align-content-lg="center"
            >
                <v-col
                cols="4"
                md="4"
                xs="12"
                class="pa-0 v_card_cont"
                v-for="n of data"
                :key="n"
                >
                    <v-card
                    class="mt-12 mr-0"
                    outlined
                    max-width="150"
                    height="200"
                    tile
                    >
                        <div>
                            <v-img
                            class="mx-auto"
                            style="width: 70px; height:auto;"
                            :src="n.image"
                            ></v-img>
                            <v-card-text class="text-center">{{n.language}}</v-card-text>
                            <v-rating
                            :value="n.value"
                            color="yellow darken-3 text-center"
                            dense
                            half-increments
                            readonly
                            ></v-rating>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </div>
      </v-container>
  </div>
</template>

<script>
export default {
    data(){
        return {
            data: [
                {image: require('@/assets/html-5.svg'), language: "HTML", value: "4.5"},
                {image: require('@/assets/css-3.svg'), language: "CSS", value: "4.5"},
                {image: require('@/assets/python.svg'), language: "Python", value: "4.5"},
                {image: require('@/assets/django-icon.svg'), language: "Django", value: "4.5"},
                {image: require('@/assets/javascript.svg'), language: "Javascript", value: "4.5"},
                {image: require('@/assets/vue.svg'), language: "Vue", value: "4.5"},
                {image: require('@/assets/ruby.svg'), language: "Ruby", value: "4.0"},
                {image: require('@/assets/rails.svg'), language: "Rails", value: "4.0"},
                {image: require('@/assets/php-alt.svg'), language: "PHP", value: "3.5"},
            ]
        }
    }
}
</script>

<style>

</style>