<template>
  <div class="content">
    <div class="contacts">

      <h1>contacts</h1>
      <p>+38 (093) 558-99-98</p>
      <p>jrccnjr@gmail.com</p>
      <div class="dop">
      	<p>git: github.com/Ivan9g</p>
      	<p>skype: van_netu</p>
      	<p>telegram: jrccnjr</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'contacts',
}
</script>

<style>
.content{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.contacts{
	margin-top: 13vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vh;
  padding: 3vh;
  background-color: rgba(0,0,0,0.5);
}
.contacts h1{
	text-transform: uppercase;
	font-size: 15vh;
	margin-bottom: 10vh;
}
.contacts p{
	margin-bottom: 1em;
}
.dop{
	display: flex;
	flex-direction: row;
	margin-top: 10vh;
}
.dop p{
	padding: 2vh;
}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
	.content{
  align-items: baseline;
  padding-top: 10vh;
}
	.contacts h1{
	font-size: 8vh;
}
.dop{
	font-size: 2vh;
}
}

@media (max-width: 860px) {
	.content{
  align-items: baseline;
  padding-top: 10vh;
}
		.contacts h1{
	font-size: 8vh;
}
}
</style>