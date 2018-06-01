import * as React from 'react'
import * as marked from 'marked'

export default function pageView(page: any) {
  let body = page.blocks.find((b: any) => b.apiId === "body")
  if (!body) body = {}
  body = { __html: marked(body.value) }
  return (
    <div>
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{page.name}</h1>
            <h2 className="subtitle">{page.subtitle}</h2>
            <div dangerouslySetInnerHTML={body}></div>
          </div>
        </div>
      </section>
    </div>
  )
}