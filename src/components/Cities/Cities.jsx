import React from 'react'
import SubCity from './SubCity'
import './cities.css'
const Cities = () => {
    const arr = [{
        link: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0f/c5/e8/5c.jpg",
        name: "Delhi"
    },
    {
        link: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Dal_Lake_Hazratbal_Srinagar.jpg/1200px-Dal_Lake_Hazratbal_Srinagar.jpg",
        name: "Srinagar"
    },
    {
        link: "https://assets.vogue.in/photos/5ce41ea8b803113d138f5cd2/2:3/w_1920,c_limit/Jaipur-Travel-Shopping-Restaurants.jpg",
        name: "jaipur"
    },
    {
        link: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/06/10-Things-You-Should-Never-Miss-Out-on-a-Trip-to-Ladakh-Image-5.webp",
        name: "Ladakh"
    },
    {
        link: "https://mediaindia.eu/wp-content/uploads/2021/02/teerathgarh-waterfall.jpg",
        name: "Bastar"
    },
    {
        link: "https://i.pinimg.com/736x/4a/66/10/4a66104772d3ba817af1ec89d4f3a242.jpg",
        name: "Uttarakhand"
    },
    {
       link:"https://as2.ftcdn.net/v2/jpg/04/08/25/05/1000_F_408250543_MVaEVGeWxb4FiFy7mEGKj8nfYkwoAZON.jpg",
       name:"Varanasi"
    },
    {
        link:"https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/09/Munnar.webp",
        name:"Ooty"
    },
    {
        link:"https://cityfurnish.com/blog/wp-content/uploads/2023/01/Vidhan-Soudha-Bangalore_04-min.jpg",
        name:"Bengaluru"
    },
    {
        link:"https://assets.vogue.in/photos/63889b741b8712b28236a56b/2:3/w_1920,c_limit/Goa.jpeg",
        name:"Goa"
    }
    ]
    return (
        <div>
        <h3 className='heading'>Cities</h3>
        <div className='cdiv'>
            {arr.map((element ,index)=>{
                return (<SubCity value={element}/>)
            })}
        </div>
        </div>

    )
}

export default Cities