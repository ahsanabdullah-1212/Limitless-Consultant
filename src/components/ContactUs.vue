<template>
    <div class="main-contact">
        <div class="bread-crums">
            <br>
            <router-link to="/" :class="{ 'active': $isActive('/') }">
                <p>Home</p>
            </router-link><router-link to="/contact" :class="{ 'active': $isActive('/contact') }">
                <p>/Contact us</p>
            </router-link>
        </div>
        <div class="form-container">
            <div class="contact-heading">
                <h1>Contact Us</h1>
                <p>To learn more about our service offerings and industry expertise, please visit our Service or
                    Industry pages.
                    <br>
                    To submit a Request for Proposal (RFP) or to inquire about the Service or Industry of your interest,
                    please email the Key Contact(s) listed on the Service/Industry page.
                    <br>
                    For existing clients, please contact an FTI Consulting professional directly. Click here to see the
                    complete list of professionals.
                </p>
            </div>
            <form ref="form" @submit.prevent="sendEmail">
                <div class="form-group">
                    <label for="first-name">First Name <span class="required">*</span></label>
                    <input type="text" id="first-name" name="first-name">
                </div>
                <div class="form-group">
                    <label for="last-name">Last Name <span class="required">*</span></label>
                    <input type="text" id="last-name" name="last-name">
                </div>
                <div class="form-group">
                    <label for="company">Company <span class="required">*</span></label>
                    <input type="text" id="company" name="company">
                </div>
                <div class="form-group">
                    <label for="email">Email <span class="required">*</span></label>
                    <input type="email" id="email" name="email">
                </div>
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" id="title" name="title">
                </div>
                <div class="form-group">
                    <label for="telephone">Telephone</label>
                    <input type="tel" id="telephone" name="telephone">
                </div>
                <div class="form-group">
                    <label for="country">Select a Country/Location <span class="required">*</span></label>
                    <select id="country" name="country">
                        <option value="">Select a Country/Location</option>
                        <!-- Add more options here -->
                    </select>
                </div>
                <div class="form-group">
                    <label for="comments">Comments</label>
                    <textarea id="comments" name="comments" rows="4"></textarea>
                </div>
                <button type="submit">SUBMIT</button>
            </form>
        </div>

    </div>
</template>
<script>
import emailjs from '@emailjs/browser';

export default {
    name: 'ContactUs',
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
<style scoped>
.form-container button{
    padding: 15px;
    background: var(--accent-color);
    border: none;
    color: var(--white-color);
    font-size: 1.1em;
    cursor: pointer;
}
.form-container {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 5px;
}
@media(max-width:950px){
    .form-container{
        width: 77%;
    }
}
.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: var(--dark-grey);
}

input[type="text"],
input[type="email"],
input[type="tel"],
select,
textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid var(--grey);
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 14px;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="tel"]:focus,
select:focus,
textarea:focus {
    border-color: var(--primary-color);
    outline: none;
}

.required {
    color: var(--accent-color);
}

@media screen and (max-width: 600px) {
    .form-container {
        padding: 15px;
    }

    .form-group {
        margin-bottom: 15px;
    }

    label {
        font-size: 14px;
    }

    input[type="text"],
    input[type="email"],
    input[type="tel"],
    select,
    textarea {
        font-size: 13px;
        padding: 8px;
    }
}
</style>