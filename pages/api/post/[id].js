import fs from 'fs';
import path from 'path';

export default  function ( req, res )  {
   const {
      query: { id, name },
      method,
   } = req;
  
 try{ const dirRelativeToPublicFolder = 'posts'
  const dir =   path.resolve('./public',dirRelativeToPublicFolder);
  const files =   fs.readdirSync(dir)
   res.json( { success: true,id, name, method, dir,files } )
 } catch ( err )
 {
   res.status(201).json({success:false,message:err.message})
   }
}

