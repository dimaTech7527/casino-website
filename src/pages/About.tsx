import { Shield, Users, FileText, Award, TrendingUp, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#14532D] via-[#166534] to-[#14532D]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#22C55E] via-[#4ADE80] to-[#BBF7D0] bg-clip-text text-transparent">
            About Unreal Cheat Casino
          </h1>
          <p className="text-2xl text-[#DCFCE7] max-w-3xl mx-auto">
            Your trusted partner in finding the best UK online casinos since 2020
          </p>
        </div>
      </section>

      {/* Compliance Section */}
      <section id="compliance" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#166534]/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="images/design/jonathan-petersson-gQhWMkYh3Yc-unsplash.jpg"
                alt="Compliance and Regulation"
                className="rounded-[3rem] shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-block p-4 bg-gradient-to-r from-[#22C55E] to-[#4ADE80] rounded-full">
                <Shield className="text-[#14532D]" size={48} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#22C55E] to-[#4ADE80] bg-clip-text text-transparent">
                Regulatory Compliance
              </h2>
              <p className="text-xl text-[#DCFCE7] leading-relaxed">
                We strictly adhere to UK gambling laws and only recommend casinos licensed by the UK Gambling Commission. Our commitment to compliance ensures you're playing at safe and regulated sites.
              </p>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-[2rem] p-6">
                  <h3 className="text-xl font-bold text-[#F0FDF4] mb-2">UKGC Licensed Only</h3>
                  <p className="text-[#DCFCE7]">Every casino must hold a valid UK Gambling Commission license</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-[2rem] p-6">
                  <h3 className="text-xl font-bold text-[#F0FDF4] mb-2">Age Verification</h3>
                  <p className="text-[#DCFCE7]">Strict 18+ enforcement and identity verification processes</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-[2rem] p-6">
                  <h3 className="text-xl font-bold text-[#F0FDF4] mb-2">Responsible Gaming</h3>
                  <p className="text-[#DCFCE7]">Promoting safe gambling with deposit limits and self-exclusion tools</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Section */}
      <section id="press" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-gradient-to-r from-[#22C55E] to-[#4ADE80] rounded-full mb-6">
              <Users className="text-[#14532D]" size={48} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#22C55E] to-[#4ADE80] bg-clip-text text-transparent mb-4">
              Press & Recognition
            </h2>
            <p className="text-xl text-[#DCFCE7] max-w-2xl mx-auto">
              Trusted by thousands of players and recognized by industry experts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: '50,000+', label: 'Monthly Visitors' },
              { stat: '500+', label: 'Casino Reviews' },
              { stat: '5 Years', label: 'Industry Experience' },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/10 backdrop-blur-sm rounded-[3rem] p-8 text-center space-y-4 transition-all duration-700 hover:scale-105 border-2 border-[#22C55E]/30"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-[#22C55E] to-[#4ADE80] bg-clip-text text-transparent">
                  {item.stat}
                </div>
                <div className="text-xl text-[#DCFCE7]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Policy Section */}
      <section id="editorial-policy" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#166534]/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <div className="inline-block p-4 bg-gradient-to-r from-[#22C55E] to-[#4ADE80] rounded-full">
                <FileText className="text-[#14532D]" size={48} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#22C55E] to-[#4ADE80] bg-clip-text text-transparent">
                Editorial Policy
              </h2>
              <p className="text-xl text-[#DCFCE7] leading-relaxed">
                Our editorial team maintains strict independence. Reviews are based on thorough testing, player feedback, and objective criteria. We never compromise our standards for commercial relationships.
              </p>
              <ul className="space-y-4">
                {[
                  'Independent, unbiased reviews',
                  'Transparent affiliate relationships',
                  'Regular content updates',
                  'Fact-checked information',
                  'Player-first approach'
                ].map((policy) => (
                  <li key={policy} className="flex items-center gap-3 text-[#DCFCE7]">
                    <div className="w-2 h-2 bg-[#22C55E] rounded-full"></div>
                    <span>{policy}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative order-1 md:order-2">
              <img
                src="images/design/marin-tulard-9sbO_vzyG40-unsplash.jpg"
                alt="Editorial Standards"
                className="rounded-[3rem] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Review Process Section */}
      <section id="review-process" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-gradient-to-r from-[#22C55E] to-[#4ADE80] rounded-full mb-6">
              <Award className="text-[#14532D]" size={48} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#22C55E] to-[#4ADE80] bg-clip-text text-transparent mb-4">
              Our Review Process
            </h2>
            <p className="text-xl text-[#DCFCE7] max-w-2xl mx-auto">
              A comprehensive 7-step evaluation ensuring only the best casinos make our list
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Licensing Check', desc: 'Verify UKGC license validity' },
              { step: 2, title: 'Security Audit', desc: 'Test SSL encryption and data protection' },
              { step: 3, title: 'Game Testing', desc: 'Evaluate game selection and quality' },
              { step: 4, title: 'Payment Review', desc: 'Test deposit and withdrawal processes' },
              { step: 5, title: 'Support Test', desc: 'Assess customer service quality' },
              { step: 6, title: 'Mobile Check', desc: 'Verify mobile compatibility' },
              { step: 7, title: 'Bonus Analysis', desc: 'Review terms and conditions' },
              { step: 8, title: 'Final Rating', desc: 'Compile comprehensive score' },
            ].map((step) => (
              <div
                key={step.step}
                className="bg-white/10 backdrop-blur-sm rounded-[2rem] p-6 space-y-3 transition-all duration-700 hover:scale-105 border-2 border-[#22C55E]/30"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#22C55E] to-[#4ADE80] rounded-full flex items-center justify-center text-[#14532D] text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-[#F0FDF4]">{step.title}</h3>
                <p className="text-[#DCFCE7] text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#166534]/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="images/design/md_gg8gt3_2bab66532a6997df97d2cf5ef4bb79fa14ae7bec.jpg"
                alt="Join Our Team"
                className="rounded-[3rem] shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-block p-4 bg-gradient-to-r from-[#22C55E] to-[#4ADE80] rounded-full">
                <Briefcase className="text-[#14532D]" size={48} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#22C55E] to-[#4ADE80] bg-clip-text text-transparent">
                Join Our Team
              </h2>
              <p className="text-xl text-[#DCFCE7] leading-relaxed">
                We're always looking for passionate individuals who share our commitment to excellence in online casino reviews. Join a dynamic team dedicated to helping players find the best gaming experiences.
              </p>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#F0FDF4]">Open Positions:</h3>
                <ul className="space-y-3">
                  {[
                    'Casino Review Specialist',
                    'Content Writer',
                    'SEO Manager',
                    'Customer Support Representative'
                  ].map((position) => (
                    <li key={position} className="flex items-center gap-3">
                      <TrendingUp className="text-[#22C55E]" size={20} />
                      <span className="text-[#DCFCE7]">{position}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="mailto:info@unrealcheatcasino.com"
                className="inline-block bg-gradient-to-r from-[#22C55E] to-[#4ADE80] text-[#14532D] px-8 py-4 rounded-full font-bold transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
