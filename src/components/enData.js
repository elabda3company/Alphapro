// home service imgs
import develop from './assets/develop.svg'
import social from './assets/social.svg'
import ui from './assets/ui.svg'
import seo from './assets/seo.svg'
import brandind from './assets/brandind.svg'
import mop from './assets/mop.svg'
// process imgs
import descover from './assets/discovery.png'
import plan from './assets/plan.png'
import design from './assets/design.png'
import development from './assets/development.png'
import testing from './assets/testing.png'
import dedeploy from './assets/deploy.png'
import opt from './assets/opt.png'
// footer icons
import insta from './assets/insta.png' 
import facebook from './assets/facebook.png' 
import linkedin from './assets/linkedin.png' 
import behance from './assets/behance.png' 
import youtube from './assets/youtube.png' 
import tiktok from './assets/tiktok.png'
// blog imgs 
import blogImg from './assets/blogImg.jpg'
// projects imgs
import projectImg from './assets/projectImg.jpg'
import d from './assets/d.jpg'


let enData ={
    contacts: "for contact",
    navbar: {
        i1:{
            title: "Home",
            slug: "/"
        },     
        i2:{
          title: "About Us",
          slug: "/about-us" 
        }, 
        i3: {
            title: "Services",
            slug: "/services"
        },
        i4: {
            title:"Projects",
            slug: "/projects"
        },
        i5: {
           title: "Blog",
           slug: "/blog"
        },
        i6: {
           title: "Contact Us",
           slug: "/contact-us"
        }
    },
    home: {
            hero: {
                titleStart:"Where ",
                innerTitle: "Innovation",
                titleMid:"Meets",
                titleEnd: "Expertise",
                desc: "Welcome to Alpha pro, where innovation meets expertise to craft tailored software solutions. From web development to mobile apps, Digital marketing we empower businesses to thrive in the digital age. ",
                btn: "Consultation"
            },
            services: {
                title: "Our Services",
                desc: "Transforming ideas into seamless digital experiences We believe in the importance of innovation and growth, and we offer a wide range of services to help businesses achieve their goals in the digital age. From custom software development to user-friendly mobile apps and search engine optimization SEO, we are your trusted partner every step of the way to success.",
                cards: [
                    {
                        id: "card-1",
                        slug: "social-media",
                        title: "Social Media",
                        content: "Boost online presence, engage customers, promote products with Social Media. Content, ads enhance brand, drive sales.",
                        img: social
                    },
                    {
                        id: "card-2",
                        slug: "web-development",
                        title: "Development",
                        content: "We offer exceptional website and app programming services tailored to your needs to ensure a unique user experience",
                        img: develop
                    },
                    {
                        id: "card-3",
                        slug: "seo",
                        title: "SEO",
                        content: "Our team specializes in optimizing websites to improve their visibility and ranking on search engine results pages (SERPs).",
                        img: seo
                    },
                    {
                        id: "card-4",
                        slug: "uiux-dessign",
                        title: "UI/UX Design",
                        content: "Our UI/UX design service is dedicated to creating intuitive and visually stunning interfaces that enhance user experiences. ",
                        img: ui
                    },
                    {
                        id: "card-5",
                        slug: "visual-identity",
                        title: "Visual Identity",
                        content: "Our visual identity service helps businesses establish a strong and cohesive brand presence across all touchpoints.",
                        img: brandind
                    }
                ]
            },
            about: {
                title: "About Us",
                content: "Founded on a passion for innovation, Alpha pro is a dynamic team of software development experts dedicated to pushing the boundaries of digital excellence. With a commitment to quality, creativity, and client satisfaction, we strive to deliver tailored solutions that make a lasting impact. Get to know the faces behind our success and discover how our expertise can elevate your next project.",
                btn: "Learn More"
            },
            whyAlpha: {
                title: "Why Alpha Pro ?",
                cards: [
                    {
                        id: "w-1",
                        title: "Expertise",
                        content: `A team of skilled professionals with years 
                        of experience in software development and a 
                        deep understanding of industry best practices.`,
                        i: 0
                    },
                    {
                        id: "w-2",
                        title: "Innovation",
                        content: `Constantly pushing the boundaries of innovation 
                        to deliver cutting-edge solutions that stay ahead 
                        of the curve.`,
                        i: 1
                    },
                    {
                        id: "w-3",
                        title: "Quality",
                        content: `Commitment to delivering high-quality products
                        and services, backed by rigorous testing and 
                        quality assurance processes.`,
                        i: 2
                    },
                    {
                        id: "w-4",
                        title: "Continuous Improvement",
                        content: `Committed to ongoing learning and staying current on trends and technologies to deliver innovative solutions for client needs`,
                        i: 3
                    },
                    {
                        id: "w-5",
                        title: "Timely Delivery",
                        content: `Timely delivery is consistently meeting project deadlines Deliver results on time and within budget.`,
                        i: 4          
                    }

                ]
            },
            projects: {
                title: "Projects",
                content: "Cutting-edge projects that redefine industry standards. Explore our projects of innovative solutions designed to drive success and exceed expectations.",
                seeAll: "See All",
                //will come from backend
                topProjects: [
                    {
                        id: "t-1",
                        projectName: "Echo Estate",
                        img: projectImg,
                        btn: "View Project"
                    },
                    {
                        id: "t-2",
                        projectName: "Home Vibe",
                        img: projectImg,
                        btn: "View Project"
                    },
                    {
                        id: "t-3",
                        projectName: "Odyssey Hub",
                        img: projectImg,
                        btn: "View Project"
                    }

                ]
                //////////////////////////
            }
    },
    aboutUs:{
        start: {
            title: "About Us",
            subTitleStart: "Let's get to",
            subTitleMid1: "Know",
            subTitleMid2: "the story of ",
            subTitleEnd:"Alpha Pro",
            content: "At Alpha Pro, our journey began with a simple yet powerful vision: to revolutionize the digital landscape through innovation and expertise. Founded by a team of passionate technologists, we have embarked on a mission to redefine what is possible in the field of website development and design in Egypt and the Arab world. We have long experience in the field of e-marketing, website hosting, application programming, and search engine optimization."
        },
        vision: {
            title: "Our Vision",
            content: "At Alpha Pro , our vision is to be the leading force in shaping the future of technology through innovation, creativity, and unwavering commitment to excellence. We aspire to empower businesses and individuals alike by delivering transformative digital solutions that inspire, enrich, and drive meaningful change in the world. With a relentless focus on pushing the boundaries of what's possible, we aim to create a brighter, more connected future where technology serves as a catalyst for positive impact and endless possibilities."
        },
        mission: {
            title: "Our Mission",
            content: "At Alpha Pro, our mission is to empower businesses and individuals to thrive in the digital age by delivering innovative, tailored software solutions that exceed expectations. We are committed to leveraging cutting-edge technologies, fostering creativity, and maintaining the highest standards of quality and integrity in everything we do. Through collaborative partnerships and a relentless pursuit of excellence, we strive to make a lasting impact on our clients' success and contribute positively to the advancement of technology and society as a whole."
        },
        whyChooseAlpha: {
            title: "Why Choose Alpha? ",
            content: "Choosing us means choosing innovation, reliability, and excellence. With a proven track record of delivering exceptional results, we stand out as a trusted partner for your digital needs. Our team is dedicated to understanding your unique requirements and crafting tailored solutions that drive success. From cutting-edge technology to unparalleled customer service, we go above and beyond to exceed expectations. When you choose us, you choose a partner committed to your growth and prosperity. Experience the difference with us today."
        },
        process: {
            title: "Our Process",
            content: "In our work journey, we walk side by side. Through our continuous communication, we strive to keep you informed of every detail, listen attentively to your feedback, and work together to address any challenges we encounter. This builds a working relationship based on cooperation and transparency.",
            circles: {
                c1: {
                    title: "Discovery",
                    img: descover
                },
                c2: {
                    title: "Planning",
                    img: plan
                },
                c3: {
                    title: "Design",
                    img: design
                },
                c4: {
                    title: "Development",
                    img: development
                },
                c5: {
                    title: "Testing",
                    img: testing
                },
                c6: {
                    title: "Deployment",
                    img: dedeploy
                },
                c7: {
                    title: "Optimization",
                    img: opt
                }
            }
        },
    },
    footer: {
        services: {
            title: "Services",
            items: [
                {
                    id: "item-1",
                    title: "Social Media" 
                },
                {
                    id: "item-2",
                    title: "Web Development" 
                },
                {
                    id: "item-3",
                    title: "Mobile Development" 
                },
                {
                    id: "item-4",
                    title: "UI/UX Design" 
                },
                {
                    id: "item-5",
                    title: "Visual Identity" 
                },
                {
                    id: "item-6",
                    title: "SEO" 
                }
            ]
        },
        contact: {
            title: "Contacts",
            addressTitle: "Address",
            address: "9 Mostafa El Nahhas, Nasr City",
            phoneTitle: "Phone Number",
            phone: "+201021555519",
            emailTitle: "Email",
            email: "Info@alphaproeg.com"
        },
        follow: {
            title: "Follow Us:",
            icons: [
                {
                    id: "icon-1",
                    link: "https://www.instagram.com/alphaproeg/",
                    altText: "instagram",
                    icon: insta
                },
                {
                    id: "icon-2",
                    link: "https://www.facebook.com/AlphaPro.eg",
                    altText: "facebook",
                    icon: facebook
                },
                {
                    id: "icon-3",
                    link: "https://www.tiktok.com/@alphapro.eg",
                    altText: "tiktok",
                    icon: tiktok
                },
                {
                    id: "icon-4",
                    link: "https://www.youtube.com/@AlphaPro-eg",
                    altText: "youtube",
                    icon: youtube
                },
                {
                    id: "icon-5",
                    link: "https://www.behance.net/alphapro11",
                    altText: "behance",
                    icon: behance
                },
                {
                    id: "icon-6",
                    link: "https://www.linkedin.com/company/101616991/",
                    altText: "linkedin",
                    icon: linkedin
                }
            ] 
        }
    }
 
}

export default enData 
