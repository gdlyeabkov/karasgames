<template>
  <div>
    <Header @toggleContextMenu="toggleContextMenuHandler" />
    <div class="main">
      <div class="videoPoster">
        <video muted autoplay="autoplay">
          <source src="https://rr3---sn-4g5e6nze.googlevideo.com/videoplayback?expire=1634949045&ei=VQNzYcT3Fv-ox_AP7e--6A4&ip=202.141.230.133&id=o-AGfmGDjS7LMIm0HzrRTXgqdI9UUaomhTRlzy38F8Lmmy&itag=134&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=yejpGkx0szC-7GQQ7dMY_mYG&gir=yes&clen=7675142&otfp=1&dur=224.249&lmt=1625303161836631&keepalive=yes&fexp=24001373,24007246&c=WEB&txp=6216222&n=H8imdZjJnEUaNA&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cotfp%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAOIrjjtR2qra_PPMTaFJBxugl466LLt0bbPS-8__uHjYAiEAxndwXyeMKl4n4GTbs2tFR7hm4nh6KCFOqJM_81k1ojs%3D&rm=sn-2uja-3ip67z&req_id=54e6dbbcc7c5a3ee&redirect_counter=2&cm2rm=sn-hju67s&cms_redirect=yes&mh=oD&mip=95.183.71.87&mm=34&mn=sn-4g5e6nze&ms=ltu&mt=1634927084&mv=m&mvi=3&pl=21&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAM0xSHd54SES6cYJeqTGp3zL1GpKBEmv9cerABAV4BZSAiEA5YVVbaqaAUifvk8SToqjVrOFu8ql5lQ8-dRsllf3jVE%3D" />
        </video>
      </div>
      <div class="aboutUs">
        <div class="aboutUsContent">
          <span class="aboutUsHeader">
            О нас
          </span>
          <span class="aboutUsText">
            Мы создаем самые эпические интерактивные игры и развлечения. Наши платформы погружают игроков в новые, невообразимые миры и предлагают бесчисленные способы игры в них. Мы строим сообщества, которые объединяют людей с целью и причастностью. Мы делаем каждый день веселее с играми от Candy Crush ™, Call of Duty® и World of Warcraft® до Overwatch®, Hearthstone® и Diablo®. Здесь каждый найдет что-то для себя. Чтобы стать героем, нужны герои, и наши сотрудники в Karas games Entertainment и King Digital Entertainment - одни из лучших и ярчайших талантов во всех областях технологий, средств массовой информации и развлечений. Тяжелая работа окупается, и мы гордимся тем, что пять лет подряд были названы одной из «100 лучших компаний для работы» по версии журнала FORTUNE.
          </span>
          <div class="aboutUsReadMore">
            <span class="material-icons">
              help_outline
            </span>
            <span>
              Узнать больше
            </span>
          </div>
        </div>
        <img class="aboutUsPoster" width="505px" height="280px" src="https://sun9-79.userapi.com/impg/xoQS1JqXLU1KZ6kEohomy5i3PDOh-Imo1yIj7w/pKmSmNXebeA.jpg?size=1280x720&quality=96&sign=a3b8a66636bd4671e9b9397ff1ea052b&type=album" alt="">
      </div>
      <div class="karasGamesLogos">
        <img width="100px" src="https://yt3.ggpht.com/UhjsV-ihiyEBav8xnrM6Ud2ARTYiiPs8o71LsPDfPunxrtFumlSUc1ydpBice0Z4WOLDcDOboA=s88-c-k-c0x00ffffff-no-rj" alt="">
        <img width="100px" src="https://yt3.ggpht.com/UhjsV-ihiyEBav8xnrM6Ud2ARTYiiPs8o71LsPDfPunxrtFumlSUc1ydpBice0Z4WOLDcDOboA=s88-c-k-c0x00ffffff-no-rj" alt="">
        <img width="100px" src="https://yt3.ggpht.com/UhjsV-ihiyEBav8xnrM6Ud2ARTYiiPs8o71LsPDfPunxrtFumlSUc1ydpBice0Z4WOLDcDOboA=s88-c-k-c0x00ffffff-no-rj" alt="">
        <img width="100px" src="https://yt3.ggpht.com/UhjsV-ihiyEBav8xnrM6Ud2ARTYiiPs8o71LsPDfPunxrtFumlSUc1ydpBice0Z4WOLDcDOboA=s88-c-k-c0x00ffffff-no-rj" alt="">
        <img width="100px" src="https://yt3.ggpht.com/UhjsV-ihiyEBav8xnrM6Ud2ARTYiiPs8o71LsPDfPunxrtFumlSUc1ydpBice0Z4WOLDcDOboA=s88-c-k-c0x00ffffff-no-rj" alt="">
        <img width="100px" src="https://yt3.ggpht.com/UhjsV-ihiyEBav8xnrM6Ud2ARTYiiPs8o71LsPDfPunxrtFumlSUc1ydpBice0Z4WOLDcDOboA=s88-c-k-c0x00ffffff-no-rj" alt="">
      </div>
      <div class="ourProjects">
        <div class="ourProjectsContent">
          <span class="ourProjectsHeader">
            Наши легендарные проекты
          </span>
          <span class="ourProjectsLabel">
            Культовые игры от нашей студии.
          </span>
          <div class="aboutUsReadMore">
            <span class="material-icons">
              help_outline
            </span>
            <span>
              Узнать больше
            </span>
          </div>
        </div>
        <div>
          <div class="projectsList">
            <img class="project" width="303px" height="168px" src="https://sun9-17.userapi.com/impg/yPKz4OX9Vbm3IPB3kR3i7F4ZiE4sZ2DkrrgHnQ/dInBT965DUo.jpg?size=1280x720&quality=96&sign=ec516d5747b7684f1950ae836928e34b&type=album" alt="">
            <img class="project" width="168px" height="168px" src="https://brief-malleable-microraptor.glitch.me/games/getimage?gamename=escapefromjail" alt="">
          </div>
          <div class="projectsList">
            <img class="project" width="303px" height="168px" src="https://sun9-79.userapi.com/impg/xoQS1JqXLU1KZ6kEohomy5i3PDOh-Imo1yIj7w/pKmSmNXebeA.jpg?size=1280x720&quality=96&sign=a3b8a66636bd4671e9b9397ff1ea052b&type=album" alt="">
            <img class="project" width="303px" height="168px" src="https://sun9-48.userapi.com/impg/4P5zL06F7CmZRmziA_1RyQYJ7ry46FY5UvXo-A/VXUeH3gAXys.jpg?size=1280x720&quality=96&sign=9d46677eb779a2d1aeb65e4f3cc9d7a9&type=album" alt="">
          </div>
          <div class="projectsList">
            <img class="project" width="300px" height="168px" src="https://sun9-86.userapi.com/impg/nYkfRGBfOa2nIW1MRFGxGiICsE0IxgAVjOY1BA/-71xA0y3RDg.jpg?size=1280x720&quality=96&sign=c2e797e8544fe0f9458a8466b2b28b2a&type=album" alt="">
            <img class="project" width="303px" height="168px" src="https://sun9-21.userapi.com/impg/clVKt7CmdsS5VqDLZ2dx2QEd95f47pFW0SNpFg/9YZiqY3pbBQ.jpg?size=1280x720&quality=96&sign=d95d46ea92d56364e73b5baf7ab04833&type=album" alt="">
          </div>
        </div>
      </div>
      <div class="aboutUs">
        <div class="aboutUsContent">
          <span class="aboutUsHeader">
            Карьера
          </span>
          <span class="carrierText">
            Karas games не только доставляет удовольствие, мы знаем, как это сделать - и многое другое. Мы - сообщество людей, которые много работают и много играют, и наше товарищество подпитывается нашей страстью к игровому процессу. Мы знаем, что герои становятся героями, поэтому, если вы готовы к новому мысу, приглашаем вас подать заявку и присоединиться к нашей команде.
          </span>
          <div class="aboutUsReadMore">
            <span class="material-icons">
              help_outline
            </span>
            <span>
              Работать с нами
            </span>
          </div>
        </div>
        <img class="aboutUsPoster" width="505px" height="375px" src="https://content.foto.my.mail.ru/mail/verbalica/_myphoto/h-4.jpg" alt="">
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
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
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
    Footer
  }
}
</script>
<style scoped>
  
  .aboutUs, .ourProjects {
    margin-top: 35px;
    display: flex;
    justify-content: space-around;
  }

  .aboutUsHeader, .ourProjectsHeader {
    text-indent: 25px;
    font-weight: bolder;
    font-size: 36px;
    color: rgb(255, 150, 0);
  }

  .main {
    box-sizing: border-box;
    padding: 25px 35px;
    background-color: rgb(10, 10, 10);
    color: rgb(255, 255, 255);
  }

  .aboutUsContent, .ourProjectsContent {
    width: 65%;
    display: flex;
    flex-direction: column;
  }

  .aboutUsReadMore {
    display: flex;
    align-items: center;
  }

  .aboutUsReadMore > span {
    margin: 5px;
    cursor: pointer;
    font-weight: bolder;
  }

  .aboutUsPoster, .project {
    border-radius: 15px;
    margin: 0px 35px;
  }

  .karasGamesLogos {
    margin-top: 150px;
    display: flex;
    justify-content: center;
  }

  .karasGamesLogos > img {
    margin: 0px 15px;
    border-radius: 15px;
  }

  .ourProjectsLabel {
    margin: 20px 0px;
    color: rgb(155, 155, 155);
  }

  .projectsList {
    display: flex;
    margin: 30px 0px;
  }

  .aboutUsText, carrierText {
    margin: 20px 0px;
  }

  .videoPoster {
    display: flex;
    justify-content: center;
    margin: 25px auto;
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