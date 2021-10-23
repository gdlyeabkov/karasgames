<template>
    <div>
        <Header @toggleContextMenu="toggleContextMenuHandler" />
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
            <div v-if="aboutContextMenu" class="aboutContextMenu" @mouseleave="toggleContextMenuHandler('about', false)">
                <span @click="$router.push({ name: 'Home' })">
                Кто мы
                </span>
                <span @click="$router.push({ name: 'Home' })">
                Наши проекты
                </span>
                <span @click="$router.push({ name: 'Home' })">
                Лидерство
                </span>
                <span @click="$router.push({ name: 'Home' })">
                Направления
                </span>
                <span @click="$router.push({ name: 'Home' })">
                Многообразие
                </span>
                <span @click="$router.push({ name: 'Home' })">
                Где нас найти
                </span>
                <span @click="$router.push({ name: 'Home' })">
                Контакты
                </span>
            </div>
            <div v-else-if="carrierContextMenu" class="carrierContextMenu" @mouseleave="toggleContextMenuHandler('carrier', false)">
                <span @click="$router.push({ name: 'Home' })">
                Работа у нас
                </span>
                <span @click="$router.push({ name: 'Home' })">
                Ветераны
                </span>
                <span @click="$router.push({ name: 'Home' })">
                Ученики
                </span>
                <span @click="$router.push({ name: 'Home' })">
                Преимущества
                </span>
            </div>
            <div v-else-if="investorsContextMenu" class="investorsContextMenu" @mouseleave="toggleContextMenuHandler('investors', false)">
                <span @click="$router.push({ name: 'Home' })">
                Доклады
                </span>
                <span @click="$router.push({ name: 'Home' })">
                Выпуски
                </span>
                <span @click="$router.push({ name: 'Home' })">
                Представления
                </span>
                <span @click="$router.push({ name: 'Home' })">
                Производительность
                </span>
                <span @click="$router.push({ name: 'Home' })">
                Компания
                </span>
                <span @click="$router.push({ name: 'Home' })">
                Дивиденды
                </span>
                <span @click="$router.push({ name: 'Home' })">
                Подписка
                </span>
            </div>
            <div v-else-if="commitmentsContextMenu" class="commitmentsContextMenu" @mouseleave="toggleContextMenuHandler('commitments', false)">
                <span @click="$router.push({ name: 'Donat' })">
                Донаты
                </span>
                <span @click="$router.push({ name: 'Report' })">
                Выступления
                </span>
            </div>
            <div v-else-if="newsContextMenu" class="newsContextMenu" @mouseleave="toggleContextMenuHandler('news', false)">
                <span @click="$router.push({ name: 'Releases' })">
                Выпуски
                </span>
                <span @click="$router.push({ name: 'Contacts' })">
                Медиа-контакты
                </span>
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
            activeTab: 'ВСЕ',
            aboutContextMenu: false,
            carrierContextMenu: false,
            investorsContextMenu: false,
            commitmentsContextMenu: false,
            newsContextMenu: false,
        }
    },
    methods: {
        toggleContextMenuHandler(contextMenu, toggler){
        if(contextMenu.includes('about')) {
            this.aboutContextMenu = toggler
        } else if(contextMenu.includes('carrier')) {
            this.carrierContextMenu = toggler
        } else if(contextMenu.includes('investors')) {
            this.investorsContextMenu = toggler
        } else if(contextMenu.includes('commitments')) {
            this.commitmentsContextMenu = toggler
        } else if(contextMenu.includes('news')) {
            this.newsContextMenu = toggler
        }
        
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

    .aboutContextMenu {
    position: absolute;
    top: 50px;
    left: 500px;
    box-sizing: border-box;
    padding: 15px;
    background-color: rgb(0, 0, 0);
    border: 1px solid rgb(255, 255, 255);
    border-radius: 15px;
    width: 250px;
    height: 300px;
    display: flex;
    flex-direction: column;
  }

  .carrierContextMenu {
    position: absolute;
    top: 50px;
    left: 600px;
    box-sizing: border-box;
    padding: 15px;
    background-color: rgb(0, 0, 0);
    border: 1px solid rgb(255, 255, 255);
    border-radius: 15px;
    width: 250px;
    height: 300px;
    display: flex;
    flex-direction: column;
  }

  .investorsContextMenu {
    position: absolute;
    top: 50px;
    left: 725px;
    box-sizing: border-box;
    padding: 15px;
    background-color: rgb(0, 0, 0);
    border: 1px solid rgb(255, 255, 255);
    border-radius: 15px;
    width: 250px;
    height: 300px;
    display: flex;
    flex-direction: column;
  }

  .commitmentsContextMenu {
    position: absolute;
    top: 50px;
    left: 900px;
    box-sizing: border-box;
    padding: 15px;
    background-color: rgb(0, 0, 0);
    border: 1px solid rgb(255, 255, 255);
    border-radius: 15px;
    width: 250px;
    height: 300px;
    display: flex;
    flex-direction: column;
  }

  .newsContextMenu {
    position: absolute;
    top: 50px;
    left: 1000px;
    box-sizing: border-box;
    padding: 15px;
    background-color: rgb(0, 0, 0);
    border: 1px solid rgb(255, 255, 255);
    border-radius: 15px;
    width: 250px;
    height: 300px;
    display: flex;
    flex-direction: column;
  }

  .aboutContextMenu > span, .carrierContextMenu > span, .investorsContextMenu > span, .commitmentsContextMenu > span, .newsContextMenu > span {
    margin: 5px 0px;
    cursor: pointer;
  }

</style>