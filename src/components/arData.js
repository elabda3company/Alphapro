// home services imgs
import develop from './assets/develop.png'
import social from './assets/social.png'
import ui from './assets/ui.png'
import seo from './assets/seo.png'
import brandind from './assets/brandind.png'
import mop from './assets/mop.png'
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

let arData ={
    contacts: "للتواصل",
    navbar: {
        i1:{
            title: "الرئيسية",
            slug: "/"
        },     
        i2:{
          title: "من نحن",
          slug: "/about-us" 
        }, 
        i3: {
            title: "خدماتنا",
            slug: "/services"
        },
        i4: {
            title:"مشاريعنا",
            slug: "/projects"
        },
        i5: {
           title: "مقالات",
           slug: "/blog"
        },
        i6: {
           title: "تواصل معنا",
           slug: "/contact-us"
        }
    },
    home: {
            hero: {
                titleStart:"حيث ",
                innerTitle: "الابتكار",
                titleMid: "يلتقى",
                titleEnd: "بالخبرة",
                desc: " مرحبًا بك في Alpha pro، حيث يلتقي الابتكار بالخبرة لابتكار حلول برمجية مخصصة تلبي احتياجاتكم. من تطوير الويب إلى تطبيقات الهاتف المحمول والتسويق الرقمي  ، نقدم مجموعة واسعة من الخدمات التي تمكن الشركات من الازدهار في العصر الرقمي. ",
                btn: "إستشارات"
            },
            services: {
                title: "خدمتنا",
                desc: "تحويل الأفكار إلى تجارب رقمية سلسة.نحن نؤمن بأهمية الابتكار والنمو، ونقدم مجموعة واسعة من الخدمات التي تساعد الشركات على تحقيق أهدافها في العصر الرقمي. من تطوير البرامج المخصصة إلى تطبيقات الهاتف المحمول سهلة الاستخدام وتحسين محركات البحث SEO، نحن شريكك الموثوق به في كل خطوة على طريق النجاح ",
                cards: [
                    {
                        id: "card-1",
                        slug: "social-media",
                        title: "منصات التواصل الاجتماعي",
                        content: "تعزيز التواجد عبر الإنترنت والترويج للمنتجات عبر وسائل التواصل الاجتماعي. مما يعزز العلامة التجارية ويزيد المبيعات.",
                        img: social
                    },
                    {
                        id: "card-2",
                        slug: "web-development",
                        title: "تطوير",
                        content: " نحن نقدم خدمات برمجة  و تطوير مواقع وتطبيقات استثنائية مصممة خصيصا لاحتياجاتك .لضمان تجربة مستخدم فريدة  من نوعها .",
                        img: develop
                    },
                    {
                        id: "card-3",
                        slug: "seo",
                        title: "تحسين محركات البحث",
                        content: "فريق الخبراء لدينا متخصص في تحسين مواقع الويب لتحسين ظهورها وتصنيفها على صفحات نتائج محرك البحث (SERPs).",
                        img: seo
                    },
                    {
                        id: "card-4",
                        slug: "uiux-dessign",
                        title: "تصميم واجهة/تجربة المستخدم",
                        content: "إن خدمة تصميم UI/UX الخاصة بنا مخصصة لإنشاء واجهات بديهية ومذهلة بصريًا تعمل على تحسين تجارب المستخدم.",
                        img: ui
                    },
                    {
                        id: "card-5",
                        slug: "visual-identity",
                        title: "الهوية البصرية",
                        content: "خدمة الهوية البصرية لدينا يساعد الشركات على إنشاء علامة تجارية قوية ومتماسكة الحضور في كل شيء نقاط الاتصال.",
                        img: brandind
                    }
                ]
            },
            about: {
                title: "من نحن؟",
                content: "تأسست Alpha pro على شغف الابتكار، وهي ديناميكية فريق من خبراء تطوير البرمجيات مخصصين للدفع حدود التميز الرقمي. مع الالتزام الجودة والإبداع ورضا العملاء، ونحن نسعى جاهدين لتقديم حلول مصممة خصيصًا لها تأثير دائم. تعرف على الوجوه التي تكمن وراء نجاحنا واكتشف كيف يمكن لخبرتنا أن تفعل ذلك ارفع مشروعك القادم.",
                btn: "المزيد"
            },
            whyAlpha: {
                title: "لماذا Alpha Pro ؟",
                cards: [
                    {
                        id: "w-1",
                        title: "الخبرة",
                        content: "فريق من المهنيين مع سنوات من الخبرة في تطوير البرمجيات وفهم عميق لأفضل ممارسات الصناعة."
                    },
                    {
                        id: "w-2",
                        title: "الابتكار",
                        content: "دفع حدود الابتكار باستمرار لتقديم الحلول المتطورة التي تبقى في المقدمة من المنحنى."
                    },
                    {
                        id: "w-3",
                        title: "الجودة",
                        content: " الالتزام بتقديم منتجات عالية الجودة والخدمات، مدعومة باختبارات صارمة و عمليات ضمان الجودة."
                    },
                    {
                        id: "w-4",
                        title: "تحسن مستمر",
                        content: " ملتزمون بالتعلم المستمر والبقاء على اطلاع دائم بالاتجاهات والتقنيات لتقديم حلول مبتكرة للعملاء."
                    },
                    {
                        id: "w-5",
                        title: "التسليم في الوقت المناسب",
                        content: "الالتزام باستمرار بالمواعيد النهائية للمشروع و تقديم النتائج في الوقت المحدد وفي حدود الميزانية."
                    }

                ]
            },
            projects: {
                title: "المشاريع",
                content: "المشاريع المتطورة التي تعيد تعريف الصناعة المعايير. اكتشف محفظتنا المبتكرة حلول مصممة لتحقيق النجاح والتجاوز التوقعات.",
                seeAll: "كل المشاريع",
                //will come from backend
                topProjects: [
                    {
                        id: "t-1",
                        projectName: "Echo Estate",
                        img: "",
                        btn: "مشاهدة المشروع"
                    },
                    {
                        id: "t-2",
                        projectName: "Home Vibe",
                        img: "",
                        btn: "مشاهدة المشروع"
                    },
                    {
                        id: "t-3",
                        projectName: "Odyssey Hub",
                        img: "",
                        btn: "مشاهدة المشروع"
                    }

                ]
                //////////////////////////
            }
    },
    aboutUs:{
        start: {
            title: "من نحن",
            subTitleStart: "دعونا",
            subTitleMid1: "نتعرف",
            subTitleMid2: "على قصة",
            subTitleEnd:"Alpha Pro",
            content: "في Alpha Pro، بدأت رحلتنا برؤية بسيطة لكنها قوية: لإحداث ثورة في المشهد الرقمي من خلال الابتكار والخبرة. تم تأسيسها على يد فريق من التقنيين المتحمسين، لقد شرعنا في مهمة لإعادة تعريف ما هو  ممكن في مجال تطوير وتصميم المواقع الإلكترونية  في مصر والعالم العربي . ولدينا خبرات طويلة في  مجال التسويق الإلكتروني واستضافة المواقع وبرمجة التطبيقات وتحسين محركات البحث"
        },
        vision: {
            title: "رؤيتنا",
            content: "تتمثل رؤيتنا في Alpha Pro في أن نكون القوة الرائدة في تشكيل مستقبل التكنولوجيا من خلال الابتكار والإبداع والالتزام الثابت بالتميز. نحن نطمح إلى تمكين الشركات والأفراد على حد سواء من خلال تقديم حلول رقمية تحويلية تلهم وتثري وتحفز التغيير الهادف في العالم . من خلال التركيز المستمر على دفع حدود ما هو ممكن، فإننا نهدف إلى إنشاء عالم أكثر إشراقًا، ومستقبل أكثر اتصالاً حيث تعمل التكنولوجيا كمحفز للتأثير الإيجابي والإمكانيات التي لا نهاية لها."
        },
        mission: {
            title: "مهمتنا",
            content: "تتمثل مهمتنا في Alpha Pro في تمكين الشركات والأفراد من تحقيق النجاح في العصر الرقمي من خلال تقديم حلول برمجية مبتكرة ومصممة خصيصًا تتجاوز التوقعات. نحن ملتزمون بالاستفادة من أحدث التقنيات وتعزيز الإبداع والحفاظ على أعلى معايير الجودة والنزاهة في كل ما نقوم به. ومن خلال الشراكات التعاونية والسعي الدؤوب لتحقيق التميز، فإننا نسعى جاهدين لإحداث تأثير دائم على نجاح عملائنا والمساهمة بشكل إيجابي في تقدم التكنولوجيا والمجتمع ككل."
        },
        whyChooseAlpha: {
            title: "لماذا تختار Alpha Pro؟ ",
            content: "اختيارنا يعني اختيار الابتكار والموثوقية والتميز. مع سجل حافل من تحقيق نتائج استثنائية، نحن نقف كشريك موثوق به لتلبية احتياجاتك الرقمية. فريقنا مكرس لفهم متطلباتك الفريدة وصياغة مصممة خصيصًا الحلول التي تقود النجاح. من التكنولوجيا المتطورة إلى خدمة عملاء لا مثيل لها، نحن نذهب إلى أبعد الحدود لنتجاوزها التوقعات. عندما تختارنا، فإنك تختار شريكًا ملتزمًا لنموك وازدهارك. اكتشف الفرق معنا اليوم."
        },
        process: {
            title: "عمليتنا",
            content: "في رحلة العمل، نسير جنباً إلى جنب من خلال تواصلنا المستمر، نحرص على إطلاعك على كل تفصيل، ونستمع باهتمام لتعليقاتك، ونعمل معاً على حلّ أيّة تحديات تواجهنا، لنسج علاقة عمل مبنية على التعاون والشفافية.",
            circles: {
                c1: {
                    title: "اكتشاف",
                    img: descover
                },
                c2: {
                    title: "تخطيط",
                    img: plan
                },
                c3: {
                    title: "تصميم",
                    img: design
                },
                c4: {
                    title: "تطوير",
                    img: development
                },
                c5: {
                    title: "اختبار",
                    img: testing
                },
                c6: {
                    title: "رفع",
                    img: dedeploy
                },
                c7: {
                    title: "تحسين",
                    img: opt
                }
            }
        },
    },
    footer: {
        services: {
            title: "الخدمات",
            items: [
                {
                    id: "item-1",
                    title: "وسائل التواصل الاجتماعي" 
                },
                {
                    id: "item-2",
                    title: "تطوير الويب" 
                },
                {
                    id: "item-3",
                    title: "تطوير التطبيقات" 
                },
                {
                    id: "item-4",
                    title: "تصميم واجهه /تجربه المستخدم" 
                },
                {
                    id: "item-5",
                    title: "الهويه البصريه" 
                },
                {
                    id: "item-6",
                    title: "تحسين محركات البحث" 
                }
            ]
        },
        contact: {
            title: "جهات الاتصال",
            addressTitle: "العنوان",
            address: "9 مصطفي النحاس - مدينه نصر",
            phoneTitle: "رقم الهاتف",
            phone: " 201021555519+",
            emailTitle: "البريد الإلكترونى",
            email: "Info@alphaproeg.com"
        },
        follow: {
            title: "تابعنا :",
            icons: [
                {
                    id: "icon-1=",
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

export default arData 