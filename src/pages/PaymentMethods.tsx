import { CreditCard, Building, Smartphone, HelpCircle, CheckCircle, Clock, DollarSign } from 'lucide-react';

const PaymentMethods = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#14532D] via-[#166534] to-[#14532D]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#22C55E] via-[#4ADE80] to-[#BBF7D0] bg-clip-text text-transparent">
            Casino Payment Methods
          </h1>
          <p className="text-2xl text-[#DCFCE7] max-w-3xl mx-auto">
            Safe, secure, and convenient ways to fund your casino account
          </p>
        </div>
      </section>

      {/* Bank Transfer Section */}
      <section id="bank-transfer" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#166534]/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block p-4 bg-gradient-to-r from-[#22C55E] to-[#4ADE80] rounded-full">
                <Building className="text-[#14532D]" size={48} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#22C55E] to-[#4ADE80] bg-clip-text text-transparent">
                Bank Transfers
              </h2>
              <p className="text-xl text-[#DCFCE7] leading-relaxed">
                Traditional and reliable method for moving funds between your bank account and casino. Perfect for larger transactions with maximum security.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#22C55E] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-[#F0FDF4] font-bold">High Security</h3>
                    <p className="text-[#DCFCE7]">Bank-level encryption and verification</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#22C55E] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-[#F0FDF4] font-bold">No Transaction Limits</h3>
                    <p className="text-[#DCFCE7]">Ideal for high rollers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-[#4ADE80] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-[#F0FDF4] font-bold">Processing Time</h3>
                    <p className="text-[#DCFCE7]">1-5 business days for withdrawals</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-[3rem] p-8 border-2 border-[#22C55E]/30">
              <h3 className="text-2xl font-bold text-[#F0FDF4] mb-6">Popular UK Banks</h3>
              <div className="space-y-4">
                {['Barclays', 'HSBC', 'Lloyds Bank', 'NatWest', 'Santander', 'Halifax'].map((bank) => (
                  <div key={bank} className="bg-white/10 rounded-full px-6 py-3 text-[#DCFCE7]">
                    {bank}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8 bg-gradient-to-br from-[#22C55E]/20 to-[#4ADE80]/20 backdrop-blur-sm rounded-[3rem] p-12 border-2 border-[#22C55E]/40">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#22C55E] to-[#4ADE80] bg-clip-text text-transparent">
            Ready to Start Playing?
          </h2>
          <p className="text-xl text-[#DCFCE7]">
            Choose from our top-rated casinos and start enjoying secure, fast payments
          </p>
          <a
            href="/"
            className="inline-block bg-gradient-to-r from-[#22C55E] to-[#4ADE80] text-[#14532D] px-12 py-5 rounded-full font-bold text-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          >
            Browse Top Casinos
          </a>
        </div>
      </section>

      {/* Deposits Section */}
      <section id="deposits" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#166534]/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-gradient-to-r from-[#22C55E] to-[#4ADE80] rounded-full mb-6">
              <CreditCard className="text-[#14532D]" size={48} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#22C55E] to-[#4ADE80] bg-clip-text text-transparent mb-4">
              Popular Deposit Methods
            </h2>
            <p className="text-xl text-[#DCFCE7]">
              Fast and secure ways to add funds to your casino account
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Debit Cards', speed: 'Instant', icon: CreditCard },
              { name: 'E-Wallets', speed: 'Instant', icon: Smartphone },
              { name: 'Bank Transfer', speed: '1-3 Days', icon: Building },
              { name: 'Prepaid Cards', speed: 'Instant', icon: CreditCard },
            ].map((method) => (
              <div
                key={method.name}
                className="bg-white/10 backdrop-blur-sm rounded-[2rem] p-6 text-center space-y-4 transition-all duration-700 hover:scale-105 border-2 border-[#22C55E]/30"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-[#22C55E] to-[#4ADE80] rounded-full flex items-center justify-center">
                  <method.icon className="text-[#14532D]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#F0FDF4]">{method.name}</h3>
                <p className="text-[#DCFCE7]">Processing: {method.speed}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { title: 'Visa & Mastercard', desc: 'Accepted at all UK online casinos' },
              { title: 'PayPal', desc: 'Instant deposits and withdrawals' },
              { title: 'Skrill & Neteller', desc: 'Popular e-wallet options' },
              { title: 'Paysafecard', desc: 'Prepaid voucher system' },
              { title: 'Apple Pay', desc: 'Mobile payment convenience' },
              { title: 'Google Pay', desc: 'Fast mobile transactions' },
            ].map((option) => (
              <div
                key={option.title}
                className="bg-white/10 backdrop-blur-sm rounded-[2rem] p-6 transition-all duration-500 hover:bg-white/20"
              >
                <h3 className="text-lg font-bold text-[#F0FDF4] mb-2">{option.title}</h3>
                <p className="text-[#DCFCE7] text-sm">{option.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-gradient-to-r from-[#22C55E] to-[#4ADE80] rounded-full mb-6">
              <HelpCircle className="text-[#14532D]" size={48} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#22C55E] to-[#4ADE80] bg-clip-text text-transparent mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'How long do deposits take?',
                a: 'Most deposit methods are instant, including debit cards and e-wallets. Bank transfers may take 1-3 business days.'
              },
              {
                q: 'How long do withdrawals take?',
                a: 'E-wallets are typically processed within 24 hours. Debit cards take 3-5 days, and bank transfers can take 3-7 business days.'
              },
              {
                q: 'Are there any fees?',
                a: 'Most UK casinos don\'t charge deposit or withdrawal fees. However, your payment provider may apply their own charges.'
              },
              {
                q: 'What\'s the minimum deposit?',
                a: 'Most casinos have a minimum deposit of £10, though some may allow lower amounts depending on the payment method.'
              },
              {
                q: 'Is my payment information secure?',
                a: 'Yes. All UKGC-licensed casinos use 128-bit SSL encryption to protect your financial data.'
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-[2rem] p-8 transition-all duration-500 hover:bg-white/20 border-2 border-[#22C55E]/30"
              >
                <h3 className="text-xl font-bold text-[#F0FDF4] mb-3">{faq.q}</h3>
                <p className="text-[#DCFCE7] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Section */}
      <section id="verification" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#166534]/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <div className="inline-block p-4 bg-gradient-to-r from-[#22C55E] to-[#4ADE80] rounded-full">
                <CheckCircle className="text-[#14532D]" size={48} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#22C55E] to-[#4ADE80] bg-clip-text text-transparent">
                Account Verification
              </h2>
              <p className="text-xl text-[#DCFCE7] leading-relaxed">
                Before making your first withdrawal, you'll need to verify your identity. This is a legal requirement for all UK casinos to prevent fraud and money laundering.
              </p>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#F0FDF4]">Required Documents:</h3>
                <ul className="space-y-3">
                  {[
                    'Photo ID (Passport or Driving License)',
                    'Proof of Address (Utility Bill or Bank Statement)',
                    'Payment Method Verification (Card photo or e-wallet screenshot)'
                  ].map((doc) => (
                    <li key={doc} className="flex items-start gap-3">
                      <CheckCircle className="text-[#22C55E] flex-shrink-0 mt-1" size={20} />
                      <span className="text-[#DCFCE7]">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="order-1 md:order-2 bg-white/10 backdrop-blur-sm rounded-[3rem] p-8 border-2 border-[#22C55E]/30">
              <h3 className="text-2xl font-bold text-[#F0FDF4] mb-6">Verification Timeline</h3>
              <div className="space-y-6">
                {[
                  { step: 1, title: 'Submit Documents', time: '5 minutes' },
                  { step: 2, title: 'Casino Review', time: '24-48 hours' },
                  { step: 3, title: 'Approval', time: 'Instant' },
                  { step: 4, title: 'Withdraw', time: 'Same day' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#22C55E] to-[#4ADE80] rounded-full flex items-center justify-center text-[#14532D] font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-[#F0FDF4] font-bold">{item.title}</h4>
                      <p className="text-[#DCFCE7] text-sm">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Overview Section */}
      <section id="payment-overview" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-gradient-to-r from-[#22C55E] to-[#4ADE80] rounded-full mb-6">
              <DollarSign className="text-[#14532D]" size={48} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#22C55E] to-[#4ADE80] bg-clip-text text-transparent mb-4">
              Payment Method Comparison
            </h2>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-[3rem] overflow-hidden border-2 border-[#22C55E]/30">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#166534]">
                  <tr>
                    <th className="px-6 py-4 text-left text-[#F0FDF4] font-bold">Method</th>
                    <th className="px-6 py-4 text-left text-[#F0FDF4] font-bold">Deposit Time</th>
                    <th className="px-6 py-4 text-left text-[#F0FDF4] font-bold">Withdrawal Time</th>
                    <th className="px-6 py-4 text-left text-[#F0FDF4] font-bold">Fees</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { method: 'Debit Card', deposit: 'Instant', withdrawal: '3-5 days', fees: 'Free' },
                    { method: 'PayPal', deposit: 'Instant', withdrawal: '24 hours', fees: 'Free' },
                    { method: 'Bank Transfer', deposit: '1-3 days', withdrawal: '3-7 days', fees: 'Free' },
                    { method: 'Skrill/Neteller', deposit: 'Instant', withdrawal: '24 hours', fees: 'Free' },
                    { method: 'Paysafecard', deposit: 'Instant', withdrawal: 'N/A', fees: 'Free' },
                  ].map((row, index) => (
                    <tr key={index} className="border-t border-[#22C55E]/30">
                      <td className="px-6 py-4 text-[#F0FDF4] font-medium">{row.method}</td>
                      <td className="px-6 py-4 text-[#DCFCE7]">{row.deposit}</td>
                      <td className="px-6 py-4 text-[#DCFCE7]">{row.withdrawal}</td>
                      <td className="px-6 py-4 text-[#22C55E] font-bold">{row.fees}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentMethods;
