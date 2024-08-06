<template>
    <div>
        <NavbarComponent />
        <AccountPage />
        <FooterContainer />
        <router-view />
    </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue'
import AccountPage from '@/components/AccountPage.vue'
import FooterContainer from '@/components/FooterContainer.vue'
export default {
    name: 'AccountingPage',

    components: {
        AccountPage,
        FooterContainer,
        NavbarComponent,
    }
}
</script>