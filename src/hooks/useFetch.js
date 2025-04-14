import axios from 'axios';

const fetchData = async (from) => {
  const response = await axios.get(`https://open.er-api.com/v6/latest/${from}`);

  return response.data.rates;
};

export default fetchData;

export const fetchCurrSelectOptions = async () => {
  const res = await axios.get('https://open.er-api.com/v6/latest/INR')
  let dummyCurrencyData = []
  for (const [key, value] of Object.entries(res.data.rates)) {
    const temp = {}
    temp[key] = value
    dummyCurrencyData.push(temp)
  }
  // console.log(dummyCurrencyData)
  return dummyCurrencyData;
}
