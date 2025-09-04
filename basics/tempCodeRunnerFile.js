    const objj=[
        
        {
            itemname :'python',
            price :1999
        },

        {
            itemname :'DSA (C++) ',
            price :2999
        },


        {
            itemname :'JAVA',
            price :3999
        },


        {
            itemname :'WEB-DEV',
            price :5999
        },
        

        {
            toffie :'CANDY-MAN',
            price:4
        }

    ]
    console.log(
     objj.reduce((acc,val)=>acc+val.price,0));