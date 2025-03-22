const auth=(req,res,next)=>{
    if(JSON.stringify(req.query).includes('>')){
        console.log('request blocked');
        
    }
    else{
    console.log('all safe bruh');
    next()
    }
}

export default {auth}