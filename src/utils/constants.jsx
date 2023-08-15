import { nanoid } from 'nanoid'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BiLogoGmail } from 'react-icons/bi'

// projects image import
import trendy from '../assets/project-img1.jpeg'
import comfy from '../assets/project-img2.jpeg'
import emerald from '../assets/project-img3.jpeg'

// logo tech import
import { BiLogoReact, BiLogoHtml5, BiLogoCss3 } from 'react-icons/bi'
import { IoLogoJavascript } from 'react-icons/io'
import { SiNetlify, SiAuth0 } from 'react-icons/si'
import { BsStripe } from 'react-icons/bs'

export const nav = [
  {
    id: nanoid(),
    button: 'work',
  },
  {
    id: nanoid(),
    button: 'about',
  },
  {
    id: nanoid(),
    button: 'contact',
  },
]

export const socials = [
  {
    id: nanoid(),
    icon: <AiFillGithub />,
    url: 'https://github.com/Wiseard',
  },
  {
    id: nanoid(),
    icon: <AiFillLinkedin />,
    url: 'http://fr.linkedin.com/pub/florent-baleinier/9b/570/88b/',
  },
  {
    id: nanoid(),
    icon: <BiLogoGmail />,
    url: 'mailto:florentbaleinier@gmail.com',
  },
]

export const projects = [
  {
    id: nanoid(),
    title: 'Trendy Shop',
    url: 'https://trendy-eshop.netlify.app',
    git: 'https://github.com/Wiseard/trendy-shop.git',
    img: trendy,
    description: "women's clothing store",
    project_number: '01',
    number: 0,
    technologies_front: [
      {
        id: nanoid(),
        icon: <BiLogoReact />,
        icon_desc: 'react',
      },
      {
        id: nanoid(),
        icon: <BiLogoHtml5 />,
        icon_desc: 'HTML',
      },
      {
        id: nanoid(),
        icon: <BiLogoCss3 />,
        icon_desc: 'CSS',
      },
      {
        id: nanoid(),
        icon: <IoLogoJavascript />,
        icon_desc: 'javascript',
      },
    ],
    technologies_back: [
      {
        id: nanoid(),
        icon: <SiNetlify />,
        icon_desc: 'netlify',
      },
      {
        id: nanoid(),
        icon: 'S',
        icon_desc: 'sanity',
      },
    ],
  },
  {
    id: nanoid(),
    title: 'Comfy Sloth',
    url: 'https://react-course-comfy-sloth-store.netlify.app',
    git: 'https://github.com/Wiseard/react-project-ecommerce.git',
    img: comfy,
    description: 'home furniture store',
    project_number: '02',
    number: 1,
    technologies_front: [
      {
        id: nanoid(),
        icon: <BiLogoReact />,
        icon_desc: 'react',
      },
      {
        id: nanoid(),
        icon: <BiLogoHtml5 />,
        icon_desc: 'HTML',
      },
      {
        id: nanoid(),
        icon: <BiLogoCss3 />,
        icon_desc: 'CSS',
      },
      {
        id: nanoid(),
        icon: <IoLogoJavascript />,
        icon_desc: 'javascript',
      },
    ],
    technologies_back: [
      {
        id: nanoid(),
        icon: <SiNetlify />,
        icon_desc: 'netlify',
      },
      {
        id: nanoid(),
        icon: <SiAuth0 />,
        icon_desc: 'Auth0',
      },
      {
        id: nanoid(),
        icon: <BsStripe />,
        icon_desc: 'Stripe',
      },
    ],
  },
  {
    id: nanoid(),
    title: 'Emerald Blues',
    url: 'https://emerald-fine-dining.netlify.app',
    git: 'https://github.com/Wiseard/emerald-blues-restaurant.git',
    img: emerald,
    description: 'restaurant showcase',
    project_number: '03',
    number: 2,
    technologies_front: [
      {
        id: nanoid(),
        icon: <BiLogoReact />,
        icon_desc: 'react',
      },
      {
        id: nanoid(),
        icon: <BiLogoHtml5 />,
        icon_desc: 'HTML',
      },
      {
        id: nanoid(),
        icon: <BiLogoCss3 />,
        icon_desc: 'CSS',
      },
      {
        id: nanoid(),
        icon: <IoLogoJavascript />,
        icon_desc: 'javascript',
      },
    ],
    technologies_back: [
      {
        id: nanoid(),
        icon: <SiNetlify />,
        icon_desc: 'netlify',
      },
    ],
  },
]
