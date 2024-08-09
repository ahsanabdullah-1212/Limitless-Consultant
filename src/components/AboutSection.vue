<template>
    <div class="main-about-section">
        <div class="about-section">
            <div class="abt-section-1">
                <div class="about-sidebar-menu">
                    <h3>About</h3>
                    <ul>
                        <li>Awards & Recognition</li>
                        <li>Client Services</li>
                        <li>Corporate Citizenship</li>
                        <li @click="toggleDropdown('diversity')" class="about-sidebar-menu-dropdown">
                            <div class="listing-item">
                                <div class="li-list">
                                    <p>Diversity</p>
                                </div>
                                <div class="li-icon">
                                    <font-awesome-icon :icon="['fas', 'arrow-down']"
                                        :class="{ rotated: isOpen.diversity }" />
                                </div>
                            </div>
                            <ul :class="{ 'about-sidebar-menu-dropdown-content': true, 'open': isOpen.diversity }">
                                <li>Page 1</li>
                                <li>Page 2</li>
                                <li>Page 3</li>
                            </ul>
                        </li>
                        <li>Governance</li>
                        <li>History</li>
                        <li @click="toggleDropdown('leadership')" class="about-sidebar-menu-dropdown">
                            <div class="listing-item">
                                <div class="li-list">
                                    <p>Leadership</p>
                                </div>
                                <div class="li-icon">
                                    <font-awesome-icon :icon="['fas', 'arrow-down']"
                                        :class="{ rotated: isOpen.leadership }" />
                                </div>
                            </div>
                            <ul :class="{ 'about-sidebar-menu-dropdown-content': true, 'open': isOpen.leadership }">
                                <li>Page 1</li>
                                <li>Page 2</li>
                                <li>Page 3</li>
                            </ul>
                        </li>
                        <li>News</li>
                    </ul>
                    <h3>Related Pages</h3>
                    <div class="related-pages">
                        <p>Investor Relations</p>
                    </div>
                    <div class="contact-box">
                        <p>Need More Information?</p>
                        <span class="about-bar"></span>
                        <a href="#">Contact Us &nbsp;&nbsp;&nbsp;<font-awesome-icon :icon="['fas', 'arrow-right']"
                                class="arrow" /></a>
                    </div>
                </div>
            </div>
            <div class="abt-section-2">
                <div class="abt-sec-2-dsp">
                    <p>Over the last 40 years, FTI Consulting has grown to become a market-leading global consulting
                        firm
                        that brings together distinct capabilities and experts to serve as the trusted advisor to
                        clients
                        when they are facing their greatest opportunities and challenges. Each practice is a leader in
                        its
                        own right, staffed with experts recognized for the depth of their knowledge and a track record
                        of
                        making an impact. Collectively, FTI Consulting offers a comprehensive suite of services designed
                        to
                        assist clients across the business cycle—from proactive risk management to the ability to
                        respond
                        rapidly to unexpected crises and dynamic environments.</p>
                </div>
                <div class="about-section-2">
                    <div class="advisor-dsp">
                        <h3>A Trusted Advisor in the Most Critical Times</h3>
                        <p>When facing complex challenges, the world’s top law firms, corporations and financial
                            institutions turn to FTI Consulting as a trusted advisor.</p>
                    </div>
                    <ImageSlider />
                </div>
                <div class="about-section-3">
                    <div class="explore-dsp">
                        <h3>Explore Our Videos</h3>

                    </div>
                    <div class="explore-cards">
                        <div class="exp-cards-container">
                            <div class="exp-card">
                                <img src="@/assets/images/ex-1.jpg" alt="What Makes Us Unique" />
                                <div class="exp-card-content">
                                    <h3>What Makes Us Unique</h3>
                                    <p>
                                        FTI Consulting has a collaborative culture that values diverse views,
                                        professional growth,
                                        and making an impact in the...
                                    </p>
                                    <a href="#">Watch Video →</a>
                                </div>
                            </div>
                            <div class="exp-card">
                                <img src="@/assets/images/ex-2.jpg" alt="Experts With Impact" />
                                <div class="exp-card-content">
                                    <h3>Experts With Impact</h3>
                                    <p>
                                        FTI Consulting professionals have the opportunity to make their own impact by
                                        working on
                                        headline-making, history-...
                                    </p>
                                    <a href="#">Watch Video →</a>
                                </div>
                            </div>
                            <div class="exp-card">
                                <img src="@/assets/images/ex-3.jpg" alt="Diversity Starts at the Top" />
                                <div class="exp-card-content">
                                    <h3>Diversity Starts at the Top</h3>
                                    <p>
                                        At FTI Consulting, we are committed to embracing, cultivating and maintaining a
                                        culture of
                                        diversity, inclusion and belonging.
                                    </p>
                                    <a href="#">Watch Video →</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about-section-4">
                    <div class="general-e">
                        <div class="general-row">
                            <div class="general-image-1">
                                <img src="@/assets/images/news-1.jpg" alt="">
                            </div>
                            <div class="general-description">
                                <div class="general-info">
                                    <h3>2024 UK General Election</h3>
                                    <p>July 5,2024 - The Results -'Need to Know' Morning Update</p>
                                </div>
                                <div class="genral-more">
                                    <h3>Read Case Study <font-awesome-icon :icon="['fas', 'arrow-right']"
                                            class="arrow" /></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="e-descrip">
                        <h3>How we help our clients</h3>
                        <p>As the world’s leading expert-based firm, FTI Consulting is involved in dynamic and complex
                            matters. Our professionals have a seat at the table for the high-impact engagements that
                            shape history.</p>
                    </div>
                    <div class="general-e">
                        <div class="general-row">
                            <div class="general-image-1">
                                <img src="@/assets/images/news-2.jpg" alt="">
                            </div>
                            <div class="general-description">
                                <div class="general-info">
                                    <h3>2024 UK General Election</h3>
                                    <p>July 5,2024 - The Results -'Need to Know' Morning Update</p>
                                </div>
                                <div class="genral-more">
                                    <h3>Read Case Study <font-awesome-icon :icon="['fas', 'arrow-right']"
                                            class="arrow" /></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="general-e">
                        <div class="general-row">
                            <div class="general-image-1">
                                <img src="@/assets/images/news-3.jpg" alt="">
                            </div>
                            <div class="general-description">
                                <div class="general-info">
                                    <h3>2024 UK General Election</h3>
                                    <p>July 5,2024 - The Results -'Need to Know' Morning Update</p>
                                </div>
                                <div class="genral-more">
                                    <h3>Read Case Study <font-awesome-icon :icon="['fas', 'arrow-right']"
                                            class="arrow" /></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about-section-3">
                    <div class="explore-dsp">
                        <h3>Explore Our Videos</h3>

                    </div>
                    <div class="explore-cards">
                        <div class="exp-cards-container">
                            <div class="exp-card">
                                <img src="@/assets/images/e-n1.jpg" alt="What Makes Us Unique" />
                                <div class="exp-card-content">
                                    <h3>What Makes Us Unique</h3>
                                    <p>
                                        FTI Consulting has a collaborative culture that values diverse views,
                                        professional growth,
                                        and making an impact in the...
                                    </p>
                                    <a href="#">Watch Video →</a>
                                </div>
                            </div>
                            <div class="exp-card">
                                <img src="@/assets/images/e-n2.jpg" alt="Experts With Impact" />
                                <div class="exp-card-content">
                                    <h3>Experts With Impact</h3>
                                    <p>
                                        FTI Consulting professionals have the opportunity to make their own impact by
                                        working on
                                        headline-making, history-...
                                    </p>
                                    <a href="#">Watch Video →</a>
                                </div>
                            </div>
                            <div class="exp-card">
                                <img src="@/assets/images/e-n3.jpg" alt="Diversity Starts at the Top" />
                                <div class="exp-card-content">
                                    <h3>Diversity Starts at the Top</h3>
                                    <p>
                                        At FTI Consulting, we are committed to embracing, cultivating and maintaining a
                                        culture of
                                        diversity, inclusion and belonging.
                                    </p>
                                    <a href="#">Watch Video →</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about-section-4">
                    <div class="general-e">
                        <div class="general-row">
                            <div class="general-image-1">
                                <img src="@/assets/images/i.jpg" alt="">
                            </div>
                            <div class="general-description">
                                <div class="general-info">
                                    <h3>2024 UK General Election</h3>
                                    <p>July 5,2024 - The Results -'Need to Know' Morning Update</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="general-e">
                        <div class="general-row">
                            <div class="general-image-1">
                                <img src="@/assets/images/c.jpg" alt="">
                            </div>
                            <div class="general-description">
                                <div class="general-info">
                                    <h3>2024 UK General Election</h3>
                                    <p>July 5,2024 - The Results -'Need to Know' Morning Update</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="general-e">
                        <div class="general-row">
                            <div class="general-image-1">
                                <img src="@/assets/images/a.jpg" alt="">
                            </div>
                            <div class="general-description">
                                <div class="general-info">
                                    <h3>2024 UK General Election</h3>
                                    <p>July 5,2024 - The Results -'Need to Know' Morning Update</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="general-e">
                        <div class="general-row">
                            <div class="general-image-1">
                                <img src="@/assets/images/r.jpg" alt="">
                            </div>
                            <div class="general-description">
                                <div class="general-info">
                                    <h3>2024 UK General Election</h3>
                                    <p>July 5,2024 - The Results -'Need to Know' Morning Update</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="general-e">
                        <div class="general-row">
                            <div class="general-image-1">
                                <img src="@/assets/images/e.jpg" alt="">
                            </div>
                            <div class="general-description">
                                <div class="general-info">
                                    <h3>2024 UK General Election</h3>
                                    <p>July 5,2024 - The Results -'Need to Know' Morning Update</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>

</template>


<script>
import ImageSlider from '@/components/ImageSlider.vue';
export default {
    name: 'AboutSection',
    components: {
        ImageSlider,
    },
    data() {
        return {
            isOpen: {
                diversity: false,
                leadership: false,
            },
        };
    },
    methods: {
        toggleDropdown(menu) {
            this.isOpen[menu] = !this.isOpen[menu];
        },
    },
};
</script>