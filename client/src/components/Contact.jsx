import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { submitStart, submitSuccess, submitFailure, resetForm } from '../store'
import { Send, CheckCircle, AlertCircle, Mail, Github, Linkedin, Twitter } from 'lucide-react'
import LightBeamButton from './LightBeamButton/LightBeamButton'
import GlassIcons from './GlassIcons/GlassIcons'

import GridScan from './GridScan/GridScan'

const API_BASE_URL = 'https://jeevan-portfolio-api.onrender.com/api';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const { loading, success, error } = useSelector((state) => state.contact)
  const dispatch = useDispatch()
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "200px" })

  const socialItems = [
    { icon: <Github size={20} />, color: 'blue', label: 'GitHub', href: "https://github.com/woonnajeevan7-coder" },
    { icon: <Linkedin size={20} />, color: 'blue', label: 'LinkedIn', href: "https://www.linkedin.com/in/woonna-jeevan-51b4a5391/" },
    { icon: <Twitter size={20} />, color: 'blue', label: 'Twitter', href: "https://twitter.com" },
    { icon: <Mail size={20} />, color: 'red', label: 'Email', href: "mailto:woonnajeevan7@gmail.com" }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(submitStart())
    try {
      await axios.post(`${API_BASE_URL}/contact`, formData)
      dispatch(submitSuccess())
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => dispatch(resetForm()), 5000)
    } catch (err) {
      dispatch(submitFailure(err.response?.data?.message || 'Something went wrong.'))
    }
  }

  return (
    <section ref={ref} id="contact" className="relative py-24 min-h-screen flex flex-col justify-center overflow-hidden bg-slate-950 content-visibility-auto">
      {/* Background GridScan */}
      <div className="absolute inset-0 z-0">
        {isInView && (
          <GridScan
            sensitivity={0.55}
            lineThickness={1}
            linesColor="#392e4e"
            gridScale={0.1}
            scanColor="#FF9FFC"
            scanOpacity={0.4}
            enablePost
            bloomIntensity={0.6}
            chromaticAberration={0.002}
            noiseIntensity={0.01}
          />
        )}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/[0.02] backdrop-blur-3xl p-8 md:p-16 rounded-[40px] shadow-2xl border border-white/10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-black text-white tracking-tighter mb-6">Let's <span className="text-primary">Connect</span></h2>
                <p className="text-slate-400 text-lg leading-relaxed font-medium">
                  Have a project in mind or just want to say hi? Feel free to reach out. 
                  I'm always open to discussing new opportunities or creative ideas.
                </p>
              </div>
              
              <div className="space-y-10">
                <div className="flex items-center space-x-5">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-primary border border-white/10 shadow-inner">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Message Me</h4>
                    <p className="text-slate-500 font-medium">I'll get back to you soon.</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Social Presence</h4>
                  <div className="scale-110 origin-left">
                    <GlassIcons items={socialItems} />
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {success && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-500 rounded-2xl flex items-center space-x-3 text-sm font-bold animate-in fade-in slide-in-from-top-4">
                  <CheckCircle size={20} />
                  <span>Message sent successfully!</span>
                </div>
              )}
              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-2xl flex items-center space-x-3 text-sm font-bold animate-in fade-in slide-in-from-top-4">
                  <AlertCircle size={20} />
                  <span>{error}</span>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder:text-slate-600 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all font-medium"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all font-medium"
                  placeholder="woonnajeevan7@gmail.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all resize-none font-medium"
                  placeholder="How can I help you?"
                />
              </div>
              
              <div className="pt-4">
                <LightBeamButton 
                  type="submit" 
                  disabled={loading}
                  className="w-full flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed py-4"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span className="font-black uppercase tracking-widest text-sm text-white">Send Message</span>
                      <Send size={18} className="text-white" />
                    </>
                  )}
                </LightBeamButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
