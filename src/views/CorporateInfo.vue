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
          <h1>Netflix Corporate Information</h1><br>
          <p>Netflix serves members in many different countries. 
              The Netflix entity that provides you with access to the Netflix 
              service and qualifies as your data controller depends on your 
              country of membership, and will be listed in your membership or 
              payment confirmation email.
          </p><br>

          <h3>Netflix, Inc.</h3><br>
          <p>100 Winchester Circle</p>
          <p>Los Gatos, CA 95032, USA</p><br>

          <h3>Netflix International B.V.</h3><br>
          <p>Karperstraat 8-10</p>
          <p>1075 KZ Amsterdam, the Netherlands</p>
          <p>KvK: 62266519</p>
          <p>VAT: NL853746333B01</p>
          <p>Share Capital: 12,500 Euros</p><br>

          <h3>Netflix Entretenimento Brasil, Ltda.</h3><br>
          <p>Alameda Xingu, 350 - 14º andar - Alphaville Industrial</p>
          <p>Barueri, CEP 06455-911 - SP - Brazil</p>
          <p>CNPJ: ​13.590.585/0002-70</p><br>

          <h3>Netflix Entertainment Services India LLP</h3><br>
          <p>Level 11, Godrej BKC, Plot C-68</p>
          <p>G Block, BKC- Bandra (East)</p>
          <p>Mumbai 400051, India</p><br> 

          <h3>Netflix G.K.</h3><br>
          <p>Shin-Aoyama Tokyu Building 10F</p>
          <p>3-11-13 Minami-Aoyama</p>
          <p>Minato-ku</p>
          <p>Tokyo 107-0062 Japan</p><br>

          <h3>Netflix Services Korea Ltd.</h3><br>
          <p>20F, Tower A, Centropolis Building</p>
          <p>26, Ujeongguk-ro, Jongno-gu, Seoul, 03161, Republic of Korea</p>
          <p>00-308-321-0058</p><br>

          <h3>Netflix Services UK Limited</h3><br>
          <p>100 New Bridge Street, London, EC4V 6JA</p>
          <p>Company No (Registration):  9091899</p>
          <p>Income Tax Registration No.:  623 25810 01805 A</p><br>

          <h3>Netflix Pte. Ltd.</h3><br>
          <p>9 Straits View, Marina One West Tower #14-07/12, Singapore 018937</p>
          <p>Registration ID No. 201531197W</p><br>

          <h3>Netflix Services France S.A.S.  </h3><br>
          <p>11 Place Édouard VII, 75009 Paris, France </p>
          <p>Business Number: 843 655 549 RCS Paris</p><br>

          <h3>Netflix Servicios de Transmisión España, S.L.</h3><br>
          <p>Paseo de la Castellana 89,  28046 Madrid, Spain</p>
          <p>VAT/NIF number  B88182514</p><br>

          <h3>Netflix México S. de R.L. de C.V. </h3><br>
          <p>Prado Sur 150, Floor 4. Lomas de Chapultepec, ZC: 11000. CDMX</p>
          <p>Registration No.: 112483</p>
          <p>RFC (tax ID): NME110513P13</p><br>
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
    width: 100%;
    margin: 0 auto;
}

.container-2 {
    width: 50% !important;
    margin: 0 auto;
}

footer {
    background: black;
    height: 25vh;
}

.footer {
    width: 50%;
    margin: 0 auto;
}

.buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 2rem 0;
}

.ul {
    font-size: 1.5rem;
    display: flex;
    flex-direction: row;
    justify-content: right;
    gap: 2rem;
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