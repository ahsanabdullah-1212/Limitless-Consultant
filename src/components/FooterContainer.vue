<template>
    <div class="main-footer">
        <div class="cta">
            <div class="cta-section">
                <h2>Sign up to get access to LC & BA Insights</h2>
                <a href="#">Subscribe</a>
            </div>
        </div>
        <div class="footer-container">
            <div class="footer-content">
                <div class="footer-logo">
                    <img src="@/assets/images/footer.png" alt="Logo">
                    <p>&copy; 2024 LC & BA, Inc., including its subsidiaries and affiliates, is a consulting firm
                        and is not a certified public accounting firm or a law firm. All Rights Reserved.</p>
                </div>
                <div class="footer-links">
                    <a href="#">Services</a>
                    <a href="#">Industries</a>
                    <a href="#">Insights</a>
                </div>
                <div class="footer-links">
                    <a href="#">Our Experts</a>
                    <a href="#">Locations</a>
                    <a href="#">Careers</a>
                </div>
                <div class="footer-links">
                    <a href="#">About LC & BA</a>
                    <a href="#">News</a>
                    <a href="#">Investor Relations</a>
                </div>
                <div class="footer-legal">
                    <h3>Stay Connected</h3>
                    <div class="footer-social">
                        <a href="#"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
                        <a href="#"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
                        <a href="#"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
                        <a href="#"><font-awesome-icon :icon="['fab', 'youtube']" /></a>
                        <a href="#"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
                    </div>
                    <p>
                        Legal
                        Privacy
                        Modern Slavery Statement
                        UK Regulatory
                        Sitemap
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'FooterContainer',
}
</script>