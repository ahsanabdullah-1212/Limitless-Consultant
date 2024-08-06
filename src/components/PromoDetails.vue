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
                </div>
                <div class="promo-right-section">
                    <h2>Schedule A Callback</h2>
                    <p>Fill in the details below so that our immigration advisors can contact and help you to deal with
                        your Sponsor Licence application from start to finish</p>
                    <form ref="form" @submit.prevent="sendEmail">
                        <input type="text" placeholder="First Name*" name="first_name" required>
                        <input type="text" placeholder="Last Name*" name="last_name" required>
                        <input type="tel" placeholder="Phone Number*" name="phone_number" required>
                        <input type="email" placeholder="Email*" name="email" required>
                        <textarea placeholder="Details of your Immigration matter" name="details" required></textarea>
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
import emailjs from '@emailjs/browser';

export default {
    name: 'NewsConsult',
    methods: {
        sendEmail() {
            emailjs.sendForm(
                'service_q8kemva',
                'template_38t6kpt',
                this.$refs.form,
                '5nKo5y1sZXI-TcCGG'
            )
            .then((result) => {
                console.log(result.text);
                alert('Your message has been sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('There was an error sending your message. Please try again.');
            });
        }
    }
}
</script>