<template>
<div class="container">
    <p>Questions? Contact us.</p>
    <div class="footer">
        <ul>
            <li><a href="">FAQ</a></li>
            <li><a href="">Investor Relations</a></li>
            <li><a href="">Privacy</a></li>
            <li><a href="">Speed Test</a></li>
        </ul>
        <ul>
            <li><a href="">Help Center</a></li>
            <li><a href="">Jobs</a></li>
            <li><a href="">Cookie Preferences</a></li>
            <li><a href="">Legal Notices</a></li>
        </ul>
        <ul>
            <li><a href="">Account</a></li>
            <li><a href="">Watch to Watch</a></li>
            <li><a href="">Corporate Information</a></li>
            <li><a href="">Only on Netflix</a></li>
        </ul>
        <ul>
            <li><a href="">Media Center</a></li>
            <li><a href="">Terms of Use</a></li>
            <li><a href="">Contact Us</a></li>
        </ul>
    </div>
    <select name="languages" id="languages" class="languages">
            <option value="czech">Czech</option>
            <option value="english">English</option>
            <option value="slovak">Slovak</option>
            <option value="spanish">Spanish</option>
    </select>
    <p>Netflix Slovakia</p>
</div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
    width: 80%;
    margin: auto;
    color: grey;
}

p {
    margin-bottom: 2rem;
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

a {
    color: grey;
}

a:hover {
    text-decoration: none;
    border-bottom: 0.2rem solid gray;
}

select {
    margin-bottom: 2rem;
}
</style>