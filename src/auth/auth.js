export const auth = ()=>{
    let token = JSON.parse(localStorage.getItem("persist:instagram"))
    if(token.auth){
        return {
            headers: {
                token: JSON.parse(token.auth).token
            }
        }
    }
}
