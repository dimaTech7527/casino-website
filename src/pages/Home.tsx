import { ArrowRight, Smartphone, Shield, Gift, TrendingUp, Award, CheckCircle } from 'lucide-react';

const Home = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#14532D] via-[#166534] to-[#14532D]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#22C55E] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#4ADE80] rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#22C55E] via-[#4ADE80] to-[#BBF7D0] bg-clip-text text-transparent leading-tight">
                UK's Premier Casino Review Site
              </h1>
              <p className="text-xl text-[#DCFCE7] leading-relaxed">
                Discover the best licensed UK online casinos. Expert reviews, exclusive bonuses, and trusted recommendations for safe gambling.
              </p>

              {/* Hero Navigation Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <button
                  onClick={() => scrollToSection('offers')}
                  className="bg-gradient-to-r from-[#22C55E] to-[#4ADE80] text-[#14532D] px-6 py-3 rounded-full font-bold transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                >
                  Top Offers
                </button>
                <button
                  onClick={() => scrollToSection('mobile')}
                  className="bg-[#166534] text-[#F0FDF4] px-6 py-3 rounded-full font-bold transition-all duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-[#22C55E] hover:to-[#4ADE80]"
                >
                  Mobile
                </button>
                <button
                  onClick={() => scrollToSection('security')}
                  className="bg-[#166534] text-[#F0FDF4] px-6 py-3 rounded-full font-bold transition-all duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-[#22C55E] hover:to-[#4ADE80]"
                >
                  Security
                </button>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="bg-[#166534] text-[#F0FDF4] px-6 py-3 rounded-full font-bold transition-all duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-[#22C55E] hover:to-[#4ADE80]"
                >
                  How It Works
                </button>
                <button
                  onClick={() => scrollToSection('bonuses')}
                  className="bg-[#166534] text-[#F0FDF4] px-6 py-3 rounded-full font-bold transition-all duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-[#22C55E] hover:to-[#4ADE80]"
                >
                  Bonuses
                </button>
                <button
                  onClick={() => scrollToSection('benefits')}
                  className="bg-[#166534] text-[#F0FDF4] px-6 py-3 rounded-full font-bold transition-all duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-[#22C55E] hover:to-[#4ADE80]"
                >
                  Benefits
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src="images/design/114807112.webp"
                alt="Casino Gaming"
                className="rounded-[3rem] shadow-2xl transition-all duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section id="offers" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#166534]/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#22C55E] to-[#4ADE80] bg-clip-text text-transparent">
            Exclusive Casino Offers
          </h2>
          <p className="text-center text-[#DCFCE7] text-xl mb-12">
            Hand-picked deals from the UK's top-rated online casinos
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-[3rem] p-8 transition-all duration-700 hover:scale-105 hover:bg-white/20 border-2 border-[#22C55E]/30"
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-[#22C55E] to-[#4ADE80] rounded-full flex items-center justify-center">
                    <Gift className="text-[#14532D]" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#F0FDF4]">Casino Offer #{i}</h3>
                  <p className="text-[#DCFCE7]">
                    Welcome bonus up to £500 + 100 free spins on selected slots. New customers only. T&Cs apply.
                  </p>
                  <button className="bg-gradient-to-r from-[#22C55E] to-[#4ADE80] text-[#14532D] px-8 py-3 rounded-full font-bold transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                    Claim Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Section */}
      <section id="mobile" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="images/design/297513745.jpg"
                alt="Mobile Casino Gaming"
                className="rounded-[3rem] shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-block p-4 bg-gradient-to-r from-[#22C55E] to-[#4ADE80] rounded-full">
                <Smartphone className="text-[#14532D]" size={48} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#22C55E] to-[#4ADE80] bg-clip-text text-transparent">
                Play Anywhere, Anytime
              </h2>
              <p className="text-xl text-[#DCFCE7] leading-relaxed">
                All our recommended casinos offer seamless mobile experiences. Play your favourite games on iOS and Android devices with optimised apps and responsive websites.
              </p>
              <ul className="space-y-4">
                {['Instant Play Browser Games', 'Native iOS & Android Apps', 'Touch-Optimized Interface', 'Full Game Selection'].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-[#DCFCE7]">
                    <CheckCircle className="text-[#22C55E]" size={24} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#166534]/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <div className="inline-block p-4 bg-gradient-to-r from-[#22C55E] to-[#4ADE80] rounded-full">
                <Shield className="text-[#14532D]" size={48} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#22C55E] to-[#4ADE80] bg-clip-text text-transparent">
                Your Safety is Our Priority
              </h2>
              <p className="text-xl text-[#DCFCE7] leading-relaxed">
                We only recommend casinos licensed by the UK Gambling Commission. Every site undergoes rigorous security checks to ensure your data and funds are protected.
              </p>
              <ul className="space-y-4">
                {['UK Gambling Commission Licensed', 'SSL Encryption Protected', 'Fair Play Certified', 'Responsible Gambling Tools'].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-[#DCFCE7]">
                    <CheckCircle className="text-[#22C55E]" size={24} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative order-1 md:order-2">
              <img
                src="images/design/casino6.webp"
                alt="Secure Online Gaming"
                className="rounded-[3rem] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#22C55E] to-[#4ADE80] bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-center text-[#DCFCE7] text-xl mb-12">
            Start playing at top UK casinos in three simple steps
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: 1, title: 'Browse Reviews', desc: 'Explore our expert reviews and compare top-rated UK casinos' },
              { step: 2, title: 'Choose Casino', desc: 'Select the perfect casino based on games, bonuses, and features' },
              { step: 3, title: 'Claim Bonus', desc: 'Sign up through our links and claim exclusive welcome offers' },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white/10 backdrop-blur-sm rounded-[3rem] p-8 text-center space-y-4 transition-all duration-700 hover:scale-105 border-2 border-[#22C55E]/30"
              >
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-[#22C55E] to-[#4ADE80] rounded-full flex items-center justify-center text-[#14532D] text-3xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-[#F0FDF4]">{item.title}</h3>
                <p className="text-[#DCFCE7]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section id="bonuses" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#166534]/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#22C55E] to-[#4ADE80] bg-clip-text text-transparent">
            Types of Casino Bonuses
          </h2>
          <p className="text-center text-[#DCFCE7] text-xl mb-12">
            Understanding different bonus types to maximize your gaming experience
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Gift, title: 'Welcome Bonus', desc: 'Match deposit bonuses for new players' },
              { icon: TrendingUp, title: 'Free Spins', desc: 'Complimentary spins on popular slots' },
              { icon: Award, title: 'Cashback', desc: 'Get back a percentage of losses' },
              { icon: CheckCircle, title: 'No Deposit', desc: 'Play without making a deposit' },
            ].map((bonus) => (
              <div
                key={bonus.title}
                className="bg-white/10 backdrop-blur-sm rounded-[3rem] p-6 text-center space-y-4 transition-all duration-700 hover:scale-105 border-2 border-[#22C55E]/30"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-[#22C55E] to-[#4ADE80] rounded-full flex items-center justify-center">
                  <bonus.icon className="text-[#14532D]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#F0FDF4]">{bonus.title}</h3>
                <p className="text-[#DCFCE7] text-sm">{bonus.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="images/design/img80.jpg"
                alt="Casino Benefits"
                className="rounded-[3rem] shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#22C55E] to-[#4ADE80] bg-clip-text text-transparent">
                Why Choose Our Recommendations
              </h2>
              <p className="text-xl text-[#DCFCE7] leading-relaxed">
                We've done the hard work so you don't have to. Every casino we recommend meets our strict criteria for safety, quality, and player satisfaction.
              </p>
              <div className="space-y-4">
                {[
                  'Expert Reviews from Industry Professionals',
                  'Exclusive Bonuses Not Available Elsewhere',
                  'Regular Updates on New Casinos',
                  'Honest, Unbiased Recommendations',
                  'UK-Focused Content & Support',
                  '24/7 Customer Support Guidance'
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <ArrowRight className="text-[#22C55E] flex-shrink-0 mt-1" size={24} />
                    <span className="text-[#DCFCE7]">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
