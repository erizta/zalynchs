import React from 'react'

export default function Clients() {
    return (
        <section className="container mx-auto">
            <div className="flex justify-center flex-wrap">
                <div
                    className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0"
                >
                    <img src="./images/content/logo-adobe.png" alt="" className="mx-auto" />
                </div>
                <div
                    className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0"
                >
                    <img src="./images/content/logo-ikea.png" alt="" className="mx-auto" />
                </div>
                <div
                    className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0"
                >
                    <img
                        src="./images/content/logo-hermanmiller.png"
                        alt=""
                        className="mx-auto"
                    />
                </div>
                <div
                    className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0"
                >
                    <img src="./images/content/logo-miele.png" alt="" className="mx-auto" />
                </div>
            </div>
        </section>
    )
}
