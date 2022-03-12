import fs from 'fs'
import path from 'path'

export default ( req, res ) => {
  console.log(req.query)
  const dirRelativeToPublicFolder = 'posts'
  const dir = path.resolve( './public', dirRelativeToPublicFolder );
  const filename = fs.readdirSync( dir );
  const posts = filename.map( name => path.join( '/', dirRelativeToPublicFolder, name ) )
  
  res.status( 200 ).json( posts )
}