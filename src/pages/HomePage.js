import React from 'react'
import Header from 'parts/Header'
import Hero from 'parts/Hero'
import Clients from 'parts/Clients'
import Footer from 'parts/Footer'
import JustArrived from 'parts/HomePage/JustArrived.js'
import BrowseRoom from 'parts/HomePage/BrowseRoom.js'
import Sitemap from 'parts/Sitemap'

export default function HomePage() {
    return (
        <>
            <Header />
            <Hero />
            <BrowseRoom />
            <JustArrived />
            <Clients />
            <Sitemap />
            <Footer />
        </>
    )
}

