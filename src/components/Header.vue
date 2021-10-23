<template>
    <div class="header">
        <div class="logo">
            <img width="35px" src="https://yt3.ggpht.com/UhjsV-ihiyEBav8xnrM6Ud2ARTYiiPs8o71LsPDfPunxrtFumlSUc1ydpBice0Z4WOLDcDOboA=s88-c-k-c0x00ffffff-no-rj" alt="">
        </div>
        <div class="headerLinks">
            <span @mouseover="toggleContextMenu('about', true)">
                О нас
            </span>
            <span @mouseover="toggleContextMenu('carrier', true)">
                Карьера
            </span>
            <span @mouseover="toggleContextMenu('investors', true)">
                Инвесторам
            </span>
            <span @mouseover="toggleContextMenu('commitments', true)">
                Наши обязанности
            </span>
            <span @mouseover="toggleContextMenu('news', true)">
                Новости
            </span>
            <span @click="searher = !searher" v-if="!searher" class="clickable material-icons">
                search
            </span>
            <div class="searcher" v-else>
                <input type="text" v-model="keywords" placeholder="Что будем искать?" class="form-control searcherInput" @keyup.enter="search()">
                <span @click="searher = !searher" class="clickable material-icons">
                    close
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data(){
        return {
            keywords: '',
            searher: false,
            aboutContextMenu: false,
            carrierContextMenu: false,
            investorContextMenu: false,
            commitmentsContextMenu: false,
            newsroomContextMenu: false,
        }
    },
    emits: [
        'toggleContextMenu'
    ],
    methods: {
        toggleContextMenu(contextMenu, toggler){
            this.$emit('toggleContextMenu', contextMenu, toggler)
        },
        search(){
            this.$router.push({ name: 'Home', query: { keywords: keywords } })
        }
    },
}
</script>

<style scoped>
    
    .header {
        height: 50px;
        background-color: rgb(50, 50, 50);
        box-sizing: border-box;
        padding: 15px;
        color: rgb(255, 255, 255);
        display: flex;
        justify-content: space-between;
    }

    .logo {
        align-self: flex-start;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .headerLinks {
        width: 50%;
        align-self: center;
        display: flex;
        align-items: center;
    }

    .headerLinks > span {
        cursor: pointer;
        font-weight: bolder;
        margin: 0px 15px;
    }

    .headerLinks > span:hover {
        text-decoration: underline;
    }

    .searcher {
        position: absolute;
        top: 7px;
        left: calc(100% - 425px);
        display: flex;
        align-items: center;
    }

    .searcherInput {
        width: 375px;
        border: 3px solid rgb(200, 175, 0);
    }

    .clickable {
        cursor: pointer;
        margin-left: 15px;
    }

</style>