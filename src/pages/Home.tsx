import { ChevronRight, Star, Shield, Award, HelpCircle, Gift, Lock } from 'lucide-react';
import offers from '../data/offers.json';

export default function Home() {
  return (
    <div className="bg-[#020617]">
      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-12 gap-8">
            {/* Left Content */}
            <div className="col-span-12 lg:col-span-7 space-y-8">
              <div className="border-l border-[#8B5CF6] pl-8">
                <h1 className="text-5xl lg:text-6xl font-bold text-[#FFFFFF] leading-none mb-4">
                  Best UK Casino Bonuses
                </h1>
                <p className="text-lg text-[#C7D2FE] leading-relaxed">
                  Discover exclusive casino offers and bonuses available to UK players. Compare top-rated casinos and claim your welcome bonus today.
                </p>
              </div>

              {/* Navigation Buttons */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                <a
                  href="#offers"
                  className="border border-[#8B5CF6] text-[#FFFFFF] px-6 py-3 transition-colors duration-200 hover:bg-[#8B5CF6] flex items-center justify-between"
                >
                  <span>Top Offers</span>
                  <ChevronRight className="h-4 w-4" />
                </a>
                <a
                  href="#brands"
                  className="border border-[#8B5CF6] text-[#FFFFFF] px-6 py-3 transition-colors duration-200 hover:bg-[#8B5CF6] flex items-center justify-between"
                >
                  <span>Top Brands</span>
                  <ChevronRight className="h-4 w-4" />
                </a>
                <a
                  href="#bonuses"
                  className="border border-[#8B5CF6] text-[#FFFFFF] px-6 py-3 transition-colors duration-200 hover:bg-[#8B5CF6] flex items-center justify-between"
                >
                  <span>Bonuses</span>
                  <ChevronRight className="h-4 w-4" />
                </a>
                <a
                  href="#cta"
                  className="border border-[#8B5CF6] text-[#FFFFFF] px-6 py-3 transition-colors duration-200 hover:bg-[#8B5CF6] flex items-center justify-between"
                >
                  <span>Get Started</span>
                  <ChevronRight className="h-4 w-4" />
                </a>
                <a
                  href="#faq"
                  className="border border-[#8B5CF6] text-[#FFFFFF] px-6 py-3 transition-colors duration-200 hover:bg-[#8B5CF6] flex items-center justify-between"
                >
                  <span>FAQ</span>
                  <ChevronRight className="h-4 w-4" />
                </a>
                <a
                  href="#security"
                  className="border border-[#8B5CF6] text-[#FFFFFF] px-6 py-3 transition-colors duration-200 hover:bg-[#8B5CF6] flex items-center justify-between"
                >
                  <span>Security</span>
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="col-span-12 lg:col-span-5">
              <img
                src="images/design/casino1.jpg"
                alt="Casino Gaming"
                className="w-full h-64 lg:h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section id="offers" className="bg-[#020617] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8">
              <div className="border-l border-[#8B5CF6] pl-8 mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#FFFFFF] leading-none">
                  Exclusive Casino Offers
                </h2>
              </div>

              <div className="space-y-6">
                {offers.map((offer, index) => (
                  <div key={index} className="bg-[#1E1B4B] border border-[#8B5CF6] p-6">
                    <div className="grid grid-cols-12 gap-4 items-center">
                      <div className="col-span-12 sm:col-span-3">
                        <img
                          src={offer.logo}
                          alt={offer.code}
                          className="w-full h-20 object-contain"
                        />
                      </div>
                      <div className="col-span-12 sm:col-span-6">
                        <h3 className="text-xl font-bold text-[#FFFFFF] mb-2">
                          {offer.code}
                        </h3>
                        <p className="text-[#C7D2FE]">
                          {offer.bonus}
                        </p>
                      </div>
                      <div className="col-span-12 sm:col-span-3">
                        <a
                          href={offer.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center bg-[#8B5CF6] text-[#FFFFFF] px-6 py-3 transition-colors duration-200 hover:bg-[#A78BFA]"
                        >
                          Claim Bonus
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4">
              <img
                src="images/design/13b4808e0d92037908b0bb0e241e8d28.jpg"
                alt="Casino Features"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Top Brands Section */}
      <section id="brands" className="bg-[#020617] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-5">
              <img
                src="images/design/ameristar-new_900xx902-507-0-85.jpg"
                alt="Top Casino Brands"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="col-span-12 lg:col-span-7">
              <div className="border-l border-[#8B5CF6] pl-8 mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#FFFFFF] leading-none">
                  Top Casino Brands
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#1E1B4B] p-6 border-l border-[#8B5CF6]">
                  <Star className="h-8 w-8 text-[#8B5CF6] mb-4" />
                  <h3 className="text-xl font-bold text-[#FFFFFF] mb-2">
                    Licensed & Regulated
                  </h3>
                  <p className="text-[#C7D2FE] leading-relaxed">
                    All featured casinos are fully licensed by the UK Gambling Commission.
                  </p>
                </div>

                <div className="bg-[#1E1B4B] p-6 border-l border-[#8B5CF6]">
                  <Award className="h-8 w-8 text-[#8B5CF6] mb-4" />
                  <h3 className="text-xl font-bold text-[#FFFFFF] mb-2">
                    Award Winners
                  </h3>
                  <p className="text-[#C7D2FE] leading-relaxed">
                    Industry-recognized brands with proven track records of excellence.
                  </p>
                </div>

                <div className="bg-[#1E1B4B] p-6 border-l border-[#8B5CF6]">
                  <Shield className="h-8 w-8 text-[#8B5CF6] mb-4" />
                  <h3 className="text-xl font-bold text-[#FFFFFF] mb-2">
                    Secure Gaming
                  </h3>
                  <p className="text-[#C7D2FE] leading-relaxed">
                    Advanced encryption and secure payment methods for your protection.
                  </p>
                </div>

                <div className="bg-[#1E1B4B] p-6 border-l border-[#8B5CF6]">
                  <Gift className="h-8 w-8 text-[#8B5CF6] mb-4" />
                  <h3 className="text-xl font-bold text-[#FFFFFF] mb-2">
                    Exclusive Offers
                  </h3>
                  <p className="text-[#C7D2FE] leading-relaxed">
                    Special bonuses and promotions available only through our site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="bg-[#1E1B4B] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-7">
              <div className="border-l border-[#8B5CF6] pl-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#FFFFFF] leading-none mb-4">
                  Ready to Start Playing?
                </h2>
                <p className="text-lg text-[#C7D2FE] leading-relaxed mb-8">
                  Join thousands of UK players who trust us to find the best casino bonuses. Start your journey today with our exclusive welcome offers.
                </p>
                <a
                  href="#offers"
                  className="inline-block bg-[#8B5CF6] text-[#FFFFFF] px-8 py-4 transition-colors duration-200 hover:bg-[#A78BFA]"
                >
                  View All Offers
                </a>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5">
              <img
                src="images/design/image.webp"
                alt="Start Playing"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-[#020617] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8">
              <div className="border-l border-[#8B5CF6] pl-8 mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#FFFFFF] leading-none">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-[#1E1B4B] p-6 border-l border-[#8B5CF6]">
                  <div className="flex items-start space-x-4">
                    <HelpCircle className="h-6 w-6 text-[#8B5CF6] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-[#FFFFFF] mb-2">
                        Are these casinos safe?
                      </h3>
                      <p className="text-[#C7D2FE] leading-relaxed">
                        Yes, all casinos we feature are licensed and regulated by the UK Gambling Commission, ensuring they meet strict standards for player protection and fair gaming.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1E1B4B] p-6 border-l border-[#8B5CF6]">
                  <div className="flex items-start space-x-4">
                    <HelpCircle className="h-6 w-6 text-[#8B5CF6] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-[#FFFFFF] mb-2">
                        How do I claim a bonus?
                      </h3>
                      <p className="text-[#C7D2FE] leading-relaxed">
                        Simply click on the "Claim Bonus" button next to your chosen offer. You'll be redirected to the casino where you can sign up and the bonus will be automatically applied to your account.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1E1B4B] p-6 border-l border-[#8B5CF6]">
                  <div className="flex items-start space-x-4">
                    <HelpCircle className="h-6 w-6 text-[#8B5CF6] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-[#FFFFFF] mb-2">
                        Are there wagering requirements?
                      </h3>
                      <p className="text-[#C7D2FE] leading-relaxed">
                        Most bonuses do have wagering requirements. These vary by casino and are detailed in the terms and conditions. Always read these carefully before accepting any bonus.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1E1B4B] p-6 border-l border-[#8B5CF6]">
                  <div className="flex items-start space-x-4">
                    <HelpCircle className="h-6 w-6 text-[#8B5CF6] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-[#FFFFFF] mb-2">
                        Can I play on mobile?
                      </h3>
                      <p className="text-[#C7D2FE] leading-relaxed">
                        Yes, all featured casinos offer mobile-optimized websites or dedicated apps, allowing you to play on your smartphone or tablet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4">
              <img
                src="images/design/man-is-playing-roulette-casino_1309173-19848.jpg"
                alt="Casino FAQ"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section id="bonuses" className="bg-[#1E1B4B] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-5">
              <img
                src="images/design/technology-transforming-the-global-gambling-landscape.jpg"
                alt="Casino Bonuses"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="col-span-12 lg:col-span-7">
              <div className="border-l border-[#8B5CF6] pl-8 mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#FFFFFF] leading-none">
                  Understanding Casino Bonuses
                </h2>
              </div>

              <div className="space-y-8">
                <div className="border-l border-[#8B5CF6] pl-6">
                  <h3 className="text-2xl font-bold text-[#FFFFFF] mb-3">
                    Welcome Bonuses
                  </h3>
                  <p className="text-[#C7D2FE] leading-relaxed">
                    New players receive generous welcome bonuses when they make their first deposit. These can include match bonuses, free spins, or a combination of both.
                  </p>
                </div>

                <div className="border-l border-[#8B5CF6] pl-6">
                  <h3 className="text-2xl font-bold text-[#FFFFFF] mb-3">
                    No Deposit Bonuses
                  </h3>
                  <p className="text-[#C7D2FE] leading-relaxed">
                    Some casinos offer bonuses without requiring an initial deposit. These allow you to try games risk-free before committing your own money.
                  </p>
                </div>

                <div className="border-l border-[#8B5CF6] pl-6">
                  <h3 className="text-2xl font-bold text-[#FFFFFF] mb-3">
                    Cashback Offers
                  </h3>
                  <p className="text-[#C7D2FE] leading-relaxed">
                    Regular players can benefit from cashback programs that return a percentage of losses over a specific period, giving you a second chance to win.
                  </p>
                </div>

                <div className="border-l border-[#8B5CF6] pl-6">
                  <h3 className="text-2xl font-bold text-[#FFFFFF] mb-3">
                    Loyalty Rewards
                  </h3>
                  <p className="text-[#C7D2FE] leading-relaxed">
                    Long-term players earn loyalty points that can be exchanged for bonuses, free spins, or other exclusive rewards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="bg-[#020617] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-7">
              <div className="border-l border-[#8B5CF6] pl-8 mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#FFFFFF] leading-none">
                  Your Security Matters
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-[#1E1B4B] p-6">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-2">
                      <Lock className="h-10 w-10 text-[#8B5CF6]" />
                    </div>
                    <div className="col-span-10">
                      <h3 className="text-xl font-bold text-[#FFFFFF] mb-2">
                        SSL Encryption
                      </h3>
                      <p className="text-[#C7D2FE] leading-relaxed">
                        All featured casinos use 128-bit SSL encryption to protect your personal and financial information.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1E1B4B] p-6">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-2">
                      <Shield className="h-10 w-10 text-[#8B5CF6]" />
                    </div>
                    <div className="col-span-10">
                      <h3 className="text-xl font-bold text-[#FFFFFF] mb-2">
                        UKGC Licensed
                      </h3>
                      <p className="text-[#C7D2FE] leading-relaxed">
                        Every casino holds a valid license from the UK Gambling Commission, the strictest regulatory body in the industry.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1E1B4B] p-6">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-2">
                      <Award className="h-10 w-10 text-[#8B5CF6]" />
                    </div>
                    <div className="col-span-10">
                      <h3 className="text-xl font-bold text-[#FFFFFF] mb-2">
                        Fair Play Certified
                      </h3>
                      <p className="text-[#C7D2FE] leading-relaxed">
                        Independent testing agencies verify that all games use certified random number generators.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1E1B4B] p-6">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-2">
                      <HelpCircle className="h-10 w-10 text-[#8B5CF6]" />
                    </div>
                    <div className="col-span-10">
                      <h3 className="text-xl font-bold text-[#FFFFFF] mb-2">
                        Responsible Gaming
                      </h3>
                      <p className="text-[#C7D2FE] leading-relaxed">
                        Tools and resources available including deposit limits, self-exclusion options, and links to support organizations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5">
              <img
                src="images/design/terry-vlisidis-vPQbo1D7Eco-unsplash.jpg"
                alt="Security"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
