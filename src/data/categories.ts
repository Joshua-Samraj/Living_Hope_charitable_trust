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
    description: 'The Fight Against Cancer is a vital healthcare initiative that offers free screenings,Free Cancer Awareness Camps,early detection services, and medical consultations for cancer patients, particularly those in underserved communities. The camp provides essential diagnostic services, educates individuals about cancer prevention, and connects those in need with treatment options. By increasing awareness and accessibility to medical care, this initiative aims to reduce cancer-related mortality rates and improve overall community health.',
    icon: '🎗️',
    color: 'bg-[#F484B2]',
    image : '/image/projects/cancer_image/1.jpg',
    banner : '/image/projects/cancer1.jpg'
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
    id: '4',
    name: 'Old Age Pension Scheme',
    keyword: 'elderly',
    description: 'Monthly support and care for elderly citizens in need.',
    icon: '👴',
    color: 'bg-[#4B7574]',
    image : '/image/projects/old_age/pention.JPG',
    banner : '/image/projects/old_age/pention.JPG'
  },
  {
    id: '5',
    name: 'Future sparks',
    keyword: 'education',
    description: 'Providing quality education and resources to underprivileged students.',
    icon: '📚',
    color: 'bg-yellow-700',
    image : '/image/projects/Banner/future.png',
    banner : 'https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '6',
    name: 'Real Christmas',
    keyword: 'holiday',
    description: 'Spreading joy and gifts during festive seasons.',
    icon: '🎄',
    color: 'bg-red-700',
    image : '/image/projects/Banner/christmas.jpg',
    banner : '/image/projects/Banner/christmas.jpg'
  },
  {
    id: '7',
    name: 'Community Event',
    keyword: 'Community',
    description: 'Motivational speech and career guidance',
    icon: '🎄',
    color: 'bg-emerald-700',
    image : '/image/projects/Banner/community.jpg',
    banner : '/image/projects/Banner/community.jpg'
  },
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