<template>
    <div>
        <Header />
        <div class="main">
            <div class="corpPoster">
                <div class="corpPosterContent">
                    <span class="corpPosterContentLabel">
                        Наши культовые проекты
                    </span>
                </div>
            </div>
            <span class="taglines">
                РАЗНООБРАЗИЕ, УНИВЕРСАЛЬНОСТЬ, ДОЛГОВЕЧНОСТЬ
            </span>
            <div class="tabs">
                <div @click="activeTab = 'ВСЕ'" :class="{ tab: true, activeTab: activeTab.includes('ВСЕ') }">
                    <span>
                        ВСЕ
                    </span>
                </div>
                <div @click="activeTab = 'ТАУЕЭР ДЕФЕНС'" :class="{ tab: true, 'activeTab': activeTab.includes('ТАУЕЭР ДЕФЕНС') }">
                    <span>
                        ТАУЕЭР ДЕФЕНС
                    </span>
                </div>
                <div @click="activeTab = 'КВЕСТЫ'" :class="{ tab: true, activeTab: activeTab.includes('КВЕСТЫ') }">
                    <span>
                        КВЕСТЫ
                    </span>
                </div>
                <div @click="activeTab = 'ШУТЕРЫ'" :class="{ tab: true, activeTab: activeTab.includes('ШУТЕРЫ') }">
                    <span>
                        ШУТЕРЫ
                    </span>
                </div>
            </div>
            <div v-if="activeTab.includes('ВСЕ')" class="actualProjects">
                <img src="https://sun9-17.userapi.com/impg/yPKz4OX9Vbm3IPB3kR3i7F4ZiE4sZ2DkrrgHnQ/dInBT965DUo.jpg?size=1280x720&quality=96&sign=ec516d5747b7684f1950ae836928e34b&type=album" width="838px" height="470px" alt="">
            </div>
            <div v-else-if="activeTab.includes('ТАУЕЭР ДЕФЕНС')" class="actualProjects">
                <img src="https://sun9-17.userapi.com/impg/yPKz4OX9Vbm3IPB3kR3i7F4ZiE4sZ2DkrrgHnQ/dInBT965DUo.jpg?size=1280x720&quality=96&sign=ec516d5747b7684f1950ae836928e34b&type=album" width="838px" height="470px" alt="">
            </div>
            <div v-else-if="activeTab.includes('КВЕСТЫ')" class="actualProjects">
                
            </div>
            <div v-else-if="activeTab.includes('ШУТЕРЫ')" class="actualProjects">
                
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
    name: 'Projects',
    data(){
        return {
            activeTab: 'ВСЕ'
        }
    },
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

    .corpPoster {
        display: flex;
        justify-content: center;
    }

    .corpPosterContent {
        border-radius: 8px;
        background-image: url('https://brief-malleable-microraptor.glitch.me/games/getimage?gamename=escapefromjail');
        width: 360px;
        height: 360px;
        background-size: 100% 100%;
        -webkit-filter: grayscale(0.5);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        box-sizing: border-box;
        padding: 25px;
    }

    .corpPosterContentLabel {
        color: rgb(150, 150, 150);
        font-size: 36px;
        font-weight: bolder;
    }

    .taglines {
        font-weight: bolder;
        color: rgb(200, 200, 200);
        font-size: 18px;
        margin: 50px;
        display: block;
    }

    .tabs {
        width: 75%;
        margin: auto;
        border: 1px solid rgb(255, 255, 255);
        display: flex;
    }

    .tab {
        border-left: 1px solid rgb(255, 255, 255);
        border-right: 1px solid rgb(255, 255, 255);
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding: 25px;
        font-size: 24px;
        font-weight: bolder;
        width: 25%;
        cursor: pointer;
    }

    .tab:hover {
        background-color: rgb(255, 255, 255);
        color: rgb(0, 0, 0);
    }

    .activeTab {
        background-color: rgb(255, 255, 255);
        color: rgb(0, 0, 0);
    }

    .actualProjects {
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }

    .actualProjects > img {
        margin: 15px 0px;
    }

</style>