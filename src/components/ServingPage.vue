<template>
    <div class="main-serving">
        <div class="bread-crums">
            <router-link to="/" :class="{ 'active': $isActive('/') }">
                <p>Home</p>
            </router-link><router-link to="/services" :class="{ 'active': $isActive('/services') }">
                <p>/Services</p>
            </router-link>
        </div>
        <div class="services-B">
            <h1>Our Services</h1>
        </div>
        <div class="services-B-2">
            <div class="serving-image">
                <img src="@/assets/images/offer-1.jpg" alt="">
            </div>
            <h1>Our Services</h1>
        </div>
        <div class="serving-search">
            <div class="serving-search-container">
                <input type="text" placeholder="Search Services" class="search-input" />
                <font-awesome-icon :icon="['fas', 'search']" class="serving-search-icon" />
            </div>
        </div>
        <div class="serving-description">
            <div class="serve-p">
                <p>
                    LC & BA UK understands that to help meet client challenges and opportunities successfully in
                    a
                    global economy, you must have a full arsenal of capabilities and experience available at a moment’s
                    notice. Our strategic offices in the United Kingdom and worldwide ensure that LC & BA is
                    available for your needs.
                </p>
            </div>
        </div>
        <div class="serving-container">
            <div class="serving-category">
                <div class="S-c">Antitrust&nbsp;<font-awesome-icon :icon="['fas', 'arrow-right']" class="arrow" /></div>
                <span class="border"></span>
            </div>
            <div class="serving-category">

                <div class="S-c">
                    Business Transformation&nbsp;<font-awesome-icon :icon="['fas', 'arrow-right']" class="arrow" />
                    <span class="border"></span>
                    <div class="serving-subcategory">Finance & The Office of the CFO</div>
                </div>
            </div>
            <div class="serving-category">
                <div class="S-c">
                    Dispute Advisory & International Arbitration&nbsp;<font-awesome-icon :icon="['fas', 'arrow-right']"
                        class="arrow" />
                    <span class="border-1"></span>
                </div>
                <div class="serving-subcategory">Intellectual Property</div>
                <div class="serving-subcategory">International Arbitration</div>
                <div class="serving-subcategory">Securities Derivatives Financial Analysis</div>
                <div class="serving-subcategory">Post-M&A Disputes</div>
            </div>
            <div class="serving-category">
                <div class="S-c">ESG & Sustainability&nbsp;<font-awesome-icon :icon="['fas', 'arrow-right']"
                        class="arrow" /></div>
                <span class="border"></span>
            </div>
            <div class="serving-category">
                <div class="S-c">Investigations & Monitorings&nbsp;<font-awesome-icon :icon="['fas', 'arrow-right']"
                        class="arrow" /></div>
                <span class="border"></span>
            </div>
            <div class="serving-category">
                <div class="S-c">Policy & Regulation&nbsp;<font-awesome-icon :icon="['fas', 'arrow-right']"
                        class="arrow" /></div>
                <span class="border"></span>
            </div>
            <div class="serving-category">
                <div class="S-c">
                    Risk & Compliance&nbsp;<font-awesome-icon :icon="['fas', 'arrow-right']" class="arrow" />
                    <span class="border"></span>
                    <div class="serving-subcategory">Risk Management</div>
                </div>
                
            </div>
            <div class="serving-category">
                <div class="S-c">Strategic Communications&nbsp;<font-awesome-icon :icon="['fas', 'arrow-right']"
                        class="arrow" /></div>
                <span class="border"></span>
            </div>
            <div class="serving-category">
                <div class="S-c">
                    Transactions&nbsp;<font-awesome-icon :icon="['fas', 'arrow-right']" class="arrow" />
                    <span class="border"></span>
                    <div class="serving-subcategory">European Tax Advisory</div>
                </div>
                        </div>
            <div class="serving-category">
                <div class="S-c">Turnaround & Restructuring&nbsp;<font-awesome-icon :icon="['fas', 'arrow-right']"
                        class="arrow" /></div>
                <span class="border"></span>
            </div>
            <div class="serving-category">
                <div class="S-c">
                    Valuation & Damages&nbsp;<font-awesome-icon :icon="['fas', 'arrow-right']" class="arrow" />
                    <span class="border"></span>
                    <div class="serving-subcategory">Financial Instruments Valuation</div>
                </div>
                
            </div>

        </div>
    </div>
</template>
<script>
export default {
    name: 'ServingPage',
    data() {
        return {
            query: '',
        };
    },
}
</script>
