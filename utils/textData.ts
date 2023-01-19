import { AboutUser } from './interface-templates'

const aboutUsers: AboutUser[] = [
  {
    name: 'Paul Leger',
    biography:
      'I am an associate professor at Universidad Católica del Norte (Chile). ' +
      'My research interests include issues related to programming languages,' +
      ' software engineering, and different programming approaches. I received ' +
      'a PhD in Computer Science at the University of Chile.',
    image: require('../assets/images/paul-leger.png'),
    website: 'https://pleger.cl',
  },
  {
    name: 'Oswaldo Terán',
    biography:
      'Systems Engineer and M.Sc in Applied Statistics at the ' +
      'Universidad de Los Andes, Venezuela; Ph. D. in Computational ' +
      'Modelling at the Manchester Metropolitan University, Manchester, ' +
      'UK; Post-Doc in the EMOTES Project at the Université de Toulouse 1, ' +
      'Toulouse, France. Academic at the Universidad Católica del Norte, Chile.',
    image: require('../assets/images/oswaldo-teran.jpg'),
    website: 'https://www.linkedin.com/in/oswaldo-teran-6b1b4b1/',
  },
]
export const rootName =
  'DoMa: Agent-Based Modelling Social Simulator with contextual  ' +
  'supported on Endorsements'

export const rootDescription =
  'This website presents a Java flexible agent-based model using an ' +
  'object-oriented paradigm ' +
  "(a general-purpose computer language) to represent agents' social " +
  'interaction (e.g, B2C e-commerce) with a realistic consideration of ' +
  'agents’ decision-making mechanisms, based on the endorsement scheme, ' +
  'and Word-Of-Mouth (WOM). The flexible model also allows Scenario analysis.'
export const rootDescription2 =
  'We will exemplify the model assuming that it is used to represent the ' +
  'interaction between buyers and sellers in an online B2C marketplace. ' +
  'Marketplaces are the sellers, and individuals shopping at the website ' +
  'of the marketplaces are the buyers. Another example of a possible ' +
  'representation: hospitals or local markets like Carrefour vs. its ' +
  'users/clients.'
export const modelUseText1 =
  'We will exemplify the model assuming that it is used to represent the ' +
  'interaction between buyers and sellers in an online B2C marketplace. ' +
  'Marketplaces are the sellers, and individuals shopping at the website ' +
  'of the marketplaces are the buyers. Another example of a possible ' +
  'representation: hospitals or local markets like Carrefour vs. its ' +
  'users/clients.'
export const modelUseText2 =
  'A realistic consideration of buyers’ decision-making mechanism is done,' +
  ' based on the endorsement scheme and supported by data. Only buyers use' +
  ' endorsements. In a general consideration, the interaction is as follows.' +
  ' On the one hand, each time iteration, a set of agents (e.g., sellers) show' +
  ' a set of attributes that are observed and endorsed by another set of' +
  ' agents (e.g., buyers). This last set of agents learns (we can refer' +
  ' to them as the “set of agents that learn”), while interacting ' +
  'with the first set of agents, improving their decisions over time,' +
  ' by using endorsements. The first set of agents presents their' +
  ' attributes randomly. These are the attributes endorsed by buyers. ' +
  'The randomness of the attributes, is determined in accordance with how it is' +
  ' perceived in the real system by buyers. Diverse data sources can' +
  ' be used, e.g., surveys. At each iteration, buyers also interchange' +
  ' information via word of mouth (WOM). WOM allows buyers to communicate' +
  ' (suggest) the names of marketplaces to other buyers (each buyer' +
  ' suggests the best evaluated marketplace). On the other hand, at' +
  ' each iteration, buyers evaluate sellers (using the endorsement' +
  ' function to appraise the shown attributes) and choose a seller.' +
  ' Then, they endorse the chosen seller in accordance to the attributes' +
  ' it presents. Finally, sellers share information with others' +
  ' (via WOM), and the iteration finishes. The whole simulation process' +
  ' is illustrated in the figure shown above. Additional detail is given' +
  ' in the ODD summary table given below.\n'

export const getAboutUsers = (): AboutUser[] => {
  return aboutUsers
}
