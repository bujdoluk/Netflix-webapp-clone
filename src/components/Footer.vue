<template>
<div class="container-footer">
    <p>Questions? Contact us.</p>
    <div class="footer">
        <ul>
            <li><router-link :to="{ name: 'Faq' }">FAQ</router-link></li>
            <li><router-link :to="{ name: 'Faq' }">Investor Relations</router-link></li>
            <li><router-link :to="{ name: 'Privacy' }">Privacy</router-link></li>
            <li><router-link :to="{ name: 'Faq' }">Speed Test</router-link></li>
        </ul>
        <ul>
            <li><router-link :to="{ name: 'Faq' }">Help Center</router-link></li>
            <li><router-link :to="{ name: 'Faq' }">Jobs</router-link></li>
            <li><router-link :to="{ name: 'Faq' }">Cookie Preferences</router-link></li>
            <li><router-link :to="{ name: 'LegalNotices' }">Legal Notices</router-link></li>
        </ul>
        <ul>
            <li><router-link :to="{ name: 'Faq' }">Account</router-link></li>
            <li><router-link :to="{ name: 'Faq' }">Watch to Watch</router-link></li>
            <li><router-link :to="{ name: 'CorporateInfo' }">Corporate Information</router-link></li>
            <li><router-link :to="{ name: 'Faq' }">Only on Netflix</router-link></li>
        </ul>
        <ul>
            <li><router-link :to="{ name: 'Faq' }">Media Center</router-link></li>
            <li><router-link :to="{ name: 'TermsOfUse' }">Terms of Use</router-link></li>
            <li><router-link :to="{ name: 'ContactUs' }">Contact Us</router-link></li>
        </ul>
    </div>
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
    <div>Netflix Slovakia</div>
</div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
.container-footer {
    width: 50%;
    height: 40vh;
    margin: 0 auto;
    color: grey;
    background: black;
    background-image: none;
}

p {
    font-size: 2rem;
    margin: 7rem 0 3rem 0;
}

div {
    font-size: 2rem;
    margin-top: 3rem;
}

.footer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    font-size: 1.5rem;
    margin-bottom: 2rem;
}

ul {
    list-style-type: none;
}

li {
    margin: 1rem 0;
}

a {
    color: grey;
    font-size: 1.5rem;
}

a:hover {
    text-decoration: none;
    border-bottom: 0.2rem solid gray;
}

select {
    margin-bottom: 2rem;
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
</style>