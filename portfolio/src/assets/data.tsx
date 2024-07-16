import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';

interface LinksInterface {
    id: string;
    href: string;
    text: string;
}

interface SkillsInterface {
    id: string;
    title: string;
    icon: JSX.Element;
    text: string;
}

// interface ProjectsInterface {
//     id: string;
//     title: string;
//     icon: JSX.Element;
//     text: string;
// }

export const links: LinksInterface[] = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills: SkillsInterface[] = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://app.gemoo.com/share/image-annotation/671837017067757568?codeId=v6aXpjj4LNgq8&origin=imageurlgenerator&card=671837014446317568',
    url: 'https://care-finder-nu.vercel.app/',
    github: 'https://github.com/RidwanAdebosin/CareFinder',
    title: 'CareFinder',
    text: ' Carefinder is a simple tool that aims to help users find, export, and share hospitals within the region.',
  },
  {
    id: nanoid(),
    img: 'https://app.gemoo.com/share/image-annotation/671839831626035200?codeId=v6aXpjj4LNgq8',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/RidwanAdebosin/mygithubrepo',
    title: 'My GitHub Repo',
    text: 'This is a react project where i implemented an API fetch of my GitHub portfolio.',
  }
];