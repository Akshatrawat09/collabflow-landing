import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Code2, Zap, Globe, Users, Workflow, Shield } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Build software faster, together',
    description: 'The most complete developer experience. Collaborate on everything from deployments to tasks.',
  },
  {
    icon: Code2,
    title: 'The easiest way to browse your codebase',
    description: 'Navigate, search, and understand your code with intelligent tools and seamless integrations.',
  },
  {
    icon: Globe,
    title: 'View, manage, and scale your cloud',
    description: 'All from Dimension. Connect your tools - we\'ll handle the rest.',
  },
  {
    icon: Workflow,
    title: 'Projects, tasks, milestones, cycles…',
    description: 'Organize your workflow with powerful project management tools built for developers.',
  },
  {
    icon: Zap,
    title: 'Precision. Elegance. Performance.',
    description: 'Crafted for your favorite tools with delightfully smart interactions.',
  },
  {
    icon: Shield,
    title: 'Enterprise-grade security',
    description: 'Built with security and compliance in mind, trusted by teams worldwide.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Build software{' '}
            <span className="text-gradient">faster, together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The most complete developer experience. Collaborate on everything
            from deployments to tasks, work with your team every step of the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: '1000px' }}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15, 
                rotateX: -5, 
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                scale: 1.02
              }}
              className="group transform-gpu preserve-3d"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card className="feature-card h-full p-6 group-hover:border-primary/50 shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg">
                      <feature.icon className="w-6 h-6 text-primary group-hover:animate-bounce-3d" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;