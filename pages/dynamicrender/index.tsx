import { GetServerSideProps, NextPage } from 'next'
import axios from 'axios'
import { useEffect, useState } from 'react'

type UserType = {
  id: number
  name: string
  username: string
}

type DynamicRenderProps = {
  isSsr: boolean
  users: UserType[]
}

const DynamicRender: NextPage<DynamicRenderProps> = ({ isSsr, users }) => {
  const [usersData, setUsersData] = useState(users)

  useEffect(() => {
    if (!isSsr) {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((res) => setUsersData(res.data))
        .catch((error) => console.log(error))
    }
  }, [])

  return (
    <div>
      {usersData.map((user: UserType) => {
        return <div key={user.id}>{user.username}</div>
      })}
    </div>
  )
}

export default DynamicRender

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const botPattern =
    '(googlebot/|bot|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)'
  const re = new RegExp(botPattern, 'i')
  let users = []
  let isSsr = false
  const userAgent = req.headers['user-agent']
  isSsr = re.test(userAgent as string)
  if (isSsr) {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    )
    users = data
  }

  return {
    props: {
      isSsr,
      users,
    },
  }
}
