import ReactDOMServer from 'react-dom/server'
import pageView from './lib/page'

const DOCUMENT_ID = '5afdafe6d2b5230013c2cde3';
const YOUR_ORG_SECRET_KEY = app.config.tipe_org_secret_key;
const YOUR_API_KEY = app.config.tipe_api_key; // Generated-API-Key-1526575137549

fly.http.respondWith(async function (req) {
  const resp = await fetch('https://api.tipe.io/api/v1/document/' + DOCUMENT_ID, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': YOUR_API_KEY,
      'Tipe-Id': YOUR_ORG_SECRET_KEY
    }
  })
  if (resp.status != 200) {
    return new Response(`${resp.status} error`, { status: resp.status })
  }

  const page = await resp.json()

  const html = ReactDOMServer.renderToString(pageView(page))
  return new Response(html, { headers: { "Content-Type": "text/html" } })
})