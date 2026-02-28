import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users } from 'lucide-react';
import SEO from '../components/SEO';
import Card from '../components/Card';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for the highest standards in education and character development',
      color: 'from-primary to-primary-dark'
    },
    {
      icon: Eye,
      title: 'Integrity',
      description: 'We promote honesty, transparency, and ethical behavior in all we do',
      color: 'from-secondary to-secondary-dark'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We embrace modern teaching methods while preserving timeless values',
      color: 'from-accent to-accent-dark'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We foster a supportive environment where everyone belongs and thrives',
      color: 'from-primary to-secondary'
    }
  ];

  const leadership = [
    {
      name: '1.	Mr. Kizito Abubaker Mousa ',
      position: 'School Director',
      image: 'https://images.unsplash.com/photo-1701229404076-5629809b331d?w=400',
      bio: 'With over 20 years in education leadership, Mr. Ssentongo has transformed Ham Prep into a beacon of excellence.'
    },
    {
      name: '2.	Mr. Tumwijukye Transphol George',
      position: 'Head Teacher',
      image: 'https://images.unsplash.com/photo-1581726690015-c9861fa5057f?w=400',
      bio: 'An experienced educator with a passion for nurturing young minds and academic excellence.'
    }
  ];

  const timeline = [
    { year: '2018', event: 'opened', description: 'Ham Preparatory School opened its doors to the first students' },
    { year: '2019', event: 'Expanded Facilities', description: 'New classrooms and library constructed' },
    { year: '2025', event: 'started vocational training and fully registered with MOES', description: 'Introduction of ICT in the curriculum' },
    { year: '2026', event: 'modern infrastructure', description: 'Launched practical skills programs' },
    // { year: '2020', event: 'Modern Infrastructure', description: 'Completion of new school buildings' },
    // { year: '2026', event: 'Continued Excellence', description: '98% success rate in national examinations' }
  ];

  return (
    <>
      <SEO 
        title="About Us"
        description="Learn about Ham Preparatory School - Kawoko's history, mission, vision, and commitment to educational excellence."
        keywords="about Ham Prep, school history, mission, vision, leadership team"
      />

      <div className="min-h-screen pt-24">
        {/* Header */}
        <section className="py-20 bg-gradient-to-br from-accent to-primary text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
                About Ham Preparatory School
              </h1>
              <p className="text-xl text-white/90">
                Nurturing excellence since 2018 - The Fountain of Success
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <Card className="p-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-dark mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                  <p className="text-gray-700 leading-relaxed">
                    To provide quality education that develops academic excellence, God fearing and character and practical skills.
                  </p>
                </motion.div>
              </Card>

              <Card className="p-8">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-secondary-dark mb-4">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                  <p className="text-gray-700 leading-relaxed">
                    To produce disciplined, competent, God fearing and productive citizens.
                  </p>
                </motion.div>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="p-6 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${value.color} mb-4`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {value.description}
                    </p>
                  </motion.div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* School History Timeline */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Milestones in our commitment to educational excellence
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 mb-8 last:mb-0"
                >
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="inline-block bg-primary text-white px-4 py-2 rounded-full font-bold">
                      {item.year}
                    </span>
                  </div>
                  <div className="flex-shrink-0 w-4 relative">
                    <div className="w-4 h-4 bg-secondary rounded-full"></div>
                    {index !== timeline.length - 1 && (
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-300"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                      {item.event}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Leadership Team
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Meet the dedicated leaders guiding our school to excellence
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {leadership.map((leader, index) => (
                <Card key={index} className="p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-lg"
                    />
                    <h3 className="font-heading text-2xl font-bold text-gray-900 mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-primary font-semibold mb-4">{leader.position}</p>
                    <p className="text-gray-600">{leader.bio}</p>
                  </motion.div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities Showcase */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Facilities
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Modern infrastructure designed for effective learning
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1688853739679-3bc19f690d98"
                  alt="School Campus"
                  className="w-full h-80 object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1668104751662-d8a1405ae905"
                  alt="Modern Classrooms"
                  className="w-full h-80 object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;