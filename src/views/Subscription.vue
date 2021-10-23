<template>
    <div>
        <Header @toggleContextMenu="toggleContextMenuHandler" />
        <div class="main">
            <div class="subscriptionPoster">
                <div class="subscriptionPosterContent">
                    <span class="subscriptionPosterContentLabel">
                        Подписка на уведомления по электронной почте
                    </span>
                </div>
            </div>
            <span class="subscriptionHeader">
                Вы можете автоматически получать финансовую информацию Karas Games, Inc. по электронной почте. Пожалуйста, введите ваши предпочтения для уведомлений по электронной почте ниже.
            </span>
            <p>
                Обязательные поля, отмеченные звездочкой (
                    <span class="requiredField">
                        *
                    </span>
                    ).
            </p>
            <label for="">
                Тип оповещения 
                <span class="requiredField">
                    *
                </span>
            </label>
            <div>
                <input type="checkbox" />
                <label class="checkboxLabel" for="">
                    Цитата по электронной почте
                </label>
            </div>
            <div>
                <input type="checkbox" />
                <label class="checkboxLabel" for="">
                    Все документы SEC
                </label>
            </div>
            <div>
                <input type="checkbox" />
                <label class="checkboxLabel" for="">
                    Ежеквартальные и годовые отчеты
                </label>
            </div>
            <div>
                <input type="checkbox" />
                <label class="checkboxLabel" for="">
                    Общий
                </label>
            </div>
            <div>
                <input type="checkbox" />
                <label class="checkboxLabel" for="">
                    Еженедельная сводка запасов
                </label>
            </div>
            <label for="">
                Email 
                <span class="requiredField">
                    *
                </span>
            </label>
            <input type="email" class="form-control w-50" />
            <button class="sendBtn btn btn-success w-25">
                Отправить
            </button>
            <span class="subscriptionHeader">
                Отказаться от подписки на электронные уведомления для инвесторов.
            </span>
            <span class="subscriptionLabel">
                Наши электронные оповещения содержат автоматические методы отказа, а также полную контактную информацию.
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
    name: 'Subscription',
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

    .subscriptionHeader {
        font-weight: bolder;
        display: block;
    }
    
    .subscriptionLabel {
        color: rgb(175, 175, 175);
    }

    .sendBtn {
        margin: 15px 0px;
    }

    .requiredField {
        color: rgb(215, 0, 0);
        font-weight: bolder;
    }

    .checkboxLabel {
        margin-left: 15px;
    }

    .subscriptionPoster {
        display: flex;
        justify-content: center;
    }

    .subscriptionPosterContent {
        background-image: url('https://sun9-48.userapi.com/impg/4P5zL06F7CmZRmziA_1RyQYJ7ry46FY5UvXo-A/VXUeH3gAXys.jpg?size=1280x720&quality=96&sign=9d46677eb779a2d1aeb65e4f3cc9d7a9&type=album');
        width: 903px;
        height: 504px;
        background-size: 100% 100%;
        -webkit-filter: grayscale(0.5);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        box-sizing: border-box;
        padding: 25px;
    }

    .subscriptionPosterContentLabel {
        color: rgb(200, 200, 200);
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