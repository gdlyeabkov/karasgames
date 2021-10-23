<template>
    <div>
        <Header />
        <div class="main">
            <div class="donatPoster">
                <div class="donatPosterContent">
                    <span class="donatPosterContentLabel">
                        Escape from Jail Donat
                    </span>
                </div>
            </div>
            <div class="donatBlock">
                <img class="donatPoster" width="505px" height="280px" src="https://sun9-79.userapi.com/impg/xoQS1JqXLU1KZ6kEohomy5i3PDOh-Imo1yIj7w/pKmSmNXebeA.jpg?size=1280x720&quality=96&sign=a3b8a66636bd4671e9b9397ff1ea052b&type=album" alt="">
                <div class="donatContent">
                    <span class="donatHeader">
                        Кто мы
                    </span>
                    <span class="carrierText">
                        Escape from jail Donat - это некоммерческая организация 501 (c) (3), основанная нашим генеральным директором Бобби Котиком и поддерживаемая Karas games и нашими сотрудниками. Фонд помогает ветеранам найти качественную карьеру, определяя и финансируя наиболее эффективные и действенные организации, которые разделяют нашу миссию по оказанию помощи безработным и частично занятым ветеранам. С 2009 года Фонд поддерживает высокоэффективные некоммерческие организации, которые готовят ветеранов к работе на рынке труда, и повышает осведомленность о ценности, которую ветеринары привносят в гражданское рабочее место. На сегодняшний день Фонд пожертвовал на это дело более 53 миллионов долларов, профинансировав трудоустройство более 81000 ветеранов на качественные рабочие места. Цель Эндаумента - разместить 100000 ветеранов к 2024 году. Karas games финансирует 100% операционных расходов Эндаумента, поэтому вся чистая выручка, полученная от игровых предметов, партнерств и мероприятий Эндаумента, направляется непосредственно на миссию.
                    </span>
                </div>
            </div>
            <div class="donatBlock">
                <div class="donatContent">
                    <span class="donatHeader">
                        Наш подход
                    </span>
                    <span class="carrierText">
                        Фонд использует ориентированный на результат подход для поиска и поддержки организаций, предоставляющих высочайшие стандарты качества и экономически эффективных услуг по трудоустройству ветеранов. В результате средняя начальная зарплата ветеранов, поддерживаемых Call of Duty Endowment в 2019 году, составила более 60 000 долларов, что на 21% выше, чем зарплата ветеранов по стране. Кроме того, Фонд подчеркивает высокие результаты в области трудоустройства ветеранов посредством своей программы «Знак отличия», которая предусматривает получение награды в размере 30 000 долларов США и национальное признание получателей награды. Все получатели гранта являются обладателями Знака отличия.
                    </span>
                </div>
                <img class="donatPoster" width="505px" height="280px" src="https://sun9-48.userapi.com/impg/4P5zL06F7CmZRmziA_1RyQYJ7ry46FY5UvXo-A/VXUeH3gAXys.jpg?size=1280x720&quality=96&sign=9d46677eb779a2d1aeb65e4f3cc9d7a9&type=album" alt="">
            </div>
            <div class="donatBlock">
                <img class="donatPoster" width="505px" height="280px" src="https://sun9-86.userapi.com/impg/nYkfRGBfOa2nIW1MRFGxGiICsE0IxgAVjOY1BA/-71xA0y3RDg.jpg?size=1280x720&quality=96&sign=c2e797e8544fe0f9458a8466b2b28b2a&type=album" alt="">
                <div class="donatContent">
                    <span class="donatHeader">
                        Помогите достижению нашей цели
                    </span>
                    <span class="carrierText">
                        С момента своего создания Escape from jail Donat предоставил более 81000 ветеранов значимые возможности для трудоустройства против цели 100000 трудоустройств к 2024 году.
                    </span>
                    <div class="donatReadMore">
                        <span class="material-icons">
                            help_outline
                        </span>
                        <span>
                            Задонатить
                        </span>
                    </div>
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
    name: 'Donat',
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

    .donatBlock {
        margin-top: 35px;
        display: flex;
        justify-content: space-around;
    }

    .donatContent {
        width: 65%;
        display: flex;
        flex-direction: column;
    }

    .donatPoster {
        border-radius: 15px;
        margin: 0px 35px;
    }

    .donatHeader {
        text-indent: 25px;
        font-weight: bolder;
        font-size: 36px;
        color: rgb(255, 150, 0);
    }

    .donatReadMore {
        display: flex;
        align-items: center;
    }

    .donatReadMore > span {
        margin: 5px;
        cursor: pointer;
        font-weight: bolder;
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


</style>