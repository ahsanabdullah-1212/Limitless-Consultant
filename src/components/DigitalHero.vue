<template>
    <div class="digital-section">

        <div class="video-background-1">
            <div class="bread-crums-2">
                <br>
            <router-link to="/" :class="{ 'active': $isActive('/') }">
                <p>Home</p>
            </router-link><router-link to="/digital" :class="{ 'active': $isActive('/digital') }">
                <p>/Digital</p>
            </router-link>
        </div>
            <video autoplay loop muted playsinline>
                <source src="@/assets/images/video-2.mp4" type="video/mp4">
            </video>
        </div>
        <div class="digital-section">
            <div class="digital-heading">
                <h1>
                    Digital is <span class="spot-tag">[</span>our DNA<span class="spot-tag">]</span></h1>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'DigitalHero',
}
</script>