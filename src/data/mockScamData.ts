export interface ScamMessage {
  id: string;
  sender: string;
  phoneNumber: string;
  timestamp: Date;
  preview: string;
  fullMessage: string;
  scamType: 'payment' | 'kyc' | 'upi' | 'phishing' | 'lottery' | 'job';
  confidence: number;
  status: 'safe' | 'suspicious' | 'scam';
  isRead: boolean;
}

export interface ChatMessage {
  id: string;
  sender: 'scammer' | 'ai';
  message: string;
  timestamp: Date;
  extractedIntel?: ExtractedIntelligence[];
}

export interface ExtractedIntelligence {
  id: string;
  type: 'bank_account' | 'upi_id' | 'phishing_link';
  value: string;
  maskedValue: string;
  confidence: number;
  sourceMessageId: string;
  timestamp: Date;
}

export interface AIPersona {
  name: string;
  avatar: string;
  description: string;
}

export const aiPersonas: AIPersona[] = [
  { name: 'Anita', avatar: '👩', description: 'Friendly homemaker, curious about opportunities' },
  { name: 'Arjun', avatar: '👨', description: 'Retired banker, cautiously interested' },
];

export const mockScamMessages: ScamMessage[] = [
  {
    id: '1',
    sender: 'Unknown',
    phoneNumber: '+91 98XXX XXXXX',
    timestamp: new Date(Date.now() - 1000 * 60 * 2),
    preview: 'Congratulations! You have won ₹50,00,000 in our lucky draw...',
    fullMessage: 'Congratulations! You have won ₹50,00,000 in our lucky draw. To claim your prize, please share your bank details and pay processing fee of ₹5,000.',
    scamType: 'lottery',
    confidence: 94,
    status: 'scam',
    isRead: false,
  },
  {
    id: '2',
    sender: 'SBI Bank',
    phoneNumber: '+91 70XXX XXXXX',
    timestamp: new Date(Date.now() - 1000 * 60 * 15),
    preview: 'Dear Customer, Your KYC is expiring. Update now to avoid...',
    fullMessage: 'Dear Customer, Your KYC is expiring today. Update your KYC immediately by clicking this link or your account will be blocked: bit.ly/sbi-kyc-update',
    scamType: 'kyc',
    confidence: 89,
    status: 'scam',
    isRead: false,
  },
  {
    id: '3',
    sender: 'Tax Refund',
    phoneNumber: '+91 85XXX XXXXX',
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    preview: 'Income Tax Refund of ₹15,340 is pending. Verify UPI...',
    fullMessage: 'Income Tax Refund of ₹15,340 is pending in your name. Verify your UPI ID to receive instant transfer. Send ₹10 to verify: fraudster@upi',
    scamType: 'upi',
    confidence: 92,
    status: 'scam',
    isRead: true,
  },
  {
    id: '4',
    sender: 'Job Alert',
    phoneNumber: '+91 99XXX XXXXX',
    timestamp: new Date(Date.now() - 1000 * 60 * 45),
    preview: 'Earn ₹50,000/month from home! Part-time data entry job...',
    fullMessage: 'Earn ₹50,000/month from home! Part-time data entry job available. Registration fee only ₹2,000. Contact now on WhatsApp for interview.',
    scamType: 'job',
    confidence: 87,
    status: 'scam',
    isRead: false,
  },
  {
    id: '5',
    sender: 'HDFC Credit',
    phoneNumber: '+91 78XXX XXXXX',
    timestamp: new Date(Date.now() - 1000 * 60 * 60),
    preview: 'Pre-approved loan of ₹5,00,000 at 0% interest! Limited...',
    fullMessage: 'Pre-approved loan of ₹5,00,000 at 0% interest! Limited time offer. Pay processing fee to avail. Account: 4532XXXXXXXX67, IFSC: FAKE0001234',
    scamType: 'payment',
    confidence: 91,
    status: 'scam',
    isRead: false,
  },
  {
    id: '6',
    sender: 'Mom',
    phoneNumber: '+91 98XXX XXXXX',
    timestamp: new Date(Date.now() - 1000 * 60 * 90),
    preview: 'Did you eat lunch? Call me when free...',
    fullMessage: 'Did you eat lunch? Call me when free. Papa is asking about your train tickets for next week.',
    scamType: 'payment',
    confidence: 5,
    status: 'safe',
    isRead: true,
  },
  {
    id: '7',
    sender: 'Amazon Delivery',
    phoneNumber: '+91 63XXX XXXXX',
    timestamp: new Date(Date.now() - 1000 * 60 * 120),
    preview: 'Your Amazon order is on hold. Pay customs duty of ₹999...',
    fullMessage: 'Your Amazon order #AZ4532 is on hold. Pay customs duty of ₹999 to release package. Pay here: amaz0n-customs.fake.com/pay',
    scamType: 'phishing',
    confidence: 96,
    status: 'scam',
    isRead: false,
  },
  {
    id: '8',
    sender: 'Electricity Board',
    phoneNumber: '+91 82XXX XXXXX',
    timestamp: new Date(Date.now() - 1000 * 60 * 180),
    preview: 'Your electricity connection will be disconnected TODAY...',
    fullMessage: 'Your electricity connection will be disconnected TODAY due to pending bill ₹3,245. Pay immediately via UPI: electricity.scam@paytm to avoid disconnection.',
    scamType: 'upi',
    confidence: 88,
    status: 'scam',
    isRead: false,
  },
  {
    id: '9',
    sender: 'Flipkart',
    phoneNumber: '+91 FLIPKART',
    timestamp: new Date(Date.now() - 1000 * 60 * 200),
    preview: 'Your order has been shipped! Track here...',
    fullMessage: 'Your order #FK78234 has been shipped! Track here: flipkart.com/track/FK78234. Delivery expected by tomorrow.',
    scamType: 'payment',
    confidence: 12,
    status: 'safe',
    isRead: true,
  },
  {
    id: '10',
    sender: 'Crypto Investor',
    phoneNumber: '+91 95XXX XXXXX',
    timestamp: new Date(Date.now() - 1000 * 60 * 240),
    preview: 'Double your Bitcoin in 24 hours! Guaranteed 200% returns...',
    fullMessage: 'Double your Bitcoin in 24 hours! Guaranteed 200% returns. Send 0.1 BTC to our wallet and receive 0.2 BTC back. Wallet: bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
    scamType: 'payment',
    confidence: 98,
    status: 'scam',
    isRead: false,
  },
];

export const mockConversation: ChatMessage[] = [
  {
    id: 'c1',
    sender: 'scammer',
    message: 'Congratulations! You have won ₹50,00,000 in our lucky draw. To claim your prize, please share your bank details.',
    timestamp: new Date(Date.now() - 1000 * 60 * 10),
  },
  {
    id: 'c2',
    sender: 'ai',
    message: 'Oh my goodness! ₹50 lakhs? This is unbelievable! I never win anything! How did I get selected?',
    timestamp: new Date(Date.now() - 1000 * 60 * 9),
  },
  {
    id: 'c3',
    sender: 'scammer',
    message: 'Your mobile number was randomly selected from our database. You just need to pay ₹5,000 processing fee to claim.',
    timestamp: new Date(Date.now() - 1000 * 60 * 8),
  },
  {
    id: 'c4',
    sender: 'ai',
    message: 'Only ₹5,000 for ₹50 lakhs? That sounds reasonable! Where should I send the money? Should I do bank transfer or UPI?',
    timestamp: new Date(Date.now() - 1000 * 60 * 7),
  },
  {
    id: 'c5',
    sender: 'scammer',
    message: 'Please send to this UPI ID: luckydraw.winner@paytm or transfer to Account: 45321098XXXX67, IFSC: SCAM0001234, Name: Lucky Draw Pvt Ltd',
    timestamp: new Date(Date.now() - 1000 * 60 * 6),
    extractedIntel: [
      {
        id: 'i1',
        type: 'upi_id',
        value: 'luckydraw.winner@paytm',
        maskedValue: 'luck****@paytm',
        confidence: 95,
        sourceMessageId: 'c5',
        timestamp: new Date(Date.now() - 1000 * 60 * 6),
      },
      {
        id: 'i2',
        type: 'bank_account',
        value: '45321098XXXX67',
        maskedValue: '●●●●●●●●●●●●67',
        confidence: 92,
        sourceMessageId: 'c5',
        timestamp: new Date(Date.now() - 1000 * 60 * 6),
      },
    ],
  },
  {
    id: 'c6',
    sender: 'ai',
    message: 'Thank you! I\'m noting this down. The bank name is SCAM Bank right? Just want to make sure I enter correctly. Do you also have a website where I can verify?',
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
  },
  {
    id: 'c7',
    sender: 'scammer',
    message: 'Yes, you can check our official website at www.luckyprizedraw.fake.com/verify. Please hurry, offer expires in 1 hour!',
    timestamp: new Date(Date.now() - 1000 * 60 * 4),
    extractedIntel: [
      {
        id: 'i3',
        type: 'phishing_link',
        value: 'www.luckyprizedraw.fake.com/verify',
        maskedValue: 'luckyprizedraw.fake.com',
        confidence: 98,
        sourceMessageId: 'c7',
        timestamp: new Date(Date.now() - 1000 * 60 * 4),
      },
    ],
  },
  {
    id: 'c8',
    sender: 'ai',
    message: 'I\'m opening the website now. It looks very professional! Can I also pay through credit card? What\'s your company address?',
    timestamp: new Date(Date.now() - 1000 * 60 * 3),
  },
];

export const mockExtractedIntelligence: ExtractedIntelligence[] = [
  {
    id: 'i1',
    type: 'upi_id',
    value: 'luckydraw.winner@paytm',
    maskedValue: 'luck****@paytm',
    confidence: 95,
    sourceMessageId: 'c5',
    timestamp: new Date(Date.now() - 1000 * 60 * 6),
  },
  {
    id: 'i2',
    type: 'bank_account',
    value: '45321098XXXX67',
    maskedValue: '●●●●●●●●●●●●67',
    confidence: 92,
    sourceMessageId: 'c5',
    timestamp: new Date(Date.now() - 1000 * 60 * 6),
  },
  {
    id: 'i3',
    type: 'phishing_link',
    value: 'www.luckyprizedraw.fake.com/verify',
    maskedValue: 'luckyprizedraw.fake.com',
    confidence: 98,
    sourceMessageId: 'c7',
    timestamp: new Date(Date.now() - 1000 * 60 * 4),
  },
];
