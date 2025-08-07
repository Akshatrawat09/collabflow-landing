import { motion } from 'framer-motion';
import { SiGithub, SiVercel, SiRailway, SiNetlify, SiCloudflare, SiFigma, SiLinear, SiGoogle } from 'react-icons/si';

const integrations = [
  { name: 'GitHub', icon: SiGithub, color: 'text-gray-300' },
  { name: 'Vercel', icon: SiVercel, color: 'text-white' },
  { name: 'Railway', icon: SiRailway, color: 'text-purple-400' },
  { name: 'Netlify', icon: SiNetlify, color: 'text-teal-400' },
  { name: 'Cloudflare', icon: SiCloudflare, color: 'text-orange-400' },
  { name: 'Figma', icon: SiFigma, color: 'text-pink-400' },
  { name: 'Linear', icon: SiLinear, color: 'text-blue-400' },
  { name: 'Google', icon: SiGoogle, color: 'text-red-400' },
];

const IntegrationsSection = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Crafted for your{' '}
            <span className="text-gradient">favorite tools</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect your tools - we'll handle the rest. Many integrations, with more to come.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center"
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -4 }}
              className="group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-xl bg-card/50 backdrop-blur-sm border border-border/30 flex items-center justify-center group-hover:bg-card/80 group-hover:border-primary/30 transition-all duration-300">
                <integration.icon 
                  className={`w-8 h-8 ${integration.color} group-hover:scale-110 transition-transform duration-300`} 
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationsSection;