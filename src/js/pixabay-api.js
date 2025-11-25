import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";
const API_KEY = "53351360-25752520852e3bd129b79410f";

export async function getImagesByQuery(query, page = 1, perPage = 15) {
try {
const response = await axios.get("", {
params: {
key: API_KEY,
q: query,
image_type: "photo",
orientation: "horizontal",
safesearch: true,
page,
per_page: perPage,
},
});

if (!response.data || !response.data.hits || response.data.hits.length === 0) {
  return { hits: [], totalHits: 0 };
}

return {
  hits: response.data.hits,
  totalHits: response.data.totalHits,
};

} catch (err) {
console.error(err);
return { hits: [], totalHits: 0 };
}
}