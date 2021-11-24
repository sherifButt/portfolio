const Testimonials = () => {
  return (
     <section className="pt-8 px-4 text-center">
        <div className="max-w-2xl mx-auto mb-8">
           <h2 className="text-4xl leading-tight mb-6 font-semibold font-heading">
              What do our customers have to say about our
              services?
           </h2>
           <p className="text-gray-400 leading-relaxed">
              See how paper can change the way you think about
              business.
           </p>
        </div>
        <div className="flex flex-wrap -mx-8">
           <div className="w-1/2 md:w-1/6 px-8 mb-8">
              <img
                 src="./assets/placeholders-2-0/logos/realweb.svg"
                 alt=""
              />
           </div>
           <div className="w-1/2 md:w-1/6 px-8 mb-8">
              <img
                 src="./assets/placeholders-2-0/logos/gitscape.svg"
                 alt=""
              />
           </div>
           <div className="w-1/2 md:w-1/6 px-8 mb-8">
              <img
                 src="./assets/placeholders-2-0/logos/k-hole.svg"
                 alt=""
              />
           </div>
           <div className="w-1/2 md:w-1/6 px-8 mb-8">
              <img
                 src="./assets/placeholders-2-0/logos/plucky.svg"
                 alt=""
              />
           </div>
           <div className="w-1/2 md:w-1/6 px-8 mb-8">
              <img
                 src="./assets/placeholders-2-0/logos/1stsight.svg"
                 alt=""
              />
           </div>
           <div className="w-1/2 md:w-1/6 px-8 mb-8">
              <img
                 src="./assets/placeholders-2-0/logos/tholio.svg"
                 alt=""
              />
           </div>
        </div>
     </section>
  );
}

export default Testimonials
