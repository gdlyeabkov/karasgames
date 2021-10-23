<template>
    <div>
        <Header @toggleContextMenu="toggleContextMenuHandler" />
        <div class="main">
            <h1 class="reportHeader">
                Отчет ESG за 2020 год
            </h1>    
            <p>
                Мы рады поделиться на этом веб-сайте несколькими примерами наших инициатив в пространстве ESG. У нас есть чем поделиться, и мы надеемся, что вы загрузите наш полный отчет ESG, чтобы узнать больше.
            </p>
            <p>
                В рамках нашей долгосрочной стратегии мы продолжим расширять нашу внутреннюю экспертизу в области ESG, совершенствовать нашу деятельность по отчетности и выявлять новые возможности партнерства, чтобы осветить наши ключевые проблемы в области ESG.
            </p>
            <p>
                Наш руководящий комитет ESG теперь возглавляется нашим главным административным директором и включает в себя корпоративного секретаря и директора по соответствию, главного персонала, сотрудника по разнообразию и вовлеченности, главного юриста, главного финансового директора, старшего вице-президента по связям с инвесторами и директора по связям с общественностью. При поддержке нашего внешнего консультанта и Совета управляющий комитет управляет стратегией, практикой и политиками компании в области ESG.
            </p>
            <p>
                Пожалуйста, регулярно посещайте наш веб-сайт, чтобы узнать о будущих обновлениях, и следите за нашими дальнейшими путешествиями в области ESG.
            </p>
            <div class="btnContainer">
                <button class="btn btn-dark outlineBtn">
                    Скачать полный отчёт
                </button>
            </div>
            <hr class="splitter" size="5" width="100%" />
            <div class="btnContainer">
                <span>
                    Нажмите ниже, чтобы узнать больше о каждом из наших обязательств.
                </span>
            </div>
            <div class="iconsContainer">
                <div>
                    <img width="125px" src="https://ourcommitments.activisionblizzard.com/content/dam/atvi/activisionblizzard/ab-touchui/our-commitments/ab-icon-championing.png" alt="" />
                    <span>
                        Championing Our People
                    </span>
                </div>
                <div>
                    <img width="125px" src="../../public/ab-icon-advancing.png" alt="" />
                    <span>
                        Advancing more diverse and inclusive communities
                    </span>
                </div>
                <div>
                    <img width="125px" src="../../public/ab-icon-protecting.png" alt="" />
                    <span>
                        Protecting the Planet
                    </span>
                </div>
            </div>
            <span class="backToHome" @click="$router.push({ name: 'Home' })">
                Обратно домой
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
    name: 'Report',
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

    .reportHeader {
        color: rgb(0, 100, 255);
        text-align: center;
    }

    .btnContainer {
        display: flex;
        justify-content: center;
    }

    .outlineBtn {
        border: 1px solid rgb(255, 255, 255);
    }

    .splitter {
        background-color: rgb(0, 100, 255);
    }

    .iconsContainer {
        margin: 15px 0px;
        display: flex;
        justify-content: center;
    }

    .iconsContainer > div {
        margin: 15px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 25%;
        text-align: center;
    }

    .iconsContainer > div > * {
        margin: 0px 25px;
    }

    .backToHome {
        display: block;
        font-weight: bolder;
        text-decoration: underline;
        text-decoration-color: rgb(0, 0, 255);
        text-align: center;
        cursor: pointer;
    }

    .backToHome:hover {
        text-decoration-color: rgb(255, 255, 255);
        color: rgb(0, 0, 255);
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