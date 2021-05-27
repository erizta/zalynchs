import React from 'react'

import Header from 'parts/Header'
import Hero from 'parts/HomePage/Hero'
import Clients from 'parts/Clients'
import Sitemap from 'parts/Sitemap'
import Footer from 'parts/Footer'

import JustArrived from 'parts/HomePage/JustArrived.js'
import BrowseRoom from 'parts/HomePage/BrowseRoom.js'
import Document from 'parts/HomePage/Document'

export default function HomePage() {

    return (
        <Document>
            <Header theme="white" position="absolute" />
            <Hero />
            <BrowseRoom />
            <JustArrived />
            <Clients />
            <Sitemap />
            <Footer />
        </Document>
    )
}

