<template>
    <div class="main-insight">
        <div class="insight-head">
            <h3> Featured Insights </h3>
        </div>
        <div class="insight-container">
            <div class="insight-article-1">
                <div class="insight-image-1">
                    <img src="@/assets/images/I-1.jpg" alt="F-1">
                </div>
                <div class="insight-content-1">
                    <div class="small-content">
                        <h2>The Modern General Counsel: Lead the Way</h2>
                        <p>June 10, 2024—In an increasingly complex macroeconomic, regulatory and geopolitical world,
                            the modern General Counsel are more...</p>
                    </div>
                    <div class="small-content">
                        <a href="#">Learn More &rarr;</a>
                    </div>
                </div>
            </div>

            <div class="insight-article">
                <div class="insight-image">
                    <img src="@/assets/images/I-2.jpeg" alt="F-1">
                </div>
                <div class="insight-content">
                    <div class="small-content">
                        <h2>The End of the LLP for Fund Managers?</h2>
                        <p>June 19, 2024—Reopening the debate on the costs and benefits of using an LLP for Private
                            Equity funds, following recent changes and a...</p>
                    </div>
                    <div class="small-content">
                        <a href="#">Read Article &rarr;</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="working-container">
            <div class="workingcard">
                <img src="@/assets/images/Lion.jpeg" alt="F-1">
                <div class="workingcard-body">
                    <h3>Solving the UK Fraud Problem</h3>
                    <p>June 06, 2024—The UK is in the grip of a silent epidemic: fraud. FTI Consulting discuss how
                        reward, retribution and restitution could help</p>
                    <h3>Read Article <font-awesome-icon :icon="['fas', 'arrow-right']" class="arrow" /></h3>
                </div>
            </div>
            <div class="workingcard">
                <img src="@/assets/images/Light.jpeg" alt="F-1">
                <div class="workingcard-body">
                    <h3>Sanctions Reviews: A Data-Driven Approach</h3>
                    <p>July 08, 2024—Sanctions reviews are crucial for financial institutions regulatory and compliance
                        framework. Regulatory scrutiny</p>
                    <h3>Read Article <font-awesome-icon :icon="['fas', 'arrow-right']" class="arrow" /></h3>
                </div>
            </div>
            <div class="workingcard">
                <img src="@/assets/images/Comp.jpeg" alt="F-1">
                <div class="workingcard-body">
                    <h3>The Power of Positive Paranoia: A Key Trait for Every CEO and General Counsel in 2024</h3>
                    <p>December 15, 2023—Discover how a positive paranoia doctrine can help CEOs and general counsel better navigate black swan events and unpredictable market shocks in the year</p>
                    <h3>Read Article <font-awesome-icon :icon="['fas', 'arrow-right']" class="arrow" /></h3>
                </div>
            </div>
        </div>
        <div class="main-work-btn">
            <div class="working-button">
            <button><h4>View All Insights</h4></button>
        </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'FeaturedInsights',
}
</script>