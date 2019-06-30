<template>
  <div class="content">
    <div class="project">

      <section class="section_1">
      	<div class="info">
	        <h2 class="skills">{{ slides[id].slog }}</h2>
		    <div class="desc">
		    	 <p v-for="desc in slides[id].descs">{{ desc }}</p>
			</div>
			<div class="link">
		    	 <a :href="slides[id].git">{{ slides[id].git }}</a>
			</div>
	    </div>
	    <img class="foto_site" :src="'./static/'+slides[id].img" alt="foto">
      </section>

    </div>
  </div>
</template>

<script>
export default {
  name: 'project',
  props: ['id'],
  data() {
    return {
    	slides: {
			flex: {
				img: 'flex.png',
				slog: 'Адаптивный шаблон Flexbox',
				descs: [
					'html',
					'css/flexbox',
					'Адаптивный шаблон, написан по туториалу для изучения flexbox'
				],
				git: 'https://github.com/Ivan9g/front/tree/master/flex'
			},
			Lending: {
				img: 'Lending.png',
				slog: 'Адаптивный landing Flexbox',
				descs: [
					'html',
					'css/flexbox',
					'Тестовое задание при устройстве на работу'
				],
				git: 'https://github.com/Ivan9g/front/tree/master/Landing_less(not%20finished)'
			},
			homepage: {
				img: 'homepage.png',
				slog: 'Изменение\\удаление комментариев Vue',
				descs: [
					'html',
					'css/flexbox',
					'Vue.js',
					'Тестовое задание при устройстве на работу'
				],
				git: 'https://github.com/Ivan9g/front/tree/master/Vue.js(not%20finished)'
			},
			portf: {
				img: 'portf.png',
				slog: 'Portfolio',
				descs: [
					'html',
					'css/flexbox',
					'Vue.js',
					'Портфолио на котором вы находитесь'
				],
				git: 'https://github.com/Ivan9g/portfolio'
			}
		}
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
.project{
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
.info{
	display: flex;
  	flex-direction: column;
}
.info h2{
	margin-bottom: 3vh;
}
.desc{
  padding: 1vh;
}
.desc p{
  margin-bottom: 1em;
}
.link{
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis;
    width: 25vh;
}
.link a{
	text-decoration: none;
  color: #F5DEB3;
  cursor: pointer;
}
.foto_site{
  width: 50vh;
  height: 1%;
}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
	.content{
  align-items: baseline;
  padding-top: 10vh;
}
.section_1{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
}

@media (max-width: 860px) {
	.content{
  align-items: baseline;
  padding-top: 10vh;
}
.section_1{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
}
</style>