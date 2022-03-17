import caliProject from '../Assets/Images/ProjectIMGs/Cali.PNG'
import userAccountProject from '../Assets/Images/ProjectIMGs/User-Account.jpg'
import coderheroProject from '../Assets/Images/ProjectIMGs/CoderHeroes.jpg'
import ecommerceProject from '../Assets/Images/ProjectIMGs/Ecommerce.jpg'

import html from './Images/IconIMGs/HTML.png'
import css from './Images/IconIMGs/CSS.png'
import js from './Images/IconIMGs/JS.png'
import python from './Images/IconIMGs/Python.png'
import node from './Images/IconIMGs/Node.png'
import reactRedux from './Images/IconIMGs/ReactRedux.png'
import postgreSQL from './Images/IconIMGs/PostgreSQL.png'
import mongoDB from './Images/IconIMGs/MongoDB.png'
import git from './Images/IconIMGs/Git.png'
import okta from './Images/IconIMGs/Okta.png'
import stripe from './Images/IconIMGs/Stripe.jpg'


export const projects = [
    {
        id: 0,
        title: "Cali-Cafe",
        coverImg: caliProject,
        description1: "React site for a previously unlisted local café.",
        techStack: "React | FontAwesome",
        deployedLink: "https://cali-site.herokuapp.com/",
        githubLink: "https://github.com/zach-morris-txt/cali-site",
    },
    {
        id: 1,
        title: "Market User-Onboarding",
        coverImg: userAccountProject,
        description1: "Fullstack app for a demo, fresh produce market. Features user signup, user login, and relational data management.",
        techStack: "React | Redux | PostgreSQL",
        deployedLink: "https://frontend-market.herokuapp.com/",
        githubLink: "https://github.com/zach-morris-txt/Refactor-Markets-Frontend",
        githubLink2: "https://github.com/zach-morris-txt/Refactor-Markets-Backend",
    },
    {
        id: 2,
        title: "Coderheroes E-Learning (Private)",
        coverImg: coderheroProject,
        description1: "Fullstack app for a startup education platform. Features okta account management, backend class registration, and stripe payment processing.",
        techStack: "React | Redux | Okta | Stripe | AntDesign",
        deployedLink: "https://a.coderheroes.dev/login",
        githubLink: "https://github.com/zach-morris-txt/coder-heroes-fe",
        githubLink2: "https://github.com/zach-morris-txt/coder-heroes-be",
    },
    {
        id: 3,
        title: "StyleRider Ecommerce (Under Construction)  ***PROVIDE Bug List?",
        coverImg: ecommerceProject,
        description1: "Fullstack app for a demo, motorcylce-gear vendor. Features product filtering, full product CRUD, and a working customer cart.",
        techStack: "React | Redux | Express | MongoDB",
        deployedLink: "https://ecommerce-backend--api.herokuapp.com/",
        githubLink: "https://github.com/zach-morris-txt/EcommerceAPI",
    },
]

export const skills = [
    {
        id: 0,
        name: "HTML/CSS",
        img: html,
        imgAlt: "HTML Icon",
        img2: css,
        img2Alt: "CSS Icon",
    },
    {
        id: 1,
        name: "JS",
        img: js,
        imgAlt: "JavaScript Icon",
    },
    {
        id: 2,
        name: "Node",
        img: node,
        imgAlt: "Node Icon",
    },
    {
        id: 3,
        name: "React/Redux",
        img: reactRedux,
        imgAlt: "React And Redux Icons",
    },
    {
        id: 4,
        name: "Python",
        img: python,
        imgAlt: "Python Icon",
    },
    {
        id: 5,
        name: "PostgreSQL",
        img: postgreSQL,
        imgAlt: "PostgreSQL Icon",
    },
    {
        id: 6,
        name: "MongoDB",
        img: mongoDB,
        imgAlt: "MongoDB Icon",
    },
    {
        id: 7,
        name: "Okta",
        img: okta,
        imgAlt: "Okta Icon",
    },
    {
        id: 8,
        name: "Stripe",
        img: stripe,
        imgAlt: "Stripe Icon",
    },
    {
        id: 9,
        name: "Git",
        img: git,
        imgAlt: "Git Icon",
    },
]