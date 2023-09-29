import { useEffect, useState } from "react";

const FetchCat = () => {
  const url =
    "https://api.thecatapi.com/v1/images/search?limit=8&size=full&breed_id=beng&sub_id=demo-ca06d4";
  async function fetchCat() {
    try {
      const res = await fetch(url);
      const cat = await res.json();
      const href = cat[0].url;
      return href;
    } catch (e) {}
  }

  const[cat,setCat] = useState()

  useEffect(()=> {
    async function showCat() {
     const response = await fetchCat()
     setCat(response)
    }
    showCat()
  },[])
  return (
    <div className="fetch-cat">
      <h1>Fetch Cat</h1>
      <img src={cat} alt="cat" width="100px" />
    </div>
  );
};
export default FetchCat;
