import React from 'react'

import Header from 'parts/Header'
import Breadcrumb from 'components/Breadcrumb'

import Clients from 'parts/Clients'
import Footer from 'parts/Footer'
import Sitemap from 'parts/Sitemap'

export default function HomePage() {
    return (
        <>
            <Header />
            <Breadcrumb list={[
                { url: "/", name: "Home" },
                { url: "/categories/90909", name: "Office Room" },
                { url: "/categories/90909.products/69690", name: "Details" },
            ]} />
            <Clients />
            <Sitemap />
            <Footer />
        </>
    )
}

