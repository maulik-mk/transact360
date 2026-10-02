import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, BarChart3, Globe2, IndianRupee, Headset, Smartphone, FileText, ChevronLeft, ChevronRight, Lock } from 'lucide-react';

export default function Home() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const testimonials = [
    {
      quote: "Transact360 has completely changed how I run my shop. The DMT settlements are instant, and I never face pending issues with BBPS. The best part is the commission structure highest in the market!",
      name: "Rajesh Kumar",
      role: "Retailer - Uttar Pradesh",
      initials: "RK",
      color: "brand-blue",
      bgInitials: "bg-brand-blue/10",
      textInitials: "text-brand-blue"
    },
    {
      quote: "As a distributor, I need a portal that is fast and reliable. Their AEPS service is unmatched with 99.9% uptime, and the POS devices are very easy for my merchants to use. Customer support is also excellent.",
      name: "Amit Enterprises",
      role: "Master Distributor - Gujarat",
      initials: "AE",
      color: "brand-green",
      bgInitials: "bg-brand-green/10",
      textInitials: "text-brand-green"
    },
    {
      quote: "Pichle 2 saal se main Transact360 use kar raha hu. AEPS aur DMT ka success rate sabse best hai. Margin bhi time par credit ho jata hai. Mere sabhi customers khush hain!",
      name: "Vikas Telecom",
      role: "Channel Partner - Bihar",
      initials: "VT",
      color: "brand-yellow",
      bgInitials: "bg-brand-yellow/20",
      textInitials: "text-brand-yellow-dark"
    },
    {
      quote: "Switching to Transact360 was the best decision for my retail network. The unified platform is incredibly easy to teach to new merchants, and our transaction volume has doubled.",
      name: "Suresh Agencies",
      role: "Distributor - Rajasthan",
      initials: "SA",
      color: "brand-blue",
      bgInitials: "bg-brand-blue/10",
      textInitials: "text-brand-blue"
    },
    {
      quote: "We process over 500 bill payments daily. Before Transact360, we had frequent timeouts. Now, the BBPS integration works perfectly every time. Highly recommended!",
      name: "Priya Mobile Center",
      role: "Retailer - Maharashtra",
      initials: "PM",
      color: "brand-green",
      bgInitials: "bg-brand-green/10",
      textInitials: "text-brand-green"
    },
    {
      quote: "The CMS and EMI drop services are a game changer. Delivery executives now prefer my shop for depositing cash because the settlement is guaranteed T+0.",
      name: "Naveen Kirana",
      role: "Merchant - Karnataka",
      initials: "NK",
      color: "brand-yellow",
      bgInitials: "bg-brand-yellow/20",
      textInitials: "text-brand-yellow-dark"
    },
    {
      quote: "The Micro-ATM device connects instantly via Bluetooth. Rural customers in my village can easily withdraw money and check balances without traveling 15 kms to town.",
      name: "Deepak Sharma",
      role: "Retailer - Madhya Pradesh",
      initials: "DS",
      color: "brand-blue",
      bgInitials: "bg-brand-blue/10",
      textInitials: "text-brand-blue"
    },
    {
      quote: "Onboarding new retailers used to take 2-3 days with other platforms. With Transact360's paperless biometric KYC, my agents start transacting within 15 minutes!",
      name: "Balaji Communications",
      role: "Distributor - Tamil Nadu",
      initials: "BC",
      color: "brand-green",
      bgInitials: "bg-brand-green/10",
      textInitials: "text-brand-green"
    },
    {
      quote: "Utility bill collections, PAN card services, and FASTag recharges have brought in a consistent stream of new walk-in clients. Excellent support team and zero downtime.",
      name: "Rohit Verma",
      role: "CSP Merchant - Punjab",
      initials: "RV",
      color: "brand-yellow",
      bgInitials: "bg-brand-yellow/20",
      textInitials: "text-brand-yellow-dark"
    }
  ];

  return (
    <div className="w-full bg-white overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 pb-16 lg:pt-36 lg:pb-24 px-6 lg:px-12 w-full border-b border-border bg-[#f8fafc]">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#edeff2_1px,transparent_1px),linear-gradient(to_bottom,#edeff2_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-[10%] right-[10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-brand-green/10 blur-[100px] md:blur-[150px] pointer-events-none z-0"></div>
        <div className="absolute top-[30%] left-[-10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] rounded-full bg-brand-blue/10 blur-[100px] md:blur-[150px] pointer-events-none z-0"></div>
        
        <div className="relative z-10 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start text-left max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-white shadow-sm text-brand-blue rounded-full font-bold text-xs tracking-wider uppercase mb-6 border border-brand-blue/10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
              </span>
              Secure Financial Infrastructure
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-text-main tracking-tight mb-6 leading-[1.1] sm:leading-[1.1]"
            >
              Trust built into every <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">transaction.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-text-muted mb-10 max-w-xl leading-relaxed font-medium"
            >
              Secure, scalable, and intelligent payment solutions designed to accelerate growth for modern enterprises worldwide.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <button className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white px-8 py-4 rounded-1xl font-bold text-lg transition-all shadow-[0_8px_20px_rgba(6,101,60,0.2)] hover:shadow-[0_12px_25px_rgba(6,101,60,0.3)] hover:-translate-y-0.5">
                Explore Platform <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto bg-white border-2 border-border hover:border-brand-blue hover:text-brand-blue text-text-main px-8 py-4 rounded-1xl font-bold text-lg transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
                Contact Sales
              </button>
            </motion.div>
          </div>

          {/* Right Column: macOS Window Frame Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full mt-10 lg:mt-0"
          >
            {/* Ambient Multi-Color Gradient Glow */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-brand-blue/20 via-brand-green/20 to-brand-yellow/15 rounded-2xl sm:rounded-3xl blur-2xl opacity-75 pointer-events-none"></div>

            {/* macOS Window Mockup Frame */}
            <div className="relative rounded-2xl border border-slate-200/90 bg-white shadow-[0_25px_70px_rgba(0,0,0,0.12)] overflow-hidden">
              {/* macOS Window Chrome / Titlebar */}
              <div className="bg-slate-100/95 border-b border-slate-200/90 px-4 py-3 flex items-center justify-between backdrop-blur-md">
                {/* Traffic Light Control Dots */}
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] shadow-xs"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] shadow-xs"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29] shadow-xs"></div>
                </div>

                {/* macOS Address / Title Capsule */}
                <div className="flex items-center gap-1.5 px-3.5 py-1 bg-white border border-slate-200/80 rounded-md text-[11px] font-semibold text-slate-600 shadow-xs">
                  <Lock size={11} className="text-emerald-600" />
                  <span>transact360.in/portal</span>
                </div>

                {/* Right Decorative Spacer */}
                <div className="flex items-center gap-1.5 opacity-40">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-400"></div>
                </div>
              </div>

              {/* macOS Window Screen (Image Container) */}
              <div className="relative bg-slate-950 overflow-hidden">
                <img 
                  src="/home.jpeg" 
                  alt="Transact360 Digital FinTech Platform" 
                  className="w-full h-auto object-cover object-top block" 
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- MAGIC UI INFINITE MARQUEE --- */}
        <div className="w-full mt-24 overflow-hidden relative flex flex-col items-center">
          <p className="text-sm font-bold text-text-muted uppercase tracking-wider mb-8 relative z-10">Trusted platform for enterprise services</p>
          
          <div className="relative w-full max-w-[100vw] overflow-hidden flex items-center">
            {/* Soft fade masks on the edges */}
            <div className="absolute inset-y-0 left-0 w-1/4 lg:w-1/3 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-1/4 lg:w-1/3 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>
            
            {/* Scrolling Track */}
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6 px-3 cursor-pointer">
              {/* Duplicate the array twice to create a seamless infinite loop */}
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  <div className="flex items-center gap-4 bg-white border border-border shadow-sm px-6 py-4 rounded-1xl min-w-[280px] hover:border-brand-blue/30 transition-colors">
                    <div className="w-12 h-12 rounded-1xl bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                      <Globe2 size={24} />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-text-main">Banking & DMT</h4>
                      <p className="text-xs text-text-muted font-medium">Instant money transfers</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-white border border-border shadow-sm px-6 py-4 rounded-1xl min-w-[280px] hover:border-brand-green/30 transition-colors">
                    <div className="w-12 h-12 rounded-1xl bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0">
                      <ShieldCheck size={24} />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-text-main">Merchant POS</h4>
                      <p className="text-xs text-text-muted font-medium">Secure UPI & QR acceptance</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-white border border-border shadow-sm px-6 py-4 rounded-1xl min-w-[280px] hover:border-brand-yellow/50 transition-colors">
                    <div className="w-12 h-12 rounded-1xl bg-brand-yellow/10 flex items-center justify-center text-brand-yellow-dark shrink-0">
                      <Zap size={24} />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-text-main">BBPS & Utility</h4>
                      <p className="text-xs text-text-muted font-medium">Lightning fast bill payments</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-white border border-border shadow-sm px-6 py-4 rounded-1xl min-w-[280px] hover:border-brand-blue/30 transition-colors">
                    <div className="w-12 h-12 rounded-1xl bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                      <BarChart3 size={24} />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-text-main">CMS Integration</h4>
                      <p className="text-xs text-text-muted font-medium">Hyperlocal cash drops</p>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* --- WHY PARTNER WITH US --- */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 w-full relative overflow-hidden bg-white">
        {/* Subtle dot pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none z-0"></div>

        {/* Faint Background Rupee Icons */}
        <div className="absolute top-10 left-[5%] text-gray-100 transform -rotate-12 pointer-events-none z-0">
          <IndianRupee size={220} strokeWidth={1.5} />
        </div>
        <div className="absolute top-[40%] right-[2%] text-brand-green/[0.03] transform rotate-12 pointer-events-none z-0">
          <IndianRupee size={300} strokeWidth={1} />
        </div>
        <div className="absolute bottom-10 left-[35%] text-brand-blue/[0.02] transform -rotate-6 pointer-events-none z-0">
          <IndianRupee size={250} strokeWidth={1} />
        </div>

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-text-main mb-4 tracking-tight">Why Partner With Transact360?</h2>
            <p className="text-text-muted font-medium text-lg">We empower our agents and distributors with the best tools, margins, and support in the industry.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative group bg-white p-8 rounded-1xl border border-border hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-green to-brand-green/30 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-brand-green/5 rounded-full blur-xl group-hover:bg-brand-green/10 transition-colors"></div>
              <div className="w-14 h-14 rounded-1xl bg-brand-green/10 flex items-center justify-center text-brand-green mb-6 relative z-10 group-hover:scale-110 transition-transform">
                <BarChart3 size={24} />
              </div>
              <h3 className="font-black text-xl text-text-main mb-3 relative z-10">Industry-Best Margins</h3>
              <p className="text-sm text-text-muted leading-relaxed font-medium relative z-10">Maximize your earning potential with the most competitive and transparent commission structures available.</p>
            </div>

            <div className="relative group bg-white p-8 rounded-1xl border border-border hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-yellow-dark to-brand-yellow/30 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-brand-yellow/5 rounded-full blur-xl group-hover:bg-brand-yellow/10 transition-colors"></div>
              <div className="w-14 h-14 rounded-1xl bg-brand-yellow/10 flex items-center justify-center text-brand-yellow-dark mb-6 relative z-10 group-hover:scale-110 transition-transform">
                <Zap size={24} />
              </div>
              <h3 className="font-black text-xl text-text-main mb-3 relative z-10">Lightning Fast</h3>
              <p className="text-sm text-text-muted leading-relaxed font-medium relative z-10">Built on advanced architecture ensuring 99.9% transaction success rates and instantaneous settlements.</p>
            </div>

            <div className="relative group bg-white p-8 rounded-1xl border border-border hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue to-brand-blue/30 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-brand-blue/5 rounded-full blur-xl group-hover:bg-brand-blue/10 transition-colors"></div>
              <div className="w-14 h-14 rounded-1xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6 relative z-10 group-hover:scale-110 transition-transform">
                <Globe2 size={24} />
              </div>
              <h3 className="font-black text-xl text-text-main mb-3 relative z-10">Frictionless UI</h3>
              <p className="text-sm text-text-muted leading-relaxed font-medium relative z-10">An intuitive, unified dashboard that makes managing your downline network and daily transactions effortless.</p>
            </div>

            <div className="relative group bg-white p-8 rounded-1xl border border-border hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-700 to-gray-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-gray-100 rounded-full blur-xl group-hover:bg-gray-200 transition-colors"></div>
              <div className="w-14 h-14 rounded-1xl bg-gray-100 flex items-center justify-center text-gray-700 mb-6 relative z-10 group-hover:scale-110 transition-transform">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-black text-xl text-text-main mb-3 relative z-10">100% Trusted</h3>
              <p className="text-sm text-text-muted leading-relaxed font-medium relative z-10">Bank-grade security and full regulatory compliance ensuring your money and data are always protected.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- COMPREHENSIVE SERVICE ECOSYSTEM (BENTO GRID - SOFT LIGHT) --- */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#f8fafc] border-t border-border relative overflow-hidden">
        {/* Soft Decorative Background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-green/5 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>

        {/* Faint Background Rupee Icons */}
        <div className="absolute top-[20%] left-[2%] text-brand-blue/[0.02] transform -rotate-12 pointer-events-none z-0">
          <IndianRupee size={350} strokeWidth={1.5} />
        </div>
        <div className="absolute bottom-[20%] right-[3%] text-brand-green/[0.02] transform rotate-12 pointer-events-none z-0">
          <IndianRupee size={280} strokeWidth={1.5} />
        </div>
        <div className="absolute top-[60%] left-[45%] text-gray-200/20 transform -rotate-6 pointer-events-none z-0">
          <IndianRupee size={150} strokeWidth={2} />
        </div>

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-text-main mb-6 tracking-tight">Our Service Ecosystem</h2>
            <p className="text-lg text-text-muted font-medium">From banking to travel, we provide a unified API and platform for all your retail financial needs. Build your business with our plug-and-play services.</p>
          </div>

          {/* Bento Box Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-auto md:auto-rows-[240px]">
            
            {/* 1. Banking (Large) */}
            <div className="lg:col-span-2 lg:row-span-2 group bg-gradient-to-br from-white to-gray-50 border border-border shadow-[0_8px_30px_rgba(0,0,0,0.03)] rounded-1xl p-10 hover:border-brand-blue/30 hover:shadow-[0_20px_60px_rgba(2,39,168,0.08)] transition-all duration-300 flex flex-col justify-between overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl group-hover:bg-brand-blue/10 transition-colors pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-1xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <Globe2 size={32} />
                </div>
                <h3 className="text-3xl font-black text-text-main mb-3 tracking-tight relative z-10">Banking & DMT</h3>
                <p className="text-text-muted text-base font-medium leading-relaxed relative z-10">Comprehensive Domestic Money Transfer, AEPS, and Mini-ATM services designed for instant cash withdrawals and high-volume routing.</p>
              </div>
              <button className="relative z-10 mt-8 w-fit text-sm font-bold text-brand-blue hover:text-brand-blue-dark inline-flex items-center gap-2 transition-colors group/btn">
                Explore Banking <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* 2. Utility */}
            <div className="lg:col-span-1 lg:row-span-1 group bg-gradient-to-br from-white to-gray-50 border border-border shadow-[0_8px_30px_rgba(0,0,0,0.03)] rounded-1xl p-8 hover:border-brand-green/30 hover:shadow-[0_20px_50px_rgba(6,101,60,0.08)] transition-all duration-300 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-green/5 rounded-full blur-2xl group-hover:bg-brand-green/15 transition-colors pointer-events-none"></div>
              <h3 className="text-3xl font-black text-text-main mb-3 tracking-tight relative z-10">Utility & BBPS</h3>
              <p className="text-text-muted text-base font-medium leading-relaxed relative z-10">Pay electricity, water, gas, and broadband bills instantly through Bharat BillPay.</p>
            </div>

            {/* 3. Recharge */}
            <div className="lg:col-span-1 lg:row-span-1 group bg-gradient-to-br from-white to-gray-50 border border-border shadow-[0_8px_30px_rgba(0,0,0,0.03)] rounded-1xl p-8 hover:border-brand-yellow/50 hover:shadow-[0_20px_50px_rgba(253,180,12,0.1)] transition-all duration-300 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/5 rounded-full blur-2xl group-hover:bg-brand-yellow/15 transition-colors pointer-events-none"></div>
              <h3 className="text-3xl font-black text-text-main mb-3 tracking-tight relative z-10">FASTag & Top-ups</h3>
              <p className="text-text-muted text-base font-medium leading-relaxed relative z-10">Instant top-ups for all major mobile operators and commercial FASTag wallets.</p>
            </div>

            {/* 4. POS (Wide) */}
            <div className="lg:col-span-2 lg:row-span-1 group bg-[linear-gradient(110deg,#fff,45%,#f0fdf4,55%,#fff)] bg-[length:200%_100%] hover:bg-[position:-100%_0] border border-brand-green/20 shadow-sm rounded-1xl p-8 transition-all duration-700 flex items-center justify-between overflow-hidden relative">
              <div className="relative z-10 max-w-sm">
                <h3 className="text-3xl font-black text-text-main mb-3 tracking-tight relative z-10">Merchant POS & QR</h3>
                <p className="text-text-muted text-base font-medium leading-relaxed relative z-10">Accept payments via UPI, RuPay QR, or deploy physical POS terminals globally.</p>
              </div>
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-brand-green shadow-sm shrink-0 group-hover:rotate-12 group-hover:scale-110 transition-transform relative z-10">
                <ShieldCheck size={36} />
              </div>
            </div>

            {/* 5. CMS (Wide) */}
            <div className="lg:col-span-2 lg:row-span-1 group bg-gradient-to-br from-white to-gray-50 border border-border shadow-[0_8px_30px_rgba(0,0,0,0.03)] rounded-1xl p-8 hover:border-brand-yellow/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300 flex items-center justify-between relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-yellow/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              <div className="w-20 h-20 rounded-1xl bg-brand-yellow/10 flex items-center justify-center text-brand-yellow-dark shrink-0 group-hover:scale-110 transition-transform relative z-10">
                <BarChart3 size={36} />
              </div>
              <div className="max-w-sm text-right relative z-10">
                <h3 className="text-3xl font-black text-text-main mb-3 tracking-tight relative z-10">Cash Management</h3>
                <p className="text-text-muted text-base font-medium leading-relaxed relative z-10">Hyperlocal cash drops and EMI collections for logistics and delivery agents.</p>
              </div>
            </div>

            {/* 6. Travel */}
            <div className="lg:col-span-1 lg:row-span-1 group bg-gradient-to-br from-white to-gray-50 border border-border shadow-[0_8px_30px_rgba(0,0,0,0.03)] rounded-1xl p-8 hover:border-brand-blue/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-2xl group-hover:bg-brand-blue/15 transition-colors pointer-events-none"></div>
              <h3 className="text-3xl font-black text-text-main mb-3 tracking-tight relative z-10">Travel Booking</h3>
              <p className="text-text-muted text-base font-medium leading-relaxed relative z-10">Book flight, bus, and train tickets instantly with high commissions.</p>
            </div>

            {/* 7. Insurance */}
            <div className="lg:col-span-1 lg:row-span-1 group bg-gradient-to-br from-white to-gray-50 border border-border shadow-[0_8px_30px_rgba(0,0,0,0.03)] rounded-1xl p-8 hover:border-brand-green/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-brand-green/5 rounded-full blur-2xl group-hover:bg-brand-green/15 transition-colors pointer-events-none"></div>
              <h3 className="text-3xl font-black text-text-main mb-3 tracking-tight relative z-10">Insurance</h3>
              <p className="text-text-muted text-base font-medium leading-relaxed relative z-10">Offer budget-friendly health, and vehicle insurance plans securely.</p>
            </div>

            {/* 8. Govt Services (Full Width Banner) */}
            <div className="md:col-span-2 lg:col-span-4 lg:row-span-1 group bg-brand-blue-dark border-none rounded-1xl p-10 hover:shadow-[0_20px_60px_rgba(1,24,106,0.3)] transition-all duration-300 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8 overflow-hidden relative">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
              <div className="absolute top-0 right-10 w-64 h-64 bg-brand-green/30 rounded-full blur-[80px] pointer-events-none"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-black text-white mb-3 tracking-tight relative z-10">Government & Citizen Services</h3>
                <p className="text-white/80 text-base font-medium max-w-2xl leading-relaxed relative z-10">Assist citizens with PAN card creation, tax filing, and other critical e-governance services directly from your portal.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- THE TRANSACT360 ADVANTAGE (Minimal Editorial Design) --- */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#f4fbf7] relative">
        <div className="max-w-[1440px] mx-auto border-t border-brand-green/10 pt-16">
          
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-4">Our Core Values</h2>
              <h3 className="text-4xl md:text-5xl font-black text-text-main tracking-tight leading-[1.1]">
                Built for scale. <br className="hidden md:block"/>Designed for trust.
              </h3>
            </div>
            <p className="text-lg text-text-muted font-medium max-w-md">
              We focus on what truly matters to your business, delivering an uncompromising experience at every touchpoint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            
            {/* Item 1 */}
            <div className="relative group flex flex-col bg-white p-8 lg:p-10 rounded-1xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 z-10 overflow-hidden">
              <div className="absolute top-6 right-8 text-[120px] font-black text-black/[0.04] leading-none z-0 group-hover:text-brand-blue/15 group-hover:scale-110 transition-all duration-500 select-none">01</div>
              <div className="w-14 h-14 rounded-1xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-8 relative z-10">
                <Headset size={28} />
              </div>
              <h4 className="text-2xl font-black text-text-main mb-4 tracking-tight relative z-10">Dedicated Support</h4>
              <p className="text-text-muted font-medium leading-relaxed relative z-10">24/7 dedicated relationship managers and instant tech assistance to ensure absolute zero downtime.</p>
            </div>

            {/* Item 2 */}
            <div className="relative group flex flex-col p-8 lg:p-10 z-10 overflow-hidden rounded-1xl">
              <div className="absolute top-6 right-8 text-[120px] font-black text-black/[0.04] leading-none z-0 group-hover:text-brand-green/15 group-hover:scale-110 transition-all duration-500 select-none">02</div>
              <div className="w-14 h-14 rounded-1xl bg-brand-green/10 flex items-center justify-center text-brand-green mb-8 relative z-10">
                <ShieldCheck size={28} />
              </div>
              <h4 className="text-2xl font-black text-text-main mb-4 tracking-tight relative z-10">E2E Security</h4>
              <p className="text-text-muted font-medium leading-relaxed relative z-10">End-to-end encryption and stringent regulatory compliance keeping your financial data completely secure.</p>
            </div>

            {/* Item 3 */}
            <div className="relative group flex flex-col bg-white p-8 lg:p-10 rounded-1xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 z-10 overflow-hidden">
              <div className="absolute top-6 right-8 text-[120px] font-black text-black/[0.04] leading-none z-0 group-hover:text-brand-yellow-dark/15 group-hover:scale-110 transition-all duration-500 select-none">03</div>
              <div className="w-14 h-14 rounded-1xl bg-brand-yellow/20 flex items-center justify-center text-brand-yellow-dark mb-8 relative z-10">
                <Smartphone size={28} />
              </div>
              <h4 className="text-2xl font-black text-text-main mb-4 tracking-tight relative z-10">Unified Platform</h4>
              <p className="text-text-muted font-medium leading-relaxed relative z-10">A single, incredibly intuitive application to manage all your banking and utility transactions seamlessly.</p>
            </div>

            {/* Item 4 */}
            <div className="relative group flex flex-col p-8 lg:p-10 z-10 overflow-hidden rounded-1xl">
              <div className="absolute top-6 right-8 text-[120px] font-black text-black/[0.04] leading-none z-0 group-hover:text-gray-900/10 group-hover:scale-110 transition-all duration-500 select-none">04</div>
              <div className="w-14 h-14 rounded-1xl bg-gray-100 flex items-center justify-center text-gray-700 mb-8 relative z-10">
                <FileText size={28} />
              </div>
              <h4 className="text-2xl font-black text-text-main mb-4 tracking-tight relative z-10">Zero Hidden Fees</h4>
              <p className="text-text-muted font-medium leading-relaxed relative z-10">Crystal clear commission structures and absolute transparency on every single transaction you make.</p>
            </div>

          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white relative overflow-hidden">
        {/* Soft Decorative Background */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-text-main mb-4 tracking-tight uppercase">Testimonials</h2>
            <p className="text-lg text-text-muted font-medium">Hear from our nationwide network of successful distributors and retailers.</p>
          </div>

          {/* Horizontal Scrolling Carousel with SVG Arrow Buttons on Both Sides */}
          <div className="relative group/carousel px-2 sm:px-6">
            {/* Left SVG Arrow Button */}
            <button
              onClick={() => scroll('left')}
              aria-label="Previous Testimonials"
              className="absolute -left-2 sm:-left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-border shadow-lg flex items-center justify-center text-text-main hover:bg-brand-green hover:text-white transition-all duration-300 hover:scale-110 focus:outline-none"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Right SVG Arrow Button */}
            <button
              onClick={() => scroll('right')}
              aria-label="Next Testimonials"
              className="absolute -right-2 sm:-right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-border shadow-lg flex items-center justify-center text-text-main hover:bg-brand-green hover:text-white transition-all duration-300 hover:scale-110 focus:outline-none"
            >
              <ChevronRight size={24} />
            </button>

            {/* Horizontal Scroll Track */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scroll-smooth py-6 px-2 no-scrollbar snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {testimonials.map((item, idx) => (
                <div
                  key={idx}
                  className="w-[300px] sm:w-[360px] md:w-[400px] shrink-0 snap-start bg-[#f8fafc] border border-border p-8 rounded-1xl relative hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div className={`absolute top-6 right-8 text-6xl ${item.color === 'brand-blue' ? 'text-brand-blue/10' : item.color === 'brand-green' ? 'text-brand-green/10' : 'text-brand-yellow-dark/10'} font-serif leading-none select-none pointer-events-none`}>
                    "
                  </div>
                  <p className="text-text-main font-medium leading-relaxed mb-8 relative z-10 text-sm md:text-base">
                    "{item.quote}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto relative z-10">
                    <div className={`w-12 h-12 rounded-full ${item.bgInitials} flex items-center justify-center ${item.textInitials} font-black text-lg shrink-0`}>
                      {item.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main">{item.name}</h4>
                      <p className={`text-xs ${item.textInitials} font-bold uppercase tracking-wider mt-0.5`}>{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
