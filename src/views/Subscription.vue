<template>
    <div>
        <Header />
        <div class="main">
            <div class="subscriptionPoster">
                <div class="subscriptionPosterContent">
                    <span class="subscriptionPosterContentLabel">
                        Подписка на уведомления по электронной почте
                    </span>
                </div>
            </div>
            <span class="subscriptionHeader">
                Вы можете автоматически получать финансовую информацию Activision Blizzard, Inc. по электронной почте. Пожалуйста, введите ваши предпочтения для уведомлений по электронной почте ниже.
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
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
    name: 'Subscription',
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


</style>