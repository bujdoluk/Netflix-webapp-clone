<template>
   <nav class="nav">
      <div class="nav-left">
          <div>
            <img src="../assets/netflix.jpg" class="img"> 
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
            <div class="back">&#x2190; Back to Help Home</div>
            <div>
                <button type="button" class="btn"> 	&#128438; Print</button>
            </div>
        </div>
        <h1>Privacy Statement</h1><br>
        <p>This Privacy Statement explains our practices, including your choices,
        regarding the collection, use, and disclosure of certain information,
        including your personal information in connection with the Netflix service.
        </p><br>
        <h3>Contacting Us</h3><br>
        <p>If you have general questions about your account or how to contact customer
        service for assistance, please visit our online help center at <a>help.netflix.com.</a> 
        For questions specifically about this Privacy Statement, or our use of your personal 
        information, cookies or similar technologies, please contact our Data Protection 
        Officer/Privacy Office by email at <a>privacy@netflix.com.</a>
        </p><br>
        <p>The data controller of your personal information is <a>Netflix International B.V.</a>
        Please note that if you contact us to assist you, for your safety and ours we
        may need to authenticate your identity before fulfilling your request. 
        </p><br>
        <h3>Collection of Information</h3><br>
        <p>We receive and store information about you such as:</p><br>
        <ul>
            <li class="inner-list">
            <span>Information you provide to us:</span> We collect information you provide to us which includes:
            </li><br>
            <li class="inner-list"> 
            <span>Information we collect automatically:</span> We collect information about you and your use of
            our service, your interactions with us and our advertising, as well as information regarding
            your network, network devices, and your computer or other Netflix capable devices you might use 
            to access our service (such as gaming systems, smart TVs, mobile devices, set top boxes, and other
            streaming media devices). This information includes:
            </li><br>
            <li class="inner-list">
            <span>Information from partners:</span> We collect information from other companies with whom you have 
            a relationship (“Partners”). These Partners might include (depending on what services you use): 
            your TV or internet service provider, or other streaming media device providers who make our 
            service available on their device; mobile phone carriers or other companies who provide services 
            to you and collect payment for the Netflix service for distribution to us or provide pre-paid
            promotions for the Netflix service; and voice assistant platform providers who enable interaction 
            with our service through voice commands. The information Partners provide us varies depending on 
            the nature of the Partner services, and may include: 
            </li><br>
            <li class="inner-list">
            <span>Information from other sources:</span> We also obtain information from other sources. 
            We protect this information according to the practices described in this Privacy 
            Statement, plus any additional restrictions imposed by the source of the data. These 
            sources vary over time, but could include: 
            </li><br>
        </ul>
        <h3>Use of Information </h3><br>
        <p>
        We use information to provide, analyze, administer, enhance and personalize our services 
        and marketing efforts, to manage member referrals, to process your registration, your 
        orders and your payments, and to communicate with you on these and other topics. For 
        example, we use such information to: 
        </p><br>
        <ul>
            <li class="inner-list">
                determine your general geographic location, provide localized content, provide you 
                with customized and personalized viewing recommendations for movies and TV shows we 
                think will be of interest to you, determine your ISP to support network troubleshooting 
                for you (we also use aggregated ISP information for operational and business purposes), 
                and help us quickly and efficiently respond to inquiries and requests; 
            </li><br>
            <li class="inner-list">
                coordinate with Partners on making the Netflix service available to members and providing 
                information to non members about the availability of the Netflix service, based on the 
                specific relationship you have with the Partner;
            </li><br>
            <li class="inner-list">
                secure our systems, prevent fraud and help us protect the security of Netflix accounts;
            </li><br>
            <li class="inner-list">
                prevent, detect and investigate potentially prohibited or illegal activities, including 
                fraud, and to enforce our terms (such as determining whether and for which Netflix signup 
                offers you are eligible and determining whether a particular device is permitted to use 
                the account consistent with our Terms of Use);
            </li><br>
            <li class="inner-list">
                analyze and understand our audience, improve our service (including our user 
                interface experiences and service performance) and optimize content selection, 
                recommendation algorithms and delivery; 
            </li><br>
            <li class="inner-list">
                communicate with you concerning our service so that we can send you news about 
                Netflix, details about new features and content available on Netflix, special 
                offers, promotional announcements, consumer surveys, and to assist you with 
                operational requests such as password reset requests. These communications may 
                be by various methods, such as email, push notifications, text message, 
                online messaging channels, and matched identifier communications (described below). 
                Please see the "Your Choices" section of this Privacy Statement to learn how to set 
                or change your communications preferences. 
            </li><br>
        </ul>
        <p>
           Our legal basis for collecting and using the personal information described in 
           this Privacy Statement will depend on the personal information concerned and 
           the specific context in which we collect and use it. We will normally collect 
           personal information from you where we need the personal information to perform a 
           contract with you (for example, to provide our services to you), where the processing 
           is in our legitimate interests and not overridden by your data protection interests or 
           fundamental rights and freedoms (for example, our direct marketing activities in accordance 
           with your preferences), or where we have your consent to do so (for example, for you to 
           participate in certain consumer insights activities like specific surveys and focus groups). 
           In some cases, we may also have a legal obligation to collect personal information from you or 
           may otherwise need the personal information to protect your vital interests or those of another 
           person (for example, to prevent payment fraud or confirm your identity). For questions about 
           our use of your personal information (including legal bases and transfer mechanisms we rely on), 
           cookies or similar technologies, please contact our Data Protection Officer/Privacy Office by 
           email at <a>privacy@netflix.com.</a> Please visit our online help center at <a>help.netflix.com</a> for more 
           information about these topics.  
        </p><br>
        <h3>Disclosure of Information </h3><br>
        <p>We disclose your information for certain purposes and to third parties, as described below: </p><br>
        <ul>
            <li class="inner-list">
                <span>The Netflix family of companies:</span> We share your information among the Netflix 
                family of companies (<a>help.netflix.com/legal/corpinfo</a>) as needed for: providing 
                you with access to our services; providing customer support; making decisions about 
                service improvements; content development; and for other purposes described in the 
                Use of Information section of this Privacy Statement. 
            </li><br>
        </ul>
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

.nav {
    background: black;
    height: 10vh;
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

span {
    font-weight: bold;
}

.ul {
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
}

.inner-list {
    margin-left: 2.5rem;
    font-weight: 300 !important;
}

a {
    text-decoration: none;
    color:red;
}

a:hover {
    border-bottom: 0.1rem solid red;
}

footer {
    background: black;
    height: 25vh;
}

.footer {
    width: 50%;
    margin: 0 auto;
}

.img {
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

.back {
    color:red;
    cursor: pointer;
}

.back:hover {
    color:red;
    cursor: pointer;
    border-bottom: 0.1rem solid red;
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

.buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 2rem 0;
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