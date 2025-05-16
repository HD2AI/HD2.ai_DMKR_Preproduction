
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';

const Pricing = () => {
  const pricingPlans = [
    {
      name: 'Basic',
      price: '29',
      description: 'Perfect for small residential projects',
      features: [
        'Free consultation',
        'Standard tile options',
        'Basic installation',
        'Standard grout',
        '1-year warranty',
        'Email support',
      ],
      notIncluded: [
        'Custom designs',
        'Premium materials',
        'Weekend availability',
      ],
      popular: false,
      buttonText: 'Get Started',
    },
    {
      name: 'Professional',
      price: '59',
      description: 'Ideal for bathrooms and kitchens',
      features: [
        'Free consultation',
        'Premium tile selection',
        'Expert installation',
        'Stain-resistant grout',
        '2-year warranty',
        'Priority support',
        'Custom designs',
        'Weekend availability',
      ],
      notIncluded: [
        'Premium materials',
      ],
      popular: true,
      buttonText: 'Get Started',
    },
    {
      name: 'Premium',
      price: '99',
      description: 'Complete solution for luxury projects',
      features: [
        'Free consultation',
        'Unlimited tile options',
        'Master craftsman installation',
        'Premium epoxy grout',
        '3-year warranty',
        '24/7 support',
        'Custom designs',
        'Premium materials',
        'Weekend availability',
        'Post-installation maintenance',
      ],
      notIncluded: [],
      popular: false,
      buttonText: 'Get Started',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      <div className="blur-overlay bottom-40 right-[20%]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the perfect plan for your tiling project. All prices are per square meter.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`pricing-card relative rounded-xl border ${
                plan.popular
                  ? 'border-indigo-500/50 bg-indigo-950/30'
                  : 'border-border bg-secondary/50'
              } p-6 flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-medium px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground ml-2">/ sqm</span>
                </div>
              </div>
              <div className="mb-8 flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <X className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                asChild
                className={`w-full ${
                  plan.popular
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700'
                    : ''
                }`}
                variant={plan.popular ? 'default' : 'outline'}
              >
                <Link to="/quote">{plan.buttonText}</Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Need a custom solution for your project?
          </p>
          <Button variant="outline" className="gradient-border" asChild>
            <Link to="/quote">Contact Us for Custom Quote</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
  