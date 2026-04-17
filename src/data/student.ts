export interface Student {
  id: string;
  name: string;
  age: number;
  grade: string;
  location: string;
  need: string;
  details: string;
  image: string;
  detailRoute: string;
  paymentLink: string;
  gender: 'Male' | 'Female';
}

export const students: Student[] = [
  { 
    id: "lhctfs_001",
    name: "A.Manish kumar", 
    age: 13,
    grade: "8th Grade", 
    location: "Reddiarpatti,Tirunelveli,Tamil Nadu", 
    need: "₹5,000", 
    details: "Books,Bag,Notes,Stationery Kit,Tuition Fees",
    image: "/image/projects/student_image/manis kumar.png", 
    detailRoute: "/student/manish-kumar",
    paymentLink: "https://rzp.io/rzp/KlbNjlA4",
    gender: "Male"
  },
  { 
    id: "lhctfs_002",
    name: "A.Subarna", 
    age: 15, 
    grade: "11th Grade", 
    location: "Itteri Pudhu Kulam,Tirunelveli", 
    need: "₹14,500", 
    details: "School Fees,Uniform,Bag",
    image: "/image/projects/student_image/manis kumar.png", 
    detailRoute: "/student/subarna-a",
    paymentLink: "https://rzp.io/rzp/krU7w0uS",
    gender: "Female"
  },
  { 
    id: "lhctfs_003",
    name: "G.Bramamuthu", 
    age: 15, 
    grade: "12th Grade", 
    location: "Anavarathanallur,Thoothukkudi, Tamil Nadu", 
    need: "₹14,500", 
    details: "Books,Uniform,Tuition Fees,Bag",
    image: "/image/projects/student_image/manis kumar.png",
    detailRoute: "/student/bramamuthu",
    paymentLink: "https://rzp.io/rzp/X6huyd9Z",
    gender: "Male"
  },
  { 
    id: "lhctfs_004",
    name: "R.Riona Lithesha", 
    age: 6, 
    grade: "2nd Grade", 
    location: "Eruvadi,Tirunelveli,Tamil Nadu",
    need: "₹19,850", 
    details: "Books,Uniform,Bag",
    image: "/image/projects/student_image/manis kumar.png",
    detailRoute: "/student/riona-lithesha",
    paymentLink: "https://rzp.io/rzp/SqerDit",
    gender: "Female"
  },
  { 
    id: "lhctfs_005",
    name: "R.Varshini", 
    age: 11, 
    grade: "6th Grade", 
    location: "Eruvadi,Tirunelveli,Tamil Nadu", 
    need: "₹24,500", 
    details: "Books,Stationery Kit,Uniform,Bag",
    image: "/image/projects/student_image/manis kumar.png",
    detailRoute: "/student/varshini",
    paymentLink: "https://rzp.io/rzp/a2gVzfb1",
    gender: "Female"
  },
  { 
    id: "lhctfs_006",
    name: "Joshua.J", 
    age: 19, 
    grade: "B.E Electronic And Communication Engineering",
    location: "Tirunelveli, Tamil Nadu", 
    need: "₹1,11,000",
    details: "1 year of study",
    image: "/image/projects/student_image/manis kumar.png", 
    detailRoute: "/student/joshua-j",
    paymentLink: "https://rzp.io/rzp/9bpFu0w",
    gender: "Male"
  },
  { 
    id: "lhctfs_007",
    name: "Sandru Mugin.V",
    age: 20, 
    grade: "BA in Tamil Literature",
    location: "Tirunelveli, Tamil Nadu", 
    need: "₹21,000",
    details: "1 year of study",
    image: "/image/projects/student_image/manis kumar.png", 
    detailRoute: "/student/sandru-mugin",
    paymentLink: "https://rzp.io/rzp/w14o9lG",
    gender: "Male"
  },
  { 
    id: "lhctfs_008",
    name: "Saran Mari",
    age: 20, 
    grade: "BA in Tamil Literature",
    location: "Paruthipadu,Tirunelveli", 
    need: "₹21,000",
    details: "1 year of study",
    image: "/image/projects/student_image/manis kumar.png",
    detailRoute: "/student/saran-mari",
    paymentLink: "https://rzp.io/rzp/R6yGyX4",
    gender: "Male"
  },
  { 
    id: "lhctfs_009",
    name: "Sathya.K",
    age: 4, 
    grade: "LKG",
    location: "Sankarankovil , Tenkasi",
    need: "₹26,000",
    details: "Books,Bag,Uniform,school fees,Van Fees", 
    image: "/image/projects/student_image/manis kumar.png",
    detailRoute: "/student/sathya-k",
    paymentLink: "https://rzp.io/rzp/R6yGyX4",
    gender: "Female"
  }
];