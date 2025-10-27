export default function Loader() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="flex flex-col items-center gap-8">
        {/* Animated Logo Container */}
        <div className="relative">
          {/* Rotating border ring */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-slate-800 animate-spin" 
               style={{ width: '88px', height: '88px' }} />
          
          {/* Logo circle */}
          <div className="w-20 h-20 m-1 rounded-full bg-white flex items-center justify-center shadow-lg">
            <svg 
              className="w-11 h-11 text-slate-800" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect 
                x="4" 
                y="4" 
                width="16" 
                height="16" 
                rx="2" 
                stroke="currentColor" 
                strokeWidth="1.5" 
              />
              <path 
                d="M8 12h8" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
              />
            </svg>
          </div>
        </div>

        {/* Brand text with fade-in animation */}
        <div className="text-center space-y-2 animate-pulse">
          <h1 className="text-2xl font-light tracking-wide text-slate-900">
            Zeight
          </h1>
          <p className="text-sm text-slate-500 font-light tracking-wider uppercase">
            Curating Your Look
          </p>
        </div>

        {/* Progress dots */}
        <div className="flex gap-2" role="status" aria-live="polite">
          <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }} />
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </main>
  );
}