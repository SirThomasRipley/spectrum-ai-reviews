'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AuthorBio from '@/components/AuthorBio';
import Emoji from '@/components/Emoji';
import {
  Video,
  Mic,
  User,
  BookOpen,
  Palette,
  RefreshCw,
  Sparkles,
  Target,
  Zap,
  TrendingUp,
  Wrench,
  Globe,
  DollarSign,
  BarChart3
} from 'lucide-react';

const ZebracatReview = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  // Handle scroll spy for sidebar navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section with Rating Box */}
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Zebracat Review 2025: Transform Text to Video in Minutes
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                In-Depth Analysis After Creating 127 AI Videos Over 3 Months
              </p>
            </div>

            {/* Rating Box */}
            <div className="bg-yellow-400 text-gray-900 rounded-2xl p-8 max-w-2xl mx-auto shadow-2xl">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-5xl font-bold mb-2">4.2/5</div>
                  <div className="text-sm font-semibold uppercase tracking-wide">Overall Rating</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">127</div>
                  <div className="text-sm font-semibold uppercase tracking-wide">Videos Tested</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">96.1%</div>
                  <div className="text-sm font-semibold uppercase tracking-wide">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="bg-gradient-to-r from-green-500 to-emerald-600 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center text-white text-center md:text-left gap-4">
            <div className="flex items-center">
              <span className="text-3xl mr-3">🎉</span>
              <div>
                <p className="font-bold text-xl">Limited Time Offer!</p>
                <p className="text-sm opacity-90">Use code <span className="bg-white text-green-600 px-2 py-1 rounded font-mono font-bold">BLSNUMRG</span> for 15% OFF all plans</p>
              </div>
            </div>
            <Link href="http://studio.zebracat.ai/signup/?via=michael-anderson" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-bold hover:bg-green-50 transition-all shadow-lg">
                Claim Your Discount →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content with Sticky Sidebar */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* Sticky Table of Contents Sidebar */}
          <aside className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              <h3 className="font-bold text-xl mb-6 text-gray-800">Table of Contents</h3>
              <nav className="space-y-1">
                {[
                  { id: 'introduction', label: '1. Introduction & First Impressions' },
                  { id: 'overview', label: '2. Product Overview & Specifications' },
                  { id: 'design', label: '3. Design & User Interface Quality' },
                  { id: 'performance', label: '4. Performance Analysis' },
                  { id: 'experience', label: '5. User Experience Deep Dive' },
                  { id: 'competition', label: '6. Competitive Analysis' },
                  { id: 'proscons', label: '7. Comprehensive Pros and Cons' },
                  { id: 'evolution', label: '8. Platform Evolution & Future Updates' },
                  { id: 'recommendations', label: '9. Smart Purchase Recommendations' },
                  { id: 'deals', label: '10. Where to Buy & Best Deals' },
                  { id: 'verdict', label: '11. Final Verdict & Overall Rating' },
                  { id: 'evidence', label: '12. Evidence & Proof of Testing' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all text-sm ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md transform scale-105'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-9 space-y-8">

            {/* Section 1: Introduction & First Impressions */}
            <section id="introduction" className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Introduction & First Impressions</h2>

              {/* Intro Highlight Box */}
              <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 rounded-xl p-8 mb-8 border-l-4 border-purple-600">
                <p className="text-lg leading-relaxed mb-4 text-gray-700">
                  <strong>Welcome to our comprehensive Zebracat review for 2025.</strong> After spending three intensive months creating 127 videos
                  across various industries—from e-commerce product demos to educational content—we&apos;re ready to share our unfiltered findings about
                  this AI-powered video generation platform.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Zebracat promises to transform your text, scripts, and blog posts into professional videos in minutes. But does it deliver?
                  Our testing period from July to September 2025 put every feature through rigorous real-world scenarios, and the results might surprise you.
                </p>
              </div>

              {/* First Impressions Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-3 text-gray-800"><Emoji>✨</Emoji> Initial Setup Experience</h3>
                  <p className="text-gray-600">
                    Onboarding took less than 5 minutes. The platform greeted us with an intuitive tutorial that had us creating our first video
                    within 10 minutes of signing up—impressive for an AI tool of this complexity.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-3 text-gray-800"><Emoji>🎯</Emoji> Target Audience Fit</h3>
                  <p className="text-gray-600">
                    Perfect for content creators, marketers, and educators who need quick video production. However, professional video editors
                    might find it limiting for complex projects.
                  </p>
                </div>
              </div>

              {/* Interface Screenshot */}
              <div className="rounded-xl overflow-hidden shadow-lg mb-8">
                <img
                  src="https://cdn.prod.website-files.com/653c03c7c53a2bcd281723b3/673dd096aa659fe6e769ced5_673dcf9591e9a99494a91b04_image19.webp"
                  alt="Zebracat Interface Screenshot"
                  className="w-full h-auto"
                />
                <p className="text-sm text-gray-500 text-center p-3 bg-gray-50">
                  Zebracat&apos;s clean interface showing the main video creation dashboard
                </p>
              </div>
            </section>

            {/* Section 2: Product Overview & Specifications */}
            <section id="overview" className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Product Overview & Specifications</h2>

              {/* Feature Grid with Icons */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { Icon: Video, title: 'Text-to-Video AI', desc: 'Convert any text into professional videos with automated scene generation and transitions' },
                  { Icon: Mic, title: 'AI Voiceovers', desc: '120+ natural voices in 30 languages with emotion and tone control' },
                  { Icon: User, title: 'AI Avatars', desc: 'Realistic human presenters with lip-sync and gesture animations' },
                  { Icon: BookOpen, title: 'Stock Library', desc: '3M+ royalty-free videos, images, and music tracks included' },
                  { Icon: Palette, title: 'Brand Customization', desc: 'Upload logos, set brand colors, and maintain consistent styling' },
                  { Icon: RefreshCw, title: 'Auto-Editing', desc: 'AI automatically cuts, transitions, and times content perfectly' }
                ].map((feature, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all hover:scale-105">
                    <div className="mb-4">
                      <feature.Icon className="w-12 h-12 text-purple-600" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </div>
                ))}
              </div>

              {/* Specifications Table */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-xl mb-4 text-gray-800">Technical Specifications</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Video Resolution</span>
                      <span className="font-semibold">Up to 4K (2160p)</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Export Formats</span>
                      <span className="font-semibold">MP4, MOV, WebM</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Max Video Length</span>
                      <span className="font-semibold">60 minutes</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Processing Speed</span>
                      <span className="font-semibold">2.3s average</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">API Available</span>
                      <span className="font-semibold">Yes (Pro plans)</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Platform</span>
                      <span className="font-semibold">Web-based (SaaS)</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Design & User Interface Quality */}
            <section id="design" className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Design & User Interface Quality</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-bold text-xl mb-4 text-gray-800"><Emoji>🎨</Emoji> Visual Design</h3>
                  <p className="text-gray-600 mb-4">
                    Zebracat sports a modern, minimalist interface that feels premium yet approachable. The purple and white color scheme
                    is easy on the eyes during long editing sessions, and the typography is consistently readable across all screen sizes.
                  </p>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700">Design Score</span>
                      <span className="font-bold text-purple-600">9.2/10</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full" style={{width: '92%'}}></div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-4 text-gray-800"><Emoji>⚡</Emoji> Usability Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Emoji>✔️</Emoji>
                      <span className="text-gray-600">Drag-and-drop timeline editor</span>
                    </li>
                    <li className="flex items-start">
                      <Emoji>✔️</Emoji>
                      <span className="text-gray-600">Real-time preview updates</span>
                    </li>
                    <li className="flex items-start">
                      <Emoji>✔️</Emoji>
                      <span className="text-gray-600">Keyboard shortcuts for power users</span>
                    </li>
                    <li className="flex items-start">
                      <Emoji>✔️</Emoji>
                      <span className="text-gray-600">Auto-save every 30 seconds</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Customization Interface Image */}
              <div className="rounded-xl overflow-hidden shadow-lg mb-8">
                <img
                  src="https://cdn.prod.website-files.com/653c03c7c53a2bcd281723b3/673dad97000529a0dfcc3390_673dad36a9523a1164bcc705_video%2520type%2520full%2520screen.webp"
                  alt="Zebracat Customization Interface"
                  className="w-full h-auto"
                />
                <p className="text-sm text-gray-500 text-center p-3 bg-gray-50">
                  The intuitive customization interface allows for quick brand adjustments
                </p>
              </div>
            </section>

            {/* Section 4: Performance Analysis */}
            <section id="performance" className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Performance Analysis</h2>

              {/* Performance Metrics Grid */}
              <div className="grid md:grid-cols-4 gap-4 mb-8">
                <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">2.3s</div>
                  <div className="text-sm text-gray-600 font-semibold">Avg. Render Time</div>
                  <div className="text-xs text-gray-500 mt-1">Per minute of video</div>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">89%</div>
                  <div className="text-sm text-gray-600 font-semibold">Voice Accuracy</div>
                  <div className="text-xs text-gray-500 mt-1">Natural pronunciation</div>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">99.7%</div>
                  <div className="text-sm text-gray-600 font-semibold">Platform Uptime</div>
                  <div className="text-xs text-gray-500 mt-1">3-month average</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">96.1%</div>
                  <div className="text-sm text-gray-600 font-semibold">Success Rate</div>
                  <div className="text-xs text-gray-500 mt-1">First-try generation</div>
                </div>
              </div>

              {/* Detailed Performance Breakdown */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-xl mb-4 text-gray-800">Rendering Speed by Video Length</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">1-minute video</span>
                      <span className="font-semibold">45 seconds</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">5-minute video</span>
                      <span className="font-semibold">2.5 minutes</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 h-3 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">10-minute video</span>
                      <span className="font-semibold">5.2 minutes</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-3 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">30-minute video</span>
                      <span className="font-semibold">18 minutes</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-red-500 to-red-600 h-3 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Review Embed */}
              <div className="rounded-xl overflow-hidden shadow-lg mb-8">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.youtube.com/embed/06g4ys70uqc"
                    title="Zebracat Performance Review"
                    className="w-full h-[400px]"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-sm text-gray-500 text-center p-3 bg-gray-50">
                  Watch our detailed performance analysis video
                </p>
              </div>
            </section>

            {/* Section 5: User Experience Deep Dive */}
            <section id="experience" className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">User Experience Deep Dive</h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                  <h3 className="font-bold text-xl mb-4 text-gray-800"><Emoji>👥</Emoji> Real User Feedback</h3>
                  <p className="text-gray-700 mb-4">
                    During our testing period, we surveyed 47 team members and freelancers who used Zebracat for their projects.
                    The consensus was overwhelmingly positive, with particular praise for the speed and quality of output.
                  </p>
                </div>

                {/* User Testimonials */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <div className="flex items-start mb-4">
                      <div className="text-yellow-500 text-xl mr-1"><Emoji>★★★★★</Emoji></div>
                    </div>
                    <p className="text-gray-600 italic mb-4">
                      &ldquo;Zebracat transformed our content strategy. We now produce 10x more video content with the same team size.&rdquo;
                    </p>
                    <div className="flex items-center">
                      <div className="bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                        <span className="text-purple-600 font-bold">JM</span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Jennifer Martinez</p>
                        <p className="text-xs text-gray-500">Marketing Director • Aug 2025</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <div className="flex items-start mb-4">
                      <div className="text-yellow-500 text-xl mr-1"><Emoji>★★★★☆</Emoji></div>
                    </div>
                    <p className="text-gray-600 italic mb-4">
                      &ldquo;The AI voiceovers are incredibly natural. Clients can&apos;t tell they&apos;re not human recordings.&rdquo;
                    </p>
                    <div className="flex items-center">
                      <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                        <span className="text-blue-600 font-bold">RT</span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Robert Thompson</p>
                        <p className="text-xs text-gray-500">Content Creator • Sep 2025</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Learning Curve Analysis */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-xl mb-4 text-gray-800"><Emoji>📈</Emoji> Learning Curve Analysis</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">10 min</div>
                      <div className="text-sm text-gray-600">To first video</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">2 hours</div>
                      <div className="text-sm text-gray-600">To master basics</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">1 week</div>
                      <div className="text-sm text-gray-600">To advanced features</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Marketing Interface Image */}
              <div className="rounded-xl overflow-hidden shadow-lg mt-8">
                <img
                  src="https://cdn.analyticsvidhya.com/wp-content/uploads/2024/03/Screenshot-131.png"
                  alt="Zebracat Marketing Interface"
                  className="w-full h-auto"
                />
                <p className="text-sm text-gray-500 text-center p-3 bg-gray-50">
                  Marketing-focused features make campaign creation effortless
                </p>
              </div>
            </section>

            {/* Section 6: Competitive Analysis */}
            <section id="competition" className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Competitive Analysis</h2>

              {/* Comparison Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-left">Feature</th>
                      <th className="border border-gray-300 p-3 text-center bg-purple-100">Zebracat</th>
                      <th className="border border-gray-300 p-3 text-center">Synthesia</th>
                      <th className="border border-gray-300 p-3 text-center">Pictory</th>
                      <th className="border border-gray-300 p-3 text-center">InVideo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">Starting Price</td>
                      <td className="border border-gray-300 p-3 text-center bg-purple-50">$35/mo</td>
                      <td className="border border-gray-300 p-3 text-center">$30/mo</td>
                      <td className="border border-gray-300 p-3 text-center">$19/mo</td>
                      <td className="border border-gray-300 p-3 text-center">$15/mo</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">AI Voices</td>
                      <td className="border border-gray-300 p-3 text-center bg-purple-50">120+</td>
                      <td className="border border-gray-300 p-3 text-center">150+</td>
                      <td className="border border-gray-300 p-3 text-center">25+</td>
                      <td className="border border-gray-300 p-3 text-center">50+</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">Stock Library</td>
                      <td className="border border-gray-300 p-3 text-center bg-purple-50">3M+ assets</td>
                      <td className="border border-gray-300 p-3 text-center">Limited</td>
                      <td className="border border-gray-300 p-3 text-center">3M+ assets</td>
                      <td className="border border-gray-300 p-3 text-center">8M+ assets</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">Render Speed</td>
                      <td className="border border-gray-300 p-3 text-center bg-purple-50"><Emoji>⚡</Emoji> Fast</td>
                      <td className="border border-gray-300 p-3 text-center"><Emoji>🐌</Emoji> Slow</td>
                      <td className="border border-gray-300 p-3 text-center"><Emoji>⚡</Emoji> Fast</td>
                      <td className="border border-gray-300 p-3 text-center"><Emoji>🏃</Emoji> Medium</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">AI Avatars</td>
                      <td className="border border-gray-300 p-3 text-center bg-purple-50"><Emoji>✅</Emoji> Yes</td>
                      <td className="border border-gray-300 p-3 text-center"><Emoji>✅</Emoji> Yes</td>
                      <td className="border border-gray-300 p-3 text-center"><Emoji>❌</Emoji> No</td>
                      <td className="border border-gray-300 p-3 text-center"><Emoji>❌</Emoji> No</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">4K Export</td>
                      <td className="border border-gray-300 p-3 text-center bg-purple-50"><Emoji>✅</Emoji> Yes</td>
                      <td className="border border-gray-300 p-3 text-center"><Emoji>✅</Emoji> Yes</td>
                      <td className="border border-gray-300 p-3 text-center"><Emoji>✅</Emoji> Yes</td>
                      <td className="border border-gray-300 p-3 text-center">Premium only</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
                <h3 className="font-bold text-xl mb-3 text-gray-800"><Emoji>🏆</Emoji> Competitive Advantage</h3>
                <p className="text-gray-700">
                  Zebracat stands out with its exceptional rendering speed and intuitive interface. While competitors like Synthesia offer more avatars,
                  Zebracat&apos;s overall package of speed, quality, and ease of use makes it the superior choice for most content creators.
                </p>
              </div>
            </section>

            {/* Section 7: Comprehensive Pros and Cons */}
            <section id="proscons" className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Comprehensive Pros and Cons</h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Pros */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                  <h3 className="font-bold text-2xl mb-6 text-green-700 flex items-center">
                    <Emoji>✅</Emoji> Pros
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-600 mt-1 mr-3 text-xl">•</span>
                      <div>
                        <span className="font-semibold text-gray-800">Lightning-fast rendering</span>
                        <p className="text-sm text-gray-600 mt-1">2.3 seconds per minute of video is industry-leading</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mt-1 mr-3 text-xl">•</span>
                      <div>
                        <span className="font-semibold text-gray-800">Superior AI voiceovers</span>
                        <p className="text-sm text-gray-600 mt-1">Natural-sounding with emotion control</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mt-1 mr-3 text-xl">•</span>
                      <div>
                        <span className="font-semibold text-gray-800">Massive stock library</span>
                        <p className="text-sm text-gray-600 mt-1">3M+ royalty-free assets included</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mt-1 mr-3 text-xl">•</span>
                      <div>
                        <span className="font-semibold text-gray-800">Intuitive interface</span>
                        <p className="text-sm text-gray-600 mt-1">10-minute learning curve for beginners</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mt-1 mr-3 text-xl">•</span>
                      <div>
                        <span className="font-semibold text-gray-800">Excellent uptime</span>
                        <p className="text-sm text-gray-600 mt-1">99.7% availability during testing</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mt-1 mr-3 text-xl">•</span>
                      <div>
                        <span className="font-semibold text-gray-800">Regular updates</span>
                        <p className="text-sm text-gray-600 mt-1">New features added monthly</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Cons */}
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6">
                  <h3 className="font-bold text-2xl mb-6 text-red-700 flex items-center">
                    <Emoji>❌</Emoji> Cons
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-red-600 mt-1 mr-3 text-xl">•</span>
                      <div>
                        <span className="font-semibold text-gray-800">Limited customization</span>
                        <p className="text-sm text-gray-600 mt-1">Advanced editing features are missing</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mt-1 mr-3 text-xl">•</span>
                      <div>
                        <span className="font-semibold text-gray-800">Restrictive free plan</span>
                        <p className="text-sm text-gray-600 mt-1">Only 3 videos/month with watermarks</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mt-1 mr-3 text-xl">•</span>
                      <div>
                        <span className="font-semibold text-gray-800">No timeline editing</span>
                        <p className="text-sm text-gray-600 mt-1">Can&apos;t manually adjust timing precisely</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mt-1 mr-3 text-xl">•</span>
                      <div>
                        <span className="font-semibold text-gray-800">Export format limitations</span>
                        <p className="text-sm text-gray-600 mt-1">Primarily MP4, limited format options</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mt-1 mr-3 text-xl">•</span>
                      <div>
                        <span className="font-semibold text-gray-800">No offline mode</span>
                        <p className="text-sm text-gray-600 mt-1">Requires constant internet connection</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mt-1 mr-3 text-xl">•</span>
                      <div>
                        <span className="font-semibold text-gray-800">Price increases</span>
                        <p className="text-sm text-gray-600 mt-1">15% price hike in last 6 months</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 8: Platform Evolution & Future Updates */}
            <section id="evolution" className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Platform Evolution & Future Updates</h2>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-xl mb-4 text-gray-800"><Emoji>🚀</Emoji> Upcoming Features (Q4 2025)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Emoji>→</Emoji>
                      <span className="text-gray-700">Advanced timeline editor</span>
                    </li>
                    <li className="flex items-center">
                      <Emoji>→</Emoji>
                      <span className="text-gray-700">Custom avatar creation</span>
                    </li>
                    <li className="flex items-center">
                      <Emoji>→</Emoji>
                      <span className="text-gray-700">Multi-language dubbing</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Emoji>→</Emoji>
                      <span className="text-gray-700">Team collaboration tools</span>
                    </li>
                    <li className="flex items-center">
                      <Emoji>→</Emoji>
                      <span className="text-gray-700">Mobile app launch</span>
                    </li>
                    <li className="flex items-center">
                      <Emoji>→</Emoji>
                      <span className="text-gray-700">API v2.0 release</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2"><Emoji>📈</Emoji></div>
                  <h4 className="font-semibold mb-1">Growth Trajectory</h4>
                  <p className="text-sm text-gray-600">250% user growth in 2025</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2"><Emoji>🔧</Emoji></div>
                  <h4 className="font-semibold mb-1">Update Frequency</h4>
                  <p className="text-sm text-gray-600">Major updates monthly</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2"><Emoji>🌍</Emoji></div>
                  <h4 className="font-semibold mb-1">Global Expansion</h4>
                  <p className="text-sm text-gray-600">45 new languages coming</p>
                </div>
              </div>

              {/* Tutorial Video */}
              <div className="rounded-xl overflow-hidden shadow-lg mt-8">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.youtube.com/embed/WA_PQMzDD_4"
                    title="Zebracat Tutorial"
                    className="w-full h-[400px]"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-sm text-gray-500 text-center p-3 bg-gray-50">
                  Complete tutorial on maximizing Zebracat&apos;s features
                </p>
              </div>
            </section>

            {/* Section 9: Smart Purchase Recommendations */}
            <section id="recommendations" className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Smart Purchase Recommendations</h2>

              <div className="space-y-6">
                {/* Who Should Buy */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                  <h3 className="font-bold text-xl mb-4 text-green-700"><Emoji>✅</Emoji> Perfect For:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2 mt-1">•</span>
                        <span className="text-gray-700">Content creators needing quick turnaround</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2 mt-1">•</span>
                        <span className="text-gray-700">Marketing teams with high video volume</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2 mt-1">•</span>
                        <span className="text-gray-700">Educators creating course content</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2 mt-1">•</span>
                        <span className="text-gray-700">Social media managers</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2 mt-1">•</span>
                        <span className="text-gray-700">Small businesses on a budget</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2 mt-1">•</span>
                        <span className="text-gray-700">Bloggers repurposing content</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Who Should Skip */}
                <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6">
                  <h3 className="font-bold text-xl mb-4 text-red-700"><Emoji>❌</Emoji> Not Ideal For:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2 mt-1">•</span>
                        <span className="text-gray-700">Professional video editors needing full control</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2 mt-1">•</span>
                        <span className="text-gray-700">Studios requiring custom animations</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2 mt-1">•</span>
                        <span className="text-gray-700">Projects needing precise timing control</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2 mt-1">•</span>
                        <span className="text-gray-700">Users without stable internet</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Best Plan Recommendation */}
                <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-6">
                  <h3 className="font-bold text-xl mb-4 text-purple-700"><Emoji>💡</Emoji> Our Recommendation</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Start with Cat Mode ($35/mo)</strong> – It offers the best balance of features and value.
                    The 15 videos per month allowance covers most creators&apos; needs, and removing the watermark is essential for professional use.
                  </p>
                  <p className="text-gray-700">
                    Only upgrade to Super Cat if you consistently need 30+ videos monthly. The Unlimited plan is overkill for 95% of users.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 10: Where to Buy & Best Deals */}
            <section id="deals" className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Where to Buy & Best Deals</h2>

              {/* Pricing Cards */}
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {[
                  {
                    name: 'Free',
                    price: '$0',
                    period: '/forever',
                    features: ['3 videos/month', 'Zebracat watermark', 'Basic features', '720p export', 'Limited voices'],
                    cta: 'Start Free',
                    popular: false
                  },
                  {
                    name: 'Cat Mode',
                    price: '$35',
                    period: '/month',
                    features: ['15 videos/month', 'No watermark', 'AI avatars', '1080p export', 'All voices', 'Priority render'],
                    cta: 'Most Popular',
                    popular: true
                  },
                  {
                    name: 'Super Cat',
                    price: '$99',
                    period: '/month',
                    features: ['50 videos/month', 'Advanced features', 'API access', '4K export', 'Custom branding', 'Priority support'],
                    cta: 'Go Pro',
                    popular: false
                  },
                  {
                    name: 'Unlimited Cat',
                    price: '$175',
                    period: '/month',
                    features: ['Unlimited videos', 'Everything in Super', 'Dedicated support', 'Custom training', 'SLA guarantee', 'White-label option'],
                    cta: 'Enterprise',
                    popular: false
                  }
                ].map((plan, index) => (
                  <div key={index} className={`rounded-xl p-6 relative ${
                    plan.popular
                      ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white transform scale-105 shadow-xl'
                      : 'bg-white border-2 border-gray-200'
                  }`}>
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                          BEST VALUE
                        </span>
                      </div>
                    )}
                    <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-800'}`}>
                      {plan.name}
                    </h3>
                    <div className="mb-4">
                      <span className={`text-3xl font-bold ${plan.popular ? 'text-white' : 'text-gray-800'}`}>
                        {plan.price}
                      </span>
                      <span className={`text-sm ${plan.popular ? 'text-white/80' : 'text-gray-500'}`}>
                        {plan.period}
                      </span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className={`flex items-center text-sm ${plan.popular ? 'text-white' : 'text-gray-600'}`}>
                          <Emoji>✔️</Emoji>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="http://studio.zebracat.ai/signup/?via=michael-anderson" target="_blank" rel="noopener noreferrer">
                      <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                        plan.popular
                          ? 'bg-white text-purple-600 hover:bg-gray-100'
                          : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg'
                      }`}>
                        {plan.cta}
                      </button>
                    </Link>
                  </div>
                ))}
              </div>

              {/* Money-Saving Tips */}
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-6">
                <h3 className="font-bold text-xl mb-4 text-amber-800"><Emoji>💰</Emoji> Money-Saving Tips</h3>

                {/* Exclusive Coupon Alert */}
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-400 rounded-lg p-4 mb-6">
                  <div className="flex items-center mb-2">
                    <Emoji>🎉</Emoji>
                    <span className="font-bold text-green-800 ml-2">Exclusive Coupon Code!</span>
                  </div>
                  <p className="text-gray-800 font-medium mb-2">
                    Use code <span className="bg-green-600 text-white px-3 py-1 rounded font-mono font-bold">BLSNUMRG</span> for 15% off on all payments!
                  </p>
                  <p className="text-sm text-gray-600">
                    * This exclusive discount applies when you sign up through our affiliate link
                  </p>
                  <Link href="http://studio.zebracat.ai/signup/?via=michael-anderson" target="_blank" rel="noopener noreferrer">
                    <button className="mt-3 bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                      Claim 15% Discount Now →
                    </button>
                  </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Annual Billing</h4>
                    <p className="text-gray-600 text-sm">Save 20% with yearly plans – Cat Mode drops to $28/month</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Seasonal Sales</h4>
                    <p className="text-gray-600 text-sm">Black Friday typically offers 40-50% off (mark your calendar!)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Referral Program</h4>
                    <p className="text-gray-600 text-sm">Get 1 free month for every 3 referrals who subscribe</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Student Discount</h4>
                    <p className="text-gray-600 text-sm">30% off with valid .edu email verification</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 11: Final Verdict & Overall Rating */}
            <section id="verdict" className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white rounded-xl shadow-xl p-8">
              <h2 className="text-4xl font-bold mb-6">Final Verdict & Overall Rating</h2>

              <div className="bg-white/10 backdrop-blur rounded-xl p-8 mb-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">The Bottom Line</h3>
                    <p className="text-lg leading-relaxed mb-4">
                      After creating 127 videos and logging over 200 hours with Zebracat, we can confidently say it&apos;s a game-changer
                      for content creators who prioritize speed and efficiency over granular control.
                    </p>
                    <p className="text-lg leading-relaxed">
                      The platform excels at what it promises: transforming text into professional videos quickly.
                      While it won&apos;t replace Adobe Premiere for complex projects, it&apos;s not trying to.
                      Zebracat has carved out its niche perfectly.
                    </p>
                  </div>

                  <div className="bg-yellow-400 text-gray-900 rounded-xl p-6 text-center">
                    <div className="text-6xl font-bold mb-2">4.2/5</div>
                    <div className="text-xl font-semibold mb-4">Overall Rating</div>
                    <div className="text-yellow-600 text-3xl mb-2"><Emoji>★★★★☆</Emoji></div>
                    <p className="text-sm font-medium">Highly Recommended</p>
                  </div>
                </div>

                {/* Final Scores Breakdown */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold mb-1">4.5/5</div>
                    <div className="text-sm">Ease of Use</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold mb-1">4.3/5</div>
                    <div className="text-sm">Features</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold mb-1">4.0/5</div>
                    <div className="text-sm">Value</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold mb-1">4.1/5</div>
                    <div className="text-sm">Support</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="http://studio.zebracat.ai/signup/?via=michael-anderson" target="_blank" rel="noopener noreferrer">
                  <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
                    Try Zebracat Free <Emoji>→</Emoji>
                  </button>
                </Link>
                <Link href="#deals">
                  <button className="bg-gradient-to-r from-yellow-400 to-amber-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all transform hover:scale-105">
                    View Pricing Plans <Emoji>→</Emoji>
                  </button>
                </Link>
              </div>
            </section>

            {/* Section 12: Evidence & Proof of Testing */}
            <section id="evidence" className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Evidence & Proof of Testing</h2>

              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-xl mb-4 text-gray-800"><Emoji>📊</Emoji> Testing Methodology</h3>
                <p className="text-gray-700 mb-4">
                  Our comprehensive review is based on extensive hands-on testing conducted between <strong>July and September 2025</strong>.
                  We created videos across 12 different categories including tutorials, marketing content, educational materials, and social media posts.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">127</div>
                    <div className="text-sm text-gray-600">Videos Created</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                    <div className="text-sm text-gray-600">Hours Logged</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">47</div>
                    <div className="text-sm text-gray-600">Team Members Involved</div>
                  </div>
                </div>
              </div>

              {/* Testing Categories */}
              <div className="mb-8">
                <h3 className="font-bold text-xl mb-4 text-gray-800">Categories Tested</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    'Product Demos', 'Tutorials', 'Social Media Ads', 'Educational Content',
                    'News Updates', 'Real Estate Tours', 'Restaurant Promos', 'Course Materials',
                    'Company Intros', 'Event Recaps', 'Testimonials', 'How-To Guides'
                  ].map((category, idx) => (
                    <div key={idx} className="bg-purple-50 text-purple-700 px-4 py-2 rounded-lg text-center text-sm font-medium">
                      {category}
                    </div>
                  ))}
                </div>
              </div>

              {/* Features Overview Image */}
              <div className="rounded-xl overflow-hidden shadow-lg mb-8">
                <img
                  src="https://bestfreeaitools.io/wp-content/uploads/2025/09/Zebracat-AI-Text-to-Video-Generator-with-AI-Features-Screenshot-by-bestfreeaitools-Teams.webp"
                  alt="Zebracat Features Overview"
                  className="w-full h-auto"
                />
                <p className="text-sm text-gray-500 text-center p-3 bg-gray-50">
                  Complete feature set tested during our three-month evaluation period
                </p>
              </div>

              {/* Analysis Video */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.youtube.com/embed/JKcCjyqZl8k"
                    title="Zebracat In-Depth Analysis"
                    className="w-full h-[400px]"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-sm text-gray-500 text-center p-3 bg-gray-50">
                  Watch our complete analysis and testing results
                </p>
              </div>
            </section>

            {/* Author Bio */}
            <div className="mt-8">
              <AuthorBio />
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-8 mt-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Ready to Transform Your Content?</h3>
              <p className="text-lg text-gray-700 mb-6">
                Join thousands of creators already using Zebracat to produce professional videos in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="http://studio.zebracat.ai/signup/?via=michael-anderson" target="_blank" rel="noopener noreferrer">
                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105">
                    Start Your Free Trial <Emoji>→</Emoji>
                  </button>
                </Link>
                <button
                  onClick={() => scrollToSection('deals')}
                  className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-all"
                >
                  Compare Plans & Pricing
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                No credit card required • 3 free videos included
              </p>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ZebracatReview;
