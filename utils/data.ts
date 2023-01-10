import { AboutUser } from './interface-templates'

const aboutUsers: AboutUser[] = [
  {
    name: 'Paul Leger',
    biography:
      'I am an associate professor at Universidad Católica del Norte (Chile). My research interests include issues related to programming languages, software engineering, and different programming approaches. I received his PhD in Computer Science at the University of Chile.',
    image: require('../assets/images/paul-leger.png'),
  },
  {
    name: 'Oswaldo Terán',
    biography:
      'Oswaldo Terán received a B.S degree in Systems Engineering (1992) and a M.Sc. in Applied Statistics (1995) from Universidad de Los Andes, Mérida, Venezuela, and the Ph.D. in Computational Modelling at the Centre for Policy Modelling of the Manchester Metropolitan University, Manchester, UK. He was a Post-Doctoral Researcher at the University of Toulouse-1, from April 2013 to March 2014, in the Project Emotes, related with modelling morality and emotions in organizational settings. He is an Academic of the Escuela de Ciencias Empresariales of the Universidad Católica del Norte, Coquimbo, Chile, and was an Academic of the Universidad de Los Andes, Mérida, Venezuela. His main research subjects are social simulation and organizational studies.\n',
    image: require('../assets/images/oswaldo-teran.jpg'),
  },
]

//load images to images folder, the name of the image is a number.png beetwen 1 and 10
export interface ImagesProps {
  src: string
  id: number
  alt: string
}
const images: ImagesProps[] = [
  {
    src: require('../images/1.png'),
    id: 1,
    alt: 'image 1',
  },
  {
    src: require('../images/2.png'),
    id: 2,
    alt: 'image 2',
  },
  {
    src: require('../images/3.png'),
    id: 3,
    alt: 'image 3',
  },
  {
    src: require('../images/4.png'),
    id: 4,
    alt: 'image 4',
  },
  {
    src: require('../images/5.png'),
    id: 5,
    alt: 'image 5',
  },
  {
    src: require('../images/6.png'),
    id: 6,
    alt: 'image 6',
  },
]
export const getAboutUsers = (): AboutUser[] => {
  return aboutUsers
}

export const getImages = (): ImagesProps[] => {
  return images
}

export const links = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'About Us',
    route: '/about',
  },
  {
    label: 'Model Usage',
    route: '/model',
  },
  {
    label: 'Application',
    route: '/application',
  },
]
