import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";

export default function Home() {
  const inviteUrl = "https://discord.com/oauth2/authorize?client_id=1422959102300127292&permissions=8&integration_type=0&scope=bot";
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      title: "自販機システム",
      description: "商品の販売、在庫管理、購入履歴の記録まで完全自動化",
      detail: "複数の自販機を登録し、商品ごとに在庫を管理。PayPay連携で決済も簡単に。",
      note: "※ 販売者として使用する場合はPayPay登録が必要です"
    },
    {
      title: "パネル作成",
      description: "認証、役職付与、チケット、配布など多彩なパネル",
      detail: "ボタン一つで操作できる直感的なパネルで、サーバー管理を効率化。"
    },
    {
      title: "モデレーション",
      description: "BAN、タイムアウト、メッセージ削除などの管理機能",
      detail: "サーバーの秩序を保つための強力なモデレーションツール。"
    }
  ];

  const commandCategories = [
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
        { name: "/認証パネル", desc: "認証コード入力式の認証パネルを作成" },
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl animate-pulse"
          style={{animationDuration: '4s', transform: `translateY(${scrollY * 0.3}px)`}}
        ></div>
        <div 
          className="absolute top-40 right-20 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl animate-pulse"
          style={{animationDuration: '5s', transform: `translateY(${scrollY * 0.2}px)`}}
        ></div>
        <div 
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-pulse"
          style={{animationDuration: '6s', transform: `translateY(${scrollY * -0.1}px)`}}
        ></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-purple-200/50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-75 blur animate-pulse"></div>
                <img 
                  src="/VENDX/bot-icon.jpg" 
                  alt="VENDX" 
                  className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-full ring-2 ring-white shadow-lg"
                />
              </div>
              <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                VENDX
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#commands" className="text-sm font-semibold text-gray-700 hover:text-purple-600 transition">
                コマンド
              </a>
              <a href="#features" className="text-sm font-semibold text-gray-700 hover:text-purple-600 transition">
                機能
              </a>
              <Button 
                asChild 
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold shadow-lg hover:shadow-xl transition-all"
              >
                <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
                  BOTを導入
                </a>
              </Button>
            </nav>
            <Button 
              asChild 
              size="sm"
              className="md:hidden bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold"
            >
              <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
                導入
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 sm:px-6 py-20 sm:py-32">
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="space-y-8 sm:space-y-12 max-w-4xl">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
                <span className="block text-gray-800 mb-2">Discord サーバーを</span>
                <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                  もっと便利に
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                VENDXは自販機システム、PayPay連携、チケット管理など、<br className="hidden sm:block" />
                サーバー運営に必要な機能を統合したDiscord BOTです
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                asChild 
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold text-base sm:text-lg px-8 py-6 sm:py-7 shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-105"
              >
                <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
                  今すぐ導入する
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 font-bold text-base sm:text-lg px-8 py-6 sm:py-7"
              >
                <a href="#commands">
                  コマンドを見る
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-20 space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              主な機能
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="group relative p-6 sm:p-8 rounded-3xl bg-white/80 backdrop-blur-xl border-2 border-purple-200/50 hover:border-purple-400 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">{feature.title}</h3>
                  <p className="text-base sm:text-lg font-semibold text-purple-600">{feature.description}</p>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.detail}</p>
                  {feature.note && (
                    <p className="text-xs sm:text-sm text-gray-500 italic">{feature.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commands Section */}
      <section id="commands" className="relative py-20 sm:py-32 bg-gradient-to-b from-transparent via-white/50 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-20 space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              コマンド一覧
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {commandCategories.map((category, idx) => (
              <Card 
                key={idx}
                className="bg-white/80 backdrop-blur-xl border-2 border-purple-200/50 hover:border-purple-400 shadow-lg hover:shadow-xl transition-all"
              >
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl font-bold text-gray-800">{category.category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {category.items.map((item, itemIdx) => (
                    <div 
                      key={itemIdx}
                      className="group p-3 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 border border-purple-200/50 hover:border-purple-300 transition-all"
                    >
                      <code className="text-sm font-mono font-bold text-purple-700">{item.name}</code>
                      <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-12 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-2xl">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              今すぐVENDXを導入しよう
            </h2>
            <p className="text-lg sm:text-xl text-white/90">
              あなたのDiscordサーバーを次のレベルへ
            </p>
            <Button 
              size="lg" 
              asChild 
              className="bg-white text-purple-600 hover:bg-gray-100 font-black text-lg sm:text-xl px-10 sm:px-12 py-7 sm:py-8 shadow-2xl hover:shadow-white/50 transition-all transform hover:scale-105"
            >
              <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
                BOTを導入する
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t-2 border-purple-200/50 py-12 sm:py-16 bg-white/70 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-6 sm:space-y-8">
            <div className="flex items-center gap-4">
              <img 
                src="/VENDX/creator-icon.jpg" 
                alt="Creator" 
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full ring-2 ring-purple-300 shadow-lg"
              />
              <span className="text-sm sm:text-base text-gray-700 font-semibold">Built by @me10104</span>
            </div>
            
            <div className="text-center space-y-3">
              <p className="text-lg sm:text-xl font-bold text-gray-800">VENDX Discord BOT</p>
              <a 
                href="https://discord.gg/3bw5D6vKV9" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block text-sm sm:text-base text-purple-600 hover:text-pink-600 transition font-bold"
              >
                サポートサーバー
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
