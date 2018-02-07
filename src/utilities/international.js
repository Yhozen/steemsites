import i18next from 'i18next'

const publish = {
    en:  {
        "publishTitle": "Publish your own websites",
        "pPublishOne": 'All you need is a steem account, the corresponding posting WIF, a name and the folder with the content. Just drop the folder here to start fast.  Also can seed the page in ',
        'pPublishTwo': ' or with some App that support torrent over WebRTC ',
        'dropPublishOne': 'Drop files anywhere',
        'dropPublishTwo': 'files will be added',
        'discoverTitle': 'Discover sites',
        'discoverText': 'Click one to try it'
    }, es: {
        "publishTitle": "Publica tu propio sitio web",
        "pPublishOne": 'Todo lo que necesitas es una cuenta de steem, su correspondiente WIF, un nombre y la carpeta con el contenido de la página. Simplemente arrastra la carpeta para empezar rápido. También puedes seedear la página en ',
        'pPublishTwo': ' o con alguna App que soporte torrent por medio de WebRTC ',
        'dropPublishOne': 'Suelta los archivos en cualquier parte',
        'dropPublishTwo': 'archivos van a ser agregados',
        'discoverTitle': 'Descubre sitios',
        'discoverText': 'Prueba alguno clickeando sobre él, estos sos compartidos como rumor entre cada peer de la red'
    }
}

const navigate = {
    en: {
        'navigateSub': 'Decentralize the web.',
        'navigateText': `Steemsites is a new way to create, host and access to webpages.
                    Powered by the Steem blockchain and WebTorrent now you can build websites that are totally decentralize and will be avaible as long as one person is sharing it.
                    Thus now we can have neutral and uncensored websites thanks to the community. You can access to a web via a weblink, which is the author/nameofthepage (Just like a Github repository). Try a weblink below (for example "garox/init")`
    }, es: {
        'navigateSub': 'Descentraliza la web.',
        'navigateText': `Steemsites es una nueva forma de crear, hostear y acceder a páginas webs. Gracias al Steem blockchain y WebTorrent ahora puedes generar páginas totalmente descentralizadas y
        que van a estar disponibles siempre que al menos una persona la este compartiendo. Por consiguiente, una web neutral y no censurada gracias a la propia comunidad. Puedes acceder a una página via un weblink, que es autor/nombredelapagina (Como un repository de GitHub). Prueba un weblink abajo (por ejemplo "garox/init").`
    }
}

i18next.init({
    lng: 'en',
    debug: true,
    resources: {
      en: {
        translation: {
            ...publish.en,
            ...navigate.en
        }
      },
      es: {
        translation: {
            ...publish.es,
            ...navigate.es
        }
      }
    }
  }, function(err, t) {
      if (err) throw err
  })
export default i18next
  