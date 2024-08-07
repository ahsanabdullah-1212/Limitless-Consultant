<template>
  <div class="main-slider-2">
    <div class="bread-crums">
      <br>
      <router-link to="/" :class="{ 'active': $isActive('/') }">
        <p>Home</p>
      </router-link><router-link to="/insight" :class="{ 'active': $isActive('/digital') }">
        <p>/Insight</p>
      </router-link>
    </div>
    <div id="slider">
      <!-- Radio buttons for slider navigation -->
      <input type="radio" id="slide1" name="slider" checked>
      <input type="radio" id="slide2" name="slider">
      <input type="radio" id="slide3" name="slider">
      <input type="radio" id="slide4" name="slider">

      <!-- Slider container -->
      <div id="slides">
        <div id="overflow">
          <div class="inner">
            <article>
              <img src="@/assets/images/Banner-1.png" alt="Slide 1">
            </article>
            <article>
              <img src="@/assets/images/Banner-1.png" alt="Slide 1">
            </article>
            <article>
              <img src="@/assets/images/Banner-1.png" alt="Slide 1">
            </article>
            <article>
              <img src="@/assets/images/Banner-1.png" alt="Slide 1">
            </article>
          </div>
        </div>
      </div>
      <label for="slide1"></label>
      <label for="slide2"></label>
      <label for="slide3"></label>
      <label for="slide4"></label>

      <!-- Navigation arrows -->
      <button @click="prevSlide" class="arrow arrow-left">&#9664;</button>
      <button @click="nextSlide" class="arrow arrow-right">&#9654;</button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'ImageSlider',
  mounted() {
    this.startAutoSlide();
  },
  methods: {
    startAutoSlide() {
      this.autoSlideInterval = setInterval(() => {
        this.nextSlide();
      }, 3000); // Change slide every 3 seconds
    },
    selectSlide(index) {
      const radios = document.querySelectorAll('input[name="slider"]');
      radios.forEach((radio, i) => {
        if (i === index - 1) {
          radio.checked = true;
        }
      });
    },
    nextSlide() {
      const radios = document.querySelectorAll('input[name="slider"]');
      const checkedIndex = Array.from(radios).findIndex(radio => radio.checked);
      const nextIndex = (checkedIndex + 1) % radios.length;
      this.selectSlide(nextIndex + 1);
    },
    prevSlide() {
      const radios = document.querySelectorAll('input[name="slider"]');
      const checkedIndex = Array.from(radios).findIndex(radio => radio.checked);
      const prevIndex = (checkedIndex - 1 + radios.length) % radios.length;
      this.selectSlide(prevIndex + 1);
    }
  },
  beforeUnmount() {
    clearInterval(this.autoSlideInterval);
  }
}
</script>

<style scoped>
.inner img {
  width: auto;
}

@media(max-width:1210px) {
  .inner img {
    width: 100vw;
  }
}

#slider {
  max-width: 1200px;
  text-align: center;
  margin: 0 auto;
  position: relative;
}

#overflow {
  width: 100%;
  overflow: hidden;
}

#slides .inner {
  width: 400%;
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -o-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);

  -webkit-transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
  -moz-transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
  -o-transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
  -ms-transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
  transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);

  -webkit-transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
  -moz-transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
  -o-transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
  -ms-transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
  transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
}

#slides article {
  width: 25%;
  float: left;
}

input[type="radio"] {
  display: none;
}

label {
  background: #CCC;
  display: inline-block;
  cursor: pointer;
  width: 10px;
  height: 10px;
  border-radius: 5px;
}

#slide1:checked~#slides .inner {
  margin-left: 0;
}

#slide2:checked~#slides .inner {
  margin-left: -100%;
}

#slide3:checked~#slides .inner {
  margin-left: -200%;
}

#slide4:checked~#slides .inner {
  margin-left: -300%;
}

input#slide1:checked~label[for="slide1"],
input#slide2:checked~label[for="slide2"],
input#slide3:checked~label[for="slide3"],
input#slide4:checked~label[for="slide4"] {
  background: #333;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 10;
}

.arrow-left {
  left: 10px;
}

.arrow-right {
  right: 10px;
}
</style>