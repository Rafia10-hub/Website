import { motion } from 'framer-motion';
import { Send, Mail, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err.message || 'Failed to send. Please try again.');
    }
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

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12 gap-4"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h5 className="text-xl font-bold text-foreground">Message Sent!</h5>
                <p className="text-gray-500 max-w-xs">
                  We've received your message and will get back to you at <span className="font-medium text-foreground">{form.email || 'your email'}</span> soon.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 px-6 py-2.5 rounded-full border border-primary text-primary text-sm font-semibold hover:bg-green-50 transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    value={form.name}
                    onChange={handleChange}
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
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-sidebar border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground"
                    placeholder="ahmad@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea 
                    id="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="w-full px-5 py-4 bg-sidebar border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {errorMsg}
                  </div>
                )}
                
                <button 
                  type="submit" 
                  disabled={status === 'sending'}
                  className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-[#049347] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20 disabled:opacity-70"
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>Send Message <Send className="w-5 h-5" /></>
                  )}
                </button>
              </form>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}
