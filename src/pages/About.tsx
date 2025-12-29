import { Mail, Phone, HelpCircle, Users, Target, TrendingUp } from 'lucide-react';
import offers from '../data/offers.json';

export default function About() {
  return (
    <div className="bg-[#020617]">
      {/* Hero Section */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-7">
              <div className="border-l border-[#8B5CF6] pl-8">
                <h1 className="text-5xl lg:text-6xl font-bold text-[#FFFFFF] leading-none mb-4">
                  About OKWins UK
                </h1>
                <p className="text-lg text-[#C7D2FE] leading-relaxed">
                  Your trusted partner in finding the best online casino experiences in the United Kingdom. We're dedicated to helping players discover top-rated casinos with exclusive bonuses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Section */}
      <section className="bg-[#1E1B4B] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-7">
              <div className="border-l border-[#8B5CF6] pl-8 mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#FFFFFF] leading-none">
                  Our Mission
                </h2>
              </div>

              <div className="space-y-8">
                <div className="border-l border-[#8B5CF6] pl-6">
                  <h3 className="text-2xl font-bold text-[#FFFFFF] mb-3">
                    Transparency First
                  </h3>
                  <p className="text-[#C7D2FE] leading-relaxed">
                    We believe in complete transparency. All casinos we feature are thoroughly vetted, and we clearly disclose our affiliate relationships. Your trust is our top priority.
                  </p>
                </div>

                <div className="border-l border-[#8B5CF6] pl-6">
                  <h3 className="text-2xl font-bold text-[#FFFFFF] mb-3">
                    Player Protection
                  </h3>
                  <p className="text-[#C7D2FE] leading-relaxed">
                    We only promote casinos licensed by the UK Gambling Commission. Every casino must meet strict standards for security, fair play, and responsible gaming.
                  </p>
                </div>

                <div className="border-l border-[#8B5CF6] pl-6">
                  <h3 className="text-2xl font-bold text-[#FFFFFF] mb-3">
                    Expert Reviews
                  </h3>
                  <p className="text-[#C7D2FE] leading-relaxed">
                    Our team of gaming experts thoroughly tests each casino, evaluating game selection, bonus terms, payment methods, and customer support before making recommendations.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5 space-y-6">
              <div className="bg-[#020617] p-6">
                <div className="flex items-start space-x-4">
                  <Users className="h-8 w-8 text-[#8B5CF6] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-[#FFFFFF] mb-2">
                      50,000+ Players
                    </h3>
                    <p className="text-[#C7D2FE] leading-relaxed">
                      Thousands of UK players trust our recommendations every month.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#020617] p-6">
                <div className="flex items-start space-x-4">
                  <Target className="h-8 w-8 text-[#8B5CF6] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-[#FFFFFF] mb-2">
                      Expert Team
                    </h3>
                    <p className="text-[#C7D2FE] leading-relaxed">
                      Gaming industry professionals with years of experience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#020617] p-6">
                <div className="flex items-start space-x-4">
                  <TrendingUp className="h-8 w-8 text-[#8B5CF6] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-[#FFFFFF] mb-2">
                      Updated Daily
                    </h3>
                    <p className="text-[#C7D2FE] leading-relaxed">
                      We constantly update our offers to bring you the latest bonuses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-[#020617] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12">
              <div className="border-l border-[#8B5CF6] pl-8 mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#FFFFFF] leading-none">
                  Our Partners
                </h2>
              </div>
            </div>

            <div className="col-span-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {offers.map((offer, index) => (
                  <div key={index} className="bg-[#1E1B4B] p-6 border border-[#8B5CF6]">
                    <img
                      src={offer.logo}
                      alt={offer.code}
                      className="w-full h-20 object-contain mb-4"
                    />
                    <h3 className="text-xl font-bold text-[#FFFFFF] mb-2">
                      {offer.code}
                    </h3>
                    <p className="text-[#C7D2FE] text-sm mb-4">
                      Licensed UK casino with excellent player reviews and secure payment options.
                    </p>
                    <a
                      href={offer.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#8B5CF6] text-[#FFFFFF] px-6 py-2 transition-colors duration-200 hover:bg-[#A78BFA]"
                    >
                      Visit Casino
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="bg-[#1E1B4B] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-6">
              <div className="border-l border-[#8B5CF6] pl-8 mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#FFFFFF] leading-none">
                  Get in Touch
                </h2>
              </div>

              <p className="text-lg text-[#C7D2FE] leading-relaxed mb-8">
                Have questions about our recommendations? Want to suggest a casino for review? We're here to help. Contact us through any of the following methods.
              </p>

              <div className="space-y-6">
                <div className="bg-[#020617] p-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-[#8B5CF6] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-[#FFFFFF] mb-2">
                        Email Us
                      </h3>
                      <a 
                        href="mailto:info@okwinsuk.com"
                        className="text-[#C7D2FE] hover:text-[#8B5CF6] transition-colors duration-200"
                      >
                        info@okwinsuk.com
                      </a>
                      <p className="text-[#C7D2FE] text-sm mt-2">
                        We typically respond within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#020617] p-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-[#8B5CF6] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-[#FFFFFF] mb-2">
                        Call Us
                      </h3>
                      <a 
                        href="tel:+447506596350"
                        className="text-[#C7D2FE] hover:text-[#8B5CF6] transition-colors duration-200"
                      >
                        +44 7506596350
                      </a>
                      <p className="text-[#C7D2FE] text-sm mt-2">
                        Monday - Friday, 9:00 AM - 6:00 PM GMT
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <div className="bg-[#020617] p-8 h-full">
                <h3 className="text-2xl font-bold text-[#FFFFFF] mb-6">
                  Why Contact Us?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#8B5CF6] mt-2 flex-shrink-0"></div>
                    <p className="text-[#C7D2FE] leading-relaxed">
                      Questions about casino bonuses or wagering requirements
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#8B5CF6] mt-2 flex-shrink-0"></div>
                    <p className="text-[#C7D2FE] leading-relaxed">
                      Concerns about a casino's legitimacy or licensing
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#8B5CF6] mt-2 flex-shrink-0"></div>
                    <p className="text-[#C7D2FE] leading-relaxed">
                      Suggestions for casinos we should review
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#8B5CF6] mt-2 flex-shrink-0"></div>
                    <p className="text-[#C7D2FE] leading-relaxed">
                      Partnership or advertising inquiries
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#8B5CF6] mt-2 flex-shrink-0"></div>
                    <p className="text-[#C7D2FE] leading-relaxed">
                      Feedback on our website or recommendations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#020617] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12">
              <div className="border-l border-[#8B5CF6] pl-8 mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#FFFFFF] leading-none">
                  About Us FAQ
                </h2>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <div className="space-y-6">
                <div className="bg-[#1E1B4B] p-6 border-l border-[#8B5CF6]">
                  <div className="flex items-start space-x-4">
                    <HelpCircle className="h-6 w-6 text-[#8B5CF6] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-[#FFFFFF] mb-2">
                        How do you make money?
                      </h3>
                      <p className="text-[#C7D2FE] leading-relaxed">
                        We earn commission when players sign up to casinos through our links. This doesn't cost you anything extra, and it allows us to keep the site free while maintaining our independence.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1E1B4B] p-6 border-l border-[#8B5CF6]">
                  <div className="flex items-start space-x-4">
                    <HelpCircle className="h-6 w-6 text-[#8B5CF6] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-[#FFFFFF] mb-2">
                        How do you choose casinos?
                      </h3>
                      <p className="text-[#C7D2FE] leading-relaxed">
                        We evaluate casinos based on licensing, game selection, bonus terms, payment methods, customer support, and player feedback. Only casinos that meet our strict criteria are featured.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1E1B4B] p-6 border-l border-[#8B5CF6]">
                  <div className="flex items-start space-x-4">
                    <HelpCircle className="h-6 w-6 text-[#8B5CF6] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-[#FFFFFF] mb-2">
                        Are your reviews biased?
                      </h3>
                      <p className="text-[#C7D2FE] leading-relaxed">
                        While we do earn affiliate commissions, our reviews remain honest and unbiased. We prioritize player safety and satisfaction above all else, and we'll never recommend a casino we wouldn't use ourselves.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <div className="space-y-6">
                <div className="bg-[#1E1B4B] p-6 border-l border-[#8B5CF6]">
                  <div className="flex items-start space-x-4">
                    <HelpCircle className="h-6 w-6 text-[#8B5CF6] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-[#FFFFFF] mb-2">
                        How often do you update offers?
                      </h3>
                      <p className="text-[#C7D2FE] leading-relaxed">
                        We update our offers daily to ensure you always have access to the latest bonuses and promotions. Our team constantly monitors casino sites for new deals.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1E1B4B] p-6 border-l border-[#8B5CF6]">
                  <div className="flex items-start space-x-4">
                    <HelpCircle className="h-6 w-6 text-[#8B5CF6] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-[#FFFFFF] mb-2">
                        Can you help with casino disputes?
                      </h3>
                      <p className="text-[#C7D2FE] leading-relaxed">
                        While we can't directly intervene in disputes, we can provide guidance on how to escalate issues properly. Contact us and we'll do our best to help.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1E1B4B] p-6 border-l border-[#8B5CF6]">
                  <div className="flex items-start space-x-4">
                    <HelpCircle className="h-6 w-6 text-[#8B5CF6] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-[#FFFFFF] mb-2">
                        Do you have a newsletter?
                      </h3>
                      <p className="text-[#C7D2FE] leading-relaxed">
                        Yes! Email us at info@okwinsuk.com to subscribe. We send weekly updates with the best new bonuses and exclusive offers available only to our subscribers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
