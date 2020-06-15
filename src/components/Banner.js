import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

export default function Banner(props){
    return ( 
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>{props.title}</h1>
            </header>
            <div className="content">
                <p>{props.description}</p>
                <ul className="actions">
                    <li><a href="#one" className="button next scrolly">Get Started</a></li>
                </ul>
            </div>
        </div>
    </section>
    )
}
