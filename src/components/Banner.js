import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

export default function Banner(){
    return (
            <StaticQuery
      query={graphql`
        query HeadingQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
       render={data => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>{data.site.siteMetadata.title}</h1>
            </header>
            <div className="content">
                <p>A responsive site template designed by HTML5 UP<br />
                and released under the Creative Commons.</p>
                <ul className="actions">
                    <li><a href="#one" className="button next scrolly">Get Started</a></li>
                </ul>
            </div>
        </div>
    </section>
)}
/>
)
}
