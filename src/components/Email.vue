<template>
  <div class="email">
    <p>Ready to watch? Enter your email to create or restart your membership.</p>
    <form>
      <input type="email" id="email" name="email" placeholder="Email address" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" required>
      <button type="submit" class="btn-red-1">Get Started
        <span class="material-icons">
          arrow_forward_ios
        </span>
      </button>
    </form>
  </div>
</template>

<script>
import '../assets/main.css';
export default {

}
</script>

<style scoped>
.email {
  width: 80%;
  margin: 5rem auto;
}

p {
    color: white;
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
}

input {
  font-size: 2rem;
  padding: 3rem 10rem 2.2rem 0.6rem;
  border-radius: 0.4rem 0 0 0.4rem;
  border: 0;
}

.btn-red-1 {
    background: #cc0000;
    color: white;
    border: 0;
    border-radius: 0 0.4rem 0.4rem 0;
    padding: 2rem 4rem;
    font-weight: 500;
    font-size: 3rem;
    cursor: pointer;
    display: inline-block;
}

.btn-red-1:hover {
    background: red;
}
</style>