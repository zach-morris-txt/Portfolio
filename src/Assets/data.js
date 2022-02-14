import caliProject from '../Assets/Images/Cali.PNG'
import userAccountProject from '../Assets/Images/User-Account.PNG'
import coderheroProject from '../Assets/Images/CoderHeroes.PNG'
import ecommerceProject from '../Assets/Images/Ecommerce.PNG'


export const projects = [
    {
        id: 1,
        title: "Cali-Cafe Site",
        coverImg: caliProject,
        description1: "",
        techStack: "React|FontAwesome",
        deployedLink: "https://cali-site.herokuapp.com/",
        githubLink: "",
    },
    {
        id: 2,
        title: "User-Account Fullstack",
        coverImg: userAccountProject,
        description1: "",
        techStack: "React|Redux|PostgreSQL",
        deployedLink: "https://frontend-market.herokuapp.com/",
        githubLink: "",
    },
    {
        id: 3,
        title: "Coderheroes E-Learning (Private)", //Provide Bug Checklist
        coverImg: coderheroProject,
        description1: "",
        techStack: "React|Redux|Okta|Stripe|AntDesign",
        deployedLink: "https://a.coderheroes.dev/login",
        githubLink: "",
    },
    {
        id: 4,
        title: "Ecommerce Fullstack (Under Construction)",
        coverImg: ecommerceProject,
        description1: "",
        techStack: "React|Redux|Express|MongoDB",
        deployedLink: "https://ecommerce-backend--api.herokuapp.com/",
        githubLink: "",
    },
    {
        id: 5,
        title: "",
        coverImg: "",
        description1: "",
        techStack: "",
        deployedLink: "",
        githubLink: "",
    },
]