import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import FloatingParticles from './FloatingParticles';
import dimensionPreview from '@/assets/dimension-preview.jpg';

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleJoinWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "You've joined the waitlist!",
        description: "We'll notify you when Dimension launches.",
      });
      setEmail('');
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      <FloatingParticles />
      
      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-5xl mx-auto"
        >
          {/* Announcement Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-card/20 backdrop-blur-md border border-border/30 text-sm text-muted-foreground mb-8"
          >
            Announcing our $1.4M Fundraise
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Dimension is the new{' '}
            <span className="text-gradient">standard for collaboration</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Chat, code, cloud, deployments, and more.
          </motion.p>

          {/* Email Signup Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            onSubmit={handleJoinWaitlist}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-12"
          >
            <Input
              type="email"
              placeholder="Email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-card/20 backdrop-blur-md border-border/50 text-foreground placeholder:text-muted-foreground"
              required
            />
            <Button type="submit" variant="floating" size="responsive" className="relative overflow-hidden group">
              <span className="relative z-10">Join waitlist</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-size-200 animate-gradient-shift opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </motion.form>

          {/* App Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.9, duration: 1, ease: 'easeOut' }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="relative feature-card rounded-2xl overflow-hidden transform-gpu preserve-3d hover:scale-105 hover:-translate-y-4 hover:rotate-1 transition-all duration-500 ease-out shadow-2xl hover:shadow-3xl">
              <img
                src={dimensionPreview}
                alt="A preview of Dimension app"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;