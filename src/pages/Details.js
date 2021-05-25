import React from 'react'

import Header from 'parts/Header'
import Breadcrumb from 'components/Breadcrumb'

import Clients from 'parts/Clients'
import Footer from 'parts/Footer'
import Sitemap from 'parts/Sitemap'

export default function HomePage() {
    return (
        <>
            <Header theme="black" />
            <Breadcrumb 
            list={[
                {url:"/",name:"Home"},
                {url:"/categories/91231",name:"Office Room"},
                {url:"/categories/91231.products/4888",name:"Details"}
            ]}
            />
            <Clients />
            <Sitemap />
            <Footer />
        </>
    )
}

