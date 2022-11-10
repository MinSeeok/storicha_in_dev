const BASE_URL = `https://dev-nft.storicha.in/api`


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjU2NzkiLCJuYmYiOjE2Njc4MDg0NjksImV4cCI6MTY2ODQxMzI2OSwiaWF0IjoxNjY3ODA4NDY5fQ.H1dtsNTWT0wWvitauBw7alMlPAsq11zyF9jQUUCaab8

export function fetchTopupData() {
  return fetch(`https://dev-nft.storicha.in/api/cash/product?display_yn=y&amp;product_id=0`).then((response) => 
    response.json()
  );
}
