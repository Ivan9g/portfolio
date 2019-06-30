<template >
	<div class="content" id="home">
  		<div class="slide" 
	         v-for="(slide, key) in slides" 
	         :style="{ 'background-image': 'url(./static/' + slide.img + ')', 
	         'margin': 15 * slide.id + 'vh', 'margin-left': 75 * slide.id + 'vh'}"
	         @click="move(1)"
	         @contextmenu.prevent="move(-1)"
	        > 

	        <transition name="slog">
	          <div class="slog" v-if="slide.id==0">
	            <h3>{{ slide.slog }}</h3>
	          </div>
	        </transition>

	       	<router-link class="look"  v-if="slide.id==0" active-class="is-active" 
	                :to="'slide/' + key">
	                <p>LOOK</p>
			</router-link>
	    </div>


        <div class="mouse">лкм | пкм</div> 
    </div>
</template>

<script>
export default {
	name: 'home',
  	data () {
	    return {
			slides: {
				flex: {
					img: 'flex.png',
					id: -1,
					slog: 'Адаптивный шаблон Flexbox'
				},
				Lending: {
					img: 'Lending.png',
					id: 0,
					slog: 'Адаптивный landing Flexbox'
				},
				homepage: {
					img: 'homepage.png',
					id: 1,
					slog: 'Изменение\\удаление комментариев Vue'
				},
				portf: {
					img: 'portf.png',
					id: 2,
					slog: 'Portfolio'
				}
			}
		}
  	},
	methods: {
		move(n){
			let i;
			for(i in this.slides) {
				this.slides[i].id -= n;
				if (this.slides[i].id == -2)  this.slides[i].id = Object.keys(this.slides).length -2;
				if (this.slides[i].id == Object.keys(this.slides).length -1) this.slides[i].id = -1;
			}
		},
	}
}
</script>

<style>
*{  font-family: 'Raleway', sans-serif; }
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: 100%;
}
.slide {
	  display: flex;
	  flex-direction: row;
	  justify-content: space-between;
  position:absolute;
  height: 40%;
  width: 40%;
  transform: rotate(10deg);
  background-size: 100%;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  border-radius: 5px;
  transition: all .5s ease;
  max-width: 700px;
}
.slog {
  margin-top: 35vh;
  transform: rotate(-10deg);
}
.slog h3 {
  padding: 2vh;
  width: 50%;
}
.slog-item {
  display: inline-block;
  margin-right: 10px;
}
.slog-enter-active, .slog-leave-active {
  transition: all 1s;
}
.slog-enter, .slog-leave-to  {
  opacity: 0;
  transform: translateY(30px);
}
.mouse {
  margin-top: 80vh;
}
.look{
	width: 8vh;
	height: 5vh;
	border-radius: 50px;
  	background-color: rgba(0,0,0,0.7);
	z-index: 10;
  	display: flex;
  	justify-content: center;
  	align-items: center;
  	border: 1px solid;
  margin-top: 35vh;
  transform: rotate(-10deg);
}
a{
  text-decoration: none;
  color: #F5DEB3;
  cursor: pointer;
}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
.content{
	align-items: baseline;
	padding-top: 10vh;
}
.slide {
	height: 30vh;
}
.mouse {
  margin-top: 71vh;
}
}


@media (max-width: 860px) {
	.content{
	align-items: baseline;
	padding-top: 10vh;
}
.slide {
	height: 30vh;
}
.mouse {
  margin-top: 73vh;
}}
</style>
