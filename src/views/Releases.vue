<template>
    <div>
        <Header @toggleContextMenu="toggleContextMenuHandler" />
        <div class="main">
            <div class="releasesPoster">
                <div class="releasesPosterContent">
                    <span class="releasesPosterContentLabel">
                        Выпуски
                    </span>
                </div>
            </div>
            <div class="releasesFilter">
                <div class="releaseFilter">
                    <span>
                        Элементов на странице
                    </span>
                    <select class="form-control" name="">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                    </select>
                </div>
                <div class="releaseFilter">
                    <span>
                        Категории
                    </span>
                    <select class="form-control" name="">
                        <option value="10">Аркады</option>
                        <option value="25">Тауэр дефенс</option>
                        <option value="50">Квесты</option>
                    </select>
                </div>
                <div class="releaseFilter">
                    <span>
                        Год
                    </span>
                    <select class="form-control" name="">
                        <option value="10">Нет</option>
                        <option value="25">2021</option>
                        <option value="50">2020</option>
                    </select>
                </div>
                <button class="btn btn-success">
                    Фильтровать
                </button>
            </div>
            <div class="releases">
                <div class="release">
                    <span class="releaseDate">
                        21 октября, 2021
                    </span>
                    <span class="releaseName">
                        Escape from Jail
                    </span>
                    <span class="releaseSupportedFormats">
                        Поддерживаемые фоматы
                    </span>
                    <div class="PDFformat">
                        <span class="material-icons">
                            picture_as_pdf
                        </span>
                        <span class="releasePDF">
                            PDF версия
                        </span>
                    </div>
                </div>
                <div class="release">
                    <span class="releaseDate">
                        21 октября, 2021
                    </span>
                    <span class="releaseName">
                        Escape from Jail
                    </span>
                    <span class="releaseSupportedFormats">
                        Поддерживаемые фоматы
                    </span>
                    <div class="PDFformat">
                        <span class="material-icons">
                            picture_as_pdf
                        </span>
                        <span class="releasePDF">
                            PDF версия
                        </span>
                    </div>
                </div>
                <div class="release">
                    <span class="releaseDate">
                        21 октября, 2021
                    </span>
                    <span class="releaseName">
                        Escape from Jail
                    </span>
                    <span class="releaseSupportedFormats">
                        Поддерживаемые фоматы
                    </span>
                    <div class="PDFformat">
                        <span class="material-icons">
                            picture_as_pdf
                        </span>
                        <span class="releasePDF">
                            PDF версия
                        </span>
                    </div>
                </div>
                <div class="release">
                    <span class="releaseDate">
                        21 октября, 2021
                    </span>
                    <span class="releaseName">
                        Escape from Jail
                    </span>
                    <span class="releaseSupportedFormats">
                        Поддерживаемые фоматы
                    </span>
                    <div class="PDFformat">
                        <span class="material-icons">
                            picture_as_pdf
                        </span>
                        <span class="releasePDF">
                            PDF версия
                        </span>
                    </div>
                </div>
                <div class="release">
                    <span class="releaseDate">
                        21 октября, 2021
                    </span>
                    <span class="releaseName">
                        Escape from Jail
                    </span>
                    <span class="releaseSupportedFormats">
                        Поддерживаемые фоматы
                    </span>
                    <div class="PDFformat">
                        <span class="material-icons">
                            picture_as_pdf
                        </span>
                        <span class="releasePDF">
                            PDF версия
                        </span>
                    </div>
                </div>
            </div>
            <div class="totalResults">
                <div class="pagination">
                    <div class="pages">
                        <span>
                            1
                        </span>
                        <span>
                            2
                        </span>
                        <span>
                            3
                        </span>
                        <span>
                            4
                        </span>
                    </div>
                    <div class="pagesShortcuts">
                        <div class="pageShortcut">
                            <span class="material-icons">
                                chevron_right
                            </span>
                            <span>
                                Следующая
                            </span>
                        </div>
                        <div class="pageShortcut">
                            <span>
                                Последняя
                            </span>
                            <span class="material-icons">
                                keyboard_double_arrow_right
                            </span>
                        </div>
                    </div>
                </div>
                <div class="results">
                    <span>
                        Показано 1 - 10 из 40
                    </span>
                </div>
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
    name: 'Releases',
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
        background-image: url('https://content.foto.my.mail.ru/mail/verbalica/_myphoto/h-13.jpg');
        width: 838px;
        height: 628px;
        background-size: 100% 100%;
        -webkit-filter: grayscale(0.5);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        box-sizing: border-box;
        padding: 25px;
    }

    .releasesPosterContentLabel {
        color: rgb(255, 255, 255);
        font-size: 72px;
        font-weight: bolder;
    }

    .releases {
        margin-top: 50px;
    }

    .release {
        margin: 15px 0px;
        display: flex;
        flex-direction: column;
        width: 75%;
        height: 150px;
        border-bottom: 1px solid rgb(255, 255, 255);
    }

    .releaseDate {
        color: rgb(150, 150, 0);
        font-weight: bolder;    
    }

    .releaseName {
        font-size: 36px;
    }

    .releasePDF {
        font-weight: bolder;
    }

    .PDFformat {
        display: flex;
    }

    .PDFformat > span {
        margin: 10px 15px;
    }

    .PDFformat > span:first-child {
        color: rgb(200, 0, 0);
    }

    .pagesShortcuts {
        display: flex;
        align-items: center;
    }

    .pageShortcut {
        display: flex;
        align-items: center;
        margin: 0px 15px;
    }

    .pages {
        display: flex;
    }

    .pages > span {
        margin: 0px 10px;
        font-weight: bolder;
        color: rgb(200, 200, 200);
        cursor: pointer;
    }

    .pages > span:hover {
        text-decoration: underline;
        color: rgb(200, 200, 0);
    }

    .pageShortcut > span {
        margin: 5px;
        font-weight: bolder;
        color: rgb(200, 200, 200);
        cursor: pointer;
    }

    .pageShortcut > span:hover {
        text-decoration: underline;
        color: rgb(200, 200, 0);   
    }

    .pagination {
        display: flex;
        align-items: center;
    }

    .results > span {
        font-weight: bolder;
    }

    .totalResults {
        display: flex;
        justify-content: space-between;
    }

    .releasesFilter {
        margin-top: 50px;
        display: flex;
        justify-content: space-around;
    }

    .releaseFilter {
        display: flex;
        flex-direction: column;
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