import lottie from 'lottie-web'

export default ( lottieName,container ) => {
  const lot = lottie.loadAnimation( {
    container,
    renderer: "svg",
    loop: true,
    autoplay: true,
    animationData: require( `../public/assets/lottie/${ lottieName}.json` ),
  } );

  return lot
}

