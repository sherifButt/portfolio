import data from "../../siteData.config";



export default function helloAPI(req, res) {
  res.status( 200 ).json( data );
  
}

export const getData = () => data
