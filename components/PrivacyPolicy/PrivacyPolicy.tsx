import React from 'react'
import styles from './PrivacyPolicy.module.scss'

const PrivacyPolicy: React.FC = () => {
    return (
        <div className={styles.body}>
            <p className={styles.date}>制定日：2021年4月13日　　最終改定日：2021年4月13日</p>
            <div className={styles.title}>
                <h2>Privacy Policy</h2>
                <p>Satoshi Tech Portfolio（以下「当サイト」）では、当サイトの提供するコンテンツにおけるユーザの個人情報を含む利用者情報の取扱いについて、以下の通りプライバシーポリシーを定めます。</p>
            </div>
            <div className={styles.admin}>
                <h4>運営者</h4>
                <p>運営者：Satoshi Yoshida</p>
                <p>連絡先：sayoshida22#gmail.com</p>
            </div>
            <div className={styles.userInfo}>
                <h4>収集する利用者情報及び収集方法</h4>
                <p>当サイトでは、お問い合わせページに設置している入力フォームでのご連絡の際、ユーザーの氏名及びメールアドレスを収集いたします。</p>
                <p>収集した情報は、お問い合わせに対する回答や必要な情報を電子メール等でご連絡する場合にのみ利用させていただきます。</p>
            </div>
            <div className={styles.googleAd}>
                <h4>広告について</h4>
                <p>当サイトでは、第三者配信の広告サービス「Google Adsense グーグルアドセンス」を利用しています。</p>
                <p>このような広告配信事業者は、ユーザーの興味に応じた商品やサービスの広告を表示するため、当サイトや他サイトへのアクセスに関する情報 『Cookie』(氏名、住所、メール アドレス、電話番号は含まれません) を使用することがあります。
                    Cookieを無効にする設定およびGoogleアドセンスに関する詳細は<a href="https://policies.google.com/technologies/ads?hl=ja" rel="noopener noreferrer">「広告 – ポリシーと規約 – Google」</a>をご覧ください。</p>
                
            </div>
            <div className={styles.googleAna}>
                <h4>アクセス解析ツールについて</h4>
                <p>当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。</p>
                <p>このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。
                    このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
                    また、この機能はCookieを無効にすることで収集を拒否できますので、お使いのブラウザの設定をご確認ください。
                    この規約の詳細は<a href="https://policies.google.com/technologies/partner-sites" rel="noopener noreferrer">「Google のサービスを使用するサイトやアプリから収集した情報のGoogleによる使用」</a>をご覧ください。</p>
            </div>
            <div className={styles.copyright}>
                <h4>著作権について</h4>
                <p>当サイトで掲載しているコンテンツ（画像や動画、文章など）の著作権は原則当サイトに帰属しており、著作物を無断転載することを禁止します。
                また当サイトは著作権や肖像権の侵害を目的としたものではありません。</p>
                <p>当サイトの著作物を利用したい場合、または当サイトのコンテンツにおける著作権や肖像権に関して問題がある場合は、お問い合わせフォームよりご連絡ください。</p>
            </div>
            <div className={styles.link}>
                <h4>リンクについて</h4>
                <p>当サイトは基本的にリンクフリーです。リンクを行う場合の許可や連絡は不要です。
                    ただし、インラインフレームの使用や画像の直リンクはご遠慮ください。</p>
            </div>
            <div className={styles.disclamer}>
                <h4>免責事項</h4>
                <p>当サイトはアフィリエイトプログラムを使用し商品を紹介しており、直接の販売は行っておりません。商品に関するお問い合わせは販売店様へ直接ご連絡ください。
                    当サイトからリンクやバナー等で移動したサイトで提供される情報、サービス等については一切の責任を負いません。
                    また、リンク先サイトの正確性や合法性、その内容について一切保証するものではありません。</p>
                <p>当サイトでは、可能な限り正確な情報を提供するよう努めておりますが、個人的見解を述べる場合もあり、必ずしも正確性や安全性等を保証するものではありません。
                    万が一、当サイトをご利用することで発生したトラブルに関しては一切の責任を負いかねます。あらかじめご了承ください。
                    当サイト内の誤り等、気になる点があれば、お問い合わせフォーム等でいつでもご連絡ください。 </p>
                <p>また、本免責事項、および当サイトに掲載しているすべての記事は、予告なしに変更・削除されることがあります。 予めご了承下さい。</p>
            </div>
        </div>
    )
}

export default PrivacyPolicy;
