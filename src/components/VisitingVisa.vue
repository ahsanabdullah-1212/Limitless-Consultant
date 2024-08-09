<template>
    <div class="main-visit">
        <div class="bread-crums">
            <router-link to="/" :class="{ 'active': $isActive('/') }">
                <p>Home </p>
            </router-link><router-link to="/visit" :class="{ 'active': $isActive('/visit') }">
                <p> /VisitVisa</p>
            </router-link>
        </div>
        <div class="visit-countries">
            <div class="visit-head">
                <h1>Best Visa Consultant in Uk.</h1>
            </div>
            <div class="visit-d">
                <p>We provide proper visa services and consultancy for the below-mentioned countries. We have updated
                information about the documentation, processes, requirements and the rules of visa embassies. We are the
                one-stop visa agent company that will help you to get fly to your desired destination.</p>
            </div>
            <div class="visit-graph">
                <div class="visit-image">
                    <img src="@/assets/images/graph.png" alt="">
                </div>
            </div>
            <div class="visit-names">
                <div class="country-container">
                    <div class="country-column">
                        <div class="country-item">Anguilla</div>
                        <div class="country-item">Austria</div>
                        <div class="country-item">Bangladesh</div>
                        <div class="country-item">Brazil</div>
                        <div class="country-item">Canada</div>
                        <div class="country-item">Curacao</div>
                        <div class="country-item">Djibouti</div>
                        <div class="country-item">Ethiopia</div>
                    </div>
                    <div class="country-column">
                        <div class="country-item">Argentina</div>
                        <div class="country-item">Azerbaijan</div>
                        <div class="country-item">Belarus</div>
                        <div class="country-item">British Virgin Islands</div>
                        <div class="country-item">Cayman Islands</div>
                        <div class="country-item">Cyprus</div>
                        <div class="country-item">Dubai (UAE)</div>
                        <div class="country-item">Faroe Islands</div>
                    </div>
                    <div class="country-column">
                        <div class="country-item">Aruba</div>
                        <div class="country-item">Bahamas</div>
                        <div class="country-item">Belgium</div>
                        <div class="country-item">Bulgaria</div>
                        <div class="country-item">China</div>
                        <div class="country-item">Czech Republic</div>
                        <div class="country-item">Egypt</div>
                        <div class="country-item">Finland</div>
                    </div>
                    <div class="country-column">
                        <div class="country-item">Australia</div>
                        <div class="country-item">Bahrain</div>
                        <div class="country-item">Bonaire</div>
                        <div class="country-item">Cambodia</div>
                        <div class="country-item">Cuba</div>
                        <div class="country-item">Denmark</div>
                        <div class="country-item">Estonia</div>
                        <div class="country-item">Falkland Islands</div>
                    </div>
                    <div class="country-column">
                        <div class="country-item">France</div>
                        <div class="country-item">Germany</div>
                        <div class="country-item">Ghana</div>
                        <div class="country-item">Gibraltar</div>
                        <div class="country-item">Greece</div>
                        <div class="country-item">Greenland</div>
                        <div class="country-item">Hong Kong</div>
                        <div class="country-item">Hungary</div>
                    </div>
                    <div class="country-column">
                        <div class="country-item">Iceland</div>
                        <div class="country-item">India</div>
                        <div class="country-item">Indonesia</div>
                        <div class="country-item">Ireland</div>
                        <div class="country-item">Italy</div>
                        <div class="country-item">Jamaica</div>
                        <div class="country-item">Japan</div>
                        <div class="country-item">Kenya</div>
                    </div>
                    <div class="country-column">
                        <div class="country-item">Kyrgyzstan</div>
                        <div class="country-item">Latvia</div>
                        <div class="country-item">Liechtenstein</div>
                        <div class="country-item">Lithuania</div>
                        <div class="country-item">Luxembourg</div>
                        <div class="country-item">Malaysia</div>
                        <div class="country-item">Malta</div>
                        <div class="country-item">Mauritius</div>
                    </div>
                    <div class="country-column">
                        <div class="country-item">Morocco</div>
                        <div class="country-item">Myanmar (Burma)</div>
                        <div class="country-item">Netherlands</div>
                        <div class="country-item">New Zealand</div>
                        <div class="country-item">Nigeria</div>
                        <div class="country-item">Norway</div>
                        <div class="country-item">Oman</div>
                        <div class="country-item">Philippines</div>
                    </div>
                    <div class="country-column">
                        <div class="country-item">Poland</div>
                        <div class="country-item">Portugal</div>
                        <div class="country-item">Romania</div>
                        <div class="country-item">Russia</div>
                        <div class="country-item">Rwanda</div>
                        <div class="country-item">Saudi Arabia</div>
                        <div class="country-item">Schengen States</div>
                        <div class="country-item">Seychelles</div>
                    </div>
                    <div class="country-column">
                        <div class="country-item">Singapore</div>
                        <div class="country-item">Slovakia</div>
                        <div class="country-item">Slovenia</div>
                        <div class="country-item">South Africa</div>
                        <div class="country-item">South Korea</div>
                        <div class="country-item">Spain</div>
                        <div class="country-item">Sri Lanka</div>
                        <div class="country-item">St Maarten</div>
                    </div>
                    <div class="country-column">
                        <div class="country-item">Suriname</div>
                        <div class="country-item">Sweden</div>
                        <div class="country-item">Switzerland</div>
                        <div class="country-item">Tajikistan</div>
                        <div class="country-item">Tanzania</div>
                        <div class="country-item">Thailand</div>
                        <div class="country-item">Turkey</div>
                        <div class="country-item">Turks and Caicos</div>
                    </div>
                    <div class="country-column">
                        <div class="country-item">Uganda</div>
                        <div class="country-item">Ukraine</div>
                        <div class="country-item">United Kingdom</div>
                        <div class="country-item">USA</div>
                        <div class="country-item">Uzbekistan</div>
                        <div class="country-item">Vietnam</div>
                        <div class="country-item">Zambia</div>
                        <div class="country-item">Zimbabwe</div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>

</script>