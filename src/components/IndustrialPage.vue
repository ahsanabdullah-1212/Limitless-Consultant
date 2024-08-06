<template>
    <div class="main-serving">
        <div class="bread-crums">
            <router-link to="/" :class="{ 'active': $isActive('/') }">
                <p>Home</p>
            </router-link><router-link to="/industries" :class="{ 'active': $isActive('/industries') }">
                <p>/Industries</p>
            </router-link>
        </div>
        <div class="services-C">
            <h1>Our Industires</h1>
        </div>
        <div class="services-B-3">
            <div class="serving-image">
                <img src="@/assets/images/offer-2.jpg" alt="">
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
                     Consulting UK provides the knowledge, focus and skill to help clients compete in a global
                    economy where success crosses industries and borders. Our UK consulting professionals recognise the
                    interrelationships among global industries and deliver breadth and depth of experience.
                </p>
            </div>
        </div>
        <div class="serving-container">
            <div class="serving-category">
                <div class="S-c">Constructions, Projects & Assets&nbsp;<font-awesome-icon :icon="['fas', 'arrow-right']" class="arrow" /></div>
                <span class="border"></span>
                <div class="serving-subcategory">Construction Advisory</div>
                <div class="serving-subcategory">Cost Analytics & Auditing</div>
                <div class="serving-subcategory">Delay Experts</div>
                <div class="serving-subcategory">Dispute Resolution</div>
                <div class="serving-subcategory">Planning & Scheduling</div>
                <div class="serving-subcategory">Project Types & Industry Sectors</div>
                <div class="serving-subcategory">Quantum & Damages Experts</div>
            </div>
            <div class="serving-category">
                <div class="S-c">
                    Energy & Utilities&nbsp;<font-awesome-icon :icon="['fas', 'arrow-right']" class="arrow" />
                    <span class="border"></span>
                    <div class="serving-subcategory">Clean & Smart Mobility</div>
                    <div class="serving-subcategory">Downstream Refining & Petrochemicals</div>
                    <div class="serving-subcategory">Energy Trading & Risk Management</div>
                    <div class="serving-subcategory">Liquefied Natural Gas (“LNG”)</div>
                    <div class="serving-subcategory">Natural Gas Midstream</div>
                    <div class="serving-subcategory">Network Regulation</div>
                    <div class="serving-subcategory">Oil & Gas Upstream</div>
                    <div class="serving-subcategory">Retail Energy</div>
                    <div class="serving-subcategory">Wholesale Energy</div>
                </div>
            </div>
            <div class="serving-category">
                <div class="S-c">
                    Financial Services Consulting & Advisory&nbsp;<font-awesome-icon :icon="['fas', 'arrow-right']"
                        class="arrow" />
                    <span class="border-2"></span>
                </div>
                
                <div class="serving-subcategory">Financial Crime Compliance</div>
                <div class="serving-subcategory">Financial Risk Management
                </div>
                <div class="serving-subcategory">Governance, Regulatory Risk and Compliance
                </div>
                <div class="serving-subcategory">Investigations, Discovery and Assurance
                </div>
                <div class="serving-subcategory">Litigation and Dispute Support
                </div>
                <div class="serving-subcategory">Stakeholder Communications and Crisis Management
                </div>
                <div class="serving-subcategory">Supporting Transactions
                </div>
            </div>
            <div class="serving-category">
                <div class="S-c">Healthcare & Life Sciences&nbsp;<font-awesome-icon :icon="['fas', 'arrow-right']"
                        class="arrow" /></div>
                <span class="border"></span>
            </div>
            <div class="serving-category">
                <div class="S-c">Insurance&nbsp;<font-awesome-icon :icon="['fas', 'arrow-right']" class="arrow" /></div>
                <span class="border"></span>
                <div class="serving-subcategory">Actuarial & Pension</div>
                <div class="serving-subcategory">Claims & Underwriting Analytics</div>
                <div class="serving-subcategory">Corporate Advisory Services</div>
                <div class="serving-subcategory">Forensic Accounting & Investigations</div>
                <div class="serving-subcategory">Governance, Regulation & Compliance</div>
                <div class="serving-subcategory">Litigation & Dispute Resolution</div>
                <div class="serving-subcategory">Performance Analytics</div>
            </div>
            <div class="serving-category">
                <div class="S-c">Real Estate&nbsp;<font-awesome-icon :icon="['fas', 'arrow-right']" class="arrow" /></div>
                <span class="border"></span>
                <div class="serving-subcategory">Real Estate Communications & Media Relations</div>
                <div class="serving-subcategory">Real Estate Finance & Debt Advisory</div>
                <div class="serving-subcategory">Real Estate Tax Advisory</div>
                <div class="serving-subcategory">Real Estate Transactions</div>
                <div class="serving-subcategory">Governance, Regulation & Compliance</div>
                <div class="serving-subcategory">Real Estate Turnaround & Restructuring</div>
                <div class="serving-subcategory">Real Estate Transfer Pricing</div>
            </div>
            <div class="serving-category">
                <div class="S-c">Telecom, Media & Technology&nbsp;<font-awesome-icon :icon="['fas', 'arrow-right']" class="arrow" /></div>
                <span class="border"></span>
                <div class="serving-subcategory">Media & Entertainment</div>
                <div class="serving-subcategory">Technology</div>
                <div class="serving-subcategory">Real Estate Tax Advisory</div>
                <div class="serving-subcategory">Telecommunications</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'IndustrialPage',
    data() {
        return {
            query: '',
        };
    },
}
</script>
