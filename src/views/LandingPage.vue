<template>
<div class="container">
  <div class="nav">
        <div>
          <img src="../assets/netflix.jpg" class="img">
        </div>
        <div class="buttons">
          <div class="lang-menu">
            <div class="selected-lang">
                English
            </div>
            <ul>
              <li><a href="" class="de">German</a></li>
              <li><a href="" class="us">English</a></li>
              <li><a href="" class="sk">Slovak</a></li>
            </ul>
          </div>
          <div>
            <router-link :to="{ name: 'Signin'}">
              <button class="btn-red">Sign in</button>
            </router-link> 
          </div>   
        </div>
    </div>
    <div class="headings">
      <h1 class="h1-center">Unlimited movies, TV<br> shows, and more.</h1>
      <h3 class="h1-center">Watch anywhere. Cancel anytime.</h3>
    </div>
    <div class="email">
      <Email/>
    </div>
</div>
<div class="container-2">
  <div class="tv">
    <div>
      <h1>Enjoy on your TV.</h1>
      <p>Watch on Smart TVs, Playstation,<br>
         Xbox, Chromecast, Apple TV, Blu-ray<br>
         players, and more.
      </p>
    </div>
    <div>
      <img src="../assets/tv.jpg" class="images">
    </div>
  </div>
  <div class="tv-border"></div>

  <div class="tv">
    <div>
        <img src="../assets/mobile.jpg" class="images">
    </div>
    <div>
        <h1>Download your<br> 
            shows to watch<br>
            offline.
        </h1>
        <p>Save your favourites easily and always<br> 
           have something to watch.
        </p>
    </div>
  </div>
  <div class="tv-border"></div>

  <div class="tv">
    <div>
      <h1>Watch everywhere.</h1>
      <p>Stream inlimited movies and TV<br>
         shows on your phone, tablet, laptop,<br>
         and TV without paying more.
      </p>
    </div>
    <div>
      <img src="../assets/tablet.jpg" class="images">
    </div>
  </div>
  <div class="tv-border"></div>

  <div class="tv">
    <div>
        <img src="../assets/kids.png" class="images">
    </div>
    <div>
        <h1>Create profiles for <br>
            kids.
        </h1>
        <p>Send kids on adventures with their<br>
           favourite characters in a space made<br>
           just for them-free with your<br>
           membership.
        </p>
    </div>
  </div>
  <div class="tv-border"></div>

</div>
<div class="faq">
  <h1 class="h1-center">Frequently Asked Questions</h1>

  <div class="question" @click="toggle1 = !toggle1">
    <p>What is Netflix?</p>
    <span class="material-icons icon">add</span>
  </div>
  <p v-show="toggle1" class="answer">
    Netflix is a streaming service that offers a wide<br> 
    variety of award-winning TV shows, movies, anime,<br>
    documentaries, and more on thousands of internet-<br>
    connected devices.<br>
    <br>
    You can watch as much as you want, whenever you<br>
    want without a single commercial – all for one low<br>
    monthly price. There's always something new to<br>
    discover and new TV shows and movies are added<br>
    every week!
  </p>

  <div class="question" @click="toggle2 = !toggle2">
    <p>How much does Netflix cost?</p>
    <span class="material-icons icon">add</span>
  </div>
  <p v-show="toggle2" class="answer">
    Watch Netflix on your smartphone, tablet, Smart TV,<br> 
    laptop, or streaming device, all for one fixed monthly<br>
    fee. Plans range from EUR7.99 to EUR11.99 a<br>
    month. No extra costs, no contracts.<br>
  </p>

  <div class="question" @click="toggle3 = !toggle3">
    <p>Where can I watch?</p>
    <span class="material-icons icon">add</span>
  </div>
   <p v-show="toggle3" class="answer">
    Watch anywhere, anytime, on an unlimited number of<br> 
    devices. Sign in with your Netflix account to watch<br>
    instantly on the web at netflix.com from your<br>
    personal computer or on any internet-connected<br>
    device that offers the Netflix app, including smart <br>
    TVs, smartphones, tablets, streaming media players<br>
    and game consoles.<br>
    <br>
    You can also download your favorite shows with the<br>
    iOS, Android, or Windows 10 app. Use downloads to<br>
    watch while you're on the go and without an internet<br>
    connection. Take Netflix with you anywhere.<br>
  </p>

  <div class="question" @click="toggle4 = !toggle4">
    <p>How do I can cancel?</p>
    <span class="material-icons icon">add</span>
  </div>
   <p v-show="toggle4" class="answer">
    Netflix is flexible. There are no pesky contracts and <br> 
    no commitments. You can easily cancel your account<br>
    online in two clicks. There are no cancellation fees – <br>
    start or stop your account anytime.<br>
  </p>

  <div class="question" @click="toggle5 = !toggle5">
    <p>What can I watch on Netflix?</p>
    <span class="material-icons icon">add</span>
  </div>
  <p v-show="toggle5" class="answer">
    Netflix has an extensive library of feature films, <br> 
    documentaries, TV shows, anime, award-winning<br>
    Netflix originals, and more. Watch as much as you <br>
    want, anytime you want.<br>
  </p>

  <div class="question" @click="toggle6 = !toggle6">
    <p>Is Netflix good for kids?</p>
    <span class="material-icons icon">add</span>
  </div>
   <p v-show="toggle6" class="answer">
    The Netflix Kids experience is included in your <br> 
    membership to give parents control while kids enjoy<br>
    family-friendly TV shows and movies in their own<br>
    space.<br>
    <br>
    Kids profiles come with PIN-protected parental<br>
    controls that let you restrict the maturity rating of<br>
    content kids can watch and block specific titles you<br>
    don’t want kids to see.<br>
  </p>
</div>
<Email/>
<div class="tv-border"></div>
<Footer/>
</template>

<script>
import '../assets/main.css';
import Email from '../components/Email.vue'  
import Footer from '../components/Footer.vue'

export default {
  components: {
    Email, Footer
  },
  data() {
    return {
      toggle1: true,
      toggle2: true,
      toggle3: true,
      toggle4: true,
      toggle5: true,
      toggle6: true,
    }
  }
}
</script>

<style scoped>
.container {
  height: 70vh;
  background-image: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.4),rgba(0,0,0,0.8)), url("../assets/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom: 0.5rem solid grey;
}

.container-2 {
  width: 100%;
  margin: 0 auto;
}

h1 {
  font-size: 5rem;
  color: white;
  text-align: left;
  margin-top: 7rem;
}

.h1-center {
  text-align: center;
  margin-bottom: 4rem;
}

h3 {
  font-size: 3rem;
  color: white;
  margin: 4rem 0;
}

.img {
  width: 75%;
  height: 75%;
  margin-top: 4rem;
  margin-left: 2rem;
}

.images {
  width: 80%;
  height: 100%;
}

.headings {
  display: block;
  margin: 0 auto;
  text-align: center;
}

.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 15%;
}
.email {
  text-align: center;
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 3rem;
  align-items: center;
}

.btn-red {
  margin-top: 2rem;
}

.lang-menu {
  margin-top: 2.5rem;
  position: relative;
}

.lang-menu ul {
  background-color:	#B8B8B8;
  border: 0.1rem solid white;
  border-radius: 0.4rem; 
  display: none;
  position: absolute;
  top: 3.5rem;
  left: 0;
}

.lang-menu:hover ul {
  display: block;
}

.lang-menu ul li{
  list-style-type: none;
  display: flex;
  justify-content: space-between;
}

.lang-menu ul li a {
  width: 14rem;
  display: block;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  color: white;
}

.lang-menu ul li a:before {
  content: '';
  display: inline-block;
  width: 3.2rem;
  height: 3.2rem;
  vertical-align: middle;
  margin-right: 1rem;
}

.lang-menu ul li a:hover {
  background-color: #F0F0F0;
  color: black;
}

.selected-lang {
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  line-height: 2;
  width: 8.5rem;
  font-size: 1.5rem;
}

.selected-lang::before {
  content: '';
  display: block;
  width: 3.2rem;
  height: 3.2rem;
  background-image: url(https://www.countryflags.io/us/flat/32.png);
}

.de:before {
  background-image: url(https://www.countryflags.io/de/flat/32.png);
}

.us:before {
  background-image: url(https://www.countryflags.io/us/flat/32.png);
}

.sk:before {
  background-image: url(https://www.countryflags.io/sk/flat/32.png);
}

.tv {
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: 2rem;
  height: 40%;
  width: 60vw;
  margin: 0 auto;
  padding: 6rem 0;
}

.tv-border {
  border-bottom: 0.5rem solid grey;
}

p {
  color: white;
  font-size: 3rem;
}
.faq {
  margin: 6rem 0;
}
.question {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: grey;
  width: 70%;
  margin: 0 auto;
  margin-bottom: 1rem;
  font-size: 3rem;
  color: white;
  padding: 2rem;
  cursor: pointer;
}
.answer {
  background-color: grey;
  width: 70%;
  margin: 0 auto;
  margin-bottom: 1rem;
  font-size: 3rem;
  color: white;
  padding: 2rem;
  cursor: pointer;
}
.icon {
  color:white;
}

</style>