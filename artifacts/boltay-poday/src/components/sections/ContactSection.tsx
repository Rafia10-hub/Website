import { motion } from 'framer-motion';
import { Send, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // We would reset form or show success message here
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Contact Info Side */}
          <div className="w-full md:w-5/12 bg-[#049347] p-12 text-white flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold mb-6 tracking-tight">Let's Talk Plants.</h3>
              <p className="text-white/80 leading-relaxed mb-12">
                Whether you're an investor, an urban farmer, or just someone who loves plants. We'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60 mb-1">Email us</div>
                    <a href="mailto:boltaypoday@gmail.com" className="font-medium hover:underline">boltaypoday@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60 mb-1">Location</div>
                    <span className="font-medium">Lahore, Pakistan</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-12"
            >
              <div className="flex gap-4">
                {['Twitter', 'LinkedIn', 'Instagram'].map((social, i) => (
                  <a key={i} href="#" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
                    {social}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Form Side */}
          <div className="w-full md:w-7/12 p-12 lg:p-16 bg-white">
            <h4 className="text-2xl font-bold text-foreground mb-8">Send a Message</h4>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full px-5 py-4 bg-sidebar border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground"
                  placeholder="Ahmad Khan"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full px-5 py-4 bg-sidebar border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground"
                  placeholder="ahmad@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  required
                  className="w-full px-5 py-4 bg-sidebar border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-[#049347] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">Sending...</span>
                ) : (
                  <>Send Message <Send className="w-5 h-5" /></>
                )}
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
