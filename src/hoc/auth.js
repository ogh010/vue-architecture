export default (to,from,next)=>{
    if(to.path == '/test'){
        console.log(from);
        console.log('router navigater here');
    }
    else{
        console.log(to,from)
    }
    next()
}