import garri from '../resources/garri.png'
import egusi from '../resources/egusi.jpg'
import yam from '../resources/yams.jpg'

 const productArray = [
    {
        category:'Dairy Food',
        id:1,
        products:[
            {
                name:'Egussi',
                price:'122200',
                quantity:'5',
                location:'Ngoundere',
                image:<img src={egusi} alt="item"/>

            },
            {
               
                name:'CoCoa',
                price:'122200',
                quantity:'5',
                location:'Ngoundere',
                image:<img src={yam} alt="item"/>
            },
            {
                
                name:'CoCoa',
                price:'122200',
                quantity:'5',
                location:'Ngoundere',
                image:<img src={yam} alt="item"/>
            },

        ]
       

    },
   
   
    {
        category:'Vegetables',
        id:2,
        products:[
            {
                name:'HucleBerry',
                price:'122200',
                quantity:'5',
                location:'Yoalmu',
                image:<img src={garri} alt="item"></img>
                
            },
            {
              
                name:'Planatin',
                price:'45200',
                quantity:'4',
                location:'Bali',
                image:<img src={egusi} alt="item"></img>
            },
            {
               
                name:'Beans',
                price:'122200',
                quantity:'5',
                location:'Mayui',
                image:<img src={egusi} alt="item"></img>
            },
        ]
       
    },

    
   
    {
        category:'Proteins',
        id:3,
        products:[ 
            {
                name:'Beans',
                price:'122200',
                quantity:'5',
                location:'Mayui',
                image:<img src={egusi} alt="item"></img>
            },
            {
               
                name:'yam',
                price:'4500',
                quantity:'34',
                location:'2344',
                image:<img src={egusi} alt="item"></img>
            },

        ]
      
    },
    {
        category:'Pasta',
        id:4,
        products:[ 
            {
                name:'Beans',
                price:'122200',
                quantity:'5',
                location:'Mayui',
                image:<img src={egusi} alt="item"></img>
            },
            {
               
                name:'yam',
                price:'4500',
                quantity:'34',
                location:'2344',
                image:<img src={egusi} alt="item"></img>
            },

        ]
      
    },
   
]

export default productArray;