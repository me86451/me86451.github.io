import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
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
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="glass-effect sticky top-0 z-50 border-b border-border/50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/bot-icon.jpg" alt="VENDX" className="h-10 w-10 rounded-full shadow-lg" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              VENDX
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#commands" className="text-sm font-medium hover:text-primary transition-colors">
              コマンド
            </a>
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              機能
            </a>
            <Button asChild>
              <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
                BOTを導入
              </a>
            </Button>
          </nav>
          <Button asChild className="md:hidden">
            <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
              導入
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative container py-24 md:py-32 overflow-hidden">
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-ping" style={{animationDuration: '3s'}} />
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent/20 rounded-full animate-pulse" style={{animationDuration: '4s'}} />
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-secondary/25 rounded-full animate-ping" style={{animationDuration: '5s'}} />
          <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-primary/20 rounded-full animate-pulse" style={{animationDuration: '3.5s'}} />
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Discord サーバーを
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                もっと便利に
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              VENDXは自販機システム、PayPay連携、チケット管理など、サーバー運営に必要な機能を統合したDiscord BOTです。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="shadow-lg hover:shadow-xl transition-shadow">
                <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
                  今すぐ導入する
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#commands">
                  コマンドを見る
                </a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="floating">
              <img 
                src="/bot-icon.jpg" 
                alt="VENDX Bot" 
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
              />
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          主な機能
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="glass-effect border-border/50 hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle>自販機システム</CardTitle>
              <CardDescription>
                商品の販売、在庫管理、購入履歴の記録まで完全自動化
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                複数の自販機を登録し、商品ごとに在庫を管理。PayPay連携で決済も簡単に。
              </p>
            </CardContent>
          </Card>

          <Card className="glass-effect border-border/50 hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle>パネル作成</CardTitle>
              <CardDescription>
                認証、役職付与、チケット、配布など多彩なパネル
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                ボタン一つで操作できる直感的なパネルで、サーバー管理を効率化。
              </p>
            </CardContent>
          </Card>

          <Card className="glass-effect border-border/50 hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle>モデレーション</CardTitle>
              <CardDescription>
                BAN、タイムアウト、メッセージ削除などの管理機能
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                サーバーの秩序を保つための強力なモデレーションツール。
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Commands Section */}
      <section id="commands" className="container py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          コマンド一覧
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {commands.map((category, idx) => (
            <Card key={idx} className="glass-effect border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.items.map((cmd, cmdIdx) => (
                    <div key={cmdIdx} className="flex flex-col gap-1">
                      <code className="text-sm font-mono bg-muted px-2 py-1 rounded w-fit">
                        {cmd.name}
                      </code>
                      <p className="text-sm text-muted-foreground pl-2">
                        {cmd.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-24">
        <Card className="glass-effect border-border/50 text-center">
          <CardHeader className="space-y-4">
            <CardTitle className="text-3xl md:text-4xl">
              今すぐVENDXを導入しよう
            </CardTitle>
            <CardDescription className="text-lg">
              あなたのDiscordサーバーを次のレベルへ
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="lg" asChild className="shadow-lg hover:shadow-xl transition-shadow">
              <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
                BOTを導入する
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 glass-effect">
        <div className="container text-center text-sm text-muted-foreground">
          <p>Built by @me10104</p>
          <p className="mt-2">VENDX Discord BOT</p>
        </div>
      </footer>
    </div>
  );
}
