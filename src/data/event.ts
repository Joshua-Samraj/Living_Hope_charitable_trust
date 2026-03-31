export interface Project {
  id: number;
  date: string;
  title: string;
  category: string;
  location: string;
  status: string;
  theme: string;
  shortDescription: string;
  detailedExplanation: string;
  imageUrl?: string; // Add this line
}

export const allProjects: Project[] = [
  { 
    id: 1, 
    date: '2026-04-10', 
    title: 'Fight Against Hunger - 1', 
    category: 'Food',
    location: 'Tirunelveli District',
    status: 'Upcoming',
    theme: 'bg-blue-100 text-blue-700',
    shortDescription: 'Building 5 new classrooms and a library for a rural government school.',
    detailedExplanation: 'This project aims to bridge the educational gap by providing state-of-the-art learning facilities to over 300 underprivileged students. The initiative includes constructing digital classrooms, providing high-quality furniture, setting up a science lab, and ensuring clean drinking water facilities. We are currently mobilizing resources and seeking volunteer educators to assist in the inauguration phase.',
    imageUrl: '/image/projects/FAH-1.jpg'
},
  { 
    id: 2, 
    date: '2026-04-25', 
    title: 'Mega Free Medical Camp', 
    category: 'Healthcare',
    location: 'Chennai City Outskirts',
    status: 'Registration Open',
    theme: 'bg-green-100 text-green-700',
    shortDescription: 'Comprehensive health screening and free medicine distribution for low-income families.',
    detailedExplanation: 'Partnering with leading city hospitals, this medical camp will offer free consultations in general medicine, pediatrics, cardiology, and ophthalmology. The project aims to serve at least 1,000 residents. We will provide free diagnostic tests, including blood work and ECGs, followed by the distribution of prescribed medications for a month. We are calling for volunteer doctors, nurses, and medical students to join the initiative.'
  },
  { 
    id: 3, 
    date: '2026-05-05', 
    title: 'Clean Water Initiative', 
    category: 'Infrastructure',
    location: 'Tiruvallur Villages',
    status: 'Planning Phase',
    theme: 'bg-cyan-100 text-cyan-700',
    shortDescription: 'Installation of reverse osmosis (RO) water purification plants in 3 villages.',
    detailedExplanation: 'Access to safe drinking water is a fundamental right. This project targets areas with high groundwater contamination. By installing community-level RO plants, we will ensure that over 500 families have daily access to safe, clean drinking water, drastically reducing waterborne diseases. The project also includes training local youth in plant maintenance to ensure long-term sustainability.'
  },
  { 
    id: 4, 
    date: '2026-05-20', 
    title: 'Women Empowerment Skill Workshop', 
    category: 'Livelihood',
    location: 'Community Center, Chennai',
    status: 'Enrollment Active',
    theme: 'bg-purple-100 text-purple-700',
    shortDescription: 'A 4-week vocational training program in tailoring, digital literacy, and basic accounting.',
    detailedExplanation: 'Designed to foster financial independence, this project equips marginalized women with practical skills. The curriculum is tailored to market demands, covering garment manufacturing, computer basics, and small business management. Upon graduation, participants will receive a starter kit and ongoing mentorship to help them secure employment or start their own micro-enterprises.'
  }
];