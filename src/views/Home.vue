<template>
  <div>
    <Header />
    <div class="main">
      <div class="aboutUs">
        <div class="aboutUsContent">
          <span class="aboutUsHeader">
            О нас
          </span>
          <span>
            Мы создаем самые эпические интерактивные игры и развлечения. Наши платформы погружают игроков в новые, невообразимые миры и предлагают бесчисленные способы игры в них. Мы строим сообщества, которые объединяют людей с целью и причастностью. Мы делаем каждый день веселее с играми от Candy Crush ™, Call of Duty® и World of Warcraft® до Overwatch®, Hearthstone® и Diablo®. Здесь каждый найдет что-то для себя. Чтобы стать героем, нужны герои, и наши сотрудники в Activision, Blizzard Entertainment и King Digital Entertainment - одни из лучших и ярчайших талантов во всех областях технологий, средств массовой информации и развлечений. Тяжелая работа окупается, и мы гордимся тем, что пять лет подряд были названы одной из «100 лучших компаний для работы» по версии журнала FORTUNE.
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
        <img src="" alt="">
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
  components: {
    Header,
    Footer
  }
}
</script>
<style scoped>
  
  .aboutUs {
    display: flex;
  }

  .aboutUsHeader {
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

  .aboutUsContent {
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

</style>