import { Helmet } from "react-helmet-async";
import { menuData } from "@/data/menuData";
import { motion } from "framer-motion";

export default function Menu() {
  const getImageForCategory = (title: string) => {
    switch(title) {
      case "Sweetcorn Cups":
        return "/corn-varieties.png";
      case "Popcorn":
        return "/corn-kernels.png";
      case "Hot Drinks":
        return "/coffee-drink.jpg";
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Menu | LeCorn</title>
        <meta name="description" content="Explore our delicious menu of sweetcorn, popcorn, milkshakes, and smoothies." />
      </Helmet>

      <div className="pt-32 pb-20 bg-background min-h-screen">
        <div className="container-custom">
          
          <div className="text-center mb-16">
            <h1 className="text-6xl font-black mb-4">Our Menu</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Hand-crafted snacks and drinks made with premium ingredients.
            </p>
            <div className="inline-block bg-white border border-black rounded-lg px-4 py-2 text-sm font-bold shadow-sm">
              Note: Prices may vary by location and events.
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {menuData.map((category, index) => {
              const image = getImageForCategory(category.title);

              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                >
                  {image && (
                    <div className="w-full h-48 overflow-hidden bg-gray-100">
                      <img 
                        src={image} 
                        alt={category.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-8">
                    <div className="flex justify-between items-baseline mb-6 border-b-2 border-primary/30 pb-4">
                      <h2 className="text-3xl font-display font-bold">{category.title}</h2>
                      {category.note && (
                        <span className="text-sm font-medium text-accent italic">{category.note}</span>
                      )}
                    </div>

                    <div className="space-y-6">
                      {category.items.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-start group">
                          <div>
                            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{item.name}</h3>
                            {item.description && (
                              <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                            )}
                            {item.tags && item.tags.length > 0 && (
                              <div className="flex gap-2 mt-2">
                                {item.tags.map(tag => (
                                  <span key={tag} className="text-[10px] uppercase font-bold bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full border border-gray-200">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                          <div className="text-lg font-bold whitespace-nowrap bg-primary/20 px-3 py-1 rounded-lg">
                            {item.price}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Dietary Legend */}
          <div className="mt-16 bg-black text-white p-6 rounded-xl text-center max-w-3xl mx-auto shadow-lg">
            <h3 className="font-display text-xl mb-4 text-primary">Dietary Guide</h3>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#4ade80] rounded-full"></span> V = Vegetarian
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span> VG = Vegan
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span> DF = Dairy-Free
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span> GF = Gluten-Free
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Please ask our staff about allergens before ordering. Cross-contamination is possible.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
