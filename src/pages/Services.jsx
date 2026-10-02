import React from 'react';
import { 
  Wallet, 
  Smartphone, 
  QrCode, 
  Send, 
  CreditCard, 
  Zap, 
  FileText, 
  Plane, 
  Fingerprint, 
  IndianRupee, 
  Receipt
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      num: "01",
      icon: <Wallet size={32} />,
      bottomIcon: <CreditCard size={110} strokeWidth={1.2} />,
      title: "T360 Pay",
      desc: "A secure payment gateway engineered to handle high-volume enterprise transactions. Process customer payments directly from your website with guaranteed instant settlement. Includes a centralized dashboard for real-time tracking and automated financial reconciliation."
    },
    {
      num: "02",
      icon: <Zap size={32} />,
      bottomIcon: <Zap size={110} strokeWidth={1.2} />,
      title: "Addmoney",
      desc: "Enable instant digital wallet loading for your entire retail network. Supports netbanking, debit cards, and automated bank transfers. Funds reflect immediately in the agent wallet, eliminating cash flow bottlenecks and allowing uninterrupted daily operations."
    },
    {
      num: "03",
      icon: <QrCode size={32} />,
      bottomIcon: <QrCode size={110} strokeWidth={1.2} />,
      title: "Rupay UPI",
      desc: "Accept payments instantly using both static and dynamic QR codes across your merchant network. Built for high-traffic environments to guarantee zero transaction drop-offs. All settlements route directly to your preferred current account automatically."
    },
    {
      num: "04",
      icon: <Send size={32} />,
      bottomIcon: <Send size={110} strokeWidth={1.2} />,
      title: "DMT",
      desc: "Transfer funds to any registered bank account across India in a matter of seconds. Our intelligent routing engine automatically switches between IMPS and NEFT to ensure 100% success rates. Retailers earn immediate fixed commission on every successful remittance."
    },
    {
      num: "05",
      icon: <CreditCard size={32} />,
      bottomIcon: <CreditCard size={110} strokeWidth={1.2} />,
      title: "POS",
      desc: "Deploy highly reliable Android-based POS terminals across your offline merchant network. Accept all major credit and debit cards with bank-grade encryption. The hardware integrates perfectly with our web portal to provide unified transaction reporting."
    },
    {
      num: "06",
      icon: <Smartphone size={32} />,
      bottomIcon: <Smartphone size={110} strokeWidth={1.2} />,
      title: "Recharge",
      desc: "Process prepaid mobile and DTH top-ups for all major Indian telecom operators instantly. We maintain direct operator connections to guarantee maximum server uptime and immediate SMS confirmation. Distributors benefit from industry-leading margin structures."
    },
    {
      num: "07",
      icon: <FileText size={32} />,
      bottomIcon: <Receipt size={110} strokeWidth={1.2} />,
      title: "BBPS",
      desc: "Pay electricity, water, gas, and broadband bills through the secure Bharat Bill Payment System. Generate instant, verifiable PDF receipts for your walk-in customers. Eliminate customer late fees with real-time bill fetching and validation APIs."
    },
    {
      num: "08",
      icon: <Plane size={32} />,
      bottomIcon: <Plane size={110} strokeWidth={1.2} />,
      title: "Booking",
      desc: "Book domestic flights, IRCTC train tickets, and bus routes directly through our agent portal. Access real-time travel inventory and direct operator pricing without third-party delays. Provide a complete travel desk solution while earning fixed margins on every PNR."
    },
    {
      num: "09",
      icon: <Fingerprint size={32} />,
      bottomIcon: <Fingerprint size={110} strokeWidth={1.2} />,
      title: "AEPS",
      desc: "Convert any retail shop into a secure banking point using biometric fingerprint authentication. Customers can withdraw cash, check account balances, and request mini-statements using only their Aadhaar number. A highly secure system requiring zero physical debit cards."
    }
  ];

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen font-sans">

      {/* 1. HERO & INTRO (Compact Full Background Image Banner) */}
      <section className="relative py-12 lg:py-16 px-6 lg:px-12 overflow-hidden border-b border-border min-h-[160px] lg:min-h-[300px] flex items-center justify-center">
        {/* Full-bleed Background Image (Digital Payments & Merchant Services) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/services.png" 
            alt="Transact360 Digital Payment and Merchant Services" 
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle dark tint preserving clear visibility of the background image */}
          <div className="absolute inset-0 bg-slate-950/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/30"></div>
        </div>

        <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col items-center text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            Services
          </h1>
        </div>
      </section>

      {/* 2. SERVICES (Premium Sticky Light Layout) */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 relative overflow-hidden">
        {/* Very faint background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50 pointer-events-none z-0"></div>

        {/* Faint Background Watermark Icons */}
        <div className="absolute top-[5%] left-[2%] text-brand-blue/[0.04] transform -rotate-12 pointer-events-none z-0 hidden lg:block">
          <IndianRupee size={400} strokeWidth={1.5} />
        </div>
        <div className="absolute top-[25%] right-[5%] text-brand-green/[0.04] transform rotate-12 pointer-events-none z-0 hidden lg:block">
          <CreditCard size={350} strokeWidth={1} />
        </div>
        <div className="absolute top-[45%] left-[8%] text-brand-yellow-dark/[0.04] transform -rotate-6 pointer-events-none z-0 hidden lg:block">
          <Smartphone size={300} strokeWidth={1} />
        </div>
        <div className="absolute top-[60%] right-[10%] text-brand-blue/[0.04] transform rotate-6 pointer-events-none z-0 hidden lg:block">
          <Wallet size={300} strokeWidth={1.5} />
        </div>
        <div className="absolute top-[75%] left-[5%] text-brand-green/[0.04] transform -rotate-12 pointer-events-none z-0 hidden lg:block">
          <Receipt size={350} strokeWidth={1} />
        </div>
        <div className="absolute bottom-[5%] right-[8%] text-brand-yellow-dark/[0.04] transform rotate-12 pointer-events-none z-0 hidden lg:block">
          <Plane size={350} strokeWidth={1} />
        </div>
        <div className="absolute top-[15%] left-[45%] text-brand-blue/[0.03] transform -rotate-6 pointer-events-none z-0 hidden lg:block">
          <QrCode size={250} strokeWidth={1} />
        </div>

        <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Sticky Left Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-32">
              <h2 className="text-4xl md:text-5xl font-black text-text-main mb-6 tracking-tight">Our Services</h2>
              <p className="text-text-muted font-medium leading-relaxed mb-8">
                Explore our full range of 9 core services, engineered specifically to maximize your operational efficiency and margin structure.
              </p>
              <div className="hidden lg:flex flex-col gap-4 border-l-2 border-border pl-6">
                {services.map((s, i) => (
                  <div key={i} className="text-sm font-bold text-gray-400 hover:text-brand-blue transition-colors cursor-pointer uppercase tracking-wider">
                    {s.title}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Scrolling Content (Massive Cards) */}
          <div className="w-full lg:w-2/3 space-y-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group relative bg-white border border-border shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] rounded-1xl p-8 lg:p-12 overflow-hidden transition-all duration-500 hover:-translate-y-1"
              >
                {/* Hover Glow Effect */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Bottom-Right SVG Icon According to Service (Enlarged) */}
                <div className="absolute -bottom-2 -right-2 sm:bottom-2 sm:right-4 text-slate-200 group-hover:text-brand-blue/20 group-hover:scale-105 transition-all duration-500 pointer-events-none">
                  {service.bottomIcon}
                </div>

                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                  {/* Icon & Number Box */}
                  <div className="shrink-0 flex flex-col items-center justify-between h-full gap-8">
                    <div className="w-16 h-16 rounded-1xl bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:scale-110 group-hover:bg-brand-blue/10 transition-all duration-300">
                      {service.icon}
                    </div>
                    <div className="text-6xl font-black text-gray-100 group-hover:text-gray-200 transition-colors hidden md:block">
                      {service.num}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 w-full">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="md:hidden text-2xl font-black text-brand-blue">{service.num}</span>
                      <h3 className="text-3xl font-black text-text-main tracking-tight">{service.title}</h3>
                    </div>
                    <p className="text-text-muted font-medium leading-relaxed text-lg mb-8 max-w-2xl">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
