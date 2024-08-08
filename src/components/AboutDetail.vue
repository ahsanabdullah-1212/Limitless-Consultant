<template>
    <div class="parent-about">
        <div class="bread-crums">
            <br>
            <router-link to="/" :class="{ 'active': $isActive('/') }">
                <p>Home</p>
            </router-link><router-link to="/about" :class="{ 'active': $isActive('/about') }">
                <p>/About</p>
            </router-link>
        </div>
        <div class="about-row">
            <div class="about-col">
                <div class="about-design">
                    <div class="about-desgin1"></div>
                    <div class="about-desgin2"></div>
                </div>
                <div class="about-head">
                    <h1>About LC & BA</h1>
                </div>
            </div>
            <div class="about-col-2">
                <div class="about-image">
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name: 'AboutDetail',
}
</script>