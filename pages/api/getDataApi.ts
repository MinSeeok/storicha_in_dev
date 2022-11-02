const BASE_URL = `https://dev-nft.storicha.in/api`


export function fetchTopupData() {
  return fetch(`https://dev-nft.storicha.in/api/cash/product?display_yn=y&amp;product_id=0`).then((response) => 
    response.json()
  );
}
