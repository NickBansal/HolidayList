import image1 from '../Stylesheets/Images/image_01.png'
import image2 from '../Stylesheets/Images/image_02.png'
import image3 from '../Stylesheets/Images/image_03.jpg'

export default [
    { 
        title: 'Costa Adeje Gran Hotel',
        img: image1,
        price: '1136.50',
        date: '3 July 2014',
        days: '7 days',
        airport: 'East Midlands',
        rating: '5',
        specification: '2 Adults, 2 Children & 1 infant',
        location: 'Costa Adeje, Tenerife',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        _id: 'id01'
    },
    { 
        title: 'Aguamarina Golf Hotel And Apartments',
        img: image2,
        price: '499.99',
        date: '3 July 2014',
        days: '7 days',
        airport: 'Manchester',
        rating: '4',
        specification: '2 Adults, 2 Children',
        location: 'Costa Adeje, Tenerife',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        _id: 'id02'  
    },
    { 
        title: 'Laguna Park II',
        img: image3,
        price: '696.80',
        date: '27 May 2014',
        days: '7 days',
        airport: 'Liverpool',
        rating: '3',
        specification: '2 Adults, 1 Child',
        location: 'Costa Adeje, Tenerife',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        _id: 'id03' 
    }
].sort((a, b) => b.price - a.price)