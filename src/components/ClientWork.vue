<template>
    <div class="main-client">
        <div class="client-row">
            <div class="client-heading">
                <h2>Featured Client Work</h2>
            </div>
            <div class="working-container">
                <div class="workingcard">
                    <img src="@/assets/images/F-1.jpeg" alt="F-1">
                    <div class="workingcard-body">
                        <h3>Helping Hertz Get Its Wheels Back in Motion</h3>
                        <p>When COVID-19 put a pause on travel, Hertz filed for bankruptcy and enlisted LC & BA
                            to support its chapter 11 restructuring. Learn more here.</p>
                        <h3>Read Case Study <font-awesome-icon :icon="['fas', 'arrow-right']" class="arrow" /></h3>
                    </div>
                </div>
                <div class="workingcard">
                    <img src="@/assets/images/F-2.jpg" alt="F-1">
                    <div class="workingcard-body">
                        <h3>Defining a Record $27 Million Civil Rights Settlement for the Estate of George Floyd</h3>
                        <p>LC & BA’s Compass Lexecon assisted with a federal civil rights lawsuit filed by the
                            Estate of George P. Floyd, reaching a historic settlement amount.</p>
                        <h3>Read Case Study <font-awesome-icon :icon="['fas', 'arrow-right']" class="arrow" /></h3>
                    </div>
                </div>
                <div class="workingcard">
                    <img src="@/assets/images/F-3.jpeg" alt="F-1">
                    <div class="workingcard-body">
                        <h3>Ed Sheeran Prevails in Music Copyright Infringement Case</h3>
                        <p>LC & BA provided key trial technology for Ed Sheeran’s defense in a music copyright
                            infringement case involving his 2014 hit song, “Thinking Out Loud.”</p>
                        <h3>Read Case Study <font-awesome-icon :icon="['fas', 'arrow-right']" class="arrow" /></h3>
                    </div>
                </div>
            </div>
            <br>
            <br>
            <div class="working-container">
                <div class="workingcard">
                    <img src="@/assets/images/F-4.jpg" alt="F-1">
                    <div class="workingcard-body">
                        <h3>Challenging a Restructuring Plan to Safeguard Pari Passu Principle</h3>
                        <p>LC & BA was engaged to help a group of 2029 bondholders overturn the proposed
                            restructuring plan for real estate company…</p>
                        <h3>Read Case Study <font-awesome-icon :icon="['fas', 'arrow-right']" class="arrow" /></h3>
                    </div>
                </div>
                <div class="workingcard">
                    <img src="@/assets/images/F-5.jpg" alt="F-1">
                    <div class="workingcard-body">
                        <h3>Maintaining Public Confidence in the National Health Service During a Global Health Crisis
                        </h3>
                        <p>During COVID-19, NHS hospitals needed help with strategic communications. LC & BA
                            worked alongside the NHS to…</p>
                        <h3>Read Case Study <font-awesome-icon :icon="['fas', 'arrow-right']" class="arrow" /></h3>
                    </div>
                </div>
                <div class="workingcard">
                    <img src="@/assets/images/F-6.jpg" alt="F-1">
                    <div class="workingcard-body">
                        <h3>Helping British Consumers Save Millions on Energy in a Reformed Market</h3>
                        <p>LC & BA assessed how large energy-intensive consumers could save on electricity bills
                            by siting in areas with lower wholesale…</p>
                        <h3>Read Case Study <font-awesome-icon :icon="['fas', 'arrow-right']" class="arrow" /></h3>
                    </div>
                </div>
                <div class="workingcard">
                    <img src="@/assets/images/F-7.jpg" alt="F-1">
                    <div class="workingcard-body">
                        <h3>Advancing International Accountability in Support of Ukraine</h3>
                        <p>Following the February 2022 invasion of Ukraine, LC & BA acted in support of a special
                            international tribunal to hold Russia…</p>
                        <h3>Read Case Study <font-awesome-icon :icon="['fas', 'arrow-right']" class="arrow" /></h3>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'ClientWork',
}
</script>