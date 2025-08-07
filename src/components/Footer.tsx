import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SiGithub, SiX, SiDiscord } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="relative py-16 px-4 border-t border-border/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to revolutionize your workflow?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are already building the future with Dimension.
          </p>
          
          <Button variant="hero" size="xl" className="mb-12">
            Get started for free
          </Button>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6 mb-8">
            {[
              { icon: SiGithub, label: 'GitHub', href: '#' },
              { icon: SiX, label: 'X (Twitter)', href: '#' },
              { icon: SiDiscord, label: 'Discord', href: '#' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-card/20 backdrop-blur-sm border border-border/30 flex items-center justify-center hover:bg-card/40 hover:border-primary/30 transition-all duration-300"
              >
                <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>

          <div className="pt-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground">
              © 2024 Dimension. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;