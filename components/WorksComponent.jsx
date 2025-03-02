import React from 'react'
import WorksCard from './WorksCard'

function WorksComponent() {
    const dataWorks = [
        { urlTitle: "absklad.com", title: "ASIA BRAND - a CRM system for managing the sales of a furniture factory.", image: "/projects/absklad.png", id: 1, url: "https://absklad.com", },
        { urlTitle: "kaimono.vip", title: "Kaimono - an online store that imports and sells products from Japan.", image: "/projects/kaimono.png", id: 2, url: "https://kaimono.vip", },
        { urlTitle: "itdoor.kg", title: "An IT training located in Bishkek offering courses in JS, React, Node.js, Java and more.", image: "/projects/itdoor.png", id: 3, url: "https://itdoor.kg", },
        { urlTitle: "itlms.kg", title: "itLMS is a training management system that stores e-courses", image: "/projects/itkg.jpg", id: 4, url: "https://itlms.kg", },
        { urlTitle: "nurjazkg.ru", title: "NURJAZ - Full-cycle sewing production in Bishkek.", image: "/projects/nurjazkg.png", id: 0, url: "https://nurjazkg.ru", },
        { urlTitle: "dobush.kg", title: "Elections of local council deputies of the Kyrgyz Republic - November 17, 2024.", image: "/projects/dobushkg.png", id: 5, url: "https://dobush.kg", },
    ]
    return (
        <div className='grid grid-cols-1 gap-3 lg:grid-cols-3 mx-4 lg:mx-0'>
            {dataWorks.map((i) => (
                <WorksCard data={i} key={i.id} />
            ))}
            <h3 className='text-white'>And more projects...</h3>
        </div>
    )
}

export default WorksComponent