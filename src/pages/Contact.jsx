import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Headset, Clock, ShieldCheck, CheckCircle2, PhoneCall, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const statesData = {
  "Andhra Pradesh": ["Anantapur","Chittoor","Cuddapah","East Godavari","Guntur","Krishna","Kurnool","Nellore","Prakasam","Srikakulam","Vishakapatnam","Vizianagaram","West Godavari"],
  "Arunachal Pradesh": ["Anjaw","Changlang","Dibang Valley","East Kameng","East Siang","Kra Daadi","Kurung Kumey","Lohit","Longding","Lower Dibang Valley","Lower Subansiri","Namsai","Papum Pare","Siang","Tawang","Tirap","Upper Siang","Upper Subansiri","West Kameng","West Siang"],
  "Assam": ["Baksa","Barpeta","Bongaigaon","Cachar","Chirang","Darrang","Dhemaji","Dhubri","Dibrugarh","Dima Hasao","Goalpara","Golaghat","Hailakandi","Jorhat","Kamrup M","Kamrup R","Karbi Anglong","Karimganj","Kokrajhar","Lakhimpur","Marigaon","Nagaon","Nalbari","Sibsagar","Sonitpur","Tinsukia","Udalguri"],
  "Bihar": ["Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran","Gaya","Gopalganj","Jamui","Jehanabad","Kaimur Bhabua","Katihar","Khagaria","Kishanganj","Lakhisarai","Madhepura","Madhubani","Munger","Muzaffarpur","Nalanda","Nawada","Patna","Purnia","Rohtas","Saharsa","Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali","West Champaran"],
  "Chhattisgarh": ["Balod","Baloda Bazar","Balrampur","Bastar","Bemetra","Bijapur","Bilaspur","Dantewada","Dhamtari","Durg","Gariyaband","Janjgir Champa","Jashpur","Kanker","Kawardha","Kondagaon","Korba","Koriya","Mahasamund","Mungeli","Narayanpur","Raigarh","Raipur","Rajnandgaon","Sukma","Surajpur","Surguja"],
  "Goa": ["North Goa","South Goa"],
  "Gujarat": ["Ahmedabad","Amreli","Anand","Aravalli","Banas Kantha","Bharuch","Bhavnagar","Botad","Chhotaudepur","Dahod","Devbhumi Dwarka","Gandhinagar","Gir Somnath","Jamnagar","Junagadh","Kachchh","Kheda","Mahesana","Mahisagar","Morbi","Narmada","Navsari","Panch Mahals","Patan","Porbandar","Rajkot","Sabar Kantha","Surat","Surendranagar","Tapi","The Dangs","Vadodara","Valsad"],
  "Haryana": ["Ambala","Bhiwani","Faridabad","Fatehabad","Gurgaon","Hisar","Jhajjar","Jind","Kaithal","Karnal","Kurukshetra","Mahendragarh","Mewat","Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamunanagar"],
  "Himachal Pradesh": ["Bilaspur","Chamba","Hamirpur","Kangra","Kinnaur","Kullu","Lahul Spiti","Mandi","Shimla","Sirmaur","Solan","Una"],
  "Jammu and Kashmir": ["Anantnag","Badgam","Bandipora","Baramula","Doda","Ganderbal","Jammu","Kargil","Kathua","Kishtwar","Kulgam","Kupwara","Leh Ladakh","Poonch","Pulwama","Rajouri","Ramban","Reasi","Samba","Shopian","Srinagar","Udhampur"],
  "Jharkhand": ["Bokaro","Chatra","Deoghar","Dhanbad","Dumka","Garhwa","Giridih","Godda","Gumla","Hazaribagh","Jamtara","Khunti","Kodarma","Latehar","Lohardaga","Pakaur","Palamu","Pashchimi Singhbhum","Purbi Singhbhum","Ramgarh","Ranchi","Sahibganj","Saraikela","Simdega"],
  "Karnataka": ["Bagalkote","Bangalore Rural","Bangalore Urban","Belgaum","Bellary","Bidar","Bijapur","Chamrajnagar","Chikkaballapur","Chikmagalur","Chitradurga","Dakshina Kannada","Davanagere","Dharwad","Gadag","Gulbarga","Hassan","Haveri","Kodagu","Kolar","Koppal","Mandya","Mysore","Raichur","Ramanagar","Shimoga","Tumkur","Udupi","Uttara Kannada","Yadgir"],
  "Kerala": ["Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","KOZHIKKODE","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad"],
  "Madhya Pradesh": ["Agar Malwa","Alirajpur","Anuppur","Ashok Nagar","Balaghat","Barwani","Betul","Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwada","Damoh","Datia","Dewas","Dhar","Dindori","Guna","Gwalior","Harda","Hoshangabad","Indore","Jabalpur","Jhabua","Katni","Khandwa","Khargone","Mandla","Mandsaur","Morena","Narsinghpur","Neemuch","Panna","Raisen","Rajgarh","Ratlam","Rewa","Sagar","Satna","Sehore","Seoni","Shahdol","Shajapur","Sheopur","Shivpuri","Sidhi","Singroli","Tikamgarh","Ujjain","Umaria","Vidisha"],
  "Maharashtra": ["Ahmednagar","Akola","Amravati","Aurangabad","Bhandara","Bid","Brihan Mumbai","Buldana","Chandrapur","Dhule","Gadchiroli","Gondiya","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Nagpur","Nanded","Nandurbar","Nashik","Osmanabad","Palghar","Parbhani","Pune","Raigarh","Ratnagiri","Sangli","Satara","Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal"],
  "Manipur": ["Bishnupur","Chandel","Churachandpur","Imphal East","Imphal West","Senapati","Tamenglong","Thoubal","Ukhrul"],
  "Meghalaya": ["East Garo Hills","East Jaintia Hills","East Khasi Hills","North Garo Hills","Ri Bhoi","South Garo Hills","South West Garo Hills","South West Khasi Hills","West Garo Hills","West Jaintia Hills","West Khasi Hills"],
  "Mizoram": ["Aizawl East","Aizawl West","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip"],
  "Nagaland": ["Dimapur","Kiphire","Kohima","Longleng","Mokokchung","Mon","Peren","Phek","Tuensang","Wokha","Zunheboto"],
  "Orissa": ["Anugul","Balangir","Baleshwar","Bargarh","Baudh","Bhadrak","Cuttack","Deogarh","Dhenkanal","Gajapati","Ganjam","Jagatsinghpur","Jajapur","Jharsuguda","Kalahandi","Kandhamal","Kendrapara","Keonjhar","Khordha","Koraput","Malkangiri","Mayurbhanj","Nabarangapur","Nayagarh","Nuapada","Puri","Rayagada","Sambalpur","Sonapur","Sundargarh"],
  "Punjab": ["Amritsar","Barnala","Bathinda","Faridkot","Fatehgarh Sahib","Fazilka","Firozpur","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Mansa","Moga","Mohali SAS Nagar","Muktsar","Nawanshahr","Pathankot","Patiala","Rupnagar","Sangrur","Tarn Taran"],
  "Rajasthan": ["Ajmer","Alwar","Banswara","Baran","Barmer","Bharatpur","Bhilwara","Bikaner","Bundi","Chittaurgarh","Churu","Dausa","Dhaulpur","Dungarpur","Ganganagar","Hanumangarh","Jaipur","Jaisalmer","Jalor","Jhalawar","Jhunjhunun","Jodhpur","Karauli","Kota","Nagaur","Pali","Pratapgarh","Rajsamand","Sawai Madhopur","Sikar","Sirohi","Tonk","Udaipur"],
  "Sikkim": ["East","North","South","West"],
  "Tamil Nadu": ["Ariyalur","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kancheepuram","Kanniyakumari","Karur","Krishnagiri","Madurai","Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai","Ramanathapuram","Salem","Sivaganga","Thanjavur","Theni","Thiruvallur","Thiruvarur","Tiruchirappalli","Tirunelveli","Tirupur","Tiruvanamalai","Toothukudi","Vellore","Viluppuram","Virudhunagar"],
  "Telangana": ["Adilabad","Hyderabad","Karim Nagar","Khammam","Mahbubnagar","Medak","Nalgonda","Nizamabad","Ranga Reddy","Warangal Urban"],
  "Tripura": ["Dhalai","Gomati","Khowai","North Tripura","Sipahijala","South Tripura","Unakoti","West Tripura"],
  "Uttar Pradesh": ["Agra","Aligarh","Allahabad","Ambedkar Nagar","Auraiya","Azamgarh","Bagpat","Bahraich","Ballia","Balrampur","Banda","Barabanki","Bareilly","Basti","Bijnor","Budaun","Bulandshahar","C S M Nagar","Chandauli","Chitrakoot","Deoria","Etah","Etawah","Faizabad","Farrukhabad","Fatehpur","Firozabad","Gautam Buddha Nagar","Ghaziabad","Ghazipur","Gonda","Gorakhpur","Hamirpur","Hapur","Hardoi","Hathras","Jalaun","Jaunpur","Jhansi","Jyotiba Phule Nagar","Kannauj","Kanpur Dehat","Kanpur Nagar","Kashi Ram Nagar","Kaushambi","Kushinagar","Lakhimpur Kheri","Lalitpur","Lucknow","Maharajganj","Mahoba","Mainpuri","Mathura","Maunathbhanjan","Meerut","Mirzapur","Moradabad","Muzaffarnagar","Pilibhit","Pratapgarh","Rae Bareli","Rampur","Saharanpur","Sambhal","Sant Kabir Nagar","Sant Ravidas Nagar","Shahjahanpur","Shamli","Shrawasti","Siddharth Nagar","Sitapur","Sonbhadra","Sultanpur","Unnav","Varanasi"],
  "Uttaranchal": ["Almora","Bageshwar","Chamoli","Champawat","Dehradun","Garhwal","Hardwar","Nainital","Pithoragarh","Rudraprayag","Tehri Garhwal","Udham Singh Nagar","Uttarkashi"],
  "West Bengal": ["Alipurduar","Bankura","Barddhaman","Birbhum","Dakshin Dinajpur","Darjiling","Haora","Hugli","Jalpaiguri","Koch Bihar","Maldah","Murshidabad","Nadia","North Twenty Four Parganas","Paschim Medinipur","Purba Medinipur","Puruliya","South Twenty Four Parganas","Uttar Dinajpur"],
  "Andaman and Nicobar Islands": ["Nicobar","North and Middle Andaman","South Andaman"],
  "Chandigarh": ["Chandigarh"],
  "Dadra and Nagar Haveli": ["Dadra and Nagar Haveli"],
  "Daman and Diu": ["Daman","Diu"],
  "Delhi": ["Central","East","New Delhi","North","North East","North West","Shahdara","South","South East","South West","West"],
  "Lakshadweep": ["Lakshadweep"],
  "Pondicherry": ["Karaikal","Mahe","Pondicherry","Yanam"]
};

export default function Contact() {
  const [selectedState, setSelectedState] = useState("");
  
  const statesList = Object.keys(statesData);
  const districtsList = selectedState ? statesData[selectedState] : [];

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen relative overflow-hidden">
      
      {/* 1. HERO SECTION: Enterprise Operations & Support Command Center (Luminous, Modern Style) */}
      <section className="relative bg-gradient-to-b from-[#eaf2fc] via-[#f2f6fc] to-[#f8fafc] text-text-main pt-28 sm:pt-36 pb-20 px-6 lg:px-12 overflow-hidden border-b border-border">
        {/* Soft Ambient Glowing Orbs */}
        <div className="absolute top-[-15%] left-[-10%] w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute top-[20%] right-[-10%] w-[650px] h-[650px] bg-brand-blue/10 rounded-full blur-[160px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[25%] w-[500px] h-[500px] bg-brand-yellow/10 rounded-full blur-[140px] pointer-events-none"></div>
        
        {/* Subtle Tech Pattern Mesh */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_70%,transparent_100%)]"></div>

        <div className="max-w-[1300px] mx-auto relative z-10 text-center">
          {/* Animated Status Pill */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white border border-border shadow-sm rounded-full font-bold text-xs tracking-widest uppercase mb-6"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-green"></span>
            </span>
            <span className="text-brand-green-dark">24/7 Operations Desk</span>
            <span className="text-gray-300">|</span>
            <span className="text-text-muted flex items-center gap-1">
              <Sparkles size={12} className="text-brand-yellow-dark" />
              Pan-India Support
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-text-main tracking-tight leading-[1.1] mb-6"
          >
            Connect With Our <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-green to-brand-green-dark">
              FinTech Command Center.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-text-muted max-w-3xl mx-auto font-medium leading-relaxed mb-12"
          >
            Whether you are scaling a 1,000+ retailer distribution network, integrating core banking APIs, or require priority merchant support, our regional technical operations hubs across India are ready to assist.
          </motion.p>

          {/* Central Layered Cinematic Frame with Floating Glassmorphism HUD Chips */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative mx-auto max-w-[1100px] mb-12"
          >
            {/* Soft Ambient Depth Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-green/20 via-brand-blue/20 to-brand-yellow/15 rounded-2xl blur-xl opacity-70"></div>

            {/* Framed Visual Container */}
            <div className="relative rounded-2xl overflow-hidden border border-border bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] group">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80" 
                alt="Transact360 Nationwide Support and Operations Team"
                className="w-full h-[280px] sm:h-[380px] md:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Lighter, subtle vignette overlay allowing the photo and daylight to shine brightly */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>

              {/* Floating HUD Chip 1: Top Left - Help Desk */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white/95 backdrop-blur-md border border-border px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-1xl flex items-center gap-3 shadow-lg">
                <div className="w-9 h-9 rounded-1xl bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
                  <Headset size={18} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Live Support</p>
                  <p className="text-xs sm:text-sm font-black text-text-main">Dedicated Help Desk</p>
                </div>
              </div>

              {/* Floating HUD Chip 2: Top Right - Response Time */}
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white/95 backdrop-blur-md border border-border px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-1xl flex items-center gap-3 shadow-lg">
                <div className="w-9 h-9 rounded-1xl bg-brand-yellow/20 text-brand-yellow-dark flex items-center justify-center shrink-0">
                  <Clock size={18} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Turnaround SLA</p>
                  <p className="text-xs sm:text-sm font-black text-text-main">&lt; 15 Mins Response</p>
                </div>
              </div>

              {/* Floating HUD Chip 3: Bottom Left - Bank Grade Security */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-white/95 backdrop-blur-md border border-border px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-1xl flex items-center gap-3 shadow-lg hidden sm:flex">
                <div className="w-9 h-9 rounded-1xl bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Security</p>
                  <p className="text-xs sm:text-sm font-black text-text-main">256-Bit SSL Encrypted</p>
                </div>
              </div>

              {/* Floating HUD Chip 4: Bottom Right - Pan-India Scale */}
              <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-white/95 backdrop-blur-md border border-border px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-1xl flex items-center gap-3 shadow-lg hidden sm:flex">
                <div className="w-9 h-9 rounded-1xl bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
                  <CheckCircle2 size={18} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Coverage</p>
                  <p className="text-xs sm:text-sm font-black text-text-main">28 States &amp; 700+ Districts</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3 Quick-Action Channel Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1100px] mx-auto text-left">
            <a 
              href="tel:+919876543210" 
              className="bg-white hover:bg-slate-50 border border-border p-6 rounded-1xl transition-all duration-300 group hover:-translate-y-1 hover:border-brand-green/40 shadow-sm hover:shadow-md block"
            >
              <div className="w-12 h-12 rounded-1xl bg-brand-green/10 text-brand-green flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <PhoneCall size={22} />
              </div>
              <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1">Direct Calling Line</p>
              <h4 className="text-lg font-black text-text-main mb-1 group-hover:text-brand-green transition-colors">+91 98765 43210</h4>
              <p className="text-xs text-text-muted font-medium">Mon–Sat, 9:00 AM – 8:00 PM IST</p>
            </a>

            <a 
              href="mailto:hello@transact360.in" 
              className="bg-white hover:bg-slate-50 border border-border p-6 rounded-1xl transition-all duration-300 group hover:-translate-y-1 hover:border-brand-blue/40 shadow-sm hover:shadow-md block"
            >
              <div className="w-12 h-12 rounded-1xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail size={22} />
              </div>
              <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1">Official Inquiry Desk</p>
              <h4 className="text-lg font-black text-text-main mb-1 group-hover:text-brand-blue transition-colors">hello@transact360.in</h4>
              <p className="text-xs text-text-muted font-medium">Guaranteed response within 24 hours</p>
            </a>

            <div className="bg-white border border-border p-6 rounded-1xl shadow-sm transition-all duration-300 group">
              <div className="w-12 h-12 rounded-1xl bg-brand-yellow/15 text-brand-yellow-dark flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MapPin size={22} />
              </div>
              <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1">Headquarters</p>
              <h4 className="text-lg font-black text-text-main mb-1">Cyber Hub Tower B</h4>
              <p className="text-xs text-text-muted font-medium">12th Floor, Gurugram, Haryana 122002</p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. CONTACT INQUIRY FORM */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 bg-[#f8fafc] relative overflow-hidden">
        {/* Soft Ambient Depth Glows */}
        <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0"></div>

        <div className="max-w-[1300px] mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-text-main tracking-tight mb-3">Send Us a Direct Message</h2>
            <p className="text-text-muted font-medium text-base sm:text-lg">Fill out the form below and an assigned account manager will reach out shortly.</p>
          </div>

          <div className="bg-white rounded-1xl shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-border/80 flex flex-col lg:flex-row overflow-hidden">
            
            {/* Left Column: Premium Dark Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full lg:w-2/5 bg-brand-blue-dark p-10 lg:p-14 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-green/20 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-blue/30 rounded-full blur-[80px] transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

              <div className="relative z-10 mb-16">
                <h3 className="text-3xl font-black text-white mb-4 tracking-tight">Contact Information</h3>
                <p className="text-white/70 font-medium leading-relaxed">Fill out the form and our team will get back to you within 24 hours.</p>
              </div>

            <div className="relative z-10 flex flex-col gap-10">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-1xl bg-white/10 flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-brand-green transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-white/60 text-sm font-bold mb-1 uppercase tracking-wider">Call Us</p>
                  <p className="text-white font-bold text-lg">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-1xl bg-white/10 flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-brand-blue transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-white/60 text-sm font-bold mb-1 uppercase tracking-wider">Email Us</p>
                  <p className="text-white font-bold text-lg">hello@transact360.in</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-1xl bg-white/10 flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-brand-yellow-dark transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-white/60 text-sm font-bold mb-1 uppercase tracking-wider">Headquarters</p>
                  <p className="text-white font-bold leading-relaxed">
                    12th Floor, Cyber Hub Tower B<br />
                    Gurugram, Haryana 122002
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full lg:w-3/5 p-10 lg:p-14 bg-white"
          >
            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input type="text" id="fname" className="peer w-full px-0 py-3 border-b-2 border-border bg-transparent text-text-main font-medium focus:outline-none focus:border-brand-blue transition-colors placeholder-transparent" placeholder="First Name" required />
                  <label htmlFor="fname" className="absolute left-0 -top-3.5 text-sm font-bold text-text-muted transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-placeholder-shown:font-medium peer-focus:-top-3.5 peer-focus:text-sm peer-focus:font-bold peer-focus:text-brand-blue cursor-text">First Name *</label>
                </div>
                <div className="relative group">
                  <input type="text" id="lname" className="peer w-full px-0 py-3 border-b-2 border-border bg-transparent text-text-main font-medium focus:outline-none focus:border-brand-blue transition-colors placeholder-transparent" placeholder="Last Name" required />
                  <label htmlFor="lname" className="absolute left-0 -top-3.5 text-sm font-bold text-text-muted transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-placeholder-shown:font-medium peer-focus:-top-3.5 peer-focus:text-sm peer-focus:font-bold peer-focus:text-brand-blue cursor-text">Last Name *</label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input type="email" id="email" className="peer w-full px-0 py-3 border-b-2 border-border bg-transparent text-text-main font-medium focus:outline-none focus:border-brand-blue transition-colors placeholder-transparent" placeholder="Work Email" required />
                  <label htmlFor="email" className="absolute left-0 -top-3.5 text-sm font-bold text-text-muted transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-placeholder-shown:font-medium peer-focus:-top-3.5 peer-focus:text-sm peer-focus:font-bold peer-focus:text-brand-blue cursor-text">Work Email *</label>
                </div>
                <div className="relative group">
                  <input type="tel" id="phone" className="peer w-full px-0 py-3 border-b-2 border-border bg-transparent text-text-main font-medium focus:outline-none focus:border-brand-blue transition-colors placeholder-transparent" placeholder="Phone Number" />
                  <label htmlFor="phone" className="absolute left-0 -top-3.5 text-sm font-bold text-text-muted transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-placeholder-shown:font-medium peer-focus:-top-3.5 peer-focus:text-sm peer-focus:font-bold peer-focus:text-brand-blue cursor-text">Phone Number</label>
                </div>
              </div>
              
              {/* State & District Dropdowns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-text-muted uppercase tracking-wider">State</label>
                  <select 
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-1xl border-2 border-border bg-gray-50/50 hover:bg-gray-50 focus:bg-white focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 transition-all text-text-main font-medium cursor-pointer"
                  >
                    <option value="">Select State</option>
                    {statesList.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-text-muted uppercase tracking-wider">District</label>
                  <select 
                    disabled={!selectedState}
                    className="w-full px-4 py-3.5 rounded-1xl border-2 border-border bg-gray-50/50 hover:bg-gray-50 focus:bg-white focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 transition-all text-text-main font-medium disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <option value="">{selectedState ? 'Select District' : 'Select State first'}</option>
                    {districtsList.map(district => (
                      <option key={district} value={district}>{district}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-2">
                <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Service of Interest</label>
                <select className="w-full px-4 py-3.5 rounded-1xl border-2 border-border bg-gray-50/50 hover:bg-gray-50 focus:bg-white focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 transition-all text-text-main font-medium cursor-pointer">
                  <option value="">Select a service...</option>
                  <option value="bbps">BBPS & Utility</option>
                  <option value="dmt">DMT & Add Money</option>
                  <option value="pos">RuPay QR & POS</option>
                  <option value="api">API Integration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 mt-2">
                <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Message</label>
                <textarea rows="3" placeholder="How can we help you scale?" className="w-full px-4 py-3.5 rounded-1xl border-2 border-border bg-gray-50/50 hover:bg-gray-50 focus:bg-white focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 transition-all resize-none font-medium" required></textarea>
              </div>

              <button type="submit" className="w-full mt-6 group flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white px-8 py-4.5 rounded-1xl font-bold text-lg transition-all shadow-[0_8px_25px_rgba(6,101,60,0.25)] hover:shadow-[0_15px_35px_rgba(6,101,60,0.35)] hover:-translate-y-1">
                Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  </div>
);
}
