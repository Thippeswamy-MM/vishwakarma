import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Factory, 
  Cpu, 
  Shield, 
  Wrench, 
  Zap, 
  Gauge,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Award,
  Users,
  Target,
  Lightbulb,
  Rocket,
  Settings,
  Database,
  Globe,
  Clock,
  Star
} from 'lucide-react';

export default function ExperienceInnovation() {
  const [activeTab, setActiveTab] = useState('overview');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Lightbulb },
    { id: 'technology', label: 'Technology', icon: Cpu },
    { id: 'manufacturing', label: 'Manufacturing', icon: Factory },
    { id: 'quality', label: 'Quality', icon: Shield },
    { id: 'future', label: 'Future Vision', icon: Rocket }
  ];

  const innovations = [
    {
      title: "Smart Manufacturing Systems",
      description: "AI-powered manufacturing with real-time monitoring and predictive maintenance",
      icon: Cpu,
      features: ["IoT Integration", "Machine Learning", "Real-time Analytics"],
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "Advanced Material Science",
      description: "Cutting-edge metallurgy and composite materials for superior durability",
      icon: Shield,
      features: ["Heavy Iron Alloys", "Heat Treatment", "Surface Coatings"],
      color: "from-amber-600 to-orange-600"
    },
    {
      title: "Precision Engineering",
      description: "Micron-level precision in component manufacturing and assembly",
      icon: Wrench,
      features: ["CNC Machining", "Quality Control", "Tight Tolerances"],
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Energy Efficiency",
      description: "Sustainable manufacturing processes with minimal environmental impact",
      icon: Zap,
      features: ["Green Technology", "Energy Recovery", "Waste Reduction"],
      color: "from-green-600 to-emerald-600"
    }
  ];

  const achievements = [
    { number: "50+", label: "Years of Excellence", icon: Award },
    { number: "10,000+", label: "Machines Installed", icon: Factory },
    { number: "99.9%", label: "Quality Rate", icon: Shield },
    { number: "24/7", label: "Support Available", icon: Users }
  ];

  const technologies = [
    {
      category: "Manufacturing Technology",
      items: [
        "Computer Numerical Control (CNC) Machining",
        "Automated Assembly Lines",
        "Robotic Welding Systems",
        "Precision Casting Processes",
        "Advanced Quality Control Systems"
      ]
    },
    {
      category: "Software & Analytics",
      items: [
        "Manufacturing Execution Systems (MES)",
        "Predictive Maintenance Algorithms",
        "Real-time Production Monitoring",
        "Supply Chain Management",
        "Customer Relationship Management"
      ]
    },
    {
      category: "Materials & Processes",
      items: [
        "Advanced Iron Casting",
        "Heat Treatment Technologies",
        "Surface Engineering",
        "Composite Materials",
        "Sustainable Manufacturing"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Background Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-20 animate-machine-gear"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full opacity-20 animate-machine-crank animate-delay-200"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 animate-machine-piston animate-delay-400"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-20 animate-machine-rotate animate-delay-600"></div>
      </div>

      {/* Parallax Header */}
      <header className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-amber-600/90 via-orange-600/90 to-red-600/90"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="relative z-10 text-center text-white px-6">
          <div className="mb-6">
            <Rocket className="h-20 w-20 mx-auto animate-bounce" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Experience Our Innovation
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Discover cutting-edge technologies and revolutionary approaches that define the future of agricultural machinery manufacturing
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md shadow-lg border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between py-4">
            <Link 
              to="/"
              className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-semibold">Back to Home</span>
            </Link>
            
            <div className="hidden md:flex space-x-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300
                      ${activeTab === tab.id 
                        ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg' 
                        : 'text-gray-600 hover:bg-amber-100 hover:text-amber-700'
                      }
                    `}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Tab Navigation */}
      <div className="md:hidden sticky top-16 z-30 bg-white border-b border-amber-200 px-6 py-3">
        <div className="flex space-x-2 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center space-x-1 px-3 py-2 rounded-lg whitespace-nowrap transition-all duration-300
                  ${activeTab === tab.id 
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white' 
                    : 'text-gray-600 bg-gray-100'
                  }
                `}
              >
                <Icon className="h-4 w-4" />
                <span className="text-sm font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 relative z-20">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-16">
            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                    <div className="bg-gradient-to-r from-amber-100 to-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-amber-600" />
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-gray-600">{achievement.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Innovation Cards */}
            <div>
              <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Our Innovation Pillars
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {innovations.map((innovation, index) => {
                  const Icon = innovation.icon;
                  return (
                    <div key={index} className="group">
                      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${innovation.color} flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500`}>
                          <Icon className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{innovation.title}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">{innovation.description}</p>
                        <div className="space-y-2">
                          {innovation.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Technology Tab */}
        {activeTab === 'technology' && (
          <div className="space-y-12">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Advanced Technologies
            </h2>
            
            {technologies.map((techCategory, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Database className="h-6 w-6 text-amber-600 mr-3" />
                  {techCategory.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {techCategory.items.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Manufacturing Tab */}
        {activeTab === 'manufacturing' && (
          <div className="space-y-12">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Manufacturing Excellence
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Design & Engineering",
                  description: "CAD/CAM systems with advanced simulation and modeling capabilities",
                  icon: Settings,
                  color: "from-blue-600 to-cyan-600"
                },
                {
                  title: "Production Process",
                  description: "Streamlined manufacturing with quality control at every stage",
                  icon: Factory,
                  color: "from-amber-600 to-orange-600"
                },
                {
                  title: "Quality Assurance",
                  description: "Rigorous testing and inspection processes for perfect output",
                  icon: Shield,
                  color: "from-green-600 to-emerald-600"
                }
              ].map((process, index) => {
                const Icon = process.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${process.color} flex items-center justify-center mx-auto mb-6`}>
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                    <p className="text-gray-600">{process.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Quality Tab */}
        {activeTab === 'quality' && (
          <div className="space-y-12">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Quality Commitment
            </h2>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Quality Standards</h3>
                  <div className="space-y-4">
                    {[
                      "ISO 9001:2015 Certified",
                      "Six Sigma Methodology",
                      "Total Quality Management",
                      "Continuous Improvement Processes",
                      "International Quality Benchmarks"
                    ].map((standard, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-gray-700">{standard}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Testing & Inspection</h3>
                  <div className="space-y-4">
                    {[
                      "Material Testing Laboratories",
                      "Non-Destructive Testing (NDT)",
                      "Performance Validation",
                      "Environmental Testing",
                      "Customer Acceptance Testing"
                    ].map((test, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Gauge className="h-5 w-5 text-amber-600" />
                        <span className="text-gray-700">{test}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Future Vision Tab */}
        {activeTab === 'future' && (
          <div className="space-y-12">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Future Vision
            </h2>
            
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Target className="h-6 w-6 text-amber-600 mr-3" />
                    Our Goals
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Industry 4.0 Integration",
                      "Sustainable Manufacturing",
                      "Global Market Expansion",
                      "R&D Investment Growth",
                      "Digital Transformation"
                    ].map((goal, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <TrendingUp className="h-5 w-5 text-green-600 mt-1" />
                        <span className="text-gray-700">{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Globe className="h-6 w-6 text-amber-600 mr-3" />
                    Global Impact
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Agricultural Revolution",
                      "Food Security Enhancement",
                      "Rural Development",
                      "Employment Generation",
                      "Technology Transfer"
                    ].map((impact, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Star className="h-5 w-5 text-amber-600 mt-1" />
                        <span className="text-gray-700">{impact}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center py-16">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Innovation?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join us in revolutionizing agricultural machinery manufacturing with cutting-edge technology and sustainable practices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/request-quote"
                className="bg-white text-amber-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Factory className="h-5 w-5" />
                <span>Request Quote</span>
              </Link>
              <Link 
                to="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-amber-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Users className="h-5 w-5" />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
