<template>
    <div>
        <Header @toggleContextMenu="toggleContextMenuHandler" />
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
    name: 'Contacts',
    data(){
        return {
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