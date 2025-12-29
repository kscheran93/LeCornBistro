import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Star, MapPin, Smile, Zap } from "lucide-react";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>LeCorn - Big Flavour. Sunny Snacks.</title>
        <meta name="description" content="Premium sweetcorn cups, gourmet popcorn, and summer drinks made fresh in Hastings & St Leonards." />
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#FFC700_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 text-center lg:text-left"
            >
              <div className="inline-block bg-accent text-white font-bold px-4 py-1 rounded-full text-sm mb-6 shadow-md transform -rotate-2">
                🌽 Fresh from the Cob
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground mb-6 leading-[1.1]">
                Big Flavour. <br/>
                <span className="text-primary relative inline-block">
                  Sunny Snacks.
                  <svg className="absolute w-full h-4 -bottom-1 left-0 text-black opacity-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                  </svg>
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 font-medium">
                Fresh Sweetcorn • Flavoured Popcorn • Hot & Cold Drinks — made fast, served with a smile.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link href="/menu" className="btn-primary w-full sm:w-auto text-lg px-8 py-4">
                  View Menu
                </Link>
                <Link href="/franchise" className="btn-accent w-full sm:w-auto text-lg px-8 py-4 bg-black text-white hover:bg-gray-800">
                  Franchise Enquiry
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 relative"
            >
              {/* Abstract decorative shapes instead of stock photo */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-primary rounded-full blur-3xl opacity-20 animate-pulse" />
                <div className="relative z-10 bg-white rounded-[3rem] border-4 border-black p-4 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rotate-3 hover:rotate-0 transition-transform duration-500">
                  {/* Unsplash image of corn/popcorn */}
                  {/* fresh popcorn in yellow bowl */}
                  <img 
                    src="https://images.unsplash.com/photo-1578849278619-e73505e9610f?q=80&w=800&auto=format&fit=crop" 
                    alt="Delicious Popcorn" 
                    className="w-full h-full object-cover rounded-[2.5rem]"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-accent text-white p-4 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black rotate-[-6deg]">
                    <span className="font-display font-bold text-2xl">100% Fresh!</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY LECORN */}
      <section className="py-20 bg-white border-y-2 border-black">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why LeCorn?</h2>
            <p className="text-xl text-muted-foreground">The best snack break you'll have all day.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Fast & Fresh",
                desc: "Ready in minutes so you can get back to your day.",
                color: "bg-primary"
              },
              {
                icon: Star,
                title: "Flavours You’ll Love",
                desc: "Sweet, spicy, cheesy, tangy - we have it all.",
                color: "bg-accent"
              },
              {
                icon: Smile,
                title: "Perfect for Everyone",
                desc: "Family-friendly with vegan and dairy-free options.",
                color: "bg-[#4ade80]" // Green
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-background rounded-2xl p-8 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center text-center"
              >
                <div className={`${item.color} w-16 h-16 rounded-full border-2 border-black flex items-center justify-center mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
                  <item.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-accent font-bold uppercase tracking-wider">Crowd Favorites</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2">Best Sellers</h2>
            </div>
            <Link href="/menu" className="hidden md:flex items-center gap-2 font-bold text-lg hover:underline decoration-2 underline-offset-4">
              View Full Menu <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Peri-Peri Corn", price: "£4.00", img: "https://images.unsplash.com/photo-1633333246714-3d9203672728?q=80&w=600&auto=format&fit=crop" }, // corn cob
              { name: "Chilli-Lime Corn", price: "£4.00", img: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=600&auto=format&fit=crop" }, // corn dish
              { name: "Caramel Popcorn", price: "£4.00", img: "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?q=80&w=600&auto=format&fit=crop" }, // caramel popcorn
              { name: "Classic Hot Dog", price: "£5.50", img: "https://images.unsplash.com/photo-1627054249767-172579b20751?q=80&w=600&auto=format&fit=crop" }, // hotdog
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-4 aspect-square">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />
                  {/* Unsplash images with descriptive comments */}
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute bottom-3 right-3 bg-white px-3 py-1 rounded-full font-bold border border-black z-20">
                    {item.price}
                  </div>
                </div>
                <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{item.name}</h3>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/menu" className="btn-secondary inline-flex items-center gap-2 font-bold">
              View Full Menu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW WE SERVE */}
      <section className="py-20 bg-black text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">How We Serve</h2>
            <p className="text-gray-400">Bringing the sunshine to you, wherever you are.</p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-20 right-20 h-1 bg-gray-800 -z-0 -translate-y-1/2" />

            {[
              { step: "01", title: "Market Stall", desc: "Our roots. Every weekend at Hastings & St Leonards." },
              { step: "02", title: "Pop-Up Kiosk", desc: "Coming soon to local high streets near you." },
              { step: "03", title: "Malls & Events", desc: "Book us for your festival or corporate event." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center max-w-xs bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-primary transition-colors">
                <div className="text-5xl font-display font-bold text-gray-700 mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-24 bg-primary border-y-2 border-black">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 max-w-3xl mx-auto leading-tight">
            Want LeCorn at your next event?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-accent bg-black text-white hover:bg-gray-800 text-lg px-10 py-4 shadow-[6px_6px_0px_0px_#fff]">
              Book an Event
            </Link>
            <Link href="/franchise" className="btn-primary bg-white text-black hover:bg-gray-100 text-lg px-10 py-4 shadow-[6px_6px_0px_0px_#000]">
              Franchise Info
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
