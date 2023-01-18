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

const logo = require('../assets/images/LogoPragmaticsLab.png')

export const getLogo = (): string => {
  return logo
}

const modelUsageImage = require('../assets/images/ModeloSBABM.png')

export const getModelUsageImage = (): string => {
  return modelUsageImage
}
