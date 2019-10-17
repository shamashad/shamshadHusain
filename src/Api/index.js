
/*@Get data from api*/
export const getProducts = async () => {
    const data = await fetch('https://api.myjson.com/bins/qhnfp').then(respone =>{
        return respone.json()
    }).catch(error => {
        return new Error("Error !!");
    })
  return data;
}
  