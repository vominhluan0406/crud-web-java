const axios = require('axios');
const login = async (onDoneFunc)=>{
    try{
        
    const {data} = await axios({
        url:'http://localhost:8080/api/login',
        method:'post',
        data:JSON.stringify({username:'user',password:'admin'}),
        headers: { "Content-Type": "application/json" },
    })
    console.log(data.access_token)
     onDoneFunc(data.access_token);

    }catch(err){
        console.log('err',err);
    }
}
const deleteFunc = async (token)=>{
    try{
        console.log('token',token);
        const config = {
            url:'http://localhost:8080/api/demo/delete/16',
            method:'delete',
            headers:{
                'Authorization':token,
               
            },
            timeOut:5000,
            
            
        }
        const data = await axios(config)
        console.log('delete success',data.response)
    }catch(err){
        console.log('Delete err',err.response);
    }
}
login(deleteFunc);