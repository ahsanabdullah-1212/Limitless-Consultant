<template>
    <div class="main-solutions">
        <div class="solution-head">
            <div class="solution">
                <h2>Customized Solutions</h2>
            </div>
            <div class="expertise-bar">
                <span></span>
            </div>
            <div class="solution-dsp">
                <p>
                    Emerging technologies are transforming our business landscape. Our collaborative, expert-driven
                    approach leverages advanced digital technologies to help business leaders tackle their most pressing
                    challenges and opportunities with confidence.
                </p>
            </div>
        </div>
        <div class="button-container">
            <button class="glow-button" v-for="(button, index) in buttons" :key="index">
                {{ button }}
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CustomizeSolution',
    data() {
    return {
      buttons: [
        'Chief Executive Officer',
        'Chief Financial Officer',
        'General Counsel',
        'Chief Compliance Officer',
        'Chief Information Officer',
        'Chief Information Security Officer',
        'Chief Operating Officer',
        'Law Firms'
      ]
    };
  }
}
</script>