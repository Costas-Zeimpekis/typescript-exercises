
const req=  new Request ("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",{
  method: 'GET',
  headers: {
    'Accepts': 'application/json',
    'X-CMC_PRO_API_KEY': '21d8264f-bc54-4641-a231-570b332ed700'
  }
});



async function getCryptoData(reque) {
    const data = await fetch(reque).then((res) => res.json());
  
    return data;
  }

async function showCryptoData() {
    const dat = await getCryptoData(req);
  
    console.log(dat);
}
  
showCryptoData();

