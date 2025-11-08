import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePro() {
  const inviteUrl = "https://discord.com/oauth2/authorize?client_id=1422959102300127292&permissions=8&integration_type=0&scope=bot";

  const commands = [
    {
      category: "自販機システム",
      items: [
        { name: "/自販機登録", desc: "新しい自販機を登録" },
        { name: "/自販機削除", desc: "登録済みの自販機を削除" },
        { name: "/自販機", desc: "自販機パネルを作成" },
        { name: "/商品追加", desc: "自販機に商品を追加" },
        { name: "/商品編集", desc: "商品情報を編集" },
        { name: "/商品削除", desc: "商品を削除" },
        { name: "/在庫追加", desc: "商品に在庫を追加" },
        { name: "/在庫引出", desc: "商品から在庫を引き出し" },
        { name: "/在庫内容確認", desc: "在庫内容を確認" },
        { name: "/購入者ロール設定", desc: "購入時に付与するロールを設定" },
        { name: "/購入者ロール一覧", desc: "設定済みのロール設定を表示" },
      ]
    },
    {
      category: "PayPay連携",
      items: [
        { name: "/paypay登録", desc: "PayPayアカウントを登録" },
      ]
    },
    {
      category: "パネル作成",
      items: [
        { name: "/認証パネル", desc: "認証コード入力式の認証パネルを作成（画像認証対応）" },
        { name: "/役職パネル", desc: "ボタンでロールを付与/削除できるパネルを作成" },
        { name: "/チケット", desc: "チケットパネルを作成" },
        { name: "/配布パネル", desc: "配布パネルを作成" },
        { name: "/配布パネル編集", desc: "配布パネルを編集" },
        { name: "/ngワードパネル", desc: "NGワードパネルを作成" },
        { name: "/埋め込み", desc: "埋め込みメッセージを作成" },
      ]
    },
    {
      category: "ログ設定",
      items: [
        { name: "/ログ設定", desc: "各種ログの送信先を設定" },
      ]
    },
    {
      category: "モデレーション",
      items: [
        { name: "/ban", desc: "ユーザーをBANする" },
        { name: "/タイムアウト", desc: "ユーザーをタイムアウトする" },
        { name: "/メッセージ削除", desc: "指定した数のメッセージを削除" },
      ]
    },
    {
      category: "ユーティリティ",
      items: [
        { name: "/表示", desc: "ユーザーのバナー、アバター、情報を表示" },
        { name: "/カウント", desc: "チャンネルのメッセージ数をカウント" },
        { name: "/バックアップ", desc: "チャンネルのバックアップまたは復元" },
        { name: "/抽選", desc: "抽選企画の管理" },
      ]
    },
    {
      category: "サーバー管理",
      items: [
        { name: "/自動ロール付与", desc: "サーバー参加時に自動でロールを付与" },
        { name: "/一括ロール付与", desc: "全メンバーにロールを付与" },
        { name: "/カテゴリー複製", desc: "カテゴリーの設定を複製" },
        { name: "/テンプレート作成", desc: "サーバーからテンプレートを作成" },
        { name: "/スロット", desc: "ユーザー専用のスロットチャンネルを作成" },
        { name: "/スロット削除", desc: "スロットチャンネルを削除" },
        { name: "/カスタムメッセージ", desc: "ボットが指定したメッセージを送信" },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Complex Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black"></div>
        
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gold/3 rounded-full blur-[100px] animate-float-slower"></div>
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-gold/4 rounded-full blur-[80px] animate-float"></div>
        
        {/* Scanning line effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent h-32 animate-scan"></div>
      </div>

      {/* Premium Header */}
      <header className="relative z-50 border-b border-gold/10 bg-black/60 backdrop-blur-2xl sticky top-0">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent opacity-50"></div>
        <div className="container relative">
          <div className="flex h-24 items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-gold via-gold-light to-gold rounded-full opacity-30 group-hover:opacity-60 blur-md transition-all duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-gold to-gold-light rounded-full opacity-50 animate-pulse"></div>
                <img src="/VENDX/bot-icon.jpg" alt="VENDX PRO" className="relative h-14 w-14 rounded-full ring-2 ring-gold/50 shadow-2xl shadow-gold/30 group-hover:ring-gold group-hover:scale-110 transition-all duration-300" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-black tracking-tighter bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                    VENDX PRO
                  </span>
                  <div className="h-6 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent"></div>
                  <span className="text-xs font-bold text-gold/70 tracking-widest uppercase">Premium</span>
                </div>
              </div>
            </div>
            <nav className="hidden lg:flex items-center gap-10">
              <a href="#features" className="text-sm font-bold text-gray-400 hover:text-gold transition-all duration-300 relative group">
                <span className="relative z-10">特典</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-gold-light group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#commands" className="text-sm font-bold text-gray-400 hover:text-gold transition-all duration-300 relative group">
                <span className="relative z-10">コマンド</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-gold-light group-hover:w-full transition-all duration-300"></span>
              </a>
              <Button asChild className="relative overflow-hidden bg-gradient-to-r from-gold via-gold-light to-gold text-black font-black px-8 shadow-2xl shadow-gold/40 hover:shadow-gold/60 hover:scale-105 transition-all duration-300 group">
                <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10">BOTを導入</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </Button>
            </nav>
            <Button asChild className="lg:hidden bg-gradient-to-r from-gold to-gold-light text-black font-black">
              <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
                導入
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section - Asymmetric Layout */}
      <section className="relative py-40 md:py-56">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Column - Text */}
            <div className="space-y-12">
              {/* Badge */}
              <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5 border border-gold/20 backdrop-blur-xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <div className="w-2 h-2 bg-gold rounded-full animate-pulse shadow-lg shadow-gold"></div>
                <span className="text-sm font-black text-gold tracking-[0.2em] uppercase">Premium Edition</span>
                <div className="w-2 h-2 bg-gold rounded-full animate-pulse shadow-lg shadow-gold"></div>
              </div>

              {/* Headline */}
              <div className="space-y-8">
                <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter">
                  <span className="block text-gray-400 mb-4">Discord サーバーを</span>
                  <span className="block bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent animate-gradient-x">
                    プロフェッショナルに
                  </span>
                </h1>
                
                {/* Decorative line */}
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-gold/50 to-transparent"></div>
                  <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                  <div className="h-px flex-1 bg-gradient-to-l from-gold/50 to-transparent"></div>
                </div>
              </div>

              {/* Description */}
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl">
                VENDX PROは、<span className="text-gold font-semibold">新機能をいち早く搭載</span>し、
                最速のアップデート・サポート・修正を提供するDiscord BOTです
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Button size="lg" asChild className="relative overflow-hidden bg-gradient-to-r from-gold via-gold-light to-gold text-black font-black text-lg px-10 py-7 shadow-2xl shadow-gold/50 hover:shadow-gold/70 group">
                  <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
                    <span className="relative z-10 flex items-center gap-3">
                      今すぐ導入する
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="relative overflow-hidden border-2 border-gold/30 text-gold font-black text-lg px-10 py-7 hover:border-gold hover:bg-gold/10 group">
                  <a href="#commands">
                    <span className="relative z-10">コマンドを見る</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Column - Decorative Stats */}
            <div className="hidden lg:block space-y-6">
              <div className="space-y-6">
                {[
                  { label: "新機能先行搭載", value: "PRIORITY" },
                  { label: "最速アップデート", value: "INSTANT" },
                  { label: "優先サポート", value: "24/7" }
                ].map((stat, idx) => (
                  <div key={idx} className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-gold/20 backdrop-blur-xl hover:border-gold/40 transition-all duration-500 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    <div className="relative space-y-3">
                      <div className="text-5xl font-black bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                      <div className="w-6 h-6 rounded-full bg-gold/30 group-hover:bg-gold/50 transition-colors duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-1 h-20 bg-gradient-to-b from-gold/50 to-transparent"></div>
        <div className="absolute bottom-20 right-20 w-1 h-20 bg-gradient-to-t from-gold/50 to-transparent"></div>
      </section>

      {/* Features Section - Bento Grid Style */}
      <section id="features" className="relative py-32 bg-gradient-to-b from-black via-gray-900/30 to-black">
        <div className="container relative z-10">
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-6xl md:text-7xl font-black">
              <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                PROの特典
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              通常版にはない、プレミアムな体験を提供します
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold/50"></div>
              <div className="w-2 h-2 bg-gold rounded-full"></div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold/50"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "新機能をいち早く搭載",
                desc: "最新機能を誰よりも早く体験",
                detail: "開発中の新機能をPROユーザー限定で先行公開。常に最先端の機能を利用できます。"
              },
              {
                title: "最速アップデート",
                desc: "優先的な機能追加と改善",
                detail: "PROユーザーからのフィードバックを最優先で反映。迅速なアップデートを保証します。"
              },
              {
                title: "優先サポート",
                desc: "専用サポートチャンネルで即対応",
                detail: "問題発生時も安心。専用チャンネルで優先的にサポート対応します。"
              }
            ].map((feature, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-gold via-gold-light to-gold rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
                <div className="relative p-10 rounded-3xl bg-gradient-to-br from-gray-900/90 to-black/90 border border-gold/20 backdrop-blur-xl hover:border-gold/40 transition-all duration-500 space-y-6 h-full">
                  {/* Number badge */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-black text-gold">{idx + 1}</span>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-black text-gold leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                      {feature.desc}
                    </p>
                    <div className="h-px bg-gradient-to-r from-gold/30 to-transparent"></div>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commands Section - Masonry Style */}
      <section id="commands" className="relative py-32">
        <div className="container relative z-10">
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-6xl md:text-7xl font-black">
              <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                コマンド一覧
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              全ての機能を網羅した強力なコマンドセット
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {commands.map((category, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gold/20 to-gold-light/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/95 to-black/95 border border-gold/10 backdrop-blur-xl group-hover:border-gold/30 transition-all duration-300 space-y-6">
                  <div className="flex items-center justify-between border-b border-gold/20 pb-4">
                    <h3 className="text-xl font-black text-gold">
                      {category.category}
                    </h3>
                    <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                  </div>
                  <div className="space-y-4">
                    {category.items.map((cmd, cmdIdx) => (
                      <div key={cmdIdx} className="space-y-2 group/item">
                        <code className="inline-block text-sm font-mono font-bold bg-black/60 text-gold px-4 py-2 rounded-lg border border-gold/20 group-hover/item:border-gold/40 group-hover/item:bg-black/80 group-hover/item:shadow-lg group-hover/item:shadow-gold/10 transition-all duration-300">
                          {cmd.name}
                        </code>
                        <p className="text-xs text-gray-500 pl-4 leading-relaxed">
                          {cmd.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Full Width */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gold/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent"></div>
        
        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto text-center space-y-16">
            <div className="space-y-10">
              <h2 className="text-7xl md:text-9xl font-black leading-none tracking-tighter">
                <span className="block bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                  今すぐVENDX PROを
                </span>
                <span className="block bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                  導入しよう
                </span>
              </h2>
              
              <div className="flex items-center justify-center gap-6">
                <div className="h-px w-32 bg-gradient-to-r from-transparent to-gold/50"></div>
                <div className="text-2xl text-gray-400 font-semibold">
                  プレミアムな体験を、今すぐ
                </div>
                <div className="h-px w-32 bg-gradient-to-l from-transparent to-gold/50"></div>
              </div>
            </div>

            <Button size="lg" asChild className="relative overflow-hidden bg-gradient-to-r from-gold via-gold-light to-gold text-black font-black text-2xl px-16 py-10 shadow-2xl shadow-gold/60 hover:shadow-gold/80 hover:scale-110 transition-all duration-500 group">
              <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
                <span className="relative z-10 flex items-center gap-4">
                  BOTを導入する
                  <svg className="w-7 h-7 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-gold/10 py-16 bg-black/80 backdrop-blur-2xl">
        <div className="absolute inset-0 bg-gradient-to-t from-gold/5 to-transparent"></div>
        <div className="container relative z-10">
          <div className="flex flex-col items-center space-y-8">
            <div className="flex items-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-gold to-gold-light rounded-full opacity-30 group-hover:opacity-50 blur-md transition-all"></div>
                <img src="/VENDX/creator-icon.jpg" alt="Creator" className="relative h-12 w-12 rounded-full ring-2 ring-gold/50 shadow-lg shadow-gold/30" />
              </div>
              <div className="h-8 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent"></div>
              <p className="text-gray-400 font-semibold">Built by @me10104</p>
            </div>
            
            <div className="text-center space-y-4">
              <p className="text-2xl font-black bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                VENDX PRO Discord BOT
              </p>
              <a href="https://discord.gg/3bw5D6vKV9" target="_blank" rel="noopener noreferrer" className="inline-block text-gold hover:text-gold-light transition-colors font-bold text-lg group">
                <span className="relative">
                  サポートサーバー
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-gold-light group-hover:w-full transition-all duration-300"></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
