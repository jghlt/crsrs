import Head from 'next/head'
import App from '../components/App/App'
import data from '../components/data'
import config from '../components/config'

function HomePage() {
  return (
    <div>
      <Head>
        <base href="/"/>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
        
        <title>{ data.meta.title }</title>
        <meta name="description" content={ data.meta.description } />

        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content={ data.meta.name } />
        <meta property="og:url" content={ data.meta.url } />
        <meta property="og:title" content={ data.meta.title } />
        <meta property="og:image" content="" />
        <meta property="og:description" content={ data.meta.description } />

        <meta name="twitter:site" content={ data.meta.name } />
        <meta name="twitter:title" content={ data.meta.title } />
        <meta name="twitter:description" content={ data.meta.description } />
        <meta name="twitter:image" content="" />
        <meta name="twitter:card" content="summary_large_image" />

      </Head>
      <App 
        {...data} 
        config={config} 
      />
    </div>
  )
}

export default HomePage