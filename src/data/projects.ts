
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  status: 'active' | 'completed' | 'upcoming';
  beneficiaries: number;
  location: string;
  date: string;
  link: string;
  
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Fight Against Hunger - 1',
    category: 'hunger',
    description: 'Providing nutritious meals to underprivileged families and children.',
    fullDescription: 'At Living Hope Trust, we believe that everyone deserves the same quality of food that we enjoy inour homes-tasty, healthy, and served hot. Through our Fight Against Hunger initiative, we providefreshly cooked, homemade meals with love and hygiene to those who need it the most in Tirunelveli,Tamil Nadu.',
    image: '/image/projects/FAH-1.jpg',
    status: 'completed',
    beneficiaries: 2500,
    location: 'Multiple Villages',
    date: '2020-2024',
    link: 'https://youtu.be/cI-GAwU2Rcs?feature=shared'
  },
  {
    id: '12',
    title: 'Fight Against Hunger - 2',
    category: 'hunger',
    description: 'Providing nutritious meals to underprivileged families and children.',
    fullDescription: 'At Living Hope Trust, we believe that everyone deserves the same quality of food that we enjoy inour homes-tasty, healthy, and served hot. Through our Fight Against Hunger initiative, we providefreshly cooked, homemade meals with love and hygiene to those who need it the most in Tirunelveli,Tamil Nadu.',
    image: '/image/projects/FAH-2.jpg',
    status: 'completed',
    beneficiaries: 2500,
    location: 'Multiple Villages',
    date: '2020-2024',
    link: 'https://youtu.be/gim-Yv3ENhk?feature=shared'
  },
  {
    id: '13',
    title: 'Fight Against Hunger - 3',
    category: 'hunger',
    description: 'Providing nutritious meals to underprivileged families and children.',
    fullDescription: 'At Living Hope Trust, we believe that everyone deserves the same quality of food that we enjoy inour homes-tasty, healthy, and served hot. Through our Fight Against Hunger initiative, we providefreshly cooked, homemade meals with love and hygiene to those who need it the most in Tirunelveli,Tamil Nadu.',
    image: '/image/projects/fah-3.jpg',
    status: 'completed',
    beneficiaries: 2500,
    location: 'Multiple Villages',
    date: '2020-2024',
    link: 'https://youtu.be/W-iLxT22MbY?feature=shared'
  },
  {
    id: '14',
    title: 'Fight Against Hunger - 4',
    category: 'hunger',
    description: 'Providing nutritious meals to underprivileged families and children.',
    fullDescription: 'At Living Hope Trust, we believe that everyone deserves the same quality of food that we enjoy inour homes-tasty, healthy, and served hot. Through our Fight Against Hunger initiative, we providefreshly cooked, homemade meals with love and hygiene to those who need it the most in Tirunelveli,Tamil Nadu.',
    image: '/image/projects/thumbline/FAH-4.jpg',
    status: 'completed',
    beneficiaries: 2500,
    location: 'Multiple Villages',
    date: '2020-2024',
    link: 'https://youtu.be/ndGGJTx80Qw?feature=shared'
  },
  {
    id: '15',
    title: 'Fight Against Hunger - 5',
    category: 'hunger',
    description: 'Providing nutritious meals to underprivileged families and children.',
    fullDescription: 'At Living Hope Trust, we believe that everyone deserves the same quality of food that we enjoy inour homes-tasty, healthy, and served hot. Through our Fight Against Hunger initiative, we providefreshly cooked, homemade meals with love and hygiene to those who need it the most in Tirunelveli,Tamil Nadu.',
    image: '/image/projects/thumbline/FAH-5.jpg',
    status: 'completed',
    beneficiaries: 2500,
    location: 'Multiple Villages',
    date: '2020-2024',
    link: 'https://youtu.be/ZghCKkq9DZo?feature=shared'
  },
  {
    id: '16',
    title: 'Fight Against Hunger - 6',
    category: 'hunger',
    description: 'Providing nutritious meals to underprivileged families and children.',
    fullDescription: 'At Living Hope Trust, we believe that everyone deserves the same quality of food that we enjoy inour homes-tasty, healthy, and served hot. Through our Fight Against Hunger initiative, we providefreshly cooked, homemade meals with love and hygiene to those who need it the most in Tirunelveli,Tamil Nadu.',
    image: '/image/projects/thumbline/FAH-6.jpg',
    status: 'completed',
    beneficiaries: 2500,
    location: 'Multiple Villages',
    date: '2020-2024',
    link: 'https://youtu.be/VFXZE_Oj2XY?feature=shared'
  },
  {
    id: '17',
    title: 'Fight Against Hunger - 7',
    category: 'hunger',
    description: 'Providing nutritious meals to underprivileged families and children.',
    fullDescription: 'At Living Hope Trust, we believe that everyone deserves the same quality of food that we enjoy inour homes-tasty, healthy, and served hot. Through our Fight Against Hunger initiative, we providefreshly cooked, homemade meals with love and hygiene to those who need it the most in Tirunelveli,Tamil Nadu.',
    image: '/image/projects/thumbline/FAH-7.jpg',
    status: 'completed',
    beneficiaries: 2500,
    location: 'Multiple Villages',
    date: '2020-2024',
    link: 'https://youtu.be/VFXZE_Oj2XY?feature=shared'
  },
  {
    id: '18',
    title: 'Fight Against Hunger - 8',
    category: 'hunger',
    description: 'Providing nutritious meals to underprivileged families and children.',
    fullDescription: 'At Living Hope Trust, we believe that everyone deserves the same quality of food that we enjoy inour homes-tasty, healthy, and served hot. Through our Fight Against Hunger initiative, we providefreshly cooked, homemade meals with love and hygiene to those who need it the most in Tirunelveli,Tamil Nadu.',
    image: '/image/projects/thumbline/FAH-8.jpg',
    status: 'completed',
    beneficiaries: 2500,
    location: 'Multiple Villages',
    date: '2020-2024',
    link: 'https://youtu.be/fbemB3Jao0s?feature=shared'
  },
  {
    id: '19',
    title: 'Fight Against Hunger - 9',
    category: 'hunger',
    description: 'Providing nutritious meals to underprivileged families and children.',
    fullDescription: 'At Living Hope Trust, we believe that everyone deserves the same quality of food that we enjoy inour homes-tasty, healthy, and served hot. Through our Fight Against Hunger initiative, we providefreshly cooked, homemade meals with love and hygiene to those who need it the most in Tirunelveli,Tamil Nadu.',
    image: '/image/projects/thumbline/FAH-9.jpg',
    status: 'completed',
    beneficiaries: 2500,
    location: 'Multiple Villages',
    date: '2020-2024',
    link: 'https://youtu.be/nzMXSV9JQeg?feature=shared'
  },
  {
    id: '20',
    title: 'Fight Against Hunger - 11',
    category: 'hunger',
    description: 'Providing nutritious meals to underprivileged families and children.',
    fullDescription: 'At Living Hope Trust, we believe that everyone deserves the same quality of food that we enjoy inour homes-tasty, healthy, and served hot. Through our Fight Against Hunger initiative, we providefreshly cooked, homemade meals with love and hygiene to those who need it the most in Tirunelveli,Tamil Nadu.',
    image: '/image/projects/thumbline/FAH-11.jpg',
    status: 'completed',
    beneficiaries: 2500,
    location: 'Multiple Villages',
    date: '2020-2024',
    link: 'https://youtu.be/ZU3V9g_-Rb8?feature=shared'
  },
  {
    id: '21',
    title: 'Fight Against Hunger - 12',
    category: 'hunger',
    description: 'Providing nutritious meals to underprivileged families and children.',
    fullDescription: 'At Living Hope Trust, we believe that everyone deserves the same quality of food that we enjoy inour homes-tasty, healthy, and served hot. Through our Fight Against Hunger initiative, we providefreshly cooked, homemade meals with love and hygiene to those who need it the most in Tirunelveli,Tamil Nadu.',
    image: '/image/projects/thumbline/FAH-12.jpg',
    status: 'completed',
    beneficiaries: 2500,
    location: 'Multiple Villages',
    date: '2020-2024',
    link: 'https://youtu.be/1uojYz9F-1E?feature=shared'
  },
  {
    id: '22',
    title: 'கொண்டுவந்ததில்லை கொண்டும்போவதில்லை சேர்த்து வைப்பதில் பயனில்லை ',
    category: 'hunger',
    description: 'Providing nutritious meals to underprivileged families and children.',
    fullDescription: 'At Living Hope Trust, we believe that everyone deserves the same quality of food that we enjoy inour homes-tasty, healthy, and served hot. Through our Fight Against Hunger initiative, we providefreshly cooked, homemade meals with love and hygiene to those who need it the most in Tirunelveli,Tamil Nadu.',
    image: '/image/projects/thumbline/FAH-13.jpg',
    status: 'completed',
    beneficiaries: 2500,
    location: 'Multiple Villages',
    date: '2020-2024',
    link: 'https://youtu.be/Cu6MoRvTQl4?feature=shared'
  },
  {
    id: '23',
    title: 'மக்களுக்கு மாலை நேர சிற்றுண்டியாக கொண்டக்கடலை',
    category: 'hunger',
    description: 'Providing nutritious meals to underprivileged families and children.',
    fullDescription: 'At Living Hope Trust, we believe that everyone deserves the same quality of food that we enjoy inour homes-tasty, healthy, and served hot. Through our Fight Against Hunger initiative, we providefreshly cooked, homemade meals with love and hygiene to those who need it the most in Tirunelveli,Tamil Nadu.',
    image: '/image/projects/thumbline/PAYIRU.jpg',
    status: 'completed',
    beneficiaries: 2500,
    location: 'Multiple Villages',
    date: '2020-2024',
    link: 'https://youtu.be/fvyNI4EX8Yo?feature=shared'
  },
  {
    id: '24',
    title: 'பேட்டை சத்யாகாலனியில் நமதுதொண்டுப்பணிகள்',
    category: 'hunger',
    description: 'Providing nutritious meals to underprivileged families and children.',
    fullDescription: 'At Living Hope Trust, we believe that everyone deserves the same quality of food that we enjoy inour homes-tasty, healthy, and served hot. Through our Fight Against Hunger initiative, we providefreshly cooked, homemade meals with love and hygiene to those who need it the most in Tirunelveli,Tamil Nadu.',
    image: '/image/projects/thumbline/BRITHDAY.jpg',
    status: 'completed',
    beneficiaries: 2500,
    location: 'Multiple Villages',
    date: '2020-2024',
    link: 'https://youtu.be/yNWunjA6lCM?feature=shared'
  },
  // <======================cancer============================>
  {
    id: '2',
    title: 'Fight Against Cancer-2',
    category: 'cancer',
    description: 'Supporting cancer patients with treatment funds and care.',
    fullDescription: 'Our Fight Against Cancer program provides comprehensive support to cancer patients including treatment funding, medication assistance, transportation to medical facilities, and emotional support. We have partnered with leading hospitals to ensure quality care and have helped over 150 patients receive proper treatment.',
    image: '/image/projects/cancer1.jpg',
    status: 'active',
    beneficiaries: 150,
    location: 'Regional Hospitals',
    date: '2021-2024',
    link: 'https://youtu.be/tvdGQrJGvVQ?feature=shared'
  },
  {
    id: '3',
    title: 'Flood Rescue Operation',
    category: 'disaster',
    description: 'Emergency relief and rehabilitation during natural disasters.',
    fullDescription: 'Our Disaster Relief Operations provide immediate emergency response during floods and natural disasters. We coordinate rescue operations, provide emergency shelter, distribute relief materials, and support long-term rehabilitation. Our trained volunteer network ensures rapid response and effective aid distribution.',
    image: 'https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'active',
    beneficiaries: 1200,
    location: 'Disaster-Affected Areas',
    date: '2020-2024',
    link: 'https://youtube.com/playlist?list=PL3NkSvlzNuULDHwKHhABadQgVyT8YfoZM&feature=shared'
  },
  {
    id: '4',
    title: 'Old Age Pension Scheme',
    category: 'elderly',
    description: 'Monthly support and care for elderly citizens in need.',
    fullDescription: 'Our Old Age Pension Scheme provides monthly financial support to elderly citizens who lack family support or adequate income. Beyond financial aid, we offer regular health checkups, social activities, and companionship programs to ensure their mental and physical well-being.',
    image: 'https://images.pexels.com/photos/8363026/pexels-photo-8363026.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'active',
    beneficiaries: 300,
    location: 'Senior Care Centers',
    date: '2021-2024',
    link: 'https://youtube.com/playlist?list=PL3NkSvlzNuULDHwKHhABadQgVyT8YfoZM&feature=shared'
  },
  {
    id: '5',
    title: 'Future Sparks - Education Initiative',
    category: 'education',
    description: 'Providing quality education and resources to underprivileged students.',
    fullDescription: 'Future Sparks is our flagship education program that provides scholarships, school supplies, uniforms, and tutoring support to underprivileged students. We run after-school programs, digital literacy classes, and career guidance sessions to ensure students have every opportunity to succeed.',
    image: 'https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'active',
    beneficiaries: 800,
    location: 'Rural Schools',
    date: '2020-2024',
    link: 'https://youtube.com/playlist?list=PL3NkSvlzNuULDHwKHhABadQgVyT8YfoZM&feature=shared'
  },
  {
    id: '6',
    title: 'Real Christmas',
    category: 'holiday',
    description: 'Spreading joy and gifts during the Christmas season.',
    fullDescription: 'Real Christmas is our annual holiday program that brings joy to underprivileged children and families during the Christmas season. We organize gift distributions, special meals, cultural programs, and community celebrations to ensure everyone can participate in the festive spirit.',
    image: 'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'completed',
    beneficiaries: 1500,
    location: 'Community Centers',
    date: 'December 2023',
    link: 'https://youtube.com/playlist?list=PL3NkSvlzNuULDHwKHhABadQgVyT8YfoZM&feature=shared'

  },
  {
    id: '7',
    title: 'Health Awareness Program',
    category: 'awareness',
    description: 'Community health education and preventive care initiatives.',
    fullDescription: 'Our Health Awareness Program conducts regular health camps, vaccination drives, and educational sessions on hygiene, nutrition, and disease prevention. We work with medical professionals to provide free health checkups and basic medical care to underserved communities.',
    image: 'https://images.pexels.com/photos/8376302/pexels-photo-8376302.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'active',
    beneficiaries: 3000,
    location: 'Rural Communities',
    date: '2020-2024',
    link: 'https://youtube.com/playlist?list=PL3NkSvlzNuULDHwKHhABadQgVyT8YfoZM&feature=shared'
  },
  {
    id: '8',
    title: 'Youth Leadership Summit',
    category: 'upcoming',
    description: 'Empowering young leaders for community development.',
    fullDescription: 'The upcoming Youth Leadership Summit aims to identify and train young leaders from rural communities. The program will include leadership workshops, community project planning, and mentorship opportunities to develop the next generation of change-makers.',
    image: 'https://images.pexels.com/photos/7414032/pexels-photo-7414032.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'upcoming',
    beneficiaries: 200,
    location: 'Training Center',
    date: 'March 2024',
    link: 'https://youtube.com/playlist?list=PL3NkSvlzNuULDHwKHhABadQgVyT8YfoZM&feature=shared'
  }
];