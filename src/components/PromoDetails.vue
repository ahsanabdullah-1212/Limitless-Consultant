<template>
    <div class="main-promo">
        <div class="promo-container">
            <div class="promo-background-overlay"></div>
            <div class="promo-content">
                <div class="promo-left-section">
                    <h1>Hire SRA Regulated Solicitors To Apply For Sponsor Licence For UK Employers</h1>
                    <p>Over 4,000 clients trust us to handle their immigration needs from start to finish. Let us manage
                        the complexities of your sponsor licence application so you can focus on upscaling your
                        enterprise. Our experienced team strives to make the process seamless and stress-free.</p>
                        <button type="submit">BOOK YOUR FREE CASE EVALUATION NOW</button>
                    <div class="promo-logos">
                        <img src="@/assets/images/promo1.png" alt="Solicitors Regulation Authority">
                        <img src="@/assets/images/promo-2.png" alt="The Legal 500">
                        <img src="@/assets/images/promo-3.png" alt="Trustpilot">
                        <img src="@/assets/images/promo-4.png" alt="Immigration & Asylum">
                    </div>
                </div>
                <div class="promo-right-section">
                    <h2>Schedule A Callback</h2>
                    <p>Fill in the details below so that our immigration advisors can contact and help you to deal with
                        your Sponsor Licence application from start to finish</p>
                    <form>
                        <input type="text" placeholder="First Name*" required>
                        <input type="text" placeholder="Last Name*" required>
                        <input type="tel" placeholder="Phone Number*" required>
                        <input type="email" placeholder="Email*" required>
                        <textarea placeholder="Details of your Immigration matter" required></textarea>
                        <p>Fill in the details below so that our immigration advisors can contact and help you to deal with
                            your Sponsor Licence application from start to finish</p>
                        <div class="checkboxes">
                            <label><input type="checkbox" required> We offer professional, paid legal advice</label>
                            <label><input type="checkbox" required> We do not provide sponsorship or assistance in
                                finding sponsored job roles for skilled worker visa</label>
                        </div>
                        <button type="submit">SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NewsConsult',
}
</script>