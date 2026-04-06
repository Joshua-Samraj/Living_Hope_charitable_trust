export interface Category {
  id: string;
  name: string;
  keyword: string;
  description: string;
  icon: string;
  color: string;
  projectCount?: number;
  image: string;
  banner: string;
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Fight Against Hunger',
    keyword: 'hunger',
    description: 'The Fight Against Hunger initiative aims to combat food insecurity by distributing nutritious meals and essential food supplies to vulnerable individuals, including children, elderly people, and low-income families. The organisation operates food banks, and meal distribution programs, ensuring that no one goes hungry.',
    icon: '🍽️',
    color: 'bg-emerald-700',
    image : '/image/projects/FAH-1.jpg',
    banner : '/image/projects/Banner/fah.jpg'
  },
  {
    id: '2',
    name: 'Fight Against Cancer',
    keyword: 'cancer',
    description: ` A Lifeline of Hope
No one should face cancer alone or in the dark. We bring free screenings and life-saving early detection directly to those who need them most. By providing expert medical guidance and a clear path to treatment, we turn fear into action—ensuring that every individual, regardless of their circumstances, has a fighting chance at a long, healthy life.`,
    icon: '🎗️',
    color: 'bg-[#F484B2]',
    image : '/image/projects/cancer_image/1.jpg',
    banner : '/image/projects/cancer1.jpg'
  },
  {
    id: '4',
    name: 'Awareness Campaigns',
    keyword: 'Awareness',
    description: `A journey toward a healthier, more conscious tomorrow. 
    We stand at the intersection of life and hope—empowering women through life-saving cancer awareness and early detection, while guiding the next generation to break free from the shadows of drug dependency. By advocating for a world free of plastic pollution and providing students with the tools for self-improvement and career success, we aren’t just running a campaign; we are protecting our mothers, our children, and the very earth they walk upon. Together, we are healing lives, nurturing minds, and preserving the planet for every generation to come.`,
    icon: '🚨',
    color: 'bg-[#e91d29]',
    image : '/image/projects/Awareness/(8).jpeg',
    banner : '/image/projects/Awareness/cover.jpeg'
  },
  {
    id: '5',
    name: 'Old Age Pension Scheme',
    keyword: 'elderly',
    description: `Living Hope Trust runs the Old Age Pension Scheme with the goal of supporting vulnerable
individuals in their later years. Under this scheme, we provide Rs. 1000 monthly to aged widows,
aged widowers, and handicapped individuals who have been abandoned by their children, spouses,
or families. The amount is directly transferred to their bank accounts to ensure transparency and
timely assistance.
This small but meaningful support helps these individuals meet basic needs and brings a sense of
dignity and hope in their lives. So far, many elderly and differently-abled persons have been
benefitted through this initiative, giving them comfort and care when they need it the most`,
    icon: '👴',
    color: 'bg-[#4B7574]',
    image : '/image/projects/old_age/pention.JPG',
    banner : '/image/projects/old_age/pention.JPG'
  },
  {
    id: '3',
    name: 'Disaster Relief',
    keyword: 'disaster',
    description: 'Emergency relief and rehabilitation during natural disasters.',
    icon: '🚨',
    color: 'bg-[#1C243B]',
    image : '/image/projects/flood/flood.jpg',
    banner : '/image/projects/Banner/flood.jpg'
  },
  
  
  {
    id: '6',
    name: 'Future sparks',
    keyword: 'education',
    description: `Education is the key to breaking the cycle of poverty-and at Living Hope Trust, we believe every
child deserves that chance. Through our Future Sparks Project, we support school and college
students who come from underprivileged backgrounds and families below the poverty line.
We uphold their educational expenses, including fees, uniforms, books, and other essentials, so
they can pursue their dreams without the burden of financial stress.
Through this initiative, many bright young minds-our "Future Sparks"-have been nurtured and
empowered to rise above their circumstances and build a better tomorrow.
Together, we are lighting the way for the leaders of the next generation`,
    icon: '📚',
    color: 'bg-yellow-700',
    image : '/image/projects/Banner/future.png',
    banner : 'https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '7',
    name: 'Grocery Kit Distribution',
    keyword: 'holiday',
    description: `As part of our ongoing mission to uplift struggling communities, Living Hope Trust actively carries
out Grocery Kit Donation work. This project focuses on helping families who are financially backward
and unable to meet their basic daily needs.
We provide grocery kits worth Rs. 1500 to each family, containing essential food and household
items. These kits are distributed to families who are going through difficult times, ensuring they have
the support they need to get through each day with dignity.
Through this project, many families have been benefitted, and it continues to bring relief and hope to
those who need it the most.
Together, we can feed more families and spread hope`,
    icon: '🎄',
    color: 'bg-red-700',
    image : '/image/projects/Banner/christmas.jpg',
    banner : '/image/projects/Banner/christmas.jpg'
  },
  // {
  //   id: '7',
  //   name: 'Community Event',
  //   keyword: 'Community',
  //   description: 'Motivational speech and career guidance',
  //   icon: '🎄',
  //   color: 'bg-emerald-700',
  //   image : '/image/projects/Banner/community.jpg',
  //   banner : '/image/projects/Banner/community.jpg'
  // },
  // {
  //   id: '7',
  //   name: 'Health Awareness',
  //   keyword: 'awareness',
  //   description: 'Community health education and preventive care initiatives.',
  //   icon: '🏥',
  //  color: 'bg-emerald-700',
  //   image : '/image/projects/cancer1.jpg',
  //   banner : '/image/projects/Banner/fah.jpg'
  // },
  {
    id: '8',
    name: 'Upcoming Events',
    keyword: 'upcoming',
    description: 'Future initiatives and programs in planning.',
    icon: '📅',
    color: 'bg-[#37103D]',

    image : '/image/projects/Banner/upcomming.jpg',
    banner : '/image/projects/Banner/upcomming.jpg'
  }
];