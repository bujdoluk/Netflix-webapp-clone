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
             <div class="back">&#x2190; Back to Help Home</div>
             <div>
                <button type="button" class="btn"> 	&#128438; Print</button>
             </div>
          </div>
          <div>
              <h1>Legal Notices</h1>
              <p>The Netflix service, including all content provided on the 
                  Netflix service, is protected by copyright, trademark, 
                  trade secret or other intellectual property laws and 
                  treaties.
              </p>

              <h3>Copyright</h3>
              <p>The copyrights in the shows and movies on our service are 
                  owned by many great producers, including Netflix Studios, 
                  LLC. If you believe your or someone else’s copyrights are 
                  being infringed upon through the Netflix service, let us 
                  know by completing the Copyright Infringement Claims form 
                  (<a>www.netflix.com/copyrights</a>).
              </p>

              <h3>Trademarks</h3>
              <p>Netflix and the N Logo are trademarks of Netflix, Inc.</p>
              <p>If you haven’t received our permission, do not use the 
                  Netflix marks as your own or in any manner that implies 
                  sponsorship or endorsement by Netflix.
              </p>
              <p>A product branded with the Netflix name or logo is a 
                  reflection of Netflix. Unless you are one of our 
                  licensees, we don’t allow others to make, sell, or 
                  give away anything with our name or logo on it.
              </p>

              <h3>Patents</h3>
              <p>Netflix streaming and DVD services are covered by 
                  patents. For information on patents related to our 
                  services please visit <a>www.netflix.com/patents</a>.
              </p>

              <h3>Third Party Notices</h3>
              <p>The software installed on Netflix ready devices to enable 
                  streaming of the Netflix service may contain software 
                  available under open source or free software licenses 
                  (“Open Source Software”) and/or commercial software 
                  licensed to Netflix by parties (“Commercial Software”). 
                  The Netflix Terms of Use do not alter any rights or 
                  obligations you may have under those Open Source 
                  Software licenses. Additional information about Open 
                  Source and Commercial Software, including required 
                  acknowledgements, license terms and notices, can be 
                  found <a>here</a>.
              </p>
              <p class="updated"><span>Last Updated:</span> January 1, 2021</p>
          </div>
      </div>
  </section>
</template>

<script>
export default {

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

a:hover {border-bottom: 0.1rem solid red;}

.buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 2rem 0;
}

.updated {margin-bottom: 3rem;}

span {font-weight: bold;}

p {margin-bottom: 2rem;}

h1 {margin-bottom: 2rem;}

h3 {margin-bottom: 2rem;}

</style>