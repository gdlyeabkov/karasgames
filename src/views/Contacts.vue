<template>
    <div>
        <Header />
        <div class="main">
            <div class="releasesPoster">
                <div class="releasesPosterContent">
                    <span class="releasesPosterContentLabel">
                        Контакты
                    </span>
                </div>
            </div>
            <span>
                Группа вконтакте
                KARAS GAMES - разработчик игр
            </span>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
    name: 'Contacts',
    components: {
        Header,
        Footer,
    }
}
</script>

<style scoped>
    
    .main {
        box-sizing: border-box;
        padding: 25px 35px;
        background-color: rgb(10, 10, 10);
        color: rgb(255, 255, 255);
    }

    .releasesPoster {
        display: flex;
        justify-content: center;
    }

    .releasesPosterContent {
        border-radius: 8px;
        background-image: url('https://sun1-21.userapi.com/s/v1/ig2/TmElrD0QkTtVpAP6kNq3INCM7mTB1lT9D5dFYShi5p_EXPmg5ZCRUPd1vZwLxhGfac7-m3yUaN8C76bwwmRxRwQ9.jpg?size=50x50&quality=95&crop=908,194,180,180&ava=1');
        width: 200px;
        height: 200px;
        background-size: 100% 100%;
        -webkit-filter: grayscale(0.5);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        box-sizing: border-box;
        padding: 25px;
    }

    .releasesPosterContentLabel {
        color: rgb(200, 200, 200);
        font-size: 24px;
        font-weight: bolder;
    }

</style>