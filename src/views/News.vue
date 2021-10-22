<template>
    <div>
        <Header />
        <div>
            News
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
    name: 'News',
    components: {
        Header,
        Footer,
    }
}
</script>

<style scoped>

</style>