import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

type Edition = "standard" | "pro";

export default function Home() {
  const [edition, setEdition] = useState<Edition>("standard");
  const [scrollY, setScrollY] = useState(0);
  
  const inviteUrl = "https://discord.com/oauth2/authorize?client_id=1422959102300127292&permissions=8&integration_type=0&scope=bot";

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleEdition = () => {
    setEdition(prev => prev === "standard" ? "pro" : "standard");
  };

  const config = {
    standard: {
      icon: "/VENDX/icon-standard.png",
      theme: "cyan",
      gradient: "from-cyan-400 to-blue-500",
      title: "VENDX STANDARD",
      tagline: "Discord サーバー運営の、新しいスタンダード",
      features: [
        {
          label: "自販機システム",
          desc: "商品の販売から在庫管理まで完全自動化。PayPay連携で決済もスムーズに。",
          note: "※販売者として使用する場合は /paypay登録 が必要です"
        },
        {
          label: "パネル管理",
          desc: "認証、役職付与、チケット管理を直感的なパネルで一元管理。",
          note: null
        },
        {
          label: "モデレーション",
          desc: "BAN、タイムアウト、メッセージ削除など、サーバーの秩序を保つ強力なツール。",
          note: null
        }
      ]
    },
    pro: {
      icon: "/VENDX/icon-pro.png",
      theme: "orange",
      gradient: "from-orange-400 to-red-500",
      title: "VENDX PRO",
      tagline: "プロフェッショナル運営のための、プレミアム体験",
      features: [
        {
          label: "先行アクセス",
          desc: "開発中の新機能をいち早く体験。常に最先端の機能を利用可能。",
          note: null
        },
        {
          label: "優先サポート",
          desc: "専用サポートチャンネルで24時間365日対応。問題発生時も即座に解決。",
          note: null
        },
        {
          label: "即時アップデート",
          desc: "フィードバックを最優先で反映。迅速な改善とアップデートを提供。",
          note: null
        }
      ]
    }
  };

  const current = config[edition];
  const opacity = Math.min(scrollY / 300, 1);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${current.gradient} opacity-5 transition-all duration-1000`}
          style={{ transform: `scale(${1 + scrollY * 0.0005})` }}
        />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, ${current.theme === 'cyan' ? '#06b6d420' : '#f9731620'} 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          transform: `translateY(${scrollY * 0.3}px)`
        }} />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{
          backgroundColor: `rgba(0, 0, 0, ${opacity * 0.8})`,
          backdropFilter: opacity > 0 ? 'blur(20px)' : 'none',
          borderBottom: opacity > 0 ? '1px solid rgba(255,255,255,0.1)' : 'none'
        }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <button 
                onClick={toggleEdition}
                className="flex items-center gap-3 group"
              >
                <div className="relative">
                  <img 
                    src={current.icon}
                    alt="VENDX"
                    className="h-10 w-10 rounded-lg transition-transform group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${current.gradient} opacity-0 group-hover:opacity-50 blur-md transition-opacity`} />
                </div>
                <div>
                  <div className="text-sm font-bold">{current.title}</div>
                  <div className="text-xs text-gray-500">クリックで切替</div>
                </div>
              </button>
              
              <nav className="hidden md:flex items-center gap-8">
                <a href="#features" className="text-sm hover:text-gray-300 transition">機能</a>
                <a href="#commands" className="text-sm hover:text-gray-300 transition">コマンド</a>
                <Button 
                  asChild
                  className={`bg-gradient-to-r ${current.gradient} hover:opacity-90 transition-opacity`}
                >
                  <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
                    導入する
                  </a>
                </Button>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="min-h-screen flex items-center justify-center px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-black tracking-tight">
                {current.tagline}
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
                自販機、PayPay連携、チケット管理、モデレーション。
                <br />
                サーバー運営に必要なすべてを統合。
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                asChild
                size="lg"
                className={`bg-gradient-to-r ${current.gradient} text-lg px-8 py-6 hover:opacity-90 transition-opacity`}
              >
                <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
                  今すぐ導入
                </a>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-white/20 hover:bg-white/5"
              >
                <a href="https://discord.gg/3bw5D6vKV9" target="_blank" rel="noopener noreferrer">
                  サポートサーバー
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-32 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">
              主な機能
            </h2>
            
            <div className="space-y-24">
              {current.features.map((feature, idx) => (
                <div 
                  key={idx}
                  className="grid md:grid-cols-2 gap-12 items-center"
                  style={{
                    flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse'
                  }}
                >
                  <div className={idx % 2 === 0 ? '' : 'md:order-2'}>
                    <div className={`text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${current.gradient} mb-4`}>
                      0{idx + 1}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">
                      {feature.label}
                    </h3>
                    <p className="text-lg text-gray-400 leading-relaxed mb-4">
                      {feature.desc}
                    </p>
                    {feature.note && (
                      <p className="text-sm text-gray-500 italic">
                        {feature.note}
                      </p>
                    )}
                  </div>
                  <div className={idx % 2 === 0 ? '' : 'md:order-1'}>
                    <div className={`aspect-video rounded-2xl bg-gradient-to-br ${current.gradient} opacity-10`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commands */}
        <section id="commands" className="py-32 px-6 lg:px-8 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                34種類のコマンド
              </h2>
              <p className="text-xl text-gray-400">
                あらゆるサーバー運営シーンに対応
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "自販機", count: 11 },
                { name: "パネル", count: 7 },
                { name: "モデレーション", count: 3 },
                { name: "サーバー管理", count: 7 },
                { name: "ユーティリティ", count: 4 },
                { name: "連携", count: 2 }
              ].map((cat, idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">{cat.name}</span>
                    <span className={`text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r ${current.gradient}`}>
                      {cat.count}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-5xl md:text-6xl font-black">
              今すぐ始める
            </h2>
            <p className="text-xl text-gray-400">
              あなたのDiscordサーバーを次のレベルへ
            </p>
            <Button 
              asChild
              size="lg"
              className={`bg-gradient-to-r ${current.gradient} text-xl px-12 py-8 hover:opacity-90 transition-opacity`}
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
                  className="h-10 w-10 rounded-full"
                />
                <span className="text-sm text-gray-400">Built by @me10104</span>
              </div>
              <div className="flex items-center gap-8">
                <a 
                  href="https://discord.gg/3bw5D6vKV9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-gray-300 transition"
                >
                  サポートサーバー
                </a>
                <a 
                  href={inviteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${current.gradient} hover:opacity-80 transition`}
                >
                  導入する →
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
