import { motion } from "motion/react";
import { Calendar, MapPin, Users, Heart, Camera, MessageCircle, ChevronLeft } from "lucide-react";
import { useState } from "react";

// Types
interface Activity {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  location: string;
  ageGroup: string;
  image: string;
}

const activitiesData: Activity[] = [
  {
    id: "1",
    title: "פעולת פתיחת שנה",
    date: "1 בספטמבר, 2024",
    time: "17:00",
    description: "מתחילים שנה חדשה בקן! מחכים לכם עם הפתעות, משחקים וגיבוש.",
    location: "קן מרכז",
    ageGroup: "שכבה צעירה (ד'-ו')",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2544&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "טיול סוכות - 'יוצאים לדרך'",
    date: "18-20 באוקטובר, 2024",
    time: "08:00",
    description: "שלושה ימים של טבע, חברים ומסלולים מדהימים. אל תפספסו!",
    location: "הרי ירושלים",
    ageGroup: "כל הקן",
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2673&auto=format&fit=crop"
  },
  {
    id: "3",
    title: "סמינר מנהיגות לשכבת הבוגרת",
    date: "5 בנובמבר, 2024",
    time: "16:00",
    description: "מפגש מעמיק על הדרכה, ערכים ושינוי חברתי.",
    location: "מועדון השכבה הבוגרת",
    ageGroup: "שכבה בוגרת (ט'-י'ב)",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2549&auto=format&fit=crop"
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-noar-blue text-white z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-noar-blue font-bold text-xl shadow-lg shadow-black/10 p-1">
              <div className="w-full h-full border-2 border-noar-blue rounded-full flex items-center justify-center">
                נו
              </div>
            </div>
            <span className="text-2xl font-bold tracking-tight italic hidden sm:block">
              הנוער העובד והלומד
            </span>
          </div>
          
          <div className="flex items-center gap-8 text-lg font-semibold">
            <button 
              onClick={() => setActiveTab("home")}
              className={`hover:text-red-300 transition-colors border-b-2 ${activeTab === 'home' ? 'border-white' : 'border-transparent'}`}
            >
              בית
            </button>
            <button 
              onClick={() => setActiveTab("activities")}
              className={`hover:text-red-300 transition-colors border-b-2 ${activeTab === 'activities' ? 'border-white' : 'border-transparent'}`}
            >
              פעילויות
            </button>
            <button 
              onClick={() => setActiveTab("gallery")}
              className={`hover:text-red-300 transition-colors border-b-2 ${activeTab === 'gallery' ? 'border-white' : 'border-transparent'}`}
            >
              גלריה
            </button>
            <button className="bg-noar-red hover:bg-noar-red/90 text-white px-6 py-2 rounded-full font-bold shadow-md transform hover:scale-105 transition-all">
              הצטרפו אלינו!
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {activeTab === "home" && (
        <main className="pt-16">
          <section className="relative h-[280px] md:h-[400px] bg-noar-red overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 opacity-20">
              <svg width="100%" height="100%" viewBox="0 0 1024 400">
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            <div className="relative z-10 text-white text-center px-6">
              <motion.h1 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-5xl md:text-8xl font-black mb-4 drop-shadow-lg"
              >
                קן רמת גן מרכז
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-3xl font-medium max-w-2xl mx-auto"
              >
                בית לכל נער ונערה | המקום הכי שמח בעיר | בואו להיות חלק מהשינוי
              </motion.p>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-8 flex justify-center gap-4"
              >
                <span className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-sm md:text-base font-bold border border-white/30 tracking-widest uppercase">
                  עבודה | הגשמה | למידה
                </span>
              </motion.div>
            </div>
          </section>

          {/* Core Values */}
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-4xl font-black text-slate-900 mb-16 underline decoration-noar-red decoration-8 underline-offset-8">הערכים שלנו</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  { icon: Heart, title: "שוויון ערך האדם", desc: "כל אדם הוא עולם ומלואו, ללא הבדל דת, גזע או מין.", color: "border-noar-blue shadow-noar-blue" },
                  { icon: Users, title: "דמוקרטיה וחברה", desc: "לוקחים אחריות על החברה בה אנחנו חיים ומשפיעים על העתיד.", color: "border-green-500 shadow-green-500" },
                  { icon: MapPin, title: "ציונות ושלום", desc: "אוהבים את הארץ ופועלים לחיים של שלום וביטחון לכולם.", color: "border-noar-yellow shadow-noar-yellow" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -10 }}
                    className={`p-8 rounded-[2rem] bg-white border-4 ${item.color} shadow-[8px_8px_0px_currentColor] text-right flex flex-col justify-between`}
                  >
                    <div>
                      <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-6 border-2 border-slate-200">
                        <item.icon size={32} strokeWidth={2.5} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed font-medium italic">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Quick Contact */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="bg-noar-blue text-white p-12 rounded-[3rem] border-4 border-black shadow-[12px_12px_0px_#000]">
                  <h2 className="text-4xl font-black mb-6 italic underline decoration-noar-red decoration-4 transition-all hover:decoration-8">רוצים להצטרף?</h2>
                  <p className="text-xl text-blue-100 mb-8 font-medium">
                    השאירו פרטים ונחזור אליכם עם כל המידע על הפעילות בקן הקרוב אליכם. <br />
                    כל אחד ואחת יכולים למצוא את המקום שלהם אצלנו.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 text-xl font-bold">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center border border-white/30">
                        <MessageCircle size={24} />
                      </div>
                      <span>טלפון: 03-1234567</span>
                    </div>
                    <div className="flex items-center gap-4 text-xl font-bold">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center border border-white/30">
                        <MapPin size={24} />
                      </div>
                      <span>כתובת: רחוב ההסתדרות 1, תל אביב</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-10 rounded-[3rem] border-4 border-noar-red shadow-[12px_12px_0px_#e30613]">
                  <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                    <div className="space-y-2">
                      <label className="text-slate-900 font-black text-sm uppercase tracking-wider">שם מלא</label>
                      <input type="text" className="w-full bg-slate-50 border-2 border-slate-200 rounded-2xl px-6 py-4 text-slate-900 font-bold focus:outline-none focus:border-noar-blue transition-colors" placeholder="השם שלך" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-slate-900 font-black text-sm uppercase tracking-wider">טלפון</label>
                      <input type="tel" className="w-full bg-slate-50 border-2 border-slate-200 rounded-2xl px-6 py-4 text-slate-900 font-bold focus:outline-none focus:border-noar-blue transition-colors" placeholder="050-0000000" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-slate-900 font-black text-sm uppercase tracking-wider">שכבה (כיתה)</label>
                      <select className="w-full bg-slate-50 border-2 border-slate-200 rounded-2xl px-6 py-4 text-slate-900 font-bold focus:outline-none focus:border-noar-blue transition-colors appearance-none">
                        <option>בחר שכבה</option>
                        <option>ד-ו (צעירה)</option>
                        <option>ז-ח (ביניים)</option>
                        <option>ט-יב (בוגרת)</option>
                      </select>
                    </div>
                    <button className="w-full bg-noar-blue text-white font-black py-5 rounded-2xl shadow-xl hover:bg-noar-blue/90 hover:scale-[1.02] active:scale-95 transition-all text-xl">
                      תחזרו אליי!
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* Activities Page */}
      {activeTab === "activities" && (
        <main className="pt-24 pb-24 max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h1 className="text-4xl font-black text-slate-900 mb-2">פעילויות ואירועים</h1>
              <p className="text-slate-500 font-medium italic text-lg">כל מה שקורה בקן בזמן הקרוב</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-full bg-noar-blue text-sm font-bold text-white shadow-sm hover:opacity-90 transition-opacity">
                הכל
              </button>
              <button className="px-4 py-2 rounded-full bg-slate-100 text-sm font-bold text-slate-600 hover:bg-slate-200 transition-colors">
                טיולים
              </button>
              <button className="px-4 py-2 rounded-full bg-slate-100 text-sm font-bold text-slate-600 hover:bg-slate-200 transition-colors">
                סמינרים
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activitiesData.map((activity, idx) => (
              <motion.div 
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`group bg-white rounded-[2rem] border-4 flex flex-col justify-between p-6 shadow-[8px_8px_0px_currentColor] 
                  ${idx % 4 === 0 ? 'border-noar-blue text-[#004a99]' : 
                    idx % 4 === 1 ? 'border-green-500 text-green-700' : 
                    idx % 4 === 2 ? 'border-orange-400 text-orange-700' : 
                    'border-purple-500 text-purple-700'}`}
              >
                <div>
                  <div className={`w-fit px-3 py-1 rounded-lg text-xs font-black mb-4 
                    ${idx % 4 === 0 ? 'bg-noar-blue/10' : 
                      idx % 4 === 1 ? 'bg-green-100' : 
                      idx % 4 === 2 ? 'bg-orange-100' : 
                      'bg-purple-100'}`}>
                    {activity.ageGroup}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:underline transition-all">
                    {activity.title}
                  </h3>
                  <p className="text-slate-600 leading-tight text-sm italic mb-4">
                    {activity.description}
                  </p>
                </div>
                
                <div className="mt-4 border-t-2 border-dashed border-slate-200 pt-4">
                  <div className="flex justify-between items-center text-sm font-bold">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {activity.date} | {activity.time}
                    </span>
                    <button className="underline">פרטים</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </main>
      )}

      {/* Gallery Page */}
      {activeTab === "gallery" && (
        <main className="pt-24 pb-24 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-noar-blue/10 rounded-2xl text-noar-blue mb-6">
              <Camera size={32} />
            </div>
            <h1 className="text-4xl font-black text-slate-900 mb-4">מדברים בתמונות</h1>
            <p className="text-slate-600 max-w-xl mx-auto font-medium">כאן תוכלו למצוא תמונות מרגעים בלתי נשכחים בפעילויות, בטיולים ובקן.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "https://images.unsplash.com/photo-1526726533290-4c326a89ff6b?q=80&w=2670&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?q=80&w=2670&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2549&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2670&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2544&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2673&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2670&auto=format&fit=crop"
            ].map((src, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 2 : -2 }}
                className={`relative aspect-square rounded-[2rem] overflow-hidden border-4 shadow-[6px_6px_0px_currentColor] cursor-pointer
                  ${idx % 3 === 0 ? 'border-noar-blue text-noar-blue' : idx % 3 === 1 ? 'border-noar-red text-noar-red' : 'border-noar-yellow text-noar-yellow'}`}
              >
                <img src={src} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Camera className="text-white" size={32} />
                </div>
              </motion.div>
            ))}
          </div>
        </main>
      )}

      {/* Footer */}
      <footer className="bg-noar-yellow p-8 border-t-4 border-black text-black">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-around items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-noar-red animate-pulse"></div>
            <span className="font-black">חדש בקן: שיפוץ מועדון השכבה הבוגרת!</span>
          </div>
          
          <div className="hidden md:block h-8 w-px bg-black opacity-20"></div>
          
          <div className="flex gap-8 font-black text-sm">
            <a href="#" className="hover:underline">פייסבוק</a>
            <a href="#" className="hover:underline">אינסטגרם</a>
            <a href="#" className="hover:underline">טיקטוק</a>
          </div>
          
          <div className="hidden md:block h-8 w-px bg-black opacity-20"></div>
          
          <div className="flex flex-col items-center md:items-end gap-1">
            <span className="text-lg font-black italic">הנוער העובד והלומד</span>
            <span className="text-xs font-mono">עלה והגשם! &copy; 2024</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
