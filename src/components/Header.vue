<template>
    <!-- header -->
    <div class="header" id="header">
        <div>
            <v-app-bar>
                <!--ヘッダー内容-->
                <v-img class="mx-4 pr-2" :src="require('@/assets/my_portfoliio_image.png')"
                max-height="70"
                max-width="100"
                contain
                ></v-img>
                <v-spacer></v-spacer>
                <a href="#" class="px-2">About Me</a>
                <a href="#" class="px-2">Service</a>
                <a href="#" class="px-2">Works</a>
                <a href="#" class="px-2">Contact</a>
            </v-app-bar>
        </div>
    </div>
</template>

<script>
export default {
    methods: {

    }
}
</script>

<style>

</style>