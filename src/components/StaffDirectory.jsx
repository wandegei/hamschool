import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Mail, Award } from 'lucide-react';
import Card from '../components/Card';

const StaffDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPosition, setFilterPosition] = useState('All');

  const staff = [
    {
      name: 'Mrs. Sarah Nakato',
      position: 'Head Teacher',
      qualifications: 'M.Ed in Educational Leadership',
      subjects: ['School Administration'],
      email: 'sarah.nakato@hamprepschool.ac.ug',
      image: 'https://images.unsplash.com/photo-1581726690015-c9861fa5057f?w=400'
    },
    {
      name: 'Mr. David Ssemakula',
      position: 'Senior Teacher',
      qualifications: 'B.Ed in Mathematics & Science',
      subjects: ['Mathematics', 'Science'],
      email: 'david.ssemakula@hamprepschool.ac.ug',
      image: 'https://images.unsplash.com/photo-1701229404076-5629809b331d?w=400'
    },
    {
      name: 'Ms. Grace Namukasa',
      position: 'English Teacher',
      qualifications: 'B.A in English Literature',
      subjects: ['English', 'Literature'],
      email: 'grace.namukasa@hamprepschool.ac.ug',
      image: 'https://images.unsplash.com/photo-1581726690015-c9861fa5057f?w=400'
    },
    {
      name: 'Mr. John Mukasa',
      position: 'Science Teacher',
      qualifications: 'B.Sc in Biology',
      subjects: ['Biology', 'Chemistry'],
      email: 'john.mukasa@hamprepschool.ac.ug',
      image: 'https://images.unsplash.com/photo-1701229404076-5629809b331d?w=400'
    },
    {
      name: 'Mrs. Jane Nabirye',
      position: 'Nursery Teacher',
      qualifications: 'Diploma in Early Childhood Education',
      subjects: ['Nursery Education'],
      email: 'jane.nabirye@hamprepschool.ac.ug',
      image: 'https://images.unsplash.com/photo-1581726690015-c9861fa5057f?w=400'
    },
    {
      name: 'Mr. Peter Waiswa',
      position: 'Computer Studies Teacher',
      qualifications: 'B.Sc in Computer Science',
      subjects: ['Computer Studies', 'ICT'],
      email: 'peter.waiswa@hamprepschool.ac.ug',
      image: 'https://images.unsplash.com/photo-1701229404076-5629809b331d?w=400'
    }
  ];

  const positions = ['All', ...new Set(staff.map(s => s.position))];

  const filteredStaff = staff.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.subjects.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesPosition = filterPosition === 'All' || member.position === filterPosition;
    return matchesSearch && matchesPosition;
  });

  return (
    <div>
      {/* Search and Filter */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name or subject..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-gray-900"
          />
        </div>
        <select
          value={filterPosition}
          onChange={(e) => setFilterPosition(e.target.value)}
          className="px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-gray-900"
        >
          {positions.map(pos => (
            <option key={pos} value={pos}>{pos}</option>
          ))}
        </select>
      </div>

      {/* Staff Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredStaff.map((member, index) => (
          <Card key={index} className="p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-center mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-2">{member.position}</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Award className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">{member.qualifications}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">Subjects:</p>
                  <div className="flex flex-wrap gap-2">
                    {member.subjects.map((subject, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {member.email}
                </a>
              </div>
            </motion.div>
          </Card>
        ))}
      </div>

      {filteredStaff.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No staff members found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default StaffDirectory;