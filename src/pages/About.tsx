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
                {/* <div className="flex justify-center space-x-4 mt-6">
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div> */}
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