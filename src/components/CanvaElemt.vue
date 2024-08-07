<template>
    <div class="outer-container">
        <div class="parent">
            <div class="left-wall">
                <div class="text">
                    Singular Value.<br>Exponential Impact.
                </div>
                <canvas ref="canvas"></canvas>
            </div>
            <div class="right-wall">
                <div class="cards">
                    <div class="card">
                        <div class="card-description">
                            <h1>Protect</h1>
                            <div class="bg-tangerine h-0.5 w-6"></div>
                            <p>Learn how we’re helping organizations proactively manage emerging risks and protect value
                                in a constantly shifting, complex digital environment.</p>
                            <h3>Case Studies</h3>
                            <p>-> Extensive Data Identification, Analysis and Extraction in Response to Consumer
                                Services Privacy Breach</p>
                            <p>-> Rapid Insights Across Millions of Documents from Emerging Data Sources in IP Theft
                                Matter</p>
                            <p>-> Neutralizing Data Privacy Challenges For U.S. Division of European Pharma and Medical
                                Device Company</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-description">
                            <h1>Respond</h1>
                            <div class="bg-tangerine h-0.5 w-6"></div>
                            <p>Our experts help organizations stay competitive with the latest digital technologies —
                                and ahead of the multifaceted risks they can present.</p>
                            <h3>Case Studies</h3>
                            <p>-> Extensive Data Identification, Analysis and Extraction in Response to Consumer
                                Services Privacy Breach</p>
                            <p>-> Rapid Insights Across Millions of Documents from Emerging Data Sources in IP Theft
                                Matter</p>
                            <p>-> Neutralizing Data Privacy Challenges For U.S. Division of European Pharma and Medical
                                Device Company</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-description">
                            <h1>Transform</h1>
                            <div class="bg-tangerine h-0.5 w-6"></div>
                            <p>Across engagements, we focus on sustained value creation, leveraging advanced
                                technologies to equip organizations for the future..</p>
                            <h3>Case Studies</h3>
                            <p>-> Modernizing the Data Warehouse of a Statewide Healthcare System</p>
                            <p>-> Building the Digital Supply Chain Foundation for TelevisaUnivision</p>
                            <p>-> Automating the Loan Workout Process for National Bank</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-description">
                            <h1>Grow</h1>
                            <div class="bg-tangerine h-0.5 w-6"></div>
                            <p>As advanced technologies reshape the digital landscape, our expert-led, impact-driven
                                approach helps businesses realize tangible value..</p>
                            <h3>Case Studies</h3>
                            <p>-> Building Geographical Analysis & Visualization Tool for EVs</p>
                            <p>-> Empowering Growth and Boosting Valuation Through a Strategic Tech Acquisition</p>
                            <p>-> Positioning a $3 Billion IT Services Provider for Additional Growth</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="cards-small">
            <div class="cards">
                <div class="card">
                    <div class="card-description">
                        <h1>Protect</h1>
                        <div class="bg-tangerine h-0.5 w-6"></div>
                        <p>Learn how we’re helping organizations proactively manage emerging risks and protect value
                            in a constantly shifting, complex digital environment.</p>
                        <h3>Case Studies</h3>
                        <p>-> Extensive Data Identification, Analysis and Extraction in Response to Consumer
                            Services Privacy Breach</p>
                        <p>-> Rapid Insights Across Millions of Documents from Emerging Data Sources in IP Theft
                            Matter</p>
                        <p>-> Neutralizing Data Privacy Challenges For U.S. Division of European Pharma and Medical
                            Device Company</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-description">
                        <h1>Respond</h1>
                        <div class="bg-tangerine h-0.5 w-6"></div>
                        <p>Our experts help organizations stay competitive with the latest digital technologies —
                            and ahead of the multifaceted risks they can present.</p>
                        <h3>Case Studies</h3>
                        <p>-> Extensive Data Identification, Analysis and Extraction in Response to Consumer
                            Services Privacy Breach</p>
                        <p>-> Rapid Insights Across Millions of Documents from Emerging Data Sources in IP Theft
                            Matter</p>
                        <p>-> Neutralizing Data Privacy Challenges For U.S. Division of European Pharma and Medical
                            Device Company</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-description">
                        <h1>Transform</h1>
                        <div class="bg-tangerine h-0.5 w-6"></div>
                        <p>Across engagements, we focus on sustained value creation, leveraging advanced
                            technologies to equip organizations for the future..</p>
                        <h3>Case Studies</h3>
                        <p>-> Modernizing the Data Warehouse of a Statewide Healthcare System</p>
                        <p>-> Building the Digital Supply Chain Foundation for TelevisaUnivision</p>
                        <p>-> Automating the Loan Workout Process for National Bank</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-description">
                        <h1>Grow</h1>
                        <div class="bg-tangerine h-0.5 w-6"></div>
                        <p>As advanced technologies reshape the digital landscape, our expert-led, impact-driven
                            approach helps businesses realize tangible value..</p>
                        <h3>Case Studies</h3>
                        <p>-> Building Geographical Analysis & Visualization Tool for EVs</p>
                        <p>-> Empowering Growth and Boosting Valuation Through a Strategic Tech Acquisition</p>
                        <p>-> Positioning a $3 Billion IT Services Provider for Additional Growth</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { createNoise2D } from 'simplex-noise';

export default {
    name: 'JellySphere',
    data() {
        return {
            noise: createNoise2D(),
            time: 0,
            baseRadius: 150,
            scrollEffect: 0
        };
    },
    mounted() {
        this.canvas = this.$refs.canvas;
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth / 2;
        this.canvas.height = window.innerHeight;
        window.addEventListener('resize', this.onResize);
        window.addEventListener('scroll', this.onScroll);
        this.drawJelly();
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.onResize);
        window.removeEventListener('scroll', this.onScroll);
    },
    methods: {
        onResize() {
            this.canvas.width = window.innerWidth / 2;
            this.canvas.height = window.innerHeight;
        },
        onScroll() {
            this.scrollEffect = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        },
        drawJelly() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            let radius = this.baseRadius;
            let petalEffect = 50 * this.scrollEffect;

            this.ctx.save();
            this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);

            let gradient = this.ctx.createRadialGradient(0, 0, radius / 2, 0, 0, radius);
            gradient.addColorStop(0, 'rgba(255, 99, 71, 0.8)');
            gradient.addColorStop(1, 'rgba(255, 69, 0, 0.4)');

            this.ctx.beginPath();
            for (let i = 0; i < 2 * Math.PI; i += 0.05) {
                let noiseValue = this.noise(Math.cos(i) + this.time * 0.5, Math.sin(i) + this.time * 0.5);
                let r = radius + noiseValue * petalEffect;
                let x = r * Math.cos(i + this.time * 0.1);
                let y = r * Math.sin(i + this.time * 0.1);
                if (i === 0) {
                    this.ctx.moveTo(x, y);
                } else {
                    this.ctx.lineTo(x, y);
                }
            }
            this.ctx.closePath();
            this.ctx.fillStyle = gradient;
            this.ctx.fill();

            for (let i = 1; i <= 6; i++) {
                this.ctx.beginPath();
                for (let j = 0; j < 2 * Math.PI; j += 0.05) {
                    let noiseValue = this.noise(Math.cos(j) + this.time + i, Math.sin(j) + this.time + i);
                    let r = radius - i * 10 + noiseValue * petalEffect;
                    let x = r * Math.cos(j + this.time * 0.1);
                    let y = r * Math.sin(j + this.time * 0.1);
                    if (j === 0) {
                        this.ctx.moveTo(x, y);
                    } else {
                        this.ctx.lineTo(x, y);
                    }
                }
                this.ctx.closePath();
                this.ctx.strokeStyle = `rgba(255, 69, 0, ${0.15 / i})`;
                this.ctx.stroke();
            }

            this.ctx.restore();

            this.time += 0.01;
            requestAnimationFrame(this.drawJelly);
        }
    }
};
</script>

<style scoped>
.bg-tangerine {
    height: 3px;
    width: 20px;
    margin-left: 19px;
    margin-top: -17px;
    margin-bottom: 17px;
    --tw-bg-opacity: 1;
    background-color: rgb(225 82 61 / var(--tw-bg-opacity));
}
.cards-small {
    display: none;
}

@media(max-width:800px) {
    .cards-small {
        display: flex;
        flex-direction: column;
    }
}

.card-description p {
    font-size: 0.9rem;
    padding: 10px;
}

.card-description h1 {
    font-size: 1.7rem;
    padding: 20px;
}

.card-description h3 {
    color: var(--light-grey);
    font-size: 1.1rem;
    padding: 20px;
}

.outer-container {
    position: relative;
    height: auto;
    background-color: var(--darkish-blue);
}

.parent {
    display: flex;
    padding-bottom: 50px;
}

@media(max-width:800px) {
    .parent {
        display: none
    }
}

.left-wall {
    position: sticky;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--darkish-blue);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 2em;
    text-align: center;
    z-index: 1;
}

canvas {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.right-wall {
    width: 100%;
    height: auto;
    overflow-y: auto;
    background-color: var(--darkish-blue);
}

.cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 120px;
    border-radius: 22px;
}

.card {
    width: 50%;
    margin: 20px 0;
    padding: 20px;
    border-radius: 22px;
    background-color: #071928;
    color: white;
    border: 1px solid #071928;
    font-size: 1.5em;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    /* Adjust values as needed */
}

@media(max-width:1450px) {
    .card {
        width: 60%
    }
}

@media(max-width:1030px) {
    .card {
        width: 80%
    }
}
</style>