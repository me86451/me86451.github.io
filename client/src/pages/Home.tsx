import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

type Edition = "standard" | "pro";

export default function Home() {
  const [edition, setEdition] = useState<Edition>("standard");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  
  const inviteUrl = "https://discord.com/oauth2/authorize?client_id=1422959102300127292&permissions=8&integration_type=0&scope=bot";

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleEdition = () => {
    setEdition(prev => prev === "standard" ? "pro" : "standard");
  };

  const editionConfig = {
    standard: {
      icon: "/VENDX/icon-standard.png",
      name: "VENDX",
      subtitle: "STANDARD",
      gradient: "from-cyan-500 via-blue-500 to-purple-600",
      accentColor: "#06b6d4",
      features: [
        { title: "自販機システム", desc: "完全自動化された販売・在庫管理", icon: "🏪" },
        { title: "パネル管理", desc: "直感的な認証・役職・チケット管理", icon: "⚡" },
        { title: "モデレーション", desc: "強力なサーバー管理ツール", icon: "🛡️" }
      ]
    },
    pro: {
      icon: "/VENDX/icon-pro.png",
      name: "VENDX",
      subtitle: "PRO",
      gradient: "from-orange-500 via-red-500 to-pink-600",
      accentColor: "#f97316",
      features: [
        { title: "先行アクセス", desc: "最新機能をいち早く体験", icon: "🚀" },
        { title: "優先サポート", desc: "24/7専用サポートチャンネル", icon: "💎" },
        { title: "即時アップデート", desc: "フィードバック最優先反映", icon: "⚡" }
      ]
    }
  };

  const config = editionConfig[edition];

  const parallaxOffset = scrollY * 0.5;
  const cursorGlow = {
    background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, ${config.accentColor}15, transparent 80%)`
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Cursor Glow Effect */}
      <div 
        className="fixed inset-0 pointer-events-none transition-all duration-300 z-0"
        style={cursorGlow}
      />
      
      {/* Animated Grid Background */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(${config.accentColor}22 1px, transparent 1px),
              linear-gradient(90deg, ${config.accentColor}22 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translateY(${parallaxOffset}px)`
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className={`absolute w-96 h-96 rounded-full blur-3xl opacity-30 bg-gradient-to-r ${config.gradient}`}
          style={{
            top: '10%',
            left: '20%',
            transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`
          }}
        />
        <div 
          className={`absolute w-96 h-96 rounded-full blur-3xl opacity-20 bg-gradient-to-r ${config.gradient}`}
          style={{
            bottom: '20%',
            right: '10%',
            transform: `translate(${-mousePos.x * 0.03}px, ${-mousePos.y * 0.03}px)`
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
              <button 
                onClick={toggleEdition}
                className="group flex items-center gap-4 transition-all hover:scale-105"
              >
                <div className="relative">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${config.gradient} blur-xl opacity-50 group-hover:opacity-100 transition-opacity`} />
                  <img 
                    src={config.icon}
                    alt={config.name}
                    className="relative h-14 w-14 rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-black tracking-tight">{config.name}</div>
                  <div className={`text-xs font-bold bg-gradient-to-r ${config.gradient} bg-clip-text text-transparent`}>
                    {config.subtitle}
                  </div>
                </div>
              </button>
              
              <Button 
                asChild
                className={`bg-gradient-to-r ${config.gradient} text-white font-bold px-8 py-6 text-lg shadow-2xl hover:shadow-3xl transition-all hover:scale-105`}
              >
                <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
                  導入する
                </a>
              </Button>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="pt-40 pb-32 px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-8">
              <div 
                className="inline-block"
                style={{ transform: `translateY(${-scrollY * 0.2}px)` }}
              >
                <div className={`inline-block px-6 py-2 rounded-full bg-gradient-to-r ${config.gradient} bg-opacity-20 border border-white/20 backdrop-blur-sm`}>
                  <span className="text-sm font-bold">Next Generation Discord Bot</span>
                </div>
              </div>
              
              <h1 
                className="text-7xl md:text-9xl font-black leading-none"
                style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
              >
                <span className={`bg-gradient-to-r ${config.gradient} bg-clip-text text-transparent`}>
                  Discord
                </span>
                <br />
                <span className="text-white">サーバーを</span>
                <br />
                <span className={`bg-gradient-to-r ${config.gradient} bg-clip-text text-transparent`}>
                  次のレベルへ
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                自販機システム、PayPay連携、チケット管理。
                <br />
                サーバー運営に必要なすべてを、ひとつに。
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <Button 
                  asChild
                  size="lg"
                  className={`bg-gradient-to-r ${config.gradient} text-white font-bold text-xl px-12 py-8 shadow-2xl hover:shadow-3xl transition-all hover:scale-110`}
                >
                  <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
                    今すぐ導入
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-32 px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black text-center mb-20">
              <span className={`bg-gradient-to-r ${config.gradient} bg-clip-text text-transparent`}>
                主な機能
              </span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {config.features.map((feature, idx) => (
                <div 
                  key={idx}
                  className="group relative"
                  style={{
                    transform: `translateY(${-scrollY * 0.05 * (idx + 1)}px)`
                  }}
                >
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${config.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all`} />
                  <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all hover:scale-105">
                    <div className="text-6xl mb-6">{feature.icon}</div>
                    <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-32 px-6 lg:px-8 relative">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className={`text-6xl md:text-8xl font-black bg-gradient-to-r ${config.gradient} bg-clip-text text-transparent`}>
                  34
                </div>
                <div className="text-xl text-gray-400">コマンド</div>
              </div>
              <div className="space-y-4">
                <div className={`text-6xl md:text-8xl font-black bg-gradient-to-r ${config.gradient} bg-clip-text text-transparent`}>
                  24/7
                </div>
                <div className="text-xl text-gray-400">稼働</div>
              </div>
              <div className="space-y-4">
                <div className={`text-6xl md:text-8xl font-black bg-gradient-to-r ${config.gradient} bg-clip-text text-transparent`}>
                  ∞
                </div>
                <div className="text-xl text-gray-400">可能性</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-6xl md:text-7xl font-black">
              <span className={`bg-gradient-to-r ${config.gradient} bg-clip-text text-transparent`}>
                始めよう
              </span>
            </h2>
            <p className="text-2xl text-gray-400">
              あなたのDiscordサーバーを、今すぐアップグレード
            </p>
            <Button 
              asChild
              size="lg"
              className={`bg-gradient-to-r ${config.gradient} text-white font-bold text-2xl px-16 py-10 shadow-2xl hover:shadow-3xl transition-all hover:scale-110`}
            >
              <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
                BOTを導入する
              </a>
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <img 
                  src="/VENDX/creator-icon.jpg"
                  alt="Creator"
                  className="h-12 w-12 rounded-full ring-2 ring-white/20"
                />
                <span className="text-gray-400">Built by @me10104</span>
              </div>
              <a 
                href="https://discord.gg/3bw5D6vKV9"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-bold bg-gradient-to-r ${config.gradient} bg-clip-text text-transparent hover:opacity-80 transition`}
              >
                サポートサーバー →
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
