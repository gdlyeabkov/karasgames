<template>
    <div>
        <Header />
        <div class="main">
            <div class="corpPoster">
                <div class="corpPosterContent">
                    <span class="corpPosterContentLabel">
                        Связи с инвесторами
                    </span>
                </div>
            </div>
            <p>
                Board of Directors
            </p>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
    name: 'Commitments',
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

</style>