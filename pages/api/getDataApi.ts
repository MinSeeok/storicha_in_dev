const BASE_URL = 'https://localhost:5001/api';

export function fetchTopupData(){
  return fetch(`${BASE_URL}/cash/product?display_yn=y&product_id=0`).then((response) =>
      response.json()
  );
}