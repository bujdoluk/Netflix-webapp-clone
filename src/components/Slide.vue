<template>
  <div class="container">
      <div class="inner">
          <div class="track">
            <div class="card-container">
                <div class="card">
                    <div class="img">1</div>
                    <div class="info">
                        Title 1
                    </div>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                    <div class="img">2</div>
                    <div class="info">
                        Title 2
                    </div>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                    <div class="img">3</div>
                    <div class="info">
                        Title 3
                    </div>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                    <div class="img">4</div>
                    <div class="info">
                        Title 4
                    </div>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                    <div class="img">5</div>
                    <div class="info">
                        Title 5
                    </div>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                    <div class="img">6</div>
                    <div class="info">
                        Title 6
                    </div>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                    <div class="img">7</div>
                    <div class="info">
                        Title 7
                    </div>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                    <div class="img">8</div>
                    <div class="info">
                        Title 8
                    </div>
                </div>
            </div>
          </div>
      </div>
      <div class="nav">
        <button class="prev">
            <span class="material-icons">
                keyboard_arrow_left
            </span>
        </button>
        <button class="next">
            <span class="material-icons">
                keyboard_arrow_right
            </span>
        </button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
.container {
    width: 128rem;
    margin: 5rem auto;
    min-height: 20rem;
    position: relative;
}

.inner {
     overflow: hidden;
}

.track {
    display: flex;
}

.card-container {
    width: 25.9rem;
    height: 25rem;
    flex-shrink: 0;
    padding-right: 1.5rem;
    box-sizing: border-box;
}

.card {
    width: 100%;
    height: 100%;
    background: #ccc;
    border: 0.1rem solid #ccc;
    box-sizing: border-box;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
}

.card > * {
    flex: 1;
}

.info {
    flex-basis: 4rem;
    background: #333;
    color: #fff;
    flex-grow: 0;
    padding: 1rem;
    box-sizing: border-box;
}

.img {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
}

.nav button {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    border: 0.1rem solid #aaa;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
}

.nav .prev {
    left: -3rem;
}

.nav .next {
    right: -3rem;
}
</style>