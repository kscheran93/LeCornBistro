import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { franchiseFormSchema, type FranchiseForm } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { TrendingUp, Map, Briefcase, PoundSterling, CheckCircle } from "lucide-react";

export default function Franchise() {
  const { toast } = useToast();
  const form = useForm<FranchiseForm>({
    resolver: zodResolver(franchiseFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      city: "",
      budgetRange: "",
      experience: "",
      message: ""
    }
  });

  const onSubmit = (data: FranchiseForm) => {
    // Simulate API call
    console.log("Franchise Enquiry:", data);
    setTimeout(() => {
      toast({
        title: "Enquiry Received! 🌽",
        description: "Thanks for your interest. We'll be in touch shortly.",
      });
      form.reset();
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Franchise Opportunities | LeCorn</title>
        <meta name="description" content="Start your own LeCorn business. Join the sunny snack revolution." />
      </Helmet>

      {/* Header */}
      <section className="pt-32 pb-16 bg-black text-white text-center">
        <div className="container-custom">
          <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Business Opportunities</span>
          <h1 className="text-5xl md:text-7xl font-black mb-6">Join the Revolution</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Become a LeCorn partner and bring premium snacks to your local community.
          </p>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-20 bg-background">
        <div className="container-custom grid lg:grid-cols-2 gap-16">
          
          {/* Left Column: Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-primary p-2 rounded-lg border border-black"><TrendingUp className="w-6 h-6 text-black"/></div>
                Why Franchise LeCorn?
              </h2>
              <ul className="space-y-4 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                  <span><strong>Simple Operations:</strong> No complex cooking. Just heat, season, serve.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                  <span><strong>Strong Margins:</strong> Low food costs and high customer satisfaction.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                  <span><strong>Small Footprint:</strong> Fits in kiosks, stalls, and small retail units.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-accent p-2 rounded-lg border border-black"><Map className="w-6 h-6 text-white"/></div>
                Ideal Locations
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                We thrive in high-footfall areas where people want a quick, tasty treat.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Markets", "Shopping Malls", "Seaside Towns", "Transport Hubs", "Festivals", "Universities"].map(tag => (
                  <span key={tag} className="bg-white border border-black px-4 py-2 rounded-full font-bold shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-black p-2 rounded-lg border border-white"><Briefcase className="w-6 h-6 text-primary"/></div>
                What You Get
              </h2>
              <div className="bg-white p-6 rounded-2xl border-2 border-black shadow-md">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <li className="flex items-center gap-2">🔸 Full Brand Kit</li>
                  <li className="flex items-center gap-2">🔸 Comprehensive Training</li>
                  <li className="flex items-center gap-2">🔸 Exclusive Recipes</li>
                  <li className="flex items-center gap-2">🔸 Supplier Discounts</li>
                  <li className="flex items-center gap-2">🔸 Marketing Templates</li>
                  <li className="flex items-center gap-2">🔸 24/7 Support</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="relative">
            <div className="sticky top-24">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8"
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold">Start Your Journey</h3>
                  <p className="text-muted-foreground">Fill out the form below to request our franchise pack.</p>
                </div>

                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-bold">Name</label>
                      <input 
                        {...form.register("name")}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-black focus:outline-none transition-colors bg-gray-50"
                        placeholder="Your full name"
                      />
                      {form.formState.errors.name && <p className="text-red-500 text-xs font-bold">{form.formState.errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold">Phone</label>
                      <input 
                        {...form.register("phone")}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-black focus:outline-none transition-colors bg-gray-50"
                        placeholder="07700 900000"
                      />
                      {form.formState.errors.phone && <p className="text-red-500 text-xs font-bold">{form.formState.errors.phone.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold">Email</label>
                    <input 
                      {...form.register("email")}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-black focus:outline-none transition-colors bg-gray-50"
                      placeholder="you@example.com"
                    />
                    {form.formState.errors.email && <p className="text-red-500 text-xs font-bold">{form.formState.errors.email.message}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-bold">City/Area</label>
                      <input 
                        {...form.register("city")}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-black focus:outline-none transition-colors bg-gray-50"
                        placeholder="e.g. Brighton"
                      />
                      {form.formState.errors.city && <p className="text-red-500 text-xs font-bold">{form.formState.errors.city.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold">Budget Range</label>
                      <select 
                        {...form.register("budgetRange")}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-black focus:outline-none transition-colors bg-gray-50 appearance-none"
                      >
                        <option value="">Select range...</option>
                        <option value="10-20k">£10k - £20k</option>
                        <option value="20-50k">£20k - £50k</option>
                        <option value="50k+">£50k+</option>
                      </select>
                      {form.formState.errors.budgetRange && <p className="text-red-500 text-xs font-bold">{form.formState.errors.budgetRange.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold">Experience</label>
                    <textarea 
                      {...form.register("experience")}
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-black focus:outline-none transition-colors bg-gray-50"
                      placeholder="Tell us briefly about your background..."
                    />
                    {form.formState.errors.experience && <p className="text-red-500 text-xs font-bold">{form.formState.errors.experience.message}</p>}
                  </div>

                  <button 
                    disabled={form.formState.isSubmitting}
                    className="w-full btn-primary mt-4"
                  >
                    {form.formState.isSubmitting ? "Sending..." : "Request Franchise Pack"}
                  </button>

                  <p className="text-xs text-center text-gray-400 mt-4">
                    Franchise availability subject to area and approval.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
