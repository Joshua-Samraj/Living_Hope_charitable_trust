export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  status: 'active' | 'completed' | 'upcoming';
  beneficiaries: string;
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
    fullDescription: 'எனது நீண்ட நாள் ஆசை ஆதரவற்ற மக்களுக்கு  முதல் தரமான  வீட்டு சாப்பாடுகளை நாமே சமைத்து அவர்களுக்கு கொடுக்க வேண்டும் என்பது.    தேவனுடைய பெரிதான கிருபையால் 19-08-2022  அன்று  மீன் சாப்பாடு ,மீன் பொரியல் ,  சௌசௌ கூட்டு என உள்ளடக்கிய உணவுகளை  126 பசியுள்ள மக்களுக்கு இந்த உணவுகளை வழங்க தேவன் உதவி செய்தார். இதை ஒரு திட்டமாக நாங்கள் உருவாக்கியுள்ளோம்  இத்திட்டத்தின் பெயர்  (FIGHT AGAINST HUNGER)  இந்த திட்டத்தின் மூலம் பசியில்லா தமிழகத்தை உருவாக்குவதே எங்கள் நோக்கம். இதன் மூலம்  மாதம் இம்மாதிரியாக உணவுகளை  நமது  LIVING HOPE TRUST  மூலமாக சமைத்து நேரிடையாக அவர்களுக்கு சூடாக பரிமாற திட்டமிட்டுள்ளோம்.',
    image: '/image/projects/FAH-1.jpg',
    status: 'completed',
    beneficiaries: '126',
    location: 'Government Hospital',
    date: '(19-08-2022)',
    link: 'https://youtu.be/cI-GAwU2Rcs?feature=shared'
  },
  {
    id: '2',
    title: 'Fight Against Hunger - 2',
    category: 'hunger',
    description: 'Providing nutritious meals...',
    fullDescription: 'The Fight Against Hunger initiative is a cornerstone program of Living Hope Trust dedicated to combating food insecurity in rural and underprivileged communities. Our comprehensive approach focuses on providing nutritious, home-cooked meals to families living below the poverty line. Through this program, we have successfully served over 2,500 beneficiaries across multiple villages from 2020-2024, distributing meals that are not just filling but nutritionally balanced to support the health and development of vulnerable populations. Our team of dedicated volunteers prepares fresh, wholesome food daily and ensures direct distribution to ensure maximum impact.',
    image: '/image/projects/FAH-2.jpg',
    status: 'completed',
    beneficiaries: '2500',
    location: 'Multiple Villages',
    date: '2020-2024',
    link: 'https://youtu.be/gim-Yv3ENhk?feature=shared'
  },
  {
    id: '3',
    title: 'Fight Against Hunger - 3',
    category: 'hunger',
    description: 'Providing nutritious meals...',
    fullDescription: 'This phase of our Fight Against Hunger campaign extended our reach to numerous villages, delivering hot, nutritious meals to battle chronic hunger and malnutrition. Working with local communities and volunteers, we identified the most vulnerable populations and ensured regular meal distributions. Our approach combines immediate relief through meal provision with long-term community engagement, training locals on basic nutrition and sustainable food practices. With 2,500+ beneficiaries touched through this initiative, we continue to build a hunger-free Tamil Nadu through consistent, compassionate action.',
    image: '/image/projects/fah-3.jpg',
    status: 'completed',
    beneficiaries: '2500',
    location: 'Multiple Villages',
    date: '2020-2024',
    link: 'https://youtu.be/W-iLxT22MbY?feature=shared'
  },
  {
    id: '4',
    title: 'Fight Against Hunger - 4',
    category: 'hunger',
    description: 'Providing nutritious meals...',
    fullDescription: 'As part of our ongoing commitment to food security, this campaign targeted multiple villages with systematic meal distribution programs. We partnered with local organizations and community leaders to identify areas of greatest need and establish sustainable feeding points. Each meal served represents not just nutrition but dignity and care, acknowledging the inherent worth of every individual. Our volunteers work tirelessly to ensure that no one in our communities goes hungry, building a culture of collective responsibility and mutual support.',
    image: '/image/projects/thumbline/FAH-4.jpg',
    status: 'completed',
    beneficiaries: '2500',
    location: 'Multiple Villages',
    date: '2020-2024',
    link: 'https://youtu.be/ndGGJTx80Qw?feature=shared'
  },
  {
    id: '5',
    title: 'Fight Against Hunger - 5',
    category: 'hunger',
    description: 'Providing nutritious meals...',
    fullDescription: 'Continuing our mission to eliminate hunger, this phase focused on scaling our meal distribution network across rural Tamil Nadu. We developed a sustainable model that combines community participation with professional kitchen management, ensuring quality, consistency, and nutritional value. Through strategic partnerships and volunteer networks, we reached 2,500+ families with regular meal support. The program has become a beacon of hope for vulnerable communities, demonstrating that organized compassion can make tangible, life-changing differences in people\'s lives.',
    image: '/image/projects/thumbline/FAH-5.jpg',
    status: 'completed',
    beneficiaries: '2500',
    location: 'Multiple Villages',
    date: '2020-2024',
    link: 'https://youtu.be/ZghCKkq9DZo?feature=shared'
  },
  {
    id: '6',
    title: 'Fight Against Hunger - 6',
    category: 'hunger',
    description: 'Providing nutritious meals...',
    fullDescription: 'This iteration of our Fight Against Hunger program emphasized the importance of balanced nutrition in community health. We coordinated with nutritionists and health workers to design meals that address specific deficiencies commonly found in underprivileged populations. Our kitchen units prepare meals featuring locally-sourced ingredients that maximize nutritional impact while supporting local farmers. By 2024, our cumulative reach exceeded 2,500 beneficiaries, each meal a stepping stone toward better health, stronger communities, and a more equitable society.',
    image: '/image/projects/thumbline/FAH-6.jpg',
    status: 'completed',
    beneficiaries: '2500',
    location: 'Multiple Villages',
    date: '2020-2024',
    link: 'https://youtu.be/VFXZE_Oj2XY?feature=shared'
  },
  {
    id: '7',
    title: 'Fight Against Hunger - 7',
    category: 'hunger',
    description: 'Providing nutritious meals...',
    fullDescription: 'Our seventh major hunger relief campaign brought systematic food security to additional villages across the region. We established community kitchens and implemented regular distribution schedules, ensuring reliable access to meals for 2,500+ vulnerable individuals. The program demonstrated the power of organized community action, with volunteers from diverse backgrounds coming together to serve. Each season brings new challenges, and our adaptive approach ensures we can respond to emerging needs while maintaining consistency in our core mission of nourishing hope through nutritious meals.',
    image: '/image/projects/thumbline/FAH-7.jpg',
    status: 'completed',
    beneficiaries: '2500',
    location: 'Multiple Villages',
    date: '2020-2024',
    link: 'https://youtu.be/VFXZE_Oj2XY?feature=shared'
  },
  {
    id: '8',
    title: 'Fight Against Hunger - 8',
    category: 'hunger',
    description: 'Providing nutritious meals...',
    fullDescription: 'Expanding our reach and impact, this campaign focused on establishing sustainable meal programs that could be maintained by local communities with ongoing support from Living Hope Trust. We trained community leaders in meal preparation, nutrition planning, and resource management. The eight-phase approach has helped us achieve scale while maintaining the personal touch that makes our work meaningful. With 2,500+ beneficiaries supported through various phases, we continue to prove that systematic, compassionate action can transform community food security.',
    image: '/image/projects/thumbline/FAH-8.jpg',
    status: 'completed',
    beneficiaries: '2500',
    location: 'Multiple Villages',
    date: '2020-2024',
    link: 'https://youtu.be/fbemB3Jao0s?feature=shared'
  },
  {
    id: '9',
    title: 'Fight Against Hunger - 9',
    category: 'hunger',
    description: 'Providing nutritious meals...',
    fullDescription: 'As our Fight Against Hunger campaign entered its ninth phase, we increased focus on preventive nutrition targeting children and pregnant women—populations most vulnerable to malnutrition. We designed specialized meal plans addressing specific nutritional deficiencies while training families on healthy eating practices. This holistic approach combines immediate meal relief with educational components, empowering communities to achieve long-term food security. Our 2,500+ beneficiaries have witnessed not just hunger relief but transformative improvements in health markers and quality of life.',
    image: '/image/projects/thumbline/FAH-9.jpg',
    status: 'completed',
    beneficiaries: '2500',
    location: 'Multiple Villages',
    date: '2020-2024',
    link: 'https://youtu.be/nzMXSV9JQeg?feature=shared'
  },
  {
    id: '10',
    title: 'Fight Against Hunger - 11',
    category: 'hunger',
    description: 'Providing nutritious meals...',
    fullDescription: 'The eleventh phase of our comprehensive hunger relief initiative represents years of accumulated learning and improved operational efficiency. We implemented technology-based tracking systems to ensure equitable distribution and monitor nutritional outcomes. Partnership with government agencies and NGOs expanded our resource base and sustainability. Through this integrated approach, we have sustained food security programs for 2,500+ people annually, demonstrating that persistent, well-organized compassion can create lasting social change.',
    image: '/image/projects/thumbline/FAH-11.jpg',
    status: 'completed',
    beneficiaries: '2500',
    location: 'Multiple Villages',
    date: '2020-2024',
    link: 'https://youtu.be/ZU3V9g_-Rb8?feature=shared'
  },
  {
    id: '11',
    title: 'Fight Against Hunger - 12',
    category: 'hunger',
    description: 'Providing nutritious meals...',
    fullDescription: 'In the twelfth iteration of our Fight Against Hunger initiative, we refined our model to include seasonal adjustments and community input in meal planning. We recognize that hunger is not a one-size-fits-all challenge—different seasons, locations, and populations have unique needs. Our adaptive programming ensures meals are culturally appropriate, nutritionally complete, and responsive to local preferences. With 2,500+ beneficiaries supported consistently, we have created a reliable safety net that gives vulnerable families the stability needed to address other aspects of their development.',
    image: '/image/projects/thumbline/FAH-12.jpg',
    status: 'completed',
    beneficiaries: '2500',
    location: 'Multiple Villages',
    date: '2020-2024',
    link: 'https://youtu.be/1uojYz9F-1E?feature=shared'
  },
  {
    id: '12',
    title: 'கொண்டுவந்ததில்லை கொண்டும்போவதில்லை சேர்த்து வைப்பதில் பயனில்லை',
    category: 'hunger',
    description: 'Providing nutritious meals...',
    fullDescription: 'This Tamil phrase underscores our philosophy that material possessions hold no true value—what matters is sharing and caring for others. This campaign focused on redistributing surplus food resources and redirecting waste into meaningful community nutrition programs. We partnered with businesses, markets, and households to collect surplus food and transform it into nutritious meals for those in need. This initiative embodies the spirit of sharing and community interdependence, reminding us that generosity is not measured in possession but in the willingness to give.',
    image: '/image/projects/thumbline/FAH-13.jpg',
    status: 'completed',
    beneficiaries: '2500',
    location: 'Multiple Villages',
    date: '2020-2024',
    link: 'https://youtu.be/Cu6MoRvTQl4?feature=shared'
  },
  {
    id: '13',
    title: 'மக்களுக்கு மாலை நேர சிற்றுண்டியாக கொண்டக்கடலை',
    category: 'hunger',
    description: 'Providing nutritious meals...',
    fullDescription: 'Recognizing that evening nutrition is often overlooked for vulnerable populations, this program specifically provides roasted peanuts and other nutritious snacks during evening hours. We recognized that evening meals are often skipped due to cost constraints, leading to nutritional deficiencies. By providing affordable, protein-rich evening snacks, we address a critical nutritional gap. This simple but effective intervention has touched thousands of lives, proving that even small, consistent acts of care can significantly improve health outcomes for economically disadvantaged communities.',
    image: '/image/projects/thumbline/PAYIRU.jpg',
    status: 'completed',
    beneficiaries: '2500',
    location: 'Multiple Villages',
    date: '2020-2024',
    link: 'https://youtu.be/fvyNI4EX8Yo?feature=shared'
  },
  {
    id: '14',
    title: 'பேட்டை சத்யாகாலனியில் நமதுதொண்டுப்பணிகள்',
    category: 'hunger',
    description: 'Providing nutritious meals...',
    fullDescription: 'Satyakalanam (pronounced sat-yak-alam) is a unique charitable concept in Tamil culture celebrating birthdays or special occasions by serving the community. In the Pattai neighborhood, Living Hope Trust organized special community feasts and celebrations where residents could gather for nutrition, fellowship, and joy. These event-based interventions were not just about food distribution but about creating moments of dignity and community belonging. The program demonstrated that charity transcends mere survival—it\'s about creating experiences of value and acceptance that nurture the whole person.',
    image: '/image/projects/thumbline/BRITHDAY.jpg',
    status: 'completed',
    beneficiaries: '2500',
    location: 'Multiple Villages',
    date: '2020-2024',
    link: 'https://youtu.be/yNWunjA6lCM?feature=shared'
  },

  // Cancer projects with unique IDs from 15 onward
  {
    id: '15',
    title: 'Fight Against Cancer-1',
    category: 'cancer',
    description: 'Supporting cancer patients...',
    fullDescription: 'Living Hope Trust\'s Fight Against Cancer initiative launched with a comprehensive approach to cancer care, prevention, and support. The program provides medical assistance to cancer patients, focusing on early detection and treatment accessibility for underprivileged populations. We organized medical camps at regional hospitals, offered free consultations, and connected patients with financial resources for treatment. By supporting 150+ beneficiaries with dignified healthcare access, we affirm our belief that cancer should not be a death sentence for those without financial means. Our commitment extends from prevention through treatment to rehabilitation and emotional support.',
    image: '/image/projects/cancer_image/1.jpg',
    status: 'active',
    beneficiaries: '150',
    location: 'Regional Hospitals',
    date: '2021-2024',
    link: 'https://youtube.com/watch?v=6SeoEtT93MM'
  },
  {
    id: '16',
    title: 'Fight Against Cancer-2',
    category: 'cancer',
    description: 'Supporting cancer patients...',
    fullDescription: 'Building on our initial cancer awareness work, the second phase expanded our reach to more regional hospitals and communities. We strengthened partnerships with medical professionals to provide enhanced screening services, diagnostic support, and treatment coordination. Our 150+ beneficiaries received not only medical care but emotional support and financial guidance to navigate the complex healthcare system. This holistic approach recognizes that cancer patients need comprehensive support—medical, financial, psychological, and spiritual—to overcome this challenging disease.',
    image: '/image/projects/cancer_image/2.jpg',
    status: 'completed',
    beneficiaries: '150',
    location: 'Regional Hospitals',
    date: '2021-2024',
    link: 'https://youtu.be/tvdGQrJGvVQ?feature=shared'
  },
  {
    id: '17',
    title: 'நெல்லை மக்களுக்கு ஒரு அரிதான வாய்ப்பு!',
    category: 'cancer',
    description: 'Supporting cancer patients...',
    fullDescription: 'நமது லிவிங் ஹோப் ட்ரஸ்ட்...',
    image: '/image/projects/cancer_image/awareness.jpg',
    status: 'completed',
    beneficiaries: '150',
    location: 'Regional Hospitals',
    date: '2021-2024',
    link: 'https://youtube.com/watch?v=Ru0y0_ndaB4'
  },
  {
    id: '18',
    title: 'மகளிர் தின முக்கிய செய்தி',
    category: 'cancer',
    description: 'Supporting cancer patients...',
    fullDescription: 'நமது லிவிங் ஹோப் ட்ரஸ்ட்...',
    image: '/image/projects/cancer_image/awareness_2.jpg',
    status: 'completed',
    beneficiaries: '150',
    location: 'Regional Hospitals',
    date: '2021-2024',
    link: 'https://youtube.com/watch?v=Ru0y0_ndaB4'
  },
  {
    id: '19',
    title: 'Day 1 - இலவச மருத்துவ முகாம்',
    category: 'cancer',
    description: 'Supporting cancer patients...',
    fullDescription: 'நமது லிவிங் ஹோப் ட்ரஸ்ட்...',
    image: '/image/projects/cancer_image/Cancer_1_p_1.jpg',
    status: 'completed',
    beneficiaries: '150',
    location: 'Regional Hospitals',
    date: '2021-2024',
    link: 'https://youtube.com/watch?v=nuqRWIfp1Dg'
  },
  
  {
    id: '21',
    title: 'Day 3 - பருத்திப்பாடு கிராமம்',
    category: 'cancer',
    description: 'Supporting cancer patients...',
    fullDescription: '📢 நெல்லை மக்களுக்கு ஒரு அரிதான வாய்ப்பு!!...',
    image: '/image/projects/cancer_image/Cancer_1_p_3.jpg',
    status: 'completed',
    beneficiaries: '150',
    location: 'Regional Hospitals',
    date: '2021-2024',
    link: 'https://youtube.com/watch?v=nuqRWIfp1Dg'
  },
  {
    id: '22',
    title: 'Day 4 - புற்று நோய்க்கு எதிரான போராட்டம்',
    category: 'cancer',
    description: 'Supporting cancer patients...',
    fullDescription: '📢 நெல்லை மக்களுக்கு ஒரு அரிதான வாய்ப்பு!!...',
    image: '/image/projects/cancer_image/Cancer_1_p_4.jpg',
    status: 'completed',
    beneficiaries: '150',
    location: 'Regional Hospitals',
    date: '2021-2024',
    link: 'https://youtu.be/29zPPYzKX_M?feature=shared'
  },
  {
    id: '23',
    title: 'Living Hope Trust ன் பாராட்டுகள்',
    category: 'cancer',
    description: 'Supporting cancer patients...',
    fullDescription: '📢 மாபெரும் புற்றுநோய் வரும்முன்...',
    image: '/image/projects/cancer_image/Cancer_1_p_5.jpg',
    status: 'completed',
    beneficiaries: '150',
    location: 'Regional Hospitals',
    date: '2021-2024',
    link: 'https://youtube.com/watch?v=b4vpLSgXeUo'
  },
  {
    id: '20',
    title: 'Day 2 - சிவந்திப்பட்டி கிராமம்',
    category: 'cancer',
    description: 'Supporting cancer patients...',
    fullDescription: 'நமது லிவிங் ஹோப் ட்ரஸ்ட்...',
    image: '/image/projects/cancer_image/Cancer_1_p_2.jpg',
    status: 'completed',
    beneficiaries: '150',
    location: 'Regional Hospitals',
    date: '2021-2024',
    link: 'https://youtube.com/watch?v=nuqRWIfp1Dg'
  },

  // Disaster relief and others
  {
    id: '24',
    title: 'Flood Rescue Operation - 1',
    category: 'disaster',
    description: 'Emergency relief and rehabilitation...',
    fullDescription: 'When natural disasters strike, Living Hope Trust mobilizes immediately to provide emergency response and rescue operations. Our Flood Rescue Operation teams deployed advanced rescue equipment and trained personnel to reach affected areas, evacuating 1,200+ people from flooded zones and providing immediate shelter and supplies. We coordinated with government agencies and other NGOs to maximize impact. This rapid response initiative demonstrated our capacity to act decisively in crises, saving lives and minimizing suffering during critical times.',
    image: '/image/projects/flood/1.jpg',
    status: 'completed',
    beneficiaries: '1200',
    location: 'Disaster-Affected Areas',
    date: '2020-2024',
    link: 'https://youtu.be/riUTH3Z2-sY?feature=shared'
  },
  {
    id: '25',
    title: 'Flood Rescue Operation - 2',
    category: 'disaster',
    description: 'Emergency relief and rehabilitation...',
    fullDescription: 'Continuing our disaster response commitment, the second flood rescue operation focused on expanding coverage to multiple affected areas. We established relief camps providing food, water, medical care, and temporary shelter for 1,200+ displaced families. Our trained volunteers worked tirelessly in challenging conditions to identify and assist the most vulnerable—elderly, children, and disabled individuals. This operation reinforced our belief that compassion increases in proportion to crisis, and organized preparation and swift action can save lives.',
    image: '/image/projects/flood/2.jpg',
    status: 'completed',
    beneficiaries: '1200',
    location: 'Disaster-Affected Areas',
    date: '2020-2024',
    link: 'https://youtu.be/kFCayONr3bU?feature=shared'
  },
  {
    id: '26',
    title: 'Flood Rescue Operation - 3',
    category: 'disaster',
    description: 'Emergency relief and rehabilitation...',
    fullDescription: 'The third flood rescue operation emphasized long-term rehabilitation alongside immediate relief. We provided temporary housing materials, helped restore community infrastructure, and offered counseling to trauma-affected individuals. Beyond emergency response, we worked with 1,200+ beneficiaries on rebuilding strategies and disaster preparedness. This comprehensive approach recognizes that disaster recovery extends far beyond immediate rescue—people need sustained support to rebuild their lives and communities.',
    image: '/image/projects/flood/3.jpg',
    status: 'completed',
    beneficiaries: '1200',
    location: 'Disaster-Affected Areas',
    date: '2020-2024',
    link: 'https://youtu.be/s0RNabwJqbI?feature=shared'
  },
  {
    id: '27',
    title: 'Flood Rescue Operation - 4',
    category: 'disaster',
    description: 'Emergency relief and rehabilitation...',
    fullDescription: 'As flood disasters became more frequent, our fourth operation brought refined protocols and expanded resources. We implemented better early warning systems, pre-positioned relief supplies, and established rapid deployment networks. Our 1,200+ beneficiary reach included not just rescue but comprehensive support—WASH facilities, medical care, psychosocial support, and livelihood recovery programs. Each operation teaches us lessons that improve our next response, making Living Hope Trust increasingly effective in disaster management.',
    image: '/image/projects/flood/4.jpg',
    status: 'completed',
    beneficiaries: '1200',
    location: 'Disaster-Affected Areas',
    date: '2020-2024',
    link: 'https://youtu.be/1PeGDdXdopM?feature=shared'
  },
  {
    id: '28',
    title: 'Flood Rescue Operation - 5',
    category: 'disaster',
    description: 'Emergency relief and rehabilitation...',
    fullDescription: 'With our fifth flood rescue operation, we shifted focus toward community resilience and disaster-proof development. We worked with 1,200+ affected families on sustainable rebuilding strategies—constructing homes with flood-resistant designs, establishing early warning systems, and creating community disaster preparedness plans. Our approach transformed victims into stakeholders in their own recovery. This preventive mindset ensures that while our rescue operations will remain necessary, we simultaneously work to reduce future vulnerability.',
    image: '/image/projects/flood/5.jpg',
    status: 'completed',
    beneficiaries: '1200',
    location: 'Disaster-Affected Areas',
    date: '2020-2024',
    link: 'https://youtube.com/watch?v=e64Xh-RQ-jk'
  },
  {
    id: '29',
    title: 'Flood Rescue Operation - 6',
    category: 'disaster',
    description: 'Emergency relief and rehabilitation...',
    fullDescription: 'The sixth rescue operation showcased our matured disaster response system, operating with enhanced inter-agency coordination, better resource management, and stronger community involvement. We reached 1,200+ beneficiaries with integrated services—emergency evacuation, medical response, shelter provisioning, and socioeconomic rehabilitation. Local community leaders partnered with us in implementation, strengthening community ownership of disaster response. This collaborative model has proven most effective in building sustainable resilience.',
    image: '/image/projects/flood/6.jpg',
    status: 'completed',
    beneficiaries: '1200',
    location: 'Disaster-Affected Areas',
    date: '2020-2024',
    link: 'https://youtu.be/elwFo8i6cRA?feature=shared'
  },
  {
    id: '30',
    title: 'Old Age Pension Scheme',
    category: 'elderly',
    description: 'Monthly support and care for elderly...',
    fullDescription: 'Recognizing the vulnerability of elderly populations with limited family support networks, Living Hope Trust established a dedicated Old Age Pension Scheme. We provide three elderly beneficiaries with regular monthly financial support, medical care, nutritional supplements, and emotional companionship. This modest but meaningful program addresses the dignity and care needs of aging citizens. While our current reach is limited, we view this as a model that demonstrates the potential for expanding elderly care across communities. Each senior supported represents a commitment to honoring the contributions of our elders.',
    image: '/image/projects/old_age/1.jpg',
    status: 'active',
    beneficiaries: '3',
    location: 'Senior Care Centers',
    date: '2021-2024',
    link: 'https://youtube.com/watch?v=gYMx_Rgbeuc'
  },
  {
    id: '31',
    title: 'Future Sparks - Education Initiative',
    category: 'education',
    description: 'Providing quality education...',
    fullDescription: 'Future Sparks represents our vision that education is the most powerful tool for breaking cycles of poverty. This flagship initiative provides 800+ rural school children with quality education, learning materials, nutritional support, and mentoring. We work directly with schools in underserved areas, training teachers, enhancing curricula with practical skills, and creating scholarship programs. Beyond academics, Future Sparks nurtures critical thinking, creativity, and social responsibility. Our beneficiaries are not just gaining knowledge—they are becoming future leaders equipped to transform their communities. The program website (living-hope-charitable-education-website-liart.vercel.app) showcases our comprehensive educational philosophy.',
    image: '/image/projects/Banner/future.png',
    status: 'active',
    beneficiaries: '800',
    location: 'Rural Schools',
    date: '2020-2024',
    link: 'https://living-hope-charitable-education-website-liart.vercel.app'
  },
  {
    id: '32',
    title: 'Real Christmas - 1',
    category: 'holiday',
    description: 'Spreading joy during Christmas...',
    fullDescription: 'Real Christmas embodies our belief that holiday seasons should be inclusive and joyful for everyone, regardless of economic status. This inaugural program brought Christmas celebration to 1,500+ people in Melapalayam through gift distribution, community feasts, cultural performances, and spiritual reflections. We created moments of pure joy for children and families who rarely experience festive celebrations. Real Christmas transforms the holiday season from a commercial event into a genuine expression of hope, love, and community solidarity—values that transcend religious boundaries.',
    image: '/image/projects/Banner/christmas.jpg',
    status: 'completed',
    beneficiaries: '1500',
    location: 'Melapalayam',
    date: 'December 2023',
    link: 'https://youtube.com/watch?v=XON8YadWcNs'
  },
  {
    id: '33',
    title: 'Real Christmas - 2',
    category: 'holiday',
    description: 'Spreading joy during Christmas...',
    fullDescription: 'Expanding our Real Christmas initiative, the second year reached 1,500+ beneficiaries across Melapalayam with enhanced activities—gift drives, community dinners, children\'s entertainment, and tree-planting ceremonies combining celebration with environmental action. We involved schools, businesses, and churches in creating a truly inclusive festival. Volunteers worked year-round preparing for the event, ensuring every detail reflected our care for beneficiary dignity and joy. Real Christmas has become a anticipated community event where care and celebration intertwine.',
    image: '/image/projects/Christmas/1.jpg',
    status: 'completed',
    beneficiaries: '1500',
    location: 'Melapalayam',
    date: 'December 2023',
    link: 'https://youtu.be/Gg_n8C57bJE?feature=shared'
  },
  {
    id: '34',
    title: 'இந்த Joykitல அப்படி என்னதான் இருக்கு?',
    category: 'holiday',
    description: 'Spreading joy during Christmas...',
    fullDescription: 'This Tamil phrase captures our philosophy—\"What makes a Joykit special?\" Our Real Christmas Joykits are thoughtfully curated packages containing gifts, educational materials, practical supplies, and inspirational messages. Each Joykit is designed to bring tangible joy while supporting child development. We received 1,500+ Joykits distributed in Melapalayam, each one carefully assembled by volunteers. The program teaches children that they are valued, supported, and worthy of care—messages often missing in economically disadvantaged environments.',
    image: '/image/projects/Christmas/2.jpg',
    status: 'completed',
    beneficiaries: '1500',
    location: 'Melapalayam',
    date: 'December 2023',
    link: 'https://youtube.com/watch?v=OF1CkhAUA08'
  },
  {
    id: '35',
    title: 'நமது LivinghopeTrustன் உண்மையான கிறிஸ்துமஸ்',
    category: 'holiday',
    description: 'Spreading joy during Christmas...',
    fullDescription: 'This Tamil title emphasizes \"Living Hope Trust\'s True Christmas,\" distinguishing our approach from commercialized celebrations. Our vision centers on authentic connection, genuine care, and shared humanity. December 2023\'s celebration spread joy to 1,500+ people in Melapalayam through meaningful interaction rather than just transaction. We organized community gatherings, talent shows, spiritual services, skill-sharing sessions, and volunteer appreciation events. Real Christmas became a platform for marginalized communities to express their talents, celebrate their identities, and experience unconditional acceptance.',
    image: '/image/projects/Christmas/3.jpg',
    status: 'completed',
    beneficiaries: '1500',
    location: 'Melapalayam',
    date: 'December 2023',
    link: 'https://youtube.com/watch?v=xLC8UGn5h54'
  },
  {
    id: '36',
    title: 'Health Awareness Program',
    category: 'awareness',
    description: 'Community health education...',
    fullDescription: 'Living Hope Trust\'s Health Awareness Program represents our commitment to preventive healthcare and community empowerment. Reaching 3,000+ rural residents from 2020-2024, we conduct educational sessions on hygiene, nutrition, disease prevention, sexual health, reproductive rights, and mental wellness. Our program recognizes that knowledge is fundamental to health—when communities understand disease transmission, preventive measures, and treatment options, they can make informed decisions. We partner with medical professionals and community leaders to ensure culturally appropriate, accessible information. Health awareness is not just about preventing disease—it\'s about enabling communities to own and optimize their wellbeing.',
    image: 'https://images.pexels.com/photos/8376302/pexels-photo-8376302.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'active',
    beneficiaries: '3000',
    location: 'Rural Communities',
    date: '2020-2024',
    link: 'https://youtube.com/playlist?list=PL3NkSvlzNuULDHwKHhABadQgVyT8YfoZM&feature=shared'
  },
  {
    id: '37',
    title: 'Youth Leadership Summit',
    category: 'Community',
    description: 'Empowering young leaders...',
    fullDescription: 'Held at Rose Mary College Of Arts & Science in March 2024, our Youth Leadership Summit brought together 200+ young people from diverse backgrounds to explore leadership principles, social responsibility, and career pathways. The summit featured industry experts, social activists, mentors, and successful role models sharing insights and inspiring the next generation. Workshops covered public speaking, critical thinking, entrepreneurship, social entrepreneurship, and community engagement. Young participants left with expanded perspectives, new networks, and concrete action plans for contributing to positive social change. This initiative recognizes young people as agents of transformation, not passive beneficiaries of development.',
    image: 'https://images.pexels.com/photos/7414032/pexels-photo-7414032.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'completed',
    beneficiaries: '200',
    location: 'Rose Mary College Of Arts & Science',
    date: 'March 2024',
    link: 'https://youtube.com/playlist?list=PL3NkSvlzNuULDHwKHhABadQgVyT8YfoZM&feature=shared'
  },
  
//   {
//     id: '38',
//     title: 'Cancer Medical Camp',
//     category: 'upcoming',
//     description: 'Join us for a free Cancer Medical Check-up Camp, providing essential screenings worth ₹5,000 per person at no cost. Early detection saves lives, and this initiative aims to offer high-quality diagnostic services to 200+ beneficiaries, especially underprivileged communities who lack access to proper healthcare.',
// fullDescription: 'Living Hope Trust\'s Cancer Medical Camp in Tenkasi represents our commitment to making advanced cancer screening accessible to all, regardless of economic status. Each screening provides diagnostic services valued at ₹5,000 per person at absolutely no cost—a transformative offering for communities where healthcare costs are prohibitive barriers to care.\n\nProgram Components:\n📋 Preliminary Health Assessment: Comprehensive health history and physical examination\n🔬 Free Cancer Screenings: Including blood work, imaging consultations, and specialist reviews\n💬 Expert Consultations: Direct interaction with oncologists and healthcare specialists\n📚 Prevention & Detection Education: Sessions on recognizing warning signs, healthy behaviors, and self-care\n💝 Follow-up Support: Connection to affordable treatment resources for those requiring further care\n👥 Holistic Care Approach: Nutritional counseling, stress management, and community support groups\n\nThis initiative embodies our belief that cancer is not a death sentence—early detection with subsequent treatment can save lives. By removing financial barriers to screening, we empower communities to take charge of their health destiny. Every person screened represents hope, every life saved represents our mission achieved.',
//     image: '/image/projects/upcoming/TENKASI.jpg',
//     status: 'upcoming',
//     beneficiaries: 'Rigistration Joing on',
//     location: 'Tenkasi',
//     date: '"Not scheduled"',
//     link: "#"
//   },
//   {
//     id: '39',
//     title: 'Cancer Medical Camp',
//     category: 'upcoming',
//     description: 'Join us for a free Cancer Medical Check-up Camp, providing essential screenings worth ₹5,000 per person at no cost. Early detection saves lives, and this initiative aims to offer high-quality diagnostic services to 200+ beneficiaries, especially underprivileged communities who lack access to proper healthcare.',
// fullDescription: 'Living Hope Trust\'s Kodaikanal Cancer Medical Camp (August 21–24, 2024) represents a concentrated effort to screen 400+ residents in this mountainous region where healthcare access is particularly challenging. The four-day intensive program brings together oncologists, radiologists, and preventive health specialists to provide comprehensive cancer screening in one accessible location.\n\nIntensive Camp Features:\n🏥 Multi-Stage Screening: Initial assessment, diagnostic testing, and specialist consultation\n📊 Health Data Collection: Building health records for follow-up and continuous monitoring\n🎓 Advanced Awareness Sessions: Deep dives into cancer prevention, risk factors, and early warning signs\n👨‍⚕️ Medical Expert Panel: Consultations with experienced oncologists addressing individual concerns\n📞 Helpline Establishment: Post-camp support for questions and resource connection\n🚗 Transportation Support: Ensuring remote residents can attend despite geographic barriers\n💰 Scholarship Program: Financial assistance for those requiring subsequent treatment\n\nBy bringing concentrated healthcare services directly to underserved communities, we eliminate excuses and barriers. Every screening could detect early-stage cancer when treatment is most effective. Kodaikanal\'s beautiful setting becomes not just a holiday destination but a place where lives are saved.',
//     image: '/image/projects/upcoming/Kodaikanal.jpg',
//     status: 'upcoming',
//     beneficiaries: '400',
//     location: 'Kodaikanal',
//     date: 'August 21–24, 2024',
//     link: "#"
//   },
  {
    id: '40',
    title: 'Cancer Awarness Camp',
    category: 'Awareness',
    description: 'Join us for a free Cancer Medical Check-up Camp, providing essential screenings worth ₹5,000 per person at no cost. Early detection saves lives, and this initiative aims to offer high-quality diagnostic services to 200+ beneficiaries, especially underprivileged communities who lack access to proper healthcare.',
    fullDescription: `The Women’s Cancer Awareness initiative is a vital healthcare mission dedicated to reducing mortality rates through education and early intervention. By reaching over 1,000+ individuals, we break the silence surrounding women’s health and provide a clear roadmap for prevention.

    The program focuses on four life-saving pillars:

    • Early Prevention & HPV Vaccination: Educating young women and parents on the critical importance of the HPV vaccine as a primary defense against cervical cancer, alongside lifestyle choices that reduce overall risk.
    
    • Mastery of Self-Screening: Practical guidance on regular self-examinations, empowering women to recognize early warning signs and understand their own bodies, which is the first line of defense in successful treatment.
    
    • Navigating Clinical Checkups: Demystifying the medical process by providing clear advice on essential annual screenings, including Mammograms for breast health and Pap Smear tests for cervical health.
    
    • Diagnostic Guidance: Helping women understand the role of X-rays and specialized imaging in early detection, ensuring they know when and where to seek professional medical consultations.
    
    Through this initiative, we are not just sharing information; we are building a culture of proactive health, ensuring that every woman has the knowledge and the courage to prioritize her well-being.`,
    image: '/image/projects/Awareness/(03).jpg',
    status: 'completed',
    beneficiaries: '400',
    location: 'Kodaikanal',
    date: 'August 21–24, 2024',
    link: "https://fight-against-cancer-kodaikanel.vercel.app/"
  },
  {
    id: '41',
    title: 'Student Awareness Program',
    category: 'Awareness',
    
    description: 'A massive 4-day initiative empowering over 1,000 students across Tamil Nadu with essential life skills, career guidance, and health awareness.',
    fullDescription: `The "Student Awareness Program" was a landmark 4-day mission (August 21–24, 2024) that successfully reached and empowered over 1,000+ students across Tamil Nadu. This initiative was designed to bridge the gap between academic education and the real-world resilience needed for modern life.

    The program focused on a holistic approach to student growth through five core pillars:

    • Professional Excellence: Expert career guidance and industry insights to help 1,000+ students build a clear roadmap for their future success.
    
    • Overcoming Modern Addictions: Specialized sessions addressing the growing concerns of drug dependency and social media addiction, replacing them with healthy, mindful habits.
    
    • Mental Resilience & Stage Fear: Practical workshops designed to shatter the barriers of public speaking and social anxiety, helping students find their voice and lead with confidence.
    
    • Health & Women’s Awareness: Vital medical awareness sessions, including early cancer detection and prevention, ensuring students are informed about long-term well-being.
    
    • Sustainable Living: Advocating for a plastic-free future by educating students on the environmental impact of waste and promoting conscious consumption on campus.
    
    This program has not only informed but transformed the lives of over a thousand young leaders, equipping them with the discipline, knowledge, and courage to shape a better tomorrow.`,
    image: '/image/projects/Awareness/(9).jpeg',
    status: 'completed',
    beneficiaries: '1000+',
    location: 'Tamil Nadu',
    date: 'August 21–24, 2024',
    link: "https://youtube.com/shorts/v-Lx9YMHUSs?si=LOfqCdeSX3yp_yfN"
  },
 
];
