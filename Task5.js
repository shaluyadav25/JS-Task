        model=[
            {car:"BMW"}
        ]
        const res=model.map((item)=>{
            return {...item,car:"auto"}
        })
        console.log(res);




    //no inbuilt fn used

            model={
                car:'BMW'
            }
            model.car='auto'

            console.log(model);