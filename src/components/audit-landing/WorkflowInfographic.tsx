import { useState, useEffect } from 'react';
import { DollarSign, AlertTriangle, Bot, Zap, ArrowRight, Target } from 'lucide-react';

export function WorkflowInfographic() {
  const [animationStep, setAnimationStep] = useState(0);
  const [mappingStep, setMappingStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep(prev => (prev + 1) % 4);
      setMappingStep(0); // Reset mapping step when main animation changes
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (animationStep === 0) {
      const mappingInterval = setInterval(() => {
        setMappingStep(prev => Math.min(prev + 1, 3));
      }, 600); // Show each card every 600ms

      return () => clearInterval(mappingInterval);
    }
  }, [animationStep]);

  const workflowSteps = [
    { id: 'input', label: 'Tasks / Tickets', sublabel: 'Reports', color: 'bg-blue-50', border: 'border-blue-200' },
    { id: 'process', label: 'Manual', sublabel: 'Workflow', color: 'bg-orange-50', border: 'border-orange-200' },
    { id: 'output', label: 'Delivered', sublabel: 'Result', color: 'bg-green-50', border: 'border-green-200' }
  ];

  const leaks = [
    { position: 'between-1-2', label: 'Wasted Time', icon: DollarSign, delay: 0 },
    { position: 'between-2-3', label: 'Repetitive Steps', icon: AlertTriangle, delay: 0.5 },
    { position: 'after-3', label: 'Lost Revenue', icon: DollarSign, delay: 1 }
  ];

  return (
    <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl border border-white/50 shadow-xl w-full pt-[0px] pr-[32px] pb-[16px] pl-[32px]">
      {/* Futuristic Animation Indicators */}
      <div className="relative flex justify-center items-center mb-8 space-x-16 p-6">
        {/* Background Grid Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/5 to-transparent rounded-lg m-[0px]" />
        
        {/* Data Flow Lines */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md h-0.5">
          <div className="relative w-full h-full bg-gradient-to-r from-transparent via-secondary/20 to-transparent">
            {/* Animated Data Pulse */}
            <div 
              className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-80"
              style={{
                animation: 'dataFlow 3s ease-in-out infinite',
                transform: `translateX(${animationStep * 120}px)`
              }}
            />
          </div>
        </div>
        
        {[
          { step: 0, label: "MAP", icon: "⚡", color: "#0062FF" },
          { step: 1, label: "DETECT", icon: "🔍", color: "#FF6B35" },
          { step: 2, label: "QUANTIFY", icon: "💎", color: "#10B981" }
        ].map(({ step, label, icon, color }, index) => {
          const isActive = animationStep === step;
          const isPrevious = animationStep > step;
          
          return (
            <div key={step} className="relative flex flex-col items-center space-y-3 z-10">
              {/* Holographic Node */}
              <div className="relative">
                {/* Outer Glow Ring */}
                <div 
                  className={`absolute inset-0 rounded-full transition-all duration-700 ${
                    isActive 
                      ? 'w-16 h-16 -m-2 shadow-2xl animate-pulse' 
                      : isPrevious 
                        ? 'w-12 h-12 -m-1' 
                        : 'w-10 h-10'
                  }`}
                  style={{
                    background: isActive 
                      ? `radial-gradient(circle, ${color}20 0%, ${color}10 50%, transparent 100%)`
                      : isPrevious
                        ? `radial-gradient(circle, ${color}15 0%, transparent 70%)`
                        : 'none',
                    boxShadow: isActive 
                      ? `0 0 30px ${color}40, inset 0 0 20px ${color}20`
                      : isPrevious
                        ? `0 0 15px ${color}30`
                        : 'none'
                  }}
                />
                
                {/* Main Node */}
                <div 
                  className={`relative w-12 h-12 rounded-full border-2 backdrop-blur-sm transition-all duration-500 flex items-center justify-center overflow-hidden ${
                    isActive 
                      ? 'scale-125 border-white shadow-xl' 
                      : isPrevious 
                        ? 'border-white/70 scale-110'
                        : 'border-white/30 scale-100'
                  }`}
                  style={{
                    background: isActive 
                      ? `linear-gradient(135deg, ${color}90 0%, ${color}60 100%)`
                      : isPrevious
                        ? `linear-gradient(135deg, ${color}70 0%, ${color}40 100%)`
                        : `linear-gradient(135deg, ${color}30 0%, ${color}10 100%)`
                  }}
                >
                  {/* Inner Holographic Effect */}
                  <div 
                    className={`absolute inset-0 rounded-full transition-opacity duration-500 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      background: `conic-gradient(from 0deg, transparent, ${color}30, transparent, ${color}20, transparent)`,
                      animation: isActive ? 'holographicSpin 2s linear infinite' : 'none'
                    }}
                  />
                  
                  {/* Node Icon */}
                  <span 
                    className={`relative z-10 transition-all duration-300 ${
                      isActive 
                        ? 'text-lg filter drop-shadow-lg' 
                        : isPrevious 
                          ? 'text-base opacity-90'
                          : 'text-sm opacity-60'
                    }`}
                  >
                    {icon}
                  </span>
                  
                  {/* Scanning Lines Effect */}
                  {isActive && (
                    <div 
                      className="absolute inset-0 rounded-full opacity-60"
                      style={{
                        background: `linear-gradient(90deg, transparent 0%, ${color}40 50%, transparent 100%)`,
                        animation: 'scanLine 1.5s ease-in-out infinite'
                      }}
                    />
                  )}
                </div>
                
                {/* Status Indicator */}
                <div 
                  className={`absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white transition-all duration-300 ${
                    isPrevious 
                      ? 'bg-green-400 shadow-md' 
                      : isActive 
                        ? 'bg-yellow-400 animate-pulse shadow-lg'
                        : 'bg-gray-300'
                  }`}
                >
                  {isPrevious && (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Label with Typewriter Effect */}
              <div className="text-center">
                <span 
                  className={`font-mono transition-all duration-300 tracking-wider ${
                    isActive 
                      ? 'text-secondary font-bold text-sm shadow-md' 
                      : isPrevious
                        ? 'text-green-600 font-semibold text-xs'
                        : 'text-muted-foreground/60 text-xs'
                  }`}
                  style={{
                    textShadow: isActive ? `0 0 10px ${color}50` : 'none'
                  }}
                >
                  {label}
                </span>
                
                {/* Progress Bar */}
                <div className="mt-1 w-16 h-0.5 bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-1000 rounded-full ${
                      isPrevious 
                        ? 'w-full bg-green-400'
                        : isActive 
                          ? 'w-3/4 bg-yellow-400 animate-pulse'
                          : 'w-0'
                    }`}
                    style={{
                      background: isPrevious 
                        ? 'linear-gradient(90deg, #10B981, #34D399)'
                        : isActive 
                          ? `linear-gradient(90deg, ${color}, ${color}80)`
                          : 'none'
                    }}
                  />
                </div>
              </div>
              
              {/* Neural Network Lines */}
              {index < 2 && (
                <div className="absolute top-6 left-16 w-16 h-0.5 flex items-center">
                  <div className="w-full h-px bg-gradient-to-r from-white/30 to-transparent" />
                  {(isPrevious || (isActive && index === 0)) && (
                    <div 
                      className="absolute left-0 top-0 h-px w-2 bg-secondary animate-pulse"
                      style={{
                        animation: 'neuralPulse 2s ease-in-out infinite',
                        animationDelay: `${index * 0.5}s`
                      }}
                    />
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      {/* SEO-optimized SVG container with accessibility */}
      <div 
        role="img" 
        aria-label="AI Audit process showing workflow mapping, leak detection, and ROI quantification"
        className="relative"
      >
        <svg 
          viewBox="0 0 1000 350" 
          className="w-full h-auto min-h-[250px] lg:min-h-[300px]"
          xmlns="http://www.w3.org/2000/svg"
          aria-describedby="workflow-desc"
        >
          <title>AI Audit Process - Workflow Leak Detection & ROI Impact</title>
          <desc id="workflow-desc">
            AI audit process: mapping business workflows, detecting operational leaks, 
            and quantifying ROI impact through artificial intelligence analysis
          </desc>
          
          {/* Enhanced Background gradient */}
          <defs>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F8F9FA" stopOpacity="1"/>
              <stop offset="50%" stopColor="#E9EBEF" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#F1F3F7" stopOpacity="0.8"/>
            </linearGradient>
            
            <linearGradient id="leakGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F87171" stopOpacity="0.9"/>
              <stop offset="100%" stopColor="#DC2626" stopOpacity="1"/>
            </linearGradient>
            
            <linearGradient id="aiGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.9"/>
              <stop offset="100%" stopColor="#1D4ED8" stopOpacity="1"/>
            </linearGradient>
            
            <linearGradient id="successGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.9"/>
              <stop offset="100%" stopColor="#059669" stopOpacity="1"/>
            </linearGradient>
            
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            <filter id="scannerGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          <rect width="1000" height="350" fill="url(#bgGradient)" rx="16"/>
          
          {/* Phase 1: Workflow Mapping - Business Process Boxes */}
          {[
            { label: "Customer Support", sublabel: "Tickets & Escalation", x: 120 },
            { label: "Sales Process", sublabel: "Lead to Close", x: 380 },
            { label: "Finance Ops", sublabel: "Reporting & Analysis", x: 640 }
          ].map((process, index) => {
            const isActive = animationStep === 0;
            const isVisible = animationStep === 0 ? mappingStep > index : animationStep > 0;
            const shouldShowArrow = animationStep === 0 ? mappingStep > index + 1 : animationStep > 0;
            
            return (
              <g key={index}>
                {/* Process Box */}
                <rect
                  x={process.x}
                  y={80}
                  width={180}
                  height={100}
                  rx="16"
                  fill="#ffffff"
                  stroke={isActive && isVisible ? "#2563EB" : "#E5E7EB"}
                  strokeWidth={isActive && isVisible ? "3" : "2"}
                  className={`transition-all duration-500 ${isActive && isVisible ? 'drop-shadow-lg' : ''}`}
                  style={{ 
                    opacity: isVisible ? 1 : 0,
                    transform: `translateY(${isVisible ? '0' : '20px'})`
                  }}
                />
                
                {/* Process Labels */}
                <text
                  x={process.x + 90}
                  y={120}
                  textAnchor="middle"
                  className="fill-primary"
                  fontSize="16"
                  fontWeight="700"
                  style={{ opacity: isVisible ? 1 : 0 }}
                >
                  {process.label}
                </text>
                <text
                  x={process.x + 90}
                  y={145}
                  textAnchor="middle"
                  className="fill-muted-foreground"
                  fontSize="13"
                  style={{ opacity: isVisible ? 1 : 0 }}
                >
                  {process.sublabel}
                </text>
                
                {/* Connection Arrows - Center-aligned between cards */}
                {index < 2 && (
                  <path
                    d={index === 0 
                      ? "M 325 130 L 355 130"  // Arrow between Customer Support and Sales Process (centered at x=340)
                      : "M 585 130 L 615 130"  // Arrow between Sales Process and Finance Ops (centered at x=600)
                    }
                    stroke="#6B7280"
                    strokeWidth="1.5"
                    markerEnd="url(#arrowhead)"
                    className="transition-opacity duration-500"
                    style={{ opacity: shouldShowArrow ? 1 : 0 }}
                  />
                )}
              </g>
            );
          })}
          
          {/* Arrow marker definition */}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="8"
              markerHeight="6"
              refX="7"
              refY="3"
              orient="auto"
            >
              <polygon
                points="0 0, 8 3, 0 6"
                fill="#6B7280"
              />
            </marker>
          </defs>
          
          {/* Phase 2: AI Scanner Detection */}
          {animationStep === 1 && (
            <g>
              {/* Scanning beam effect */}
              <rect
                x="0"
                y="0"
                width="30"
                height="350"
                fill="url(#aiGradient)"
                opacity="0.3"
                filter="url(#scannerGlow)"
                className="animate-pulse"
                style={{
                  animation: 'scan 2s ease-in-out infinite',
                  transformOrigin: 'center'
                }}
              />
              

            </g>
          )}
          
          {/* Leak Indicators with Enhanced Visuals */}
          {[
            { x: 250, label: "Manual Reporting", type: "time" },
            { x: 510, label: "Repetitive Tasks", type: "cost" },
            { x: 750, label: "Handoff Delays", type: "efficiency" }
          ].map((leak, index) => {
            const isPulsing = animationStep === 1;
            const isFixed = animationStep === 3;
            
            return (
              <g key={index}>
                {/* Leak Indicator */}
                {!isFixed && (
                  <>
                    <circle
                      cx={leak.x}
                      cy={210}
                      r="12"
                      fill="url(#leakGradient)"
                      className={`transition-all duration-500 ${isPulsing ? 'animate-bounce' : ''}`}
                      filter={isPulsing ? "url(#glow)" : "none"}
                      opacity={animationStep >= 1 ? 1 : 0}
                    />
                    
                    {/* Leak label */}
                    <text
                      x={leak.x}
                      y={250}
                      textAnchor="middle"
                      className="fill-red-600"
                      fontSize="11"
                      fontWeight="600"
                      opacity={animationStep >= 1 ? 1 : 0}
                    >
                      {leak.label}
                    </text>
                    
                    {/* Enhanced drip effect */}
                    <path
                      d={`M ${leak.x} 222 Q ${leak.x-4} 232 ${leak.x} 240 Q ${leak.x+4} 232 ${leak.x} 222`}
                      fill="#F87171"
                      opacity={isPulsing ? "0.9" : "0.5"}
                      className="transition-opacity duration-500"
                    />
                  </>
                )}
                
                {/* Fixed indicator */}
                {isFixed && (
                  <>
                    <circle
                      cx={leak.x}
                      cy={210}
                      r="14"
                      fill="url(#successGradient)"
                      filter="url(#glow)"
                      className="animate-pulse"
                    />
                    <text
                      x={leak.x}
                      y={217}
                      textAnchor="middle"
                      fill="white"
                      fontSize="14"
                      fontWeight="bold"
                    >
                      ✓
                    </text>
                  </>
                )}
                
                {/* Detection lines */}
                {animationStep === 1 && (
                  <path
                    d={`M ${leak.x} 240 Q ${leak.x + (500 - leak.x) / 2} 260 500 280`}
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeDasharray="6,6"
                    fill="none"
                    opacity="0.8"
                    className="animate-pulse"
                  />
                )}
              </g>
            );
          })}
          
          {/* Enhanced AI Detection Box */}
          <g>
            <rect
              x={430}
              y={280}
              width={140}
              height={80}
              rx="16"
              fill="url(#aiGradient)"
              className={`transition-all duration-500 ${
                animationStep === 1 ? 'drop-shadow-xl' : ''
              }`}
              filter={animationStep === 1 ? "url(#scannerGlow)" : "none"}
              opacity={(animationStep === 0 && mappingStep >= 3) || animationStep >= 1 ? 1 : 0}
              style={{
                transform: `translateY(${(animationStep === 0 && mappingStep >= 3) || animationStep >= 1 ? '0' : '20px'})`
              }}
            />
            <text
              x={500}
              y={310}
              textAnchor="middle"
              fill="white"
              fontSize="15"
              fontWeight="700"
              style={{ opacity: (animationStep === 0 && mappingStep >= 3) || animationStep >= 1 ? 1 : 0 }}
            >
              AI Audit
            </text>
            <text
              x={500}
              y={330}
              textAnchor="middle"
              fill="white"
              fontSize="12"
              style={{ opacity: (animationStep === 0 && mappingStep >= 3) || animationStep >= 1 ? 0.9 : 0 }}
            >
              Detecting Leaks
            </text>
          </g>
          
          {/* Phase 3: Before and After Audit Database */}
          {animationStep === 2 && (
            <g>
              {/* Full Width Background Panel */}
              <rect
                x={20}
                y={50}
                width={960}
                height={280}
                rx="16"
                fill="#ffffff"
                stroke="#10B981"
                strokeWidth="3"
                filter="url(#glow)"
                className="drop-shadow-lg"
              />
              
              {/* Main Header */}
              <text
                x={500}
                y={80}
                textAnchor="middle"
                className="fill-primary"
                fontSize="20"
                fontWeight="700"
              >
                Before and After Audit Database
              </text>
              
              {/* Before Section */}
              <text x={150} y={110} textAnchor="middle" className="fill-red-600" fontSize="16" fontWeight="700">BEFORE AUDIT</text>
              <line x1={80} y1={115} x2={220} y2={115} stroke="#DC2626" strokeWidth="2"/>
              
              {/* Before Metrics */}
              <text x={60} y={140} className="fill-muted-foreground" fontSize="11" fontWeight="600">📊 Manual Reporting:</text>
              <text x={180} y={140} className="fill-red-600 font-mono" fontSize="11" fontWeight="700">40h/week</text>
              
              <text x={60} y={160} className="fill-muted-foreground" fontSize="11" fontWeight="600">⏱ Response Time:</text>
              <text x={180} y={160} className="fill-red-600 font-mono" fontSize="11" fontWeight="700">4-6 hours</text>
              
              <text x={60} y={180} className="fill-muted-foreground" fontSize="11" fontWeight="600">💰 Processing Cost:</text>
              <text x={180} y={180} className="fill-red-600 font-mono" fontSize="11" fontWeight="700">$8k/month</text>
              
              <text x={60} y={200} className="fill-muted-foreground" fontSize="11" fontWeight="600">🔄 Repetitive Tasks:</text>
              <text x={180} y={200} className="fill-red-600 font-mono" fontSize="11" fontWeight="700">65%</text>
              
              <text x={60} y={220} className="fill-muted-foreground" fontSize="11" fontWeight="600">❌ Error Rate:</text>
              <text x={180} y={220} className="fill-red-600 font-mono" fontSize="11" fontWeight="700">12%</text>
              
              <text x={60} y={240} className="fill-muted-foreground" fontSize="11" fontWeight="600">📈 Escalations:</text>
              <text x={180} y={240} className="fill-red-600 font-mono" fontSize="11" fontWeight="700">28/month</text>
              
              <text x={60} y={260} className="fill-muted-foreground" fontSize="11" fontWeight="600">⚡ Efficiency:</text>
              <text x={180} y={260} className="fill-red-600 font-mono" fontSize="11" fontWeight="700">45%</text>
              
              <text x={60} y={280} className="fill-muted-foreground" fontSize="11" fontWeight="600">👥 FTE Required:</text>
              <text x={180} y={280} className="fill-red-600 font-mono" fontSize="11" fontWeight="700">3.2 people</text>
              
              <text x={60} y={300} className="fill-muted-foreground" fontSize="11" fontWeight="600">💸 Total Cost:</text>
              <text x={180} y={300} className="fill-red-600 font-mono" fontSize="11" fontWeight="700">$22k/month</text>
              
              {/* After Section */}
              <text x={750} y={110} textAnchor="middle" className="fill-green-600" fontSize="16" fontWeight="700">AFTER AUDIT</text>
              <line x1={680} y1={115} x2={820} y2={115} stroke="#10B981" strokeWidth="2"/>
              
              {/* After Metrics */}
              <text x={660} y={140} className="fill-muted-foreground" fontSize="11" fontWeight="600">🤖 AI Reporting:</text>
              <text x={780} y={140} className="fill-green-600 font-mono" fontSize="11" fontWeight="700">2h/week</text>
              
              <text x={660} y={160} className="fill-muted-foreground" fontSize="11" fontWeight="600">⚡ Response Time:</text>
              <text x={780} y={160} className="fill-green-600 font-mono" fontSize="11" fontWeight="700">30 mins</text>
              
              <text x={660} y={180} className="fill-muted-foreground" fontSize="11" fontWeight="600">💰 Processing Cost:</text>
              <text x={780} y={180} className="fill-green-600 font-mono" fontSize="11" fontWeight="700">$1.2k/month</text>
              
              <text x={660} y={200} className="fill-muted-foreground" fontSize="11" fontWeight="600">🎯 Automated Tasks:</text>
              <text x={780} y={200} className="fill-green-600 font-mono" fontSize="11" fontWeight="700">85%</text>
              
              <text x={660} y={220} className="fill-muted-foreground" fontSize="11" fontWeight="600">✅ Error Rate:</text>
              <text x={780} y={220} className="fill-green-600 font-mono" fontSize="11" fontWeight="700">2%</text>
              
              <text x={660} y={240} className="fill-muted-foreground" fontSize="11" fontWeight="600">📉 Escalations:</text>
              <text x={780} y={240} className="fill-green-600 font-mono" fontSize="11" fontWeight="700">4/month</text>
              
              <text x={660} y={260} className="fill-muted-foreground" fontSize="11" fontWeight="600">🚀 Efficiency:</text>
              <text x={780} y={260} className="fill-green-600 font-mono" fontSize="11" fontWeight="700">92%</text>
              
              <text x={660} y={280} className="fill-muted-foreground" fontSize="11" fontWeight="600">👤 FTE Required:</text>
              <text x={780} y={280} className="fill-green-600 font-mono" fontSize="11" fontWeight="700">0.8 people</text>
              
              <text x={660} y={300} className="fill-muted-foreground" fontSize="11" fontWeight="600">💚 Total Cost:</text>
              <text x={780} y={300} className="fill-green-600 font-mono" fontSize="11" fontWeight="700">$6k/month</text>
              
              {/* Center Divider */}
              <line x1={500} y1={120} x2={500} y2={310} stroke="#E5E7EB" strokeWidth="2" strokeDasharray="5,5"/>
              
              {/* ROI Summary Box */}
              <rect x={350} y={120} width={300} height={60} rx="8" fill="#F0FDF4" stroke="#10B981" strokeWidth="1"/>
              <text x={500} y={140} textAnchor="middle" className="fill-primary" fontSize="14" fontWeight="700">NET SAVINGS</text>
              <text x={500} y={160} textAnchor="middle" className="fill-green-600 font-mono" fontSize="16" fontWeight="700">$16k/month</text>
              <text x={500} y={175} textAnchor="middle" className="fill-green-600 font-mono" fontSize="12" fontWeight="600">$192k/year ROI</text>
            </g>
          )}
        </svg>
      </div>
      
      {/* Enhanced Caption */}
      <div className="text-center mt-6">
        <p className="text-base text-muted-foreground font-medium">
          We map your workflows, detect where money leaks, and show the ROI impact — instantly.
        </p>
      </div>

    </div>
  );
}