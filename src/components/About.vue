<template>
  <div class="content">
    <div class="about">

      <section class="section_1">
        <div class="i">
          <h2 class="name">{{ info.name }}</h2>
          <div class="desc">
            <p>Дата рождения: {{ info.bird }}</p>
            <p>Место проживания: {{ info.loc }}</p>
            <p>Возможность переездв: {{ info.moving }}</p>
          </div>
        </div>
        <div class="foto" :style="{ 'background-image': 'url(./static/' + info.foto + ')'}"></div>
      </section>

      <section class="section_2">
        <h2 class="skills">Навыки</h2>
        <hr>  
        <div class="desc">
            <p v-for="skill in skills">{{ skill }}</p>
        </div>
      </section>

      <section class="section_3">
        <h2 class="skills">Образование</h2>
        <hr>  
        <div class="desc">
            <p>{{ educ.loc }}</p>
            <p>Уровень образования: {{ educ.level }}</p>
            <p>Год окончания: {{ educ.year }}</p>
            <p>{{ educ.spec }}</p>
        </div>
      </section>

      <section class="section_4">
        <h2 class="skills">Знание языков</h2>
        <hr>  
        <div class="desc">
            <p v-for="lang in langs">{{ lang }}</p>
        </div>
      </section>

      <section class="section_4">
        <h2 class="skills">Личные качества</h2>
        <hr>  
        <div class="desc">
            <p>Заинтересован в образовании, постоянно работаю над собой.</p>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {
      info: {
        name: 'Ivan Bonka',
        foto: 'foto.png',
        bird: '25 sep 1999',
        loc: 'Odessa',
        moving: 'not'
      },
      skills: [
        'Node.js/Express;',
        'Mongodb;',
        'MySQL;',
        'Vue.js;',
        'css/less;',
        'html.'
      ],
      educ: {
        loc: 'ОККТ "Сервер" (Одесса)',
        level: 'неоконченное высшее',
        year: '2020',
        spec: 'Разработка программного обеспечения'
      },
      langs: [
        'Английский – базовый;',
        'Украинский - уровень носителя языка;',
        'Русский - уровень носителя языка.'
      ],
    }
  }
}
</script>

<style>
.content{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.about{
  display: flex;
  flex-direction: column;
  width: 80vh;
  padding: 3vh;
  background-color: rgba(0,0,0,0.5);
}
.section_1{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.name{
  margin-bottom: 2.5vh;
}
.desc{
  padding: 1vh;
}
.desc p{
  margin-bottom: 1em;
}
.foto{
  background-size: cover;
  width: 20vh;
  height: 20vh;
}
hr{
  margin-bottom: 2.5vh;
}
.section_2 .desc p{
  margin-bottom: .5em;
}
.section_3 .desc p{
  margin-bottom: .5em;
}
.section_4 .desc p{
  margin-bottom: .5em;
}
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
.content{
  align-items: baseline;
  padding-top: 10vh;
}
}


@media (max-width: 860px) {
  .content{
  align-items: baseline;
  padding-top: 10vh;
}}
</style>