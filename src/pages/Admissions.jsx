import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ChevronDown, ChevronUp, FileText, DollarSign } from 'lucide-react';
import SEO from '../components/SEO';
import Card from '../components/Card';
import AdmissionForm from '../components/AdmissionForm';

const Admissions = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const requirements = [
    'Completed application form',
    'Copy of birth certificate',
    'Recent passport-size photographs (2 copies)',
    'Previous school report (for transfer students)',
    'Immunization records',
    'Parent/Guardian identification'
  ];

  const steps = [
    {
      number: 1,
      title: 'Submit Application',
      description: 'Fill out the online application form or visit our office'
    },
    {
      number: 2,
      title: 'Document Verification',
      description: 'Submit required documents for verification'
    },
    {
      number: 3,
      title: 'Assessment',
      description: 'Student assessment and parent interview (for Primary)'
    },
    {
      number: 4,
      title: 'Admission Confirmation',
      description: 'Receive admission letter and fee structure'
    },
    {
      number: 5,
      title: 'Fee Payment',
      description: 'Pay initial fees and complete enrollment'
    }
  ];

  const fees = [
    {
      category: 'Nursery',
      termFee: 'UGX 350,000',
      annual: 'UGX 1,050,000',
      includes: ['Tuition', 'Learning Materials', 'Meals']
    },
    {
      category: 'Primary (P1-P3)',
      termFee: 'UGX 400,000',
      annual: 'UGX 1,200,000',
      includes: ['Tuition', 'Books', 'Meals', 'Sports']
    },
    {
      category: 'Primary (P4-P7)',
      termFee: 'UGX 450,000',
      annual: 'UGX 1,350,000',
      includes: ['Tuition', 'Books', 'Meals', 'Sports', 'Exam Prep']
    }
  ];

  const faqs = [
    {
      question: 'What is the admission age for Nursery?',
      answer: 'Children must be at least 3 years old by the beginning of the academic year for Nursery admission.'
    },
    {
      question: 'Do you offer scholarships?',
      answer: 'Yes, we offer merit-based and need-based scholarships for outstanding students. Applications are reviewed annually.'
    },
    {
      question: 'What is your student-teacher ratio?',
      answer: 'We maintain a ratio of approximately 1:20 to ensure personalized attention for each student.'
    },
    {
      question: 'Do you provide school transport?',
      answer: 'Yes, we have a school van service available for students from various locations. Transport fees are separate.'
    },
    {
      question: 'When does the school year start?',
      answer: 'The academic year begins in February with three terms throughout the year.'
    },
    {
      question: 'Can I visit the school before applying?',
      answer: 'Absolutely! We welcome parents to schedule a tour of our facilities. Contact us to arrange a visit.'
    }
  ];

  return (
    <>
      <SEO 
        title="Admissions"
        description="Join Ham Preparatory School - Kawoko. Learn about admission requirements, application process, fees structure, and enroll your child today."
        keywords="admissions, enrollment, school fees, application process, join Ham Prep"
      />

      <div className="min-h-screen pt-24">
        {/* Header */}
        <section className="py-20 bg-gradient-to-br from-secondary to-primary text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
                Join Our School
              </h1>
              <p className="text-xl text-white/90">
                Begin your child's journey to success - Admissions now open!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Admission Requirements */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
                Admission Requirements
              </h2>
              
              <Card className="p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {requirements.map((requirement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{requirement}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Application Process
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Follow these simple steps to enroll your child
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 mb-8 last:mb-0"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-heading text-2xl font-bold shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  <Card className="flex-1 p-6">
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-700">{step.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Fees Structure */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Fees Structure
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Transparent and affordable pricing for quality education
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {fees.map((fee, index) => (
                <Card key={index} className="p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <DollarSign className="w-12 h-12 text-secondary mb-4" />
                    <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                      {fee.category}
                    </h3>
                    <div className="mb-4">
                      <p className="text-gray-600 text-sm mb-1">Per Term</p>
                      <p className="font-heading text-3xl font-bold text-primary">{fee.termFee}</p>
                    </div>
                    <div className="mb-6">
                      <p className="text-gray-600 text-sm mb-1">Annual</p>
                      <p className="font-heading text-2xl font-bold text-gray-900">{fee.annual}</p>
                    </div>
                    <div className="border-t pt-4">
                      <p className="text-sm font-semibold text-gray-900 mb-2">Includes:</p>
                      <ul className="space-y-1">
                        {fee.includes.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AdmissionForm />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about admissions
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-heading text-lg font-bold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    {openFaq === index ? (
                      <ChevronUp className="w-6 h-6 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-primary flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Admissions;