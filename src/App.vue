<template>
  <div>
    <router-view></router-view>
    <!-- Contact Us Button -->
    <div id="contact-button" @click="navigateToContact">
      <span>
        <font-awesome-icon :icon="['fas', 'envelope']" />
        <span class="text">Contact Us</span>
      </span>
      <div class="liquid"></div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'App',
  methods: {
    navigateToContact() {
      this.$router.push('/contact');
    }
  }
}
</script>

<style>
@font-face {
  font-family: "SourceSans3";
  src: url('@/assets/fonts/static/SourceSans3-Medium.ttf') format('truetype');
}

#contact-button {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  display: inline-block;
  padding: 0;  /* Removed padding to fit the icon within the smaller size */
  background: var(--primary-color);
  color: var(--white-color);
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(30, 144, 255, 0.5);
  transition: width 0.6s cubic-bezier(0.25, 0.8, 0.25, 1), background 0.6s, transform 0.3s ease;
  text-align: center;
  width: 33px;  /* Kept the width at 33px */
  height: 33px; /* Kept the height at 33px */
}

#contact-button:hover {
  background: var(--primary-color);
  box-shadow: 0 15px 50px rgba(30, 144, 255, 0.7);
  width: 200px;
}

#contact-button span {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.mail-icon {
  font-size: 16px; /* Adjust the icon size to fit within the smaller button */
}

.text {
  margin-left: 5px; /* Reduced margin to fit the small size */
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.6s ease 0.3s, visibility 0s linear 0.6s;
  white-space: nowrap;
  font-size: 12px; /* Adjusted font size for the text */
}

#contact-button:hover .text {
  opacity: 1;
  visibility: visible;
  transition: opacity 0.6s ease, visibility 0s;
}

.liquid {
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  animation: cascade 2s infinite;
}

@keyframes cascade {
  0% {
    top: -100%;
  }

  50% {
    top: 0;
  }

  100% {
    top: 100%;
  }
}

#contact-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(30, 144, 255, 0.8),
    0 0 40px rgba(30, 144, 255, 0.6),
    0 0 60px rgba(30, 144, 255, 0.4);
  opacity: 0;
  transition: opacity 0.6s ease;
}

#contact-button:hover::before {
  opacity: 1;
}

@media screen and (max-width: 480px) {
  #contact-button {
    padding: 0;
    bottom: 20px;
    right: 20px;
    font-size: 16px;
    width: 33px;
    height: 33px;
  }

  #contact-button:hover {
    width: 160px;
  }
}

</style>
