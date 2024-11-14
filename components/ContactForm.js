import { Mail, Shapes } from 'lucide-react';
import Header from './Header';

const ContactForm = () => {
  return (
    <div >
      <div className="custom-container">
        <div className="contact-content content-width max-w-4xl mx-auto">
          <div className="section-header mb-10">
          <div className="flex mb-16">
              <Header title="Contact" HomeIcon={Mail} />
            </div>

            <h1 className="text-white text-4xl leading-tight font-light mb-8">
            Let's Work  <span className="text-[#FFCC01]">Together!</span>
            </h1>
          </div>
          <h3 className="text-lg font-medium text-gray-300 mb-4">souravacharjee360@gmail.com</h3>
          <p id="required-msg" className="text-sm  text-gray-500 mb-8">
            * Marked fields are required to fill.
          </p>

          <form className="contact-form space-y-6" method="POST" action="mailer.php">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="input-group">
                <label htmlFor="full-name" className="text-sm font-medium text-gray-300 mb-2">Full Name <sup>*</sup></label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  placeholder="Your Full Name"
                  className="input-field w-full px-4 py-3 border border-gray-700 bg-transparent text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
                />
              </div>
              <div className="input-group">
                <label htmlFor="email" className="text-sm font-medium text-gray-300 mb-2">Email <sup>*</sup></label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email address"
                  className="input-field w-full px-4 py-3 border border-gray-700 bg-transparent text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
                />
              </div>
              <div className="input-group">
                <label htmlFor="phone-number" className="text-sm font-medium text-gray-300 mb-2">Phone <span className="text-gray-500">(optional)</span></label>
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  placeholder="Your phone number"
                  className="input-field w-full px-4 py-3 border border-gray-700 bg-transparent text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
                />
              </div>
              <div className="input-group">
                <label htmlFor="subject" className="text-sm font-medium text-gray-300 mb-2">Subject <sup>*</sup></label>
                <select
                  name="subject"
                  id="subject"
                  className="input-field w-full px-4 py-3 border border-gray-700 bg-transparent text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
                >
                  <option className='bg-gray-800 cursor-pointer' value="">Select a subject</option>
                  <option className='bg-gray-800 cursor-pointer' value="subject1">UI Design</option>
                  <option className='bg-gray-800 cursor-pointer'  value="subject2">Frontend Development</option>
                  <option className='bg-gray-800 cursor-pointer' value="subject3">Full Stack Development</option>
                  <option className='bg-gray-800 cursor-pointer' value="subject3">Backend Development</option>
                  <option className='bg-gray-800 cursor-pointer' value="subject3">App Development</option>
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="budget" className="text-sm font-medium text-gray-300 mb-2">Your Budget <span className="text-gray-500">(optional)</span></label>
                <input
                  type="number"
                  name="budget"
                  id="budget"
                  placeholder="A range budget for your project"
                  className="input-field w-full px-4 py-3 border border-gray-700 bg-transparent text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
                />
              </div>
              <div className="input-group">
                <label htmlFor="message" className="text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write your message here..."
                  className="input-field w-full px-4 py-3 border border-gray-700 bg-transparent text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
                ></textarea>
              </div>
              <div className="input-group">
                <label htmlFor="upload-attachment" className="flex items-center space-x-2 text-sm font-medium text-gray-300 mb-2">
                  <Shapes className="w-5 h-5 text-primary" />
                  <span>Add an attachment</span>
                </label>
                <input
                  type="file"
                  name="file"
                  id="upload-attachment"
                  className="file-input w-full px-4 py-3 border border-gray-700 bg-transparent text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
                />
              </div>
            </div>
            <div className="input-group text-center ">
              <button
                className="theme-btn px-8 py-3 mt-12 bg-[#FFCC01] text-black rounded-lg shadow-lg hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primary transition duration-300"
                name="submit"
                type="submit"
                id="submit-form"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
