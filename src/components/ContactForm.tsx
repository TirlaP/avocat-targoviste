import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // This would be replaced with actual EmailJS or similar implementation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-sm p-8 shadow-sm">
      <h2 className="text-2xl font-serif font-medium text-primary mb-6">Programează o consultație</h2>
      
      {submitStatus === 'success' && (
        <div className="bg-green-50 border-l-2 border-green-500 text-green-700 p-4 mb-6" role="alert">
          <p>Mesajul dvs. a fost trimis cu succes. Vă vom contacta în curând.</p>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="bg-red-50 border-l-2 border-red-500 text-red-700 p-4 mb-6" role="alert">
          <p>A apărut o eroare la trimiterea mesajului. Vă rugăm să încercați din nou.</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="name" className="block text-primary font-medium mb-2">Nume complet</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border-b border-gray-300 py-2 focus:border-secondary focus:outline-none transition-colors"
            required
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="email" className="block text-primary font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-b border-gray-300 py-2 focus:border-secondary focus:outline-none transition-colors"
            required
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="phone" className="block text-primary font-medium mb-2">Telefon</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border-b border-gray-300 py-2 focus:border-secondary focus:outline-none transition-colors"
            required
          />
        </div>
        
        <div className="mb-8">
          <label htmlFor="message" className="block text-primary font-medium mb-2">Mesaj</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full border-b border-gray-300 py-2 focus:border-secondary focus:outline-none transition-colors"
            required
          ></textarea>
        </div>
        
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-secondary hover:bg-secondary/90 text-white font-medium px-6 py-3 rounded-sm transition-colors ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Se trimite...' : 'Trimite mesaj'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
