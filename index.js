const { createApp } = Vue;
const { createRouter, createWebHashHistory } = VueRouter;

const About = {
    template: `
    <div>
        <h2>About Me</h2>
        <p>
            I am Doris Hou, a Full-stack Developer with over 2 years of experience in web development.
            I specialize in creating dynamic and responsive web applications using modern web technologies.
        </p>
    </div>`
}

const Skills = {
    template: `
    <div>
        <h2>Skills</h2>
        <table>
            <tr>
                <th>Technology</th>
                <th>Proficiency</th>
            </tr>
            <tr>
                <td>HTML</td>
                <td>Expert</td>
            </tr>
            <tr>
                <td>CSS</td>
                <td>Expert</td>
            </tr>
            <tr>
                <td>Vue.js</td>
                <td>Advanced</td>
            </tr>
        </table>
    </div>`
}

const Projects = {
    data() {
        return {
            projects: [
                {
                    title: "Dynamic Web Dashboard",
                    description: `A web-based dashboard that provides real-time data visualization for a sales and inventory management system. 
                                  Features dynamic charts and graphs, user authentication, mobile-responsive design, and API integration.`,
                    technologies: "HTML5, CSS3, Vue.js, D3.js, Node.js, Express.js, MongoDB."
                },
                {
                    title: "E-commerce Platform",
                    description: `A comprehensive e-commerce platform offering a seamless shopping experience with integrated payment gateways, product recommendations, and user reviews. 
                                  Features advanced product search, user profiles, secure payment integration, and an admin panel.`,
                    technologies: "HTML5, CSS3, Vue.js, Node.js, Express.js, Stripe API, MongoDB."
                },
                {
                    title: "Social Media Aggregator",
                    description: `A platform that aggregates posts from various social media channels into a single feed. 
                                  Features integration with multiple platforms, customizable user feed, real-time notifications, and an analytics dashboard.`,
                    technologies: "HTML5, CSS3, Vue.js, Python, Flask, SQL."
                },
                {
                    title: "Virtual Classroom Platform",
                    description: `An online platform facilitating virtual learning with features like video conferencing, interactive quizzes, and assignments. 
                                  Features real-time video conferencing, assignment submission system, interactive quizzes, and a discussion forum.`,
                    technologies: "HTML5, CSS3, Vue.js, WebRTC, Node.js, WebSocket, MongoDB."
                }
            ]
        };
    },
    template: `
    <div>
        <h2>Projects</h2>
        <div v-for="project in projects" :key="project.title">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <p><strong>Technologies Used:</strong> {{ project.technologies }}</p>
        </div>
    </div>`
}

const Contact = {
    data() {
        return {
            message: ""
        };
    },
    template: `
    <div>
        <h2>Contact Me</h2>
        <form @submit.prevent="submitForm">
            <textarea v-model="message" placeholder="Write your message..."></textarea>
            <button type="submit">Send</button>
        </form>
    </div>`,
    methods: {
        submitForm() {
            alert("Message sent: " + this.message);
            this.message = "";
        }
    }
}

const routes = [
    { path: '/about', component: About },
    { path: '/skills', component: Skills },
    { path: '/projects', component: Projects },
    { path: '/contact', component: Contact }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp({})

app.use(router)

app.mount('#app')
