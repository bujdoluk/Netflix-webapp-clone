<template>
   <nav class="nav">
      <div class="nav-left">
          <div>
            <img src="../assets/netflix.jpg" class="logo"> 
          </div>
          <div class="line">&nbsp;</div>
          <div class="help">Help Centre</div>
      </div>
      <div class="nav-right">
          <button class="btn-join">Join Netflix</button>
          <button class="btn-red">Sign in</button>
      </div>
  </nav>
  <section class="container">
      <div class="container-2">
        <a class="back">&#x2190; Back to Help Home</a>
        <div class="customer-service">
            <div>
                <h1>Contact Customer Service</h1>

                <h3>Call us from the Netflix app</h3>
                <p>Contacting Netflix is now easier than ever when you 
                   contact us from the Netflix app on your Android or 
                   iOS phone or tablet! Calling through the app is free - 
                   all you need is an internet or cellular connection.
                </p>
                <h4>Download the Netflix app:</h4>
                <img class="img google" src="../assets/googleplay.png" alt="Google Play">
                <img class="img" src="../assets/appstore.png" alt="App Store">
                <p>Questions? <a class="a">Learn how to contact us from the Netflix app!</a></p>
                <div class="border">&nbsp;</div>

                <h3>Call us from any phone</h3>
                <h4>Phone is currently unavailable.</h4>
                <p>Call us using the Netflix app as we don't offer a phone number in your country</p>
                <button class="btn-grey">CALL US</button>
                <div class="border">&nbsp;</div>

                <h3>Live Chat</h3>
                <p>You will need an internet or mobile phone connection.</p>
                <button class="btn-grey">START LIVE CHAT</button>

            </div>

            <div>
                <h4>Popular Questions</h4>
                <ul>
                    <li class="li"><span class="question-link">How do I reset my password?</span></li>
                    <li class="li"><span class="question-link">How can I request a TV show or movie?</span></li>
                    <li class="li"><span class="question-link">How do I cancel my account?</span></li>
                    <li class="li"><span class="question-link">Why isn't Netflix Working?</span></li>
                    <li class="li"><span class="question-link">What is Netflix?</span></li>
                </ul>
                <h4>Find a different answer</h4>
                <input type="text">
            </div>
        </div>
      </div>
  </section>
  <FooterSmall/>

</template>

<script>
import FooterSmall from  '../components/FooterSmall.vue'
export default {
    components: { FooterSmall }

}
</script>

<style scoped>
/*  Navigation */
.nav {
    background: black;
    height: 6.2vh;
    color: white;
    font-size: 2rem;
    width: 50vw;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
}

.nav-left {
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   align-items: center;
}

.nav-right {
   display: flex;
   flex-direction: row;
   margin-left: auto;
   gap: 2rem;
   align-items: center;
}

.logo {
  width: 12rem;
  height: 8rem;
  padding-top: 1rem;
  margin-left: 2rem;
  cursor: pointer;
}

.line {
  margin-right: 1.5rem;
  border-left: 0.1rem solid white;
}

.help {
  color:white;
  cursor: pointer;
}

.help:hover {border-bottom: 0.1rem solid white;}

.btn {
    font-size: 1.5rem;
    border: 0.1rem solid black;
    border-radius: 0.1rem;
    padding: 0.5rem 1.2rem;
    color: black;
    background: white;
    text-transform: uppercase;
    font-weight: 500;
    cursor: pointer;
}

.btn-join {
  font-size: 1.2rem;
  font-weight: bold;
  border: 0.1rem solid white;
  background: black;
  color: white;
  padding: 0.7rem 1.2rem;
  text-transform: uppercase;
  cursor: pointer;
}

.btn-join:hover {
  color: rgb(87, 87, 87);
  transition: .1s ease-in; 
  transition-delay: 0.05s;
  background: rgb(245, 243, 243);
}

.btn:hover {
    background: rgb(245, 243, 243);
    transition: .1s ease-in; 
    transition-delay: 0.05s;
}

/* Content section */ 

.container {
    background: white;
    font-size: 2rem;
    width: 100%;
    padding: 2rem;
}

.container-2 {
    width: 50%;
    margin: 0 auto;
}

.customer-service {
    display: grid;
    grid-template-columns: 2fr 1fr;
}

.back {
    color:red;
    cursor: pointer;
}

.back:hover {
    color:red;
    cursor: pointer;
    border-bottom: 0.1rem solid red;
}

.a {
    text-decoration: none;
    color:red;
}

.a:hover {border-bottom: 0.1rem solid red;}

img {
    width: 13rem;
    height: 4rem;
    cursor: pointer;
    margin-bottom: 2rem;
}

.google {margin-right: 2rem;}

.border {
    border-bottom: 0.1rem solid rgb(168, 168, 168);
    margin-bottom: 2rem;
}

.btn-grey {
    font-size: 1.7rem;
    font-weight: bold;
    padding: 1rem;
    background: rgb(255, 255, 255);
    color: rgb(78, 78, 78);
    border: 0.1rem solid rgb(78, 78, 78);
    border-radius: 0.2rem;
}

.btn-grey:hover {
    background: rgb(243, 243, 243);
}

.li {margin: 1rem 0 1rem 2rem;}

.question-link:hover {
    color: red;
    border-bottom: 0.1rem solid red;
}

h1 {margin: 3rem  0;}

h3 {margin-bottom: 1.5rem;}

h4 {margin-bottom: 1.5rem;}

p {margin-bottom: 2rem;}

</style>