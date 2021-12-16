import data from "../../siteData.config_02";



export default function helloAPI(req, res) {
  res.status( 200 ).json( data );
  
}

export const getData = () => data
