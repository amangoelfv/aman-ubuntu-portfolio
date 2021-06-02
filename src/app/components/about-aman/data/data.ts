export interface IProject {
  name: string;
  icon: string;
  description: string;
  techStack: string[];
  link?: string;
  source?: string;
}

export const Projects: IProject[] = [
  {
    name: 'Gropik',
    icon: '/assets/icons/gropik.png',
    description: 'Excepteur voluptate tempor duis ea adipisicing elit dolore anim minim.Commodo sint cillum velit nisi.',
    techStack: [
      'https://shields.io/badge/-Angular-red?logo=angular&style=for-the-badge&logoColor=white',
      'https://shields.io/badge/-TypeScript-3178C6?logo=typescript&style=for-the-badge&logoColor=white',
      'https://shields.io/badge/-scss-c69?logo=sass&style=for-the-badge&logoColor=white'
    ],
    link: 'https://gropik.netlify.app',
    source: 'https://github.com/amangoelfv/gropik'
  },
  {
    name: 'Ubuntu Portfolio',
    icon: '/assets/icons/ubuntu-portfolio.png',
    description: 'Excepteur voluptate tempor duis ea adipisicing elit dolore anim minim.Commodo sint cillum velit nisi.Labore ea nulla aliquip laboris velit anim ea ex laboris laborum dolor.',
    techStack: [
      'https://shields.io/badge/-Angular-red?logo=angular&style=for-the-badge&logoColor=white',
      'https://shields.io/badge/-TypeScript-3178C6?logo=typescript&style=for-the-badge&logoColor=white',
      'https://shields.io/badge/-scss-c69?logo=sass&style=for-the-badge&logoColor=white'
    ],
    link: 'https://amangoel.netlify.app',
    source: 'https://github.com/amangoelfv/aman-ubuntu-portfolio'
  },
  {
    name: 'Movie Geeks',
    icon: 'https://play-lh.googleusercontent.com/fs0VpT3APhQIM7VTF9xzknFp8URYcC8tCR9DrsvCb1ajt4N7aBSVicd9JWCcLwNzzQ=s180-rw',
    description: 'Mobile application for movie enthusiasts for searching and asking their college community for suggestions and reviews for any movie.',
    techStack: [
      'https://shields.io/badge/-React--Native-61DBFB?logo=react&style=for-the-badge&logoColor=black',
      'https://shields.io/badge/-Node--JS-339933?logo=nodedotjs&style=for-the-badge&logoColor=black',
      'https://shields.io/badge/-MONGODB-47A248?logo=mongodb&style=for-the-badge&logoColor=white',
      'https://shields.io/badge/-Javascript-f0db4f?logo=javascript&style=for-the-badge&logoColor=black',
    ],
    link: 'https://play.google.com/store/apps/details?id=com.moviegeeks.moviegeeks',
    source: 'https://github.com/amangoelfv/MG'
  },
  {
    name: 'Clinics Admin',
    icon: '/assets/icons/clinics.png',
    description: 'Excepteur voluptate tempor duis ea adipisicing elit dolore anim minim.Commodo sint cillum velit nisi.Labore ea nulla aliquip laboris velit anim ea ex laboris laborum dolor.',
    techStack: [
      'https://shields.io/badge/-React--Native-61DBFB?logo=react&style=for-the-badge&logoColor=black',
      'https://shields.io/badge/-Node--JS-339933?logo=nodedotjs&style=for-the-badge&logoColor=black',
      'https://shields.io/badge/-MONGODB-47A248?logo=mongodb&style=for-the-badge&logoColor=white',
      'https://shields.io/badge/-Javascript-f0db4f?logo=javascript&style=for-the-badge&logoColor=black',
    ],
    link: 'https://github.com/amangoelfv/corona-suraksha#contributions',
    source: 'https://github.com/amangoelfv/corona-suraksha'
  },
  {
    name: 'Corona Suraksha',
    icon: '/assets/icons/corona-suraksha.png',
    description: 'Excepteur voluptate tempor duis ea adipisicing elit dolore anim minim.Commodo sint cillum velit nisi.Labore ea nulla aliquip laboris velit anim ea ex laboris laborum dolor.',
    techStack: [
      'https://shields.io/badge/-ReactNative-61DBFB?logo=react&style=for-the-badge&logoColor=black',
      'https://shields.io/badge/-Javascript-f0db4f?logo=javascript&style=for-the-badge&logoColor=black',
    ],
    link: 'https://github.com/amangoelfv/corona-suraksha#contributions',
    source: 'https://github.com/amangoelfv/corona-suraksha'
  },
  {
    name: 'Uttam Aujus',
    icon: '/assets/icons/uttam-aujus.png',
    description: 'Excepteur voluptate tempor duis ea adipisicing elit dolore anim minim.Commodo sint cillum velit nisi.Labore ea nulla aliquip laboris velit anim ea ex laboris laborum dolor.',
    techStack: [
      'https://shields.io/badge/-ReactNative-61DBFB?logo=react&style=for-the-badge&logoColor=black',
      'https://shields.io/badge/-firebase-FFCA28?logo=firebase&style=for-the-badge&logoColor=black',
      'https://shields.io/badge/-Javascript-f0db4f?logo=javascript&style=for-the-badge&logoColor=black',
      'https://shields.io/badge/-arduino-00979D?logo=arduino&style=for-the-badge&logoColor=white',
      'https://shields.io/badge/-Raspberry--PI-A22846?logo=raspberry-pi&style=for-the-badge&logoColor=white',
    ],
  },
]

export const skills = [
  {
    category: 'Languages',
    data: [
      {
        icon: '/assets/images/skills/c.png',
        name: 'C'
      },
      {
        icon: '/assets/images/skills/cpp.png',
        name: 'C++'
      },
      {
        icon: '/assets/images/skills/js.png',
        name: 'JavaScript'
      },
      {
        icon: '/assets/images/skills/ts.png',
        name: 'TypeScript'
      },
    ]
  },

  {
    category: 'Web Development',
    data: [
      {
        icon: '/assets/images/skills/angular.png',
        name: 'Angular'
      },
      {
        icon: '/assets/images/skills/html.png',
        name: 'HTML'
      },
      {
        icon: '/assets/images/skills/css.png',
        name: 'CSS'
      },
      {
        icon: '/assets/images/skills/scss.png',
        name: 'SCSS'
      },
    ]
  },
  {
    category: 'App Development',
    data: [
      {
        icon: '/assets/images/skills/react.png',
        name: 'React Native'
      },
      {
        icon: '/assets/images/skills/ionic.png',
        name: 'Ionic'
      },
    ]
  },
  {
    category: 'Tools',
    data: [
      {
        icon: '/assets/images/skills/firebase.png',
        name: 'Firebase'
      },
      {
        icon: '/assets/images/skills/nodejs.png',
        name: 'NodeJS'
      },
      {
        icon: '/assets/images/skills/mongo.png',
        name: 'MongoDB'
      },
      {
        icon: '/assets/images/skills/git.png',
        name: 'Git'
      },
      {
        icon: '/assets/images/skills/matlab.png',
        name: 'Matlab'
      },
      {
        icon: '/assets/images/skills/redux.png',
        name: 'Redux'
      },
    ]
  },
]
export const socialLinks = [
  {
    icon: '/assets/icons/linkedin.svg',
    link: 'https://linkedin.com/in/amangoelfv'
  },
  {
    icon: '/assets/icons/github.svg',
    link: 'https://github.com/amangoelfv'
  },
  {
    icon: '/assets/icons/gmail.svg',
    link: 'mailto:amangoel300@gmail.com?subject=Visitor from your site!&body=Hi Aman! \nI just saw your site and .....'
  },
]
