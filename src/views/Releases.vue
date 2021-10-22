<template>
    <div>
        <Header />
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
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
    name: 'Releases',
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



</style>