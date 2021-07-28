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
      <div class="buttons">
        <a class="back">&#x2190; Back to Help Home</a>
      </div><br>
      <div class="post">
        <h1>What is Netflix?</h1>
        <img class="img" src="../assets/whatisnetflix.jpg" alt="What is netflix?">
        <p>Netflix is a subscription-based <a>streaming service</a> that allows
           our members to watch TV shows and movies without commercials 
           on an internet-connected device.
        </p><br>
        <p>You can also <a>download TV shows and movies</a> to your iOS, 
           Android, or Windows 10 device and watch without an 
           internet connection.
        </p><br>
        <p>If you're already a member and would like to learn more about 
           using Netflix, visit <a>Getting started with Netflix</a>.
        </p><br>
        <br>
      </div>

      <div class="post">
        <h1>TV Shows & Movies</h1>
        <img class="img" src="../assets/tvmovies.jpg" alt="TV Shows & Movies">
        <p>Netflix content varies by region and may change over time. 
           You can watch from a wide variety of <a>award-winning Netflix 
           Originals, TV shows, movies, documentaries, and more</a>. 
        </p><br>
        <p>The more you watch, the better Netflix gets at recommending TV 
           shows and movies we think you’ll enjoy.
        </p><br>
        <br>
      </div>

      <div class="post">
        <h1>Supported Devices</h1>
        <img class="img" src="../assets/devices.jpg" alt="Supported devices">
        <p>You can watch Netflix through any <a>internet-connected device</a> 
          that offers the Netflix app, including smart TVs, game 
          consoles, streaming media players, set-top boxes, smartphones, 
          and tablets. You can also watch Netflix on your computer using 
          an internet browser. You can review the <a>system requirements</a> for 
          web browser compatibility, and check our <a>internet speed 
          recommendations</a> to achieve the best performance. 
        </p><br>
        <p>Need help getting set up? Search our <a>Help Center</a> for the 
           manufacturer of the device you're using.
        </p><br>
        <p class="note">
          <span>NOTE:</span> The Netflix app may come pre-loaded on certain devices, 
          or you may need to download the Netflix app onto your device. 
          Netflix app functionality may differ between devices.
        </p><br>
        <br>
      </div>

      <div class="post">
        <h1>Plans and Pricing</h1>
        <img class="img" src="../assets/pricingplans.png" alt="Plans and Pricing">
        <p>Each Netflix plan determines the number of devices you can watch Netflix on <span>at 
           the same time</span> and if you prefer to view in Standard Definition (SD), 
           High Definition (HD), or Ultra High Definition (UHD). 
        </p><br>
        
        <p><a>Compare our plans and pricing</a> to decide which one is right for you. 
           You can easily <a>change your plan</a> or <a>cancel</a> online at any time. 
        </p><br>
        <br>
      </div>

      <div class="post">
        <h1>Get Started!</h1>
        <img class="img" src="../assets/getstarted.jpg" alt="What is netflix?">
        <p>Follow these easy steps to start watching Netflix today:
        </p><br>
        <ol>
          <li>Visit <a>netflix.com/signup.</a></li>
          <li><a>Choose the plan</a> that’s right for you. </li>
          <li>Create an account by entering your email address and creating a password. </li>
          <li>Enter a <a>payment method</a>. As a Netflix member, you are charged once a month 
              on the date you signed up. </li>
        </ol>
        <p>That's it. Enjoy Netflix!</p><br>
        <br>
      </div>

      <div class="yes-no">
        <p>Was this article helpful?</p>
        <button class="btn-yes-no">YES</button>
        <button class="btn-yes-no">NO</button>
      </div>
    </div>  
  </section>
  <section class="contact">
        <h2>Want to contact us?</h2>
        <button class="call-us btn-grey">CALL US</button>
        <button class="btn-grey">START LIVE CHAT</button>
  </section>
   <footer class="footer">
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
            <div class="ul">
                <div><a href="">Terms of Use</a></div>
                <div><a href="">Privacy</a></div>
                <div><a href="">Cookies Preferences</a></div>
                <div><a href="">Corporate Information</a></div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
/* Navigation */
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

.help:hover {
  border-bottom: 0.1rem solid white;
}

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

.back {
    color:red;
    cursor: pointer;
}

.back:hover {
    color:red;
    cursor: pointer;
    border-bottom: 0.1rem solid red;
}

a {
    text-decoration: none;
    color:red;
}

a:hover {
    border-bottom: 0.1rem solid red;
}

.post {
  border-bottom: 0.1rem solid grey;
  margin-bottom: 3rem;
}

.img {
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
}

.note {
  border-left: 0.4rem solid rgb(209, 208, 208);
  padding-left: 1.5rem;
  font-size: 1.5rem;
}

span {
  font-weight: bold;
}

.same-time {
  font-weight: bold;
}

ol {
  margin-left: 3rem;
}

li {
  margin-bottom: 1rem;
}

h1 {
  margin-bottom: 2rem;
}

/*  YES / NO */
.yes-no {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 3rem 0;
  gap: 2rem;
}

.btn-yes-no {
  border: 0.1rem solid red;
  font-size: 1.7rem;
  font-weight: bold;
  background: white;
  color: red;
  cursor: pointer;
  padding: 1.5rem 3rem;
}

/* Contact us*/

.contact {
  background: rgb(238, 238, 238);
  height: 10vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2rem;
}

h2 {
  font-size: 3rem;
}

.call-us {
  margin-left: auto;
  margin-right: 2rem;
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

/*  Footer  */
footer {
    background: black;
    height: 25vh;
}

.footer {
    width: 50%;
    margin: 0 auto;
}

.lang-menu {
  margin-top: 2.5rem 0 2.5rem 0;
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
  margin-top: 3rem;
}

.selected-lang::before {
  content: '';
  display: block;
  width: 3.2rem;
  height: 3.2rem;
  background-image: url(https://www.countryflags.io/us/flat/32.png);
  margin-top: 3rem;
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

</style>