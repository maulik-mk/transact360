import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Store, Network, CheckCircle2, ArrowRight, IndianRupee, Users, Layers, Globe2, Headset, Banknote, Map, ShieldCheck } from 'lucide-react';

const statesData = {
  "Andhra Pradesh": ["Anantapur", "Chittoor", "Cuddapah", "East Godavari", "Guntur", "Krishna", "Kurnool", "Nellore", "Prakasam", "Srikakulam", "Vishakapatnam", "Vizianagaram", "West Godavari"],
  "Arunachal Pradesh": ["Anjaw", "Changlang", "Dibang Valley", "East Kameng", "East Siang", "Kra Daadi", "Kurung Kumey", "Lohit", "Longding", "Lower Dibang Valley", "Lower Subansiri", "Namsai", "Papum Pare", "Siang", "Tawang", "Tirap", "Upper Siang", "Upper Subansiri", "West Kameng", "West Siang"],
  "Assam": ["Baksa", "Barpeta", "Bongaigaon", "Cachar", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Dima Hasao", "Goalpara", "Golaghat", "Hailakandi", "Jorhat", "Kamrup M", "Kamrup R", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Marigaon", "Nagaon", "Nalbari", "Sibsagar", "Sonitpur", "Tinsukia", "Udalguri"],
  "Bihar": ["Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur Bhabua", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran"],
  "Chhattisgarh": ["Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetra", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Gariyaband", "Janjgir Champa", "Jashpur", "Kanker", "Kawardha", "Kondagaon", "Korba", "Koriya", "Mahasamund", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sukma", "Surajpur", "Surguja"],
  "Goa": ["North Goa", "South Goa"],
  "Gujarat": ["Ahmedabad", "Amreli", "Anand", "Aravalli", "Banas Kantha", "Bharuch", "Bhavnagar", "Botad", "Chhotaudepur", "Dahod", "Devbhumi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kachchh", "Kheda", "Mahesana", "Mahisagar", "Morbi", "Narmada", "Navsari", "Panch Mahals", "Patan", "Porbandar", "Rajkot", "Sabar Kantha", "Surat", "Surendranagar", "Tapi", "The Dangs", "Vadodara", "Valsad"],
  "Haryana": ["Ambala", "Bhiwani", "Faridabad", "Fatehabad", "Gurgaon", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Mewat", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"],
  "Himachal Pradesh": ["Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahul Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"],
  "Jammu and Kashmir": ["Anantnag", "Badgam", "Bandipora", "Baramula", "Doda", "Ganderbal", "Jammu", "Kargil", "Kathua", "Kishtwar", "Kulgam", "Kupwara", "Leh Ladakh", "Poonch", "Pulwama", "Rajouri", "Ramban", "Reasi", "Samba", "Shopian", "Srinagar", "Udhampur"],
  "Jharkhand": ["Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribagh", "Jamtara", "Khunti", "Kodarma", "Latehar", "Lohardaga", "Pakaur", "Palamu", "Pashchimi Singhbhum", "Purbi Singhbhum", "Ramgarh", "Ranchi", "Sahibganj", "Saraikela", "Simdega"],
  "Karnataka": ["Bagalkote", "Bangalore Rural", "Bangalore Urban", "Belgaum", "Bellary", "Bidar", "Bijapur", "Chamrajnagar", "Chikkaballapur", "Chikmagalur", "Chitradurga", "Dakshina Kannada", "Davanagere", "Dharwad", "Gadag", "Gulbarga", "Hassan", "Haveri", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysore", "Raichur", "Ramanagar", "Shimoga", "Tumkur", "Udupi", "Uttara Kannada", "Yadgir"],
  "Kerala": ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "KOZHIKKODE", "Malappuram", "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"],
  "Madhya Pradesh": ["Agar Malwa", "Alirajpur", "Anuppur", "Ashok Nagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwada", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singroli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"],
  "Maharashtra": ["Ahmednagar", "Akola", "Amravati", "Aurangabad", "Bhandara", "Bid", "Brihan Mumbai", "Buldana", "Chandrapur", "Dhule", "Gadchiroli", "Gondiya", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigarh", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"],
  "Manipur": ["Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Senapati", "Tamenglong", "Thoubal", "Ukhrul"],
  "Meghalaya": ["East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "North Garo Hills", "Ri Bhoi", "South Garo Hills", "South West Garo Hills", "South West Khasi Hills", "West Garo Hills", "West Jaintia Hills", "West Khasi Hills"],
  "Mizoram": ["Aizawl East", "Aizawl West", "Champhai", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Serchhip"],
  "Nagaland": ["Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Peren", "Phek", "Tuensang", "Wokha", "Zunheboto"],
  "Orissa": ["Anugul", "Balangir", "Baleshwar", "Bargarh", "Baudh", "Bhadrak", "Cuttack", "Deogarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghpur", "Jajapur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Keonjhar", "Khordha", "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangapur", "Nayagarh", "Nuapada", "Puri", "Rayagada", "Sambalpur", "Sonapur", "Sundargarh"],
  "Punjab": ["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Firozpur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Mohali SAS Nagar", "Muktsar", "Nawanshahr", "Pathankot", "Patiala", "Rupnagar", "Sangrur", "Tarn Taran"],
  "Rajasthan": ["Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittaurgarh", "Churu", "Dausa", "Dhaulpur", "Dungarpur", "Ganganagar", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalor", "Jhalawar", "Jhunjhunun", "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Tonk", "Udaipur"],
  "Sikkim": ["East", "North", "South", "West"],
  "Tamil Nadu": ["Ariyalur", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kancheepuram", "Kanniyakumari", "Karur", "Krishnagiri", "Madurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Salem", "Sivaganga", "Thanjavur", "Theni", "Thiruvallur", "Thiruvarur", "Tiruchirappalli", "Tirunelveli", "Tirupur", "Tiruvanamalai", "Toothukudi", "Vellore", "Viluppuram", "Virudhunagar"],
  "Telangana": ["Adilabad", "Hyderabad", "Karim Nagar", "Khammam", "Mahbubnagar", "Medak", "Nalgonda", "Nizamabad", "Ranga Reddy", "Warangal Urban"],
  "Tripura": ["Dhalai", "Gomati", "Khowai", "North Tripura", "Sipahijala", "South Tripura", "Unakoti", "West Tripura"],
  "Uttar Pradesh": ["Agra", "Aligarh", "Allahabad", "Ambedkar Nagar", "Auraiya", "Azamgarh", "Bagpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bijnor", "Budaun", "Bulandshahar", "C S M Nagar", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Faizabad", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Jyotiba Phule Nagar", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kashi Ram Nagar", "Kaushambi", "Kushinagar", "Lakhimpur Kheri", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Maunathbhanjan", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Rae Bareli", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Sant Ravidas Nagar", "Shahjahanpur", "Shamli", "Shrawasti", "Siddharth Nagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnav", "Varanasi"],
  "Uttaranchal": ["Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Garhwal", "Hardwar", "Nainital", "Pithoragarh", "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"],
  "West Bengal": ["Alipurduar", "Bankura", "Barddhaman", "Birbhum", "Dakshin Dinajpur", "Darjiling", "Haora", "Hugli", "Jalpaiguri", "Koch Bihar", "Maldah", "Murshidabad", "Nadia", "North Twenty Four Parganas", "Paschim Medinipur", "Purba Medinipur", "Puruliya", "South Twenty Four Parganas", "Uttar Dinajpur"],
  "Andaman and Nicobar Islands": ["Nicobar", "North and Middle Andaman", "South Andaman"],
  "Chandigarh": ["Chandigarh"],
  "Dadra and Nagar Haveli": ["Dadra and Nagar Haveli"],
  "Daman and Diu": ["Daman", "Diu"],
  "Delhi": ["Central", "East", "New Delhi", "North", "North East", "North West", "Shahdara", "South", "South East", "South West", "West"],
  "Lakshadweep": ["Lakshadweep"],
  "Pondicherry": ["Karaikal", "Mahe", "Pondicherry", "Yanam"]
};

export default function Partner() {
  const [partnerType, setPartnerType] = useState('retailer'); // 'retailer' or 'distributor'
  const [selectedState, setSelectedState] = useState("");

  const statesList = Object.keys(statesData);
  const districtsList = selectedState ? statesData[selectedState] : [];

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen">

      {/* 1. HERO SECTION (Full Background Immersive Image with Dark Gradient Overlay) */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 px-6 lg:px-12 overflow-hidden border-b border-border min-h-[580px] lg:min-h-[640px] flex items-center">
        {/* Full-bleed Background Image (Business Partnership / Handshake) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80" 
            alt="Transact360 Nationwide Partner Network" 
            className="w-full h-full object-cover object-center"
          />
          {/* Lighter, luminous gradient overlay allowing the photo and natural daylight to shine through */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/75 via-brand-blue-dark/55 to-slate-900/25"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-black/10"></div>
          {/* Subtle Ambient Color Glows */}
          <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-brand-green/20 rounded-full blur-[140px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-brand-blue/25 rounded-full blur-[130px] pointer-events-none"></div>
        </div>

        <div className="max-w-[1440px] mx-auto relative z-10 w-full text-center lg:text-left">
          <div className="max-w-3xl">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-green/20 border border-brand-green/30 text-white rounded-full font-bold text-xs tracking-widest uppercase mb-6 backdrop-blur-md shadow-sm"
            >
              <Network size={14} className="text-brand-green-light" />
              Join India's Fastest Growing FinTech Network
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] mb-6"
            >
              Scale Your Earnings With <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-yellow-200 to-white">
                Transact360.
              </span>
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed mb-10 max-w-2xl"
            >
              Whether you own a neighborhood retail counter or run a multi-district distribution network, earn the industry's highest commission margins with zero monthly AMC and guaranteed instant T+0 wallet settlements.
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <a
                href="#partner-form"
                className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white px-8 py-4 rounded-1xl font-bold text-base transition-all shadow-[0_10px_25px_rgba(6,101,60,0.4)] hover:shadow-[0_15px_30px_rgba(6,101,60,0.6)] hover:-translate-y-0.5"
              >
                Apply For Partnership
                <ArrowRight size={18} />
              </a>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider bg-white/10 backdrop-blur-md border border-white/15 px-4 py-3.5 rounded-1xl">
                <CheckCircle2 size={16} className="text-brand-green-light" />
                <span>10-Minute Paperless KYC</span>
              </div>
            </motion.div>
          </div>

          {/* Frosted Glassmorphism Metric Bar (4 Value Cards with SVG Icons) */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full pt-4 border-t border-white/10"
          >
            <div className="bg-white/15 backdrop-blur-md border border-white/25 p-5 rounded-1xl hover:bg-white/20 hover:border-white/35 transition-all duration-300 text-left shadow-lg">
              <div className="w-10 h-10 rounded-1xl bg-brand-green/20 text-brand-green-light flex items-center justify-center mb-3">
                <IndianRupee size={22} />
              </div>
              <p className="text-xl sm:text-2xl font-black text-white">Up to ₹15/Txn</p>
              <p className="text-xs font-bold text-slate-200 uppercase tracking-wider mt-0.5">Highest Commission Margin</p>
            </div>

            <div className="bg-white/15 backdrop-blur-md border border-white/25 p-5 rounded-1xl hover:bg-white/20 hover:border-white/35 transition-all duration-300 text-left shadow-lg">
              <div className="w-10 h-10 rounded-1xl bg-brand-blue/30 text-cyan-300 flex items-center justify-center mb-3">
                <Zap size={22} />
              </div>
              <p className="text-xl sm:text-2xl font-black text-white">Instant T+0</p>
              <p className="text-xs font-bold text-slate-200 uppercase tracking-wider mt-0.5">Real-Time Wallet Settlements</p>
            </div>

            <div className="bg-white/15 backdrop-blur-md border border-white/25 p-5 rounded-1xl hover:bg-white/20 hover:border-white/35 transition-all duration-300 text-left shadow-lg">
              <div className="w-10 h-10 rounded-1xl bg-brand-yellow/20 text-brand-yellow flex items-center justify-center mb-3">
                <ShieldCheck size={22} />
              </div>
              <p className="text-xl sm:text-2xl font-black text-white">₹0 Monthly AMC</p>
              <p className="text-xs font-bold text-slate-200 uppercase tracking-wider mt-0.5">Zero Recurring Maintenance</p>
            </div>

            <div className="bg-white/15 backdrop-blur-md border border-white/25 p-5 rounded-1xl hover:bg-white/20 hover:border-white/35 transition-all duration-300 text-left shadow-lg">
              <div className="w-10 h-10 rounded-1xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-3">
                <Users size={22} />
              </div>
              <p className="text-xl sm:text-2xl font-black text-white">50,000+ Active</p>
              <p className="text-xs font-bold text-slate-200 uppercase tracking-wider mt-0.5">Retailers & Distributors</p>
            </div>
          </motion.div> */}
        </div>
      </section>

      {/* 2. PARTNERSHIP BENEFITS (Apple-style Sticky Scroll) */}
      <section className="bg-[#edf2f7] relative border-b border-border overflow-hidden">
        {/* Soft Ambient Depth Glows */}
        <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          
          {/* Retailer Scroll Block */}
          <div className="flex flex-col lg:flex-row relative items-start">
            {/* Sticky Header */}
            <div className="w-full lg:w-2/5 lg:sticky lg:top-32 pt-20 lg:pt-36 pb-12 lg:pb-36">
              <h2 className="text-5xl lg:text-7xl font-black text-text-main tracking-tighter leading-[1.1]">
                Engineered for <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400">Retailers.</span>
              </h2>
              <p className="mt-6 text-xl text-text-muted font-medium max-w-sm">
                Turn your storefront into a financial powerhouse with zero recurring costs.
              </p>
            </div>
            {/* Scrolling Content with Elevated White Cards */}
            <div className="w-full lg:w-3/5 pt-10 lg:pt-36 pb-20 lg:pb-36 space-y-8">
              <div className="bg-white border border-border p-8 sm:p-10 rounded-1xl shadow-sm hover:shadow-md hover:border-brand-green/40 transition-all duration-300">
                <div className="text-5xl sm:text-6xl font-black text-brand-green/20 mb-4 tracking-tighter">01.</div>
                <h3 className="text-2xl sm:text-3xl font-black text-text-main mb-3 tracking-tight">Highest Market Margins</h3>
                <p className="text-base sm:text-lg text-text-muted font-medium leading-relaxed">
                  Earn highly competitive commissions that are credited directly to your secure digital wallet the absolute second a transaction succeeds. No waiting, no delays.
                </p>
              </div>

              <div className="bg-white border border-border p-8 sm:p-10 rounded-1xl shadow-sm hover:shadow-md hover:border-brand-green/40 transition-all duration-300">
                <div className="text-5xl sm:text-6xl font-black text-brand-green/20 mb-4 tracking-tighter">02.</div>
                <h3 className="text-2xl sm:text-3xl font-black text-text-main mb-3 tracking-tight">Zero Monthly Maintenance</h3>
                <p className="text-base sm:text-lg text-text-muted font-medium leading-relaxed">
                  Operate without hidden fees or recurring monthly charges. Pay a single, one-time onboarding fee to permanently unlock the entire Transact360 banking ecosystem.
                </p>
              </div>

              <div className="bg-white border border-border p-8 sm:p-10 rounded-1xl shadow-sm hover:shadow-md hover:border-brand-green/40 transition-all duration-300">
                <div className="text-5xl sm:text-6xl font-black text-brand-green/20 mb-4 tracking-tighter">03.</div>
                <h3 className="text-2xl sm:text-3xl font-black text-text-main mb-3 tracking-tight">Free Marketing Collateral</h3>
                <p className="text-base sm:text-lg text-text-muted font-medium leading-relaxed">
                  Receive physical branding materials, shop banners, and high-quality digital assets completely free of charge to help attract new walk-in customers instantly.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-border/60"></div>

          {/* Distributor Scroll Block */}
          <div className="flex flex-col lg:flex-row relative items-start">
            {/* Sticky Header */}
            <div className="w-full lg:w-2/5 lg:sticky lg:top-32 pt-20 lg:pt-36 pb-12 lg:pb-36">
              <h2 className="text-5xl lg:text-7xl font-black text-text-main tracking-tighter leading-[1.1]">
                Built for <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-500">Distributors.</span>
              </h2>
              <p className="mt-6 text-xl text-text-muted font-medium max-w-sm">
                Scale your retail network and generate passive revenue 24/7.
              </p>
            </div>
            {/* Scrolling Content with Elevated White Cards */}
            <div className="w-full lg:w-3/5 pt-10 lg:pt-36 pb-20 lg:pb-36 space-y-8">
              <div className="bg-white border border-border p-8 sm:p-10 rounded-1xl shadow-sm hover:shadow-md hover:border-brand-blue/40 transition-all duration-300">
                <div className="text-5xl sm:text-6xl font-black text-brand-blue/20 mb-4 tracking-tighter">01.</div>
                <h3 className="text-2xl sm:text-3xl font-black text-text-main mb-3 tracking-tight">Overriding Revenue Model</h3>
                <p className="text-base sm:text-lg text-text-muted font-medium leading-relaxed">
                  Generate passive income 24/7. You receive a guaranteed fixed percentage of every single transaction processed by any retailer within your vast network.
                </p>
              </div>

              <div className="bg-white border border-border p-8 sm:p-10 rounded-1xl shadow-sm hover:shadow-md hover:border-brand-blue/40 transition-all duration-300">
                <div className="text-5xl sm:text-6xl font-black text-brand-blue/20 mb-4 tracking-tighter">02.</div>
                <h3 className="text-2xl sm:text-3xl font-black text-text-main mb-3 tracking-tight">Master Analytics Dashboard</h3>
                <p className="text-base sm:text-lg text-text-muted font-medium leading-relaxed">
                  Monitor your entire network in real-time. Track your top-performing retailers, overall transaction volumes, and pending settlements from one unified screen.
                </p>
              </div>

              <div className="bg-white border border-border p-8 sm:p-10 rounded-1xl shadow-sm hover:shadow-md hover:border-brand-blue/40 transition-all duration-300">
                <div className="text-5xl sm:text-6xl font-black text-brand-blue/20 mb-4 tracking-tighter">03.</div>
                <h3 className="text-2xl sm:text-3xl font-black text-text-main mb-3 tracking-tight">Automated Wallet Routing</h3>
                <p className="text-base sm:text-lg text-text-muted font-medium leading-relaxed">
                  Transfer funds to your retailers instantly with our automated API, ensuring they never run out of working capital during their absolute peak business hours.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* NEW: WHY PARTNER WITH US (Premium Dark Section) */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#0f172a] relative overflow-hidden">
        {/* Dark Mode Background Effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[150px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none z-0"></div>

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">The Transact360 Advantage</h2>
            <p className="text-lg text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
              We don't just provide software; we provide enterprise-grade infrastructure engineered to drastically increase your network's profit margins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Advantage 1 */}
            <div className="bg-white/[0.03] border border-white/10 rounded-1xl p-8 hover:bg-white/[0.06] hover:border-brand-green/30 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-1xl bg-brand-green/10 text-brand-green flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Layers size={28} />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">Unified Ecosystem API</h3>
              <p className="text-slate-400 font-medium leading-relaxed">
                Access every major banking, utility, and payment service through a single, heavily optimized integration layer.
              </p>
            </div>
            
            {/* Advantage 2 */}
            <div className="bg-white/[0.03] border border-white/10 rounded-1xl p-8 hover:bg-white/[0.06] hover:border-brand-blue/30 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-1xl bg-brand-blue/10 text-brand-blue-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe2 size={28} />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">Hyper-Local Interfaces</h3>
              <p className="text-slate-400 font-medium leading-relaxed">
                Deploy systems designed specifically for tier-2 and tier-3 markets, featuring robust native regional language support.
              </p>
            </div>

            {/* Advantage 3 */}
            <div className="bg-white/[0.03] border border-white/10 rounded-1xl p-8 hover:bg-white/[0.06] hover:border-brand-yellow/30 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-1xl bg-brand-yellow-dark/10 text-brand-yellow-dark flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Headset size={28} />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">Dedicated Account Managers</h3>
              <p className="text-slate-400 font-medium leading-relaxed">
                Every distributor is assigned a direct technical account manager to ensure zero downtime and instant issue resolution.
              </p>
            </div>

            {/* Advantage 4 */}
            <div className="bg-white/[0.03] border border-white/10 rounded-1xl p-8 hover:bg-white/[0.06] hover:border-brand-blue/30 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-1xl bg-brand-blue/10 text-brand-blue-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Banknote size={28} />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">Instant Settlement Engine</h3>
              <p className="text-slate-400 font-medium leading-relaxed">
                Don't wait for your money. Our automated T+0 settlement architecture ensures your working capital is never locked.
              </p>
            </div>

            {/* Advantage 5 */}
            <div className="bg-white/[0.03] border border-white/10 rounded-1xl p-8 hover:bg-white/[0.06] hover:border-brand-green/30 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-1xl bg-brand-green/10 text-brand-green flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Map size={28} />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">Pan-India Infrastructure</h3>
              <p className="text-slate-400 font-medium leading-relaxed">
                Leverage our massive, country-wide banking network to scale your retail operations instantly across any state or district.
              </p>
            </div>

            {/* Advantage 6 */}
            <div className="bg-white/[0.03] border border-white/10 rounded-1xl p-8 hover:bg-white/[0.06] hover:border-brand-yellow/30 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-1xl bg-brand-yellow-dark/10 text-brand-yellow-dark flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">Zero Hidden Fees</h3>
              <p className="text-slate-400 font-medium leading-relaxed">
                We operate on a purely transparent margin model. What you see on your analytics dashboard is exactly what hits your bank account.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PARTNERSHIP FORM (Toggled) */}
      <section className="py-24 px-6 lg:px-12 bg-[#f4fbf7] relative border-t border-brand-green/10 overflow-hidden">
        
        {/* Background Watermark Icons */}
        <div className="absolute top-[10%] left-[5%] text-brand-green/[0.04] transform -rotate-12 pointer-events-none z-0 hidden lg:block">
          <Store size={400} strokeWidth={1} />
        </div>
        <div className="absolute top-[40%] right-[2%] text-brand-blue/[0.03] transform rotate-12 pointer-events-none z-0 hidden lg:block">
          <Network size={350} strokeWidth={1.5} />
        </div>
        <div className="absolute bottom-[10%] left-[8%] text-brand-yellow-dark/[0.03] transform -rotate-6 pointer-events-none z-0 hidden lg:block">
          <Users size={300} strokeWidth={1} />
        </div>
        <div className="absolute top-[75%] right-[15%] text-brand-green/[0.04] transform rotate-6 pointer-events-none z-0 hidden lg:block">
          <IndianRupee size={250} strokeWidth={1.5} />
        </div>

        <div className="max-w-[1000px] mx-auto relative z-10">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-text-main mb-4 tracking-tight">Start Your Journey</h2>
            <p className="text-text-muted font-medium">Select your partnership type and fill out the details below.</p>
          </div>

          {/* Custom Toggle Switch */}
          <div className="flex justify-center mb-12">
            <div className="bg-white p-1.5 rounded-full border border-border shadow-sm inline-flex relative">
              <button
                onClick={() => setPartnerType('retailer')}
                className={`relative z-10 px-8 py-3 rounded-full font-bold text-sm transition-colors duration-300 ${partnerType === 'retailer' ? 'text-white' : 'text-text-muted hover:text-text-main'}`}
              >
                Retailer Application
              </button>
              <button
                onClick={() => setPartnerType('distributor')}
                className={`relative z-10 px-8 py-3 rounded-full font-bold text-sm transition-colors duration-300 ${partnerType === 'distributor' ? 'text-white' : 'text-text-muted hover:text-text-main'}`}
              >
                Distributor Application
              </button>

              {/* Animated Pill Background */}
              <div
                className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-brand-green rounded-full shadow-sm transition-all duration-300 ease-out z-0 ${partnerType === 'retailer' ? 'left-1.5' : 'left-[calc(50%+4px)]'}`}
              ></div>
            </div>
          </div>

          {/* Dynamic Form Wrapper */}
          <div className="bg-white rounded-1xl shadow-xl border border-border p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.form
                key={partnerType}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-black text-text-main mb-2">
                    {partnerType === 'retailer' ? 'Retailer Onboarding' : 'Distributor Onboarding'}
                  </h3>
                  <p className="text-text-muted text-sm font-medium">
                    {partnerType === 'retailer'
                      ? 'Register your shop to start offering financial services immediately.'
                      : 'Apply to build and manage your own extensive retail network.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-text-muted uppercase tracking-wider">First Name</label>
                    <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-1xl border-2 border-border bg-gray-50/50 hover:bg-gray-50 focus:bg-white focus:outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 transition-all text-text-main font-medium" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Last Name</label>
                    <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-1xl border-2 border-border bg-gray-50/50 hover:bg-gray-50 focus:bg-white focus:outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 transition-all text-text-main font-medium" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Email Address</label>
                    <input type="email" placeholder="name@example.com" className="w-full px-4 py-3 rounded-1xl border-2 border-border bg-gray-50/50 hover:bg-gray-50 focus:bg-white focus:outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 transition-all text-text-main font-medium" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Phone Number</label>
                    <input type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-1xl border-2 border-border bg-gray-50/50 hover:bg-gray-50 focus:bg-white focus:outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 transition-all text-text-main font-medium" required />
                  </div>
                </div>

                {/* DIFFERENT FIELDS BASED ON PARTNER TYPE */}
                {partnerType === 'retailer' ? (
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Shop / Outlet Name</label>
                    <input type="text" placeholder="Your Shop Name" className="w-full px-4 py-3 rounded-1xl border-2 border-border bg-gray-50/50 hover:bg-gray-50 focus:bg-white focus:outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 transition-all text-text-main font-medium" required />
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Company Name</label>
                      <input type="text" placeholder="Your Agency Name" className="w-full px-4 py-3 rounded-1xl border-2 border-border bg-gray-50/50 hover:bg-gray-50 focus:bg-white focus:outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 transition-all text-text-main font-medium" required />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Expected Network Size</label>
                      <select className="w-full px-4 py-3 rounded-1xl border-2 border-border bg-gray-50/50 hover:bg-gray-50 focus:bg-white focus:outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 transition-all text-text-main font-medium cursor-pointer">
                        <option value="">Select an option</option>
                        <option value="1-50">1 - 50 Retailers</option>
                        <option value="51-200">51 - 200 Retailers</option>
                        <option value="200+">200+ Retailers</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* State & District Dropdowns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-text-muted uppercase tracking-wider">State</label>
                    <select
                      value={selectedState}
                      onChange={(e) => setSelectedState(e.target.value)}
                      className="w-full px-4 py-3 rounded-1xl border-2 border-border bg-gray-50/50 hover:bg-gray-50 focus:bg-white focus:outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 transition-all text-text-main font-medium cursor-pointer"
                      required
                    >
                      <option value="">Select State</option>
                      {statesList.map(state => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-text-muted uppercase tracking-wider">City / District</label>
                    <select
                      disabled={!selectedState}
                      className="w-full px-4 py-3 rounded-1xl border-2 border-border bg-gray-50/50 hover:bg-gray-50 focus:bg-white focus:outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 transition-all text-text-main font-medium disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                      required
                    >
                      <option value="">{selectedState ? 'Select District' : 'Select State first'}</option>
                      {districtsList.map(district => (
                        <option key={district} value={district}>{district}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Message</label>
                  <textarea rows="4" placeholder="Tell us about your business..." className="w-full px-4 py-3 rounded-1xl border-2 border-border bg-gray-50/50 hover:bg-gray-50 focus:bg-white focus:outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 transition-all resize-none font-medium" required></textarea>
                </div>

                <button type="submit" className="w-full mt-4 group flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white px-8 py-4 rounded-1xl font-bold text-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-1">
                  Submit Application <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>

              </motion.form>
            </AnimatePresence>
          </div>

        </div>
      </section>

    </div>
  );
}
