<template>
    <div>
        <Header />
        <div>
            About
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
    name: 'About',
    components: {
        Header,
        Footer,
    }
}
</script>

<style scoped>

</style>