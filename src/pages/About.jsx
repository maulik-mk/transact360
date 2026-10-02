import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  HeartHandshake, 
  Users, 
  Eye, 
  Target, 
  Sparkles, 
  Building2, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Store, 
  Cpu, 
  Globe2, 
  Activity 
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Shield size={28} />,
      title: "Integrity",
      description: "We hold ourselves to the highest ethical standards. Every transaction, partnership, and decision is guided by unwavering honesty.",
      color: "brand-blue",
      bg: "bg-brand-blue/10",
      text: "text-brand-blue"
    },
    {
      icon: <HeartHandshake size={28} />,
      title: "Trust",
      description: "Trust is the foundation of banking. We build long-lasting relationships with our partners by ensuring absolute reliability and security.",
      color: "brand-green",
      bg: "bg-brand-green/10",
      text: "text-brand-green"
    },
    {
      icon: <Users size={28} />,
      title: "Customer First",
      description: "Our technology is designed around the people who use it. We relentlessly focus on delivering the best experience for retailers and their walk-in customers.",
      color: "brand-yellow-dark",
      bg: "bg-brand-yellow/20",
      text: "text-brand-yellow-dark"
    },
    {
      icon: <Eye size={28} />,
      title: "Transparency",
      description: "No hidden fees, no complex jargon. We believe in clear, open communication and transparent pricing across our entire ecosystem.",
      color: "brand-blue",
      bg: "bg-brand-blue/10",
      text: "text-brand-blue"
    }
  ];

  const highlights = [
    {
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80",
      icon: <Store size={22} className="text-brand-green" />,
      badge: "Hyper-Local Banking",
      title: "Empowering Local Kirana Stores",
      description: "Transforming small neighborhood shops into complete banking touchpoints offering DMT, AEPS cash withdrawals, and BBPS."
    },
    {
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      icon: <Cpu size={22} className="text-brand-blue" />,
      badge: "Fintech Infrastructure",
      title: "Engineered for 99.9% Uptime",
      description: "Direct bank-grade APIs and micro-services built to process millions of transactions smoothly with zero latency."
    },
    {
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
      icon: <HeartHandshake size={22} className="text-brand-yellow-dark" />,
      badge: "Trusted Ecosystem",
      title: "Partner-Centric Growth",
      description: "We provide maximum profit margins, dedicated account managers, and guaranteed instant T+0 wallet settlements."
    }
  ];

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen">
      
      {/* 1. HERO SECTION WITH RICH IMAGERY AND SVG BADGES */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 px-6 lg:px-12 bg-white overflow-hidden border-b border-border">
        {/* Soft Ambient Background Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[130px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[120px] pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-[1440px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Story & Value Pills */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-green/10 border border-brand-green/20 text-brand-green rounded-full font-bold text-xs tracking-widest uppercase mb-6">
              <Sparkles size={14} />
              Our Story & Heritage
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-text-main tracking-tight leading-[1.1] mb-6">
              Empowering India's <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-green to-brand-green-dark">
                Financial Future.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-text-muted font-medium max-w-2xl leading-relaxed mb-8">
              Transact360 was founded with an ambitious mission: to democratize access to banking and digital commerce for every Indian citizen. We build the high-speed fintech bridge connecting local neighborhood merchants to the nationwide financial grid.
            </p>

            {/* Feature Pills with SVG Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-10">
              <div className="flex items-center gap-3 bg-[#f8fafc] border border-border px-4 py-3 rounded-1xl">
                <div className="w-10 h-10 rounded-1xl bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-muted uppercase">Security</p>
                  <p className="text-sm font-black text-text-main">Bank-Grade</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-[#f8fafc] border border-border px-4 py-3 rounded-1xl">
                <div className="w-10 h-10 rounded-1xl bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                  <Zap size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-muted uppercase">Settlement</p>
                  <p className="text-sm font-black text-text-main">Instant T+0</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-[#f8fafc] border border-border px-4 py-3 rounded-1xl">
                <div className="w-10 h-10 rounded-1xl bg-brand-yellow/20 flex items-center justify-center text-brand-yellow-dark shrink-0">
                  <Users size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-muted uppercase">Network</p>
                  <p className="text-sm font-black text-text-main">50,000+ Retail</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link 
                to="/partner" 
                className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white px-8 py-3.5 rounded-1xl font-bold text-base transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Join Our Network
                <ArrowRight size={18} />
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 border-2 border-border text-text-main px-8 py-3.5 rounded-1xl font-bold text-base transition-all hover:border-brand-blue hover:text-brand-blue"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right Column: 3D FinTech Ecosystem Architecture & Connected Retail Network */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[500px]">
              {/* Decorative Backdrop Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 via-brand-green/20 to-brand-yellow/20 rounded-1xl transform rotate-2 scale-105 filter blur-2xl opacity-70"></div>

              {/* Central FinTech Ecosystem 3D Visual Asset */}
              <div className="relative z-10 rounded-1xl overflow-hidden shadow-2xl border border-border bg-white group">
                <img 
                  src="/about-fintech-ecosystem.jpg" 
                  alt="Transact360 Connected Micro-Banking & Retail Network" 
                  className="w-full h-[380px] sm:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-5 left-6 right-6 text-white pointer-events-none">
                  <span className="inline-block px-3 py-1 bg-brand-green text-white text-xs font-bold rounded-full uppercase tracking-wider mb-1.5 shadow-sm">
                    Micro-Banking Infrastructure
                  </span>
                  <h3 className="text-lg font-bold text-white drop-shadow-sm">Connecting Neighborhood Commerce & Banking</h3>
                </div>
              </div>

              {/* Floating Badge 1: Top Left - Direct NPCI & Core Banking */}
              <div className="absolute -top-5 -left-4 sm:-left-6 z-20 bg-white/95 backdrop-blur-md border border-border p-3.5 sm:p-4 rounded-1xl shadow-xl flex items-center gap-3">
                <div className="w-11 h-11 rounded-1xl bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-text-muted uppercase">Architecture</p>
                  <p className="text-sm font-black text-text-main">NPCI & Core Banking</p>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Right - Pan-India Scale */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 z-20 bg-brand-blue-dark text-white p-3.5 sm:p-4 rounded-1xl shadow-2xl border border-white/10 flex items-center gap-3">
                <div className="w-11 h-11 rounded-1xl bg-white/10 flex items-center justify-center text-brand-yellow shrink-0">
                  <Store size={22} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white/70 uppercase">Grassroots Reach</p>
                  <p className="text-sm font-black text-white">50,000+ Retail Hubs</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. THREE-PILLAR VISUAL SHOWCASE (Images + SVG Icons) */}
      <section className="py-20 px-6 lg:px-12 bg-white relative">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-blue/10 border border-brand-blue/20 text-brand-blue rounded-full font-bold text-xs tracking-widest uppercase mb-4">
              <Globe2 size={14} />
              Our Core Architecture
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-main tracking-tight mb-4">
              How We Power Financial Inclusion
            </h2>
            <p className="text-lg text-text-muted font-medium">
              We combine enterprise-grade fintech infrastructure with localized retail empowerment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-[#f8fafc] border border-border rounded-1xl overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-blue/30 transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
              >
                {/* Visual Unsplash Image with Overlay */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                    {item.icon}
                    <span className="text-xs font-bold text-text-main">{item.badge}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-text-main mb-3 group-hover:text-brand-blue transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-text-muted font-medium leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION ("Bridging the Gap" with Real Photo Visual) */}
      <section className="py-24 px-6 lg:px-12 bg-[#f8fafc] relative border-t border-border">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
          
          {/* Visual Left Side with Real Imagery & Overlapping Cards */}
          <div className="relative h-[480px] lg:h-[540px] w-full flex items-center justify-center">
             {/* Decorative Background Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] bg-brand-green/10 rounded-full blur-[100px] pointer-events-none"></div>
             
             {/* Backing Image Frame with Vision 2030 overlay */}
             <div className="absolute top-0 lg:top-4 left-0 lg:left-4 w-[85%] md:w-[78%] h-[320px] lg:h-[350px] rounded-1xl shadow-2xl z-10 border border-white/20 overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" 
                  alt="Transact360 Enterprise Infrastructure" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark/80 via-brand-blue-dark/30 to-black/20 p-8 lg:p-10 flex flex-col justify-between text-white">
                  <div className="flex items-center justify-between">
                    <Target size={40} className="text-brand-green drop-shadow-md" />
                    <span className="px-3 py-1 bg-black/40 backdrop-blur-sm rounded-full text-xs font-bold tracking-widest uppercase border border-white/20">Target</span>
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-black text-white mb-2 tracking-tight drop-shadow-md">Vision 2030</h3>
                    <p className="text-white/95 font-medium text-sm lg:text-base leading-relaxed drop-shadow">
                      To become India's primary micro-banking catalyst, serving over 100 million unbanked citizens across Tier-2, Tier-3, and rural hubs.
                    </p>
                  </div>
                </div>
             </div>

             {/* Overlapping Foreground Card (Massive Scale & Retail Tech) */}
             <div className="absolute bottom-0 lg:bottom-4 right-0 lg:right-4 w-[85%] md:w-[75%] bg-white rounded-1xl p-7 lg:p-9 shadow-[0_30px_60px_rgba(0,0,0,0.12)] z-20 border border-border overflow-hidden group hover:-translate-y-1.5 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-1xl bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                    <Building2 size={26} />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-black text-text-main tracking-tight">Massive Nationwide Scale</h3>
                    <p className="text-xs font-bold text-brand-green uppercase tracking-wider">Pan-India Reach</p>
                  </div>
                </div>
                <p className="text-text-muted font-medium text-sm leading-relaxed mb-4">
                  Building deep rural roots backed by cloud-native infrastructure that ensures flawless transactions even in low-bandwidth regions.
                </p>
                <div className="flex items-center gap-2 text-xs font-bold text-brand-blue">
                  <CheckCircle2 size={16} className="text-brand-green" />
                  <span>28 States & 500+ Districts Covered</span>
                </div>
             </div>
          </div>

          {/* Right Column: Mission Content */}
          <div className="lg:pl-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-blue/10 border border-brand-blue/20 text-brand-blue rounded-full font-bold text-xs tracking-widest uppercase mb-6">
              <Activity size={14} />
              Our Mission
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-main mb-6 tracking-tight">
              Bridging the Digital & Financial Gap
            </h2>

            <p className="text-base sm:text-lg text-text-muted font-medium leading-relaxed mb-6">
              Despite unprecedented smartphone adoption, hundreds of millions of citizens across Bharat still rely on physical cash and face long journeys to access a bank branch.
            </p>

            <p className="text-base sm:text-lg text-text-muted font-medium leading-relaxed mb-8">
              Transact360 bridges this gap by transforming local merchants into authorized financial service points. We provide small business owners with simple biometric terminals, instant settlements, and superior revenue streams.
            </p>

            {/* Checklist of Core Strengths */}
            <div className="space-y-3 mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-brand-green shrink-0" />
                <span className="font-semibold text-text-main text-base">Paperless, instant biometric KYC onboarding for merchants</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-brand-green shrink-0" />
                <span className="font-semibold text-text-main text-base">Direct NPCI & RBI-regulated bank integrations</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-brand-green shrink-0" />
                <span className="font-semibold text-text-main text-base">Automated T+0 daily wallet settlements with zero wait</span>
              </div>
            </div>
            
            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
               <div className="bg-white p-5 rounded-1xl border border-border shadow-sm text-center group hover:border-brand-green/30 hover:shadow-md transition-all duration-300">
                 <div className="text-3xl font-black text-brand-green mb-1 group-hover:scale-110 transition-transform">99.9%</div>
                 <div className="text-xs font-bold text-text-muted uppercase tracking-wider">Uptime SLA</div>
               </div>
               <div className="bg-white p-5 rounded-1xl border border-border shadow-sm text-center group hover:border-brand-blue/30 hover:shadow-md transition-all duration-300">
                 <div className="text-3xl font-black text-brand-blue mb-1 group-hover:scale-110 transition-transform">T+0</div>
                 <div className="text-xs font-bold text-text-muted uppercase tracking-wider">Instant Settlement</div>
               </div>
               <div className="col-span-2 sm:col-span-1 bg-white p-5 rounded-1xl border border-border shadow-sm text-center group hover:border-brand-yellow/50 hover:shadow-md transition-all duration-300">
                 <div className="text-3xl font-black text-brand-yellow-dark mb-1 group-hover:scale-110 transition-transform">24/7</div>
                 <div className="text-xs font-bold text-text-muted uppercase tracking-wider">Priority Support</div>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. CORE VALUES (Integrity, Trust, Customer First, Transparency) */}
      <section className="py-24 px-6 lg:px-12 bg-white relative border-t border-border">
        <div className="max-w-[1440px] mx-auto">
          
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-green/10 border border-brand-green/20 text-brand-green rounded-full font-bold text-xs tracking-widest uppercase mb-4">
              <ShieldCheck size={14} />
              Ethos & Principles
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-main mb-4 tracking-tight">
              Our Guiding Values
            </h2>
            <p className="text-lg text-text-muted font-medium max-w-2xl mx-auto leading-relaxed">
              Technology is our tool, but our principles dictate how we build, how we partner, and how we serve millions of retailers every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-[#f8fafc] border border-border rounded-1xl p-8 hover:shadow-xl hover:border-brand-blue/30 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className={`w-14 h-14 rounded-1xl ${value.bg} ${value.text} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-black text-text-main mb-3">{value.title}</h3>
                  <p className="text-text-muted font-medium leading-relaxed text-sm md:text-base">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
