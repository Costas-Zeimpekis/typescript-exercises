
async function fetchingPost() {
      let apiKey = {
          key:"200ec641-241f-4b62-803b-ba0eafc3aef2"
      }
    fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5000&convert=USD", {
        method: 'get',
        headers: {
            'Accepts': 'application/json',
            'X-CMC_PRO_API_KEY':apiKey.key,
        },
        
    })
    .then(res => res.json())
    .then(data =>{
        for(let i=0; i< 20; i++){
            console.log(data.data[i])
        }
    })
  }

  fetchingPost()

