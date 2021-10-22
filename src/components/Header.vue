<template>
    <div class="header">
        <div class="logo">
            <img width="35px" src="https://yt3.ggpht.com/UhjsV-ihiyEBav8xnrM6Ud2ARTYiiPs8o71LsPDfPunxrtFumlSUc1ydpBice0Z4WOLDcDOboA=s88-c-k-c0x00ffffff-no-rj" alt="">
        </div>
        <div class="headerLinks">
            <span @click="aboutContextMenu = true" >
                О нас
            </span>
            <span @click="aboutContextMenu = true" >
                Карьера
            </span>
            <span @click="aboutContextMenu = true" >
                Инвесторам
            </span>
            <span @click="aboutContextMenu = true" >
                Наши обязанности
            </span>
            <span @click="aboutContextMenu = true" >
                Новости
            </span>
            <span class="material-icons" @click="aboutContextMenu = true" >
                search
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data(){
        return {
            aboutContextMenu: false,
            carrierContextMenu: false,
            investorContextMenu: false,
            commitmentsContextMenu: false,
            newsroomContextMenu: false,
        }
    }
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

</style>