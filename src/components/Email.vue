<template>
  <p>Ready to watch? Enter your email to create or restart your membership.</p>
  <input type="email" id="email" class="email" name="email" placeholder="Email address" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$">
  <button class="btn-red">Get Started</button>
</template>

<script>
export default {

}
</script>

<style>
p {
    font-size: 2rem;
}
</style>