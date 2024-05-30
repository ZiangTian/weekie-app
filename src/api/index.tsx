const localServer = ' http://192.168.111.1:3000'
const api = (url:string)=>{
   return fetch(localServer + url)
   .then((reponse)=>reponse.json)
   .then((data)=>console.log(data));
}