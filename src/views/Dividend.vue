<template>
    <div>
        <Header />
        <div class="main">
            <div class="donatPoster">
                <div class="donatPosterContent">
                    <span class="donatPosterContentLabel">
                        Dividend FAQ
                    </span>
                </div>
            </div>
            <div class="faq">
                <div class="question" @click="doesKarasGamesPayDividends = !doesKarasGamesPayDividends" :class="{ activeQuestion: doesKarasGamesPayDividends }">
                    <span class="questionHeader">
                        Выплачивает ли Activision Blizzard дивиденды?
                    </span>
                    <span class="material-icons">
                        add
                    </span>
                </div>
                <div v-if="doesKarasGamesPayDividends" class="answer">
                    <span>
                        Будущие дивиденды будут определяться Советом директоров и будут зависеть от наших будущих доходов, финансовых условий и потребностей в денежных средствах.
                    </span>
                </div>
                <div class="question" @click="amIEntitledToDividends = !amIEntitledToDividends" :class="{ activeQuestion: amIEntitledToDividends }">
                    <span class="questionHeader">
                        Имею ли я право на дивиденды?
                    </span>
                    <span class="material-icons">
                        add
                    </span>
                </div>
                <div v-if="amIEntitledToDividends" class="answer">
                    <span>
                        Если вы являетесь зарегистрированным акционером на Дату регистрации, вы имеете право на получение текущих дивидендов. Чтобы соответствовать требованиям, вам необходимо было бы приобрести акции не позднее 13 апреля 2021 года. Если вы приобрели свои акции 14 апреля 2021 года или позднее, вы не имеете права на получение текущих дивидендов.
                    </span>
                </div>
                <div class="question" @click="howWillIReceiveMyCashDividends = !howWillIReceiveMyCashDividends" :class="{ activeQuestion: howWillIReceiveMyCashDividends }">
                    <span class="questionHeader">
                        Как я получу свои денежные дивиденды?
                    </span>
                    <span class="material-icons">
                        add
                    </span>
                </div>
                <div v-if="howWillIReceiveMyCashDividends" class="answer">
                    <span>
                        Будущие дивиденды будут определяться Советом директоров и будут зависеть от наших будущих доходов, финансовых условий и потребностей в денежных средствах.
                    </span>
                </div>
                <div class="question" @click="whatIsDirectRegistration = !whatIsDirectRegistration" :class="{ activeQuestion: whatIsDirectRegistration }">
                    <span class="questionHeader">
                        Что такое прямая регистрация?
                    </span>
                    <span class="material-icons">
                        add
                    </span>
                </div>
                <div v-if="whatIsDirectRegistration" class="answer">
                    <span>
                        Прямая регистрация - это метод записи акций для зарегистрированных акционеров в бездокументарной форме. Брокеры уже используют бездокументарную форму собственности. Запись в книге прямой регистрации означает, что ваша безопасность зарегистрирована на ваше имя в книгах трансфертного агента Activision Blizzard, Broadridge Corporate Issuer Solutions, без необходимости наличия физического сертификата. Акции, хранящиеся в бездокументарной форме, обладают всеми традиционными правами и привилегиями, как акции, хранящиеся в форме сертификатов. Если вы являетесь зарегистрированным акционером и заинтересованы в владении своими акциями через прямую регистрацию, пожалуйста, свяжитесь с Broadridge по бесплатному телефону 800-685-4509 или посетив их веб-сайт по адресу http://www.shareholder.broadridge.com/atvi /. Представители Broadridge будут готовы помочь вам с 9:00 до 18:00 по восточному времени с понедельника по пятницу.
                    </span>
                </div>
                <div class="question" @click="howCanIListCashDividendsForTaxPurposes = !howCanIListCashDividendsForTaxPurposes" :class="{ activeQuestion: howCanIListCashDividendsForTaxPurposes }">
                    <span class="questionHeader">
                        Как я могу указать денежные дивиденды для целей налогообложения?
                    </span>
                    <span class="material-icons">
                        add
                    </span>
                </div>
                <div v-if="howCanIListCashDividendsForTaxPurposes" class="answer">
                    <span>
                        Если вы владеете своими акциями на свое имя в качестве зарегистрированного акционера трансфертного агента Activision Blizzard, Broadridge Corporate Issuer Solutions, дивиденды выплачиваются вам либо физическим чеком, либо посредством прямого депозита. Если вы ранее не выбирали получать дивиденды с помощью прямого депозита, но хотели бы это сделать, пожалуйста, заполните форму авторизации прямого депозита (доступную здесь) или свяжитесь с Broadridge по бесплатному телефону 866-804-4314. Представители Broadridge будут готовы помочь вам с 9:00 до 18:00 по восточному времени с понедельника по пятницу. Для получения дивидендов, выплачиваемых 6 мая 2021 года посредством прямого депозита, вы должны заполнить и подать необходимые документы до 18 марта 2021 года. Если вы владеете своими акциями через брокера / дилера с названием «улица», вы получите ваши денежные дивиденды через вашего брокера / дилера. Пожалуйста, свяжитесь со своим брокером / дилером, чтобы получить конкретную информацию о том, как вы будете получать свои дивиденды. Если вы не уверены, какая из этих категорий относится к вам, свяжитесь с отделом по связям с инвесторами Activision Blizzard по электронной почте ir@activision.com или по телефону 310-255-2000.
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
    name: 'Dividend',
    data(){
        return {
            doesKarasGamesPayDividends: false,
            amIEntitledToDividends: false,
            howWillIReceiveMyCashDividends: false,
            whatIsDirectRegistration: false,
            howCanIListCashDividendsForTaxPurposes: false
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

    .donatPoster {
        display: flex;
        justify-content: center;
    }

    .donatPosterContent {
        background-image: url('https://sun9-17.userapi.com/impg/yPKz4OX9Vbm3IPB3kR3i7F4ZiE4sZ2DkrrgHnQ/dInBT965DUo.jpg?size=1280x720&quality=96&sign=ec516d5747b7684f1950ae836928e34b&type=album');
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

    .donatPosterContentLabel {
        color: rgb(255, 255, 255);
        font-size: 72px;
        font-weight: bolder;
    }

    .faq {
        margin-top: 35px;
        border: 1px solid rgb(255, 255, 255);
        
    }

    .answer {
        box-sizing: border-box;
        padding: 15px;
        border-bottom: 1px solid rgb(255, 255, 255);
        cursor: pointer;
        background-color: rgb(225, 225, 225);
    }

    .question {
        justify-content: space-between;
        display: flex;
        box-sizing: border-box;
        padding: 15px;
        border-bottom: 1px solid rgb(255, 255, 255);
        cursor: pointer;
    }

    .question:hover {
        background-color: rgb(225, 225, 225);
    }
    
    .activeQuestion {
        background-color: rgb(225, 225, 225);
    }

    .questionHeader {
        font-weight: bolder;
        font-size: 18px;
    }


</style>