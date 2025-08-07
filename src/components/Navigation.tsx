import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/30"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">D</span>
          </div>
          <span className="text-xl font-bold">Dimension</span>
        </motion.div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Careers
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Blog
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Changelog
          </a>
        </div>

        <Button variant="glass" size="sm">
          Join waitlist
        </Button>
      </div>
    </motion.nav>
  );
};

export default Navigation;