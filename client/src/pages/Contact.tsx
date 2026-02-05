import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactForm } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      enquiryType: "General"
    }
  });

  const onSubmit = (data: ContactForm) => {
    // Simulate submit
    console.log("Contact Form:", data);
    setTimeout(() => {
      toast({
        title: "Message Sent! ☀️",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | LeCorn</title>
        <meta name="description" content="Get in touch for event bookings, general enquiries, or just to say hello." />
      </Helmet>

      <div className="pt-32 pb-20 bg-background min-h-screen">
        <div className="container-custom">
          
          <div className="text-center mb-16">
            <h1 className="text-6xl font-black mb-4">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Questions? Feedback? Want to book us? We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info & FAQ */}
            <div className="space-y-12">
              <div className="bg-white rounded-2xl p-8 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-2xl font-bold mb-6">Contact Details</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-black"/>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-500">Email Us</p>
                      <a href="mailto:hello@lecorn.co.uk" className="text-lg font-bold hover:text-accent">info@lecorn.co.uk</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-black"/>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-500">Call Us</p>
                      <a href="tel:01234567890" className="text-lg font-bold hover:text-accent">07393454245</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-black"/>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-500">Trading Locations</p>
                      <p className="text-lg font-bold">Hastings & St Leonards Markets</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Common Questions</h2>
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {[
                    { q: "Do you have allergen information?", a: "Yes! All our menu items are clearly labelled. We cater for GF, DF, Veg, and Vegan diets. However, please inform us of severe allergies as we operate in a small kitchen." },
                    { q: "How do I book LeCorn for an event?", a: "Simply use the contact form on this page, select 'Event Booking', and tell us the date and estimated number of guests." },
                    { q: "What are your opening hours?", a: "We are generally open Saturday and Sunday 9am-4pm at our market locations. Check our socials for pop-up times." },
                    { q: "Is franchising available nationwide?", a: "We are currently expanding across the South East but are open to discussing opportunities nationwide for the right partners." }
                  ].map((item, i) => (
                    <AccordionItem key={i} value={`item-${i}`} className="bg-white border-2 border-black rounded-xl px-4 shadow-sm data-[state=open]:shadow-md transition-shadow">
                      <AccordionTrigger className="font-bold text-lg hover:no-underline">{item.q}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base pb-4">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl border-2 border-black shadow-[8px_8px_0px_0px_#FFC700] p-8 md:p-10 h-fit"
            >
              <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-bold">Enquiry Type</label>
                  <select 
                    {...form.register("enquiryType")}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-black focus:ring-4 focus:ring-primary/20 focus:outline-none transition-all bg-gray-50 appearance-none font-medium"
                  >
                    <option value="General">General Enquiry</option>
                    <option value="Event Booking">Event Booking</option>
                    <option value="Franchise">Franchise Info</option>
                    <option value="Feedback">Feedback</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-bold">Your Name</label>
                    <input 
                      {...form.register("name")}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-black focus:ring-4 focus:ring-primary/20 focus:outline-none transition-all bg-gray-50"
                      placeholder="Jane Doe"
                    />
                    {form.formState.errors.name && <p className="text-red-500 text-xs font-bold">{form.formState.errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold">Phone Number</label>
                    <input 
                      {...form.register("phone")}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-black focus:ring-4 focus:ring-primary/20 focus:outline-none transition-all bg-gray-50"
                      placeholder="07700..."
                    />
                    {form.formState.errors.phone && <p className="text-red-500 text-xs font-bold">{form.formState.errors.phone.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold">Email Address</label>
                  <input 
                    {...form.register("email")}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-black focus:ring-4 focus:ring-primary/20 focus:outline-none transition-all bg-gray-50"
                    placeholder="jane@example.com"
                  />
                  {form.formState.errors.email && <p className="text-red-500 text-xs font-bold">{form.formState.errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold">Message</label>
                  <textarea 
                    {...form.register("message")}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-black focus:ring-4 focus:ring-primary/20 focus:outline-none transition-all bg-gray-50 resize-none"
                    placeholder="How can we help?"
                  />
                  {form.formState.errors.message && <p className="text-red-500 text-xs font-bold">{form.formState.errors.message.message}</p>}
                </div>

                <button 
                  disabled={form.formState.isSubmitting}
                  className="w-full btn-primary text-lg"
                >
                  {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
