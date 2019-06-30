<template>
  <div id="app" class="body" >
    <header>
      <nav class="menu">
        <transition name="fade" mode="out-in">
          <i class="material-icons" v-if="!show" @click="show = !show" key="menu">menu</i>
          <i class="material-icons clear" v-else @click="show = !show" key="clear">clear CLOSE</i>
        </transition>  

        <transition name="items">
          <div class="nuv"  v-if="show">
          
            <ul>
              <li v-for="item in items" 
                  @click="show = !show">
                <router-link
                  active-class="is-active"
                  class="link"
                  :to="item.url">
                  {{ item.title }}
                </router-link>
              </li>
            </ul>

            <div class="null"></div>
          </div>
        </transition>
      </nav>

      <router-link active-class="is-active" :to="items.home.url" class="logo"><p @click="show = false">.portfolio</p></router-link>
      <a href="https://github.com/Ivan9g" class="git">GIT</a>
    </header>
    <div @click="show = false">
      <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      items: {
        home: {
          url: '/',
          title: 'Home'
        },
        about: {
          url: '/about',
          title: 'About'
        },
        contacts: {
          url: '/contacts',
          title: 'Contacts'
        }
      },
      show: false
    }
  }
}
</script>
<!-- стили компонента -->
<style>
 @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
* {
  padding: 0; 
  margin: 0; 
  font-family: 'Raleway', sans-serif;
}
body {
  display: flex;
  flex-direction: column;
  background-blend-mode: multiply;
  background-image: url('assets/giphy.gif');
  background-size: cover;
  background-color: rgba(0,0,0,0.5);
  color: #F5DEB3;
}
header {
  display: flex;
  flex-direction: row;
  border-bottom: solid 1px rgba(255,255,255,.8);
  justify-content: space-between;
}
header a {
  text-decoration: none;
  color: #F5DEB3;
  cursor: pointer;
}
.menu, .git {
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.menu {
  border-right: solid 1px rgba(255,255,255,.8);
}
ul {
  
  list-style-type: none;
}
.items-enter-active {
  transition: all .4s ease;
}
.items-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.items-enter, .items-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
.clear {
  z-index: 5;
  font-size: 20px;
}
li {
  padding: 30px;
  border-bottom: solid 1px rgba(255,255,255,.8);
}
.logo {
  padding: 30px;
  font-size: 25px;
  font-weight: bold;
}
.git {
  border-left: solid 1px rgba(255,255,255,.8);
}
.nuv{
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  background: rgba(0,0,0,0.7);
  height: 84.9vh;
  top: 0;
  left: 0;
  padding-top: 10%;
  width: 25vh;
  z-index: 2;
}
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
.nuv{
  width: 100%;
  padding-top: 15vh;
}}

</style>