<template>
    <div>
        <Header @toggleContextMenu="toggleContextMenuHandler" />
        <div class="main">
            <p class="directorsHeader">
                Список персонала
            </p>
            <div class="member">
                <p class="memberName">
                    СЕВА КАРАСЬ
                </p>
                <p class="memberProffession">
                    ДИРЕКТОР
                </p>
                <p class="memberDesc">
                    Сева Карась создал компанию karas Games и придумал игру Escape from jail.
                </p>
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
    name: 'Commitments',
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

    .corpPoster {
        display: flex;
        justify-content: center;
    }

    .corpPosterContent {
        border-radius: 8px;
        background-image: url('https://sun9-86.userapi.com/impg/nYkfRGBfOa2nIW1MRFGxGiICsE0IxgAVjOY1BA/-71xA0y3RDg.jpg?size=1280x720&quality=96&sign=c2e797e8544fe0f9458a8466b2b28b2a&type=album');
        width: 838px;
        height: 470px;
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
        font-size: 48px;
        font-weight: bolder;
    }

    .corp {
        margin-top: 35px;
        display: flex;
        justify-content: space-around;
    }

    .corpHeader {
        text-indent: 25px;
        font-weight: bolder;
        font-size: 36px;
        color: rgb(255, 150, 0);
    }

    .corpContent {
        width: 65%;
        display: flex;
        flex-direction: column;
    }

    .corpReadMore {
        display: flex;
        align-items: center;
    }

    .corpReadMore > span {
        margin: 5px;
        cursor: pointer;
        font-weight: bolder;
    }

    .corpPoster {
        border-radius: 15px;
        margin: 0px 35px;
    }

    .member {
        margin: 35px 0px;
    }

    .memberName {
        font-weight: bolder;
        font-size: 36px;
    }
    
    .memberProffession {
        font-size: 24px;
    }

    .memberDesc {

    }

    .directorsHeader {
        color: rgb(150, 150, 0);
        font-size: 48px;
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