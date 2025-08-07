import { motion } from 'framer-motion';

const contributors = [
  { name: 'Million', logo: 'https://million.dev/logo.svg' },
  { name: 'Tabler', logo: 'https://tabler.io/favicon.ico' },
  { name: 'SolidJS', logo: 'https://www.solidjs.com/img/logo/without-wordmark/logo.svg' },
  { name: 'Starship', logo: 'https://starship.rs/icon.png' },
  { name: 'Astro', logo: 'https://astro.build/favicon.svg' },
];

const ContributorsSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-muted-foreground mb-8">
            Join the maintainers and contributors to the largest open-source projects on our waitlist.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {contributors.map((contributor, index) => (
              <motion.div
                key={contributor.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={contributor.logo}
                  alt={`${contributor.name} logo`}
                  className="w-8 h-8 md:w-10 md:h-10 opacity-60 hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    // Fallback to a colored circle with first letter if image fails
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm';
                    fallback.textContent = contributor.name.charAt(0);
                    target.parentNode?.appendChild(fallback);
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContributorsSection;