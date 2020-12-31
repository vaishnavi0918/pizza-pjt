<template>
  <div class="home" style="background:#fff9f0;height:521px">
    <img src="../assets/pizza.jpg" class="rounded float-left" alt="..."  style="width:40%;height:522px">
 
   <div class="centered">
    <h5 >Welcome for our pizza world and Order ur pizzas!!!</h5>
    <p>Hungry and need a ride home??</p>
  <h5>Its ok to Eat A whole pizza by yourself!!!</h5>
  
    
  </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: "Home",
  
};
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.centered{
    margin: 0;
    position: absolute;
    top: 15%;
    left: 50%;
    margin-right: -50%;
    /* transform: translate(22%, -50%); */
    font-family: Brush Script MT, Brush Script Std, cursive;
    font-size:35px
}
</style>

