import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, Eye, Award } from 'lucide-react';
import Globe from '../components/Globe';
import { Link } from 'react-router-dom';
const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Transparency',
      description: 'We maintain complete transparency in all our operations and fund utilization.'
    },
    {
      icon: User,
      title: 'Community Focus',
      description: 'Our programs are designed with and for the communities we serve.'
    },
    {
      icon: Eye,
      title: 'Sustainability',
      description: 'We create lasting solutions that communities can maintain independently.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every project and initiative we undertake.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-16"
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
        <Globe />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-6">About Us</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Living Hope Charitable Trust was founded in 2020 by Jose Sam with a vision to create 
              meaningful change in rural communities through education, humanitarian aid, and 
              sustainable development programs.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower underprivileged communities through education, healthcare, and 
                sustainable development programs while fostering hope, dignity, and self-reliance 
                among those we serve.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To create a world where every individual has access to basic necessities, 
                quality education, and opportunities for growth, building stronger, more 
                resilient communities for future generations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                What started as a small initiative to help underprivileged children access education 
                has grown into a comprehensive charitable organization touching thousands of lives 
                across multiple communities.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Under the leadership of Jose Sam, our trust has expanded its reach to include 
                healthcare initiatives, disaster relief, elderly care, and various awareness programs 
                that address the most pressing needs of our society.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to grow and adapt, always staying true to our core mission of 
                empowering lives and uplifting communities through sustainable, impactful programs.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Modern image box with layered effect */}
              <div className="relative z-10 w-full max-w-md mx-auto">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/image/projects/sam_c.jpg"
                    alt="Jose Sam"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative elements */}
                {/* <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-red-500 rounded-lg z-0"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 border-4 border-green-500 rounded-lg z-0"></div> */}
              </div>
              
              {/* Content overlay */}
              <div className="relative z-20 bg-white p-6 rounded-xl shadow-lg -mt-12 mx-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Jose Sam</h3>
                <p className="text-blue-600 font-semibold mb-4">Founder & Chairman</p>
                <p className="text-gray-600">
                  "Our mission is not just to provide aid, but to empower communities to build 
                  their own sustainable futures. Every life we touch becomes a beacon of hope 
                  for others."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Chief Secretary Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Chief Secretary</h2>
            <p className="text-xl text-gray-600">Guiding operations with integrity and vision.</p>
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative max-w-md w-full"
            >
              {/* Modern image box with decorative elements */}
              <div className="relative z-10">
                <div className="aspect-square w-64 h-64 mx-auto rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                  <img
                    src="https://ik.imagekit.io/vc42cyymbb/616f339a-e9a9-4c7f-855d-3d911ef45570.jpeg"
                    alt="Chief Secretary"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative shapes */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-100 rounded-lg z-0"></div>
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-green-100 rounded-full z-0"></div>
              </div>

              {/* Content card */}
              <div className="relative z-20 bg-white p-8 rounded-xl shadow-lg -mt-10 mx-6 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Lydia</h3>
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full font-semibold text-sm">
                    Chief Secretary
                  </span>
                </div>
                <p className="text-gray-600">
                  "Serving with compassion and dedication to ensure the smooth execution of every initiative that brings hope and transformation."
                </p>
                
                {/* Social links (optional) */}
                
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Volunteers Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">Want to join our volunteer team?</p>
          <Link to="/volunteer">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors duration-300">
              Become a Volunteer
            </button>
          </Link>
        </motion.div>



      

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide every decision we make and every program we implement
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;