import { CameraIcon } from "@heroicons/react/solid";
const About = () => {
   return (
      <div className="bg-white overflow-hidden">
         <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
            <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
               <div>
                  <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                     About
                  </h2>
                  <h3 className="mt-4 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                     Meet Sherif
                  </h3>
               </div>
            </div>
            <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
               <div className="relative lg:row-start-1 lg:col-start-2">
                  <svg
                     className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                     width={404}
                     height={384}
                     fill="none"
                     viewBox="0 0 404 384"
                     aria-hidden="true">
                     <defs>
                        <pattern
                           id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                           x={0}
                           y={0}
                           width={20}
                           height={20}
                           patternUnits="userSpaceOnUse">
                           <rect
                              x={0}
                              y={0}
                              width={4}
                              height={4}
                              className="text-gray-200"
                              fill="currentColor"
                           />
                        </pattern>
                     </defs>
                     <rect
                        width={404}
                        height={384}
                        fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                     />
                  </svg>
                  <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                     <figure>
                        <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                           <img
                              className="rounded-lg shadow-lg object-cover object-center"
                              src="/assets/imgs/posts/sbutt_about_01.jpg"
                              alt="Sherif holding a loaf of sower dough bread"
                              width={300}
                              height={360}
                           />
                        </div>
                        <figcaption className="mt-3 flex text-sm text-gray-500">
                           <CameraIcon
                              className="flex-none w-5 h-5 text-gray-400"
                              aria-hidden="true"
                           />
                           <span className="ml-2">
                              Photograph by Ewa Butt
                           </span>
                        </figcaption>
                     </figure>
                  </div>
               </div>
               <div className="mt-8 lg:mt-0">
                  <div className="text-base max-w-prose mx-auto lg:max-w-none">
                     <p className="text-lg text-gray-500">
                        Hi my name is Sherif and I am a front-end web developer.
                        I have a passion for building outstanding
                        digital experiences and experience in
                        responsive design and mobile web
                        development. I work with HTML5, CSS3, and
                        JavaScript (React). My background is in
                        Architecture and Design, but I also have
                        experience in digital marketing (SEO).
                     </p>
                  </div>
                  <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                     <p>
                        <strong>
                           <u>
                              I will help you to create modern
                              websites and webapplications that are fast, dynamic and
                              easy to use.
                           </u>
                        </strong>
                     </p>
                     <p>
                        I am a self-starter, who can take
                        initiative, identify areas for
                        improvement, bring suggestions and take
                        accountability for finding solutions. I
                        thrive on solving tough problems. I
                        value the design of a product as much as
                        I value the code.
                     </p>
                     <p>
                        Out of the office you’ll find me doing
                        DIY projects or baking sourdough bread
                        for my family and friends.
                     </p>
                     <h3>I will help you Build:</h3>
                     <ul role="list" className="capitalize">
                        <li>elegant </li>
                        <li>intuitive </li>
                        <li>responsive </li>
                        <li>interactive </li>
                     </ul>
                     <p>
                        websites and web apps that work well on
                        various devices.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
export default About;
