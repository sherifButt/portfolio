import lottie from 'lottie-web'
import { useEffect,useRef } from 'react'

const Contact = () => {
  const container = useRef( null )
  
  useEffect( () => {
    lottie.loadAnimation( {
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require( "./contact_us.json" ),
    } );

   },[])
  return (
    <div className="w-4/5 mx-auto container" ref={container}></div>
  )
}
export default Contact