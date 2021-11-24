const Team = () => {
  return (
     <section className="py-12 px-4 text-center">
        <h2 className="text-4xl mb-2 leading-tight font-semibold font-heading">
           Dunder Mifflin Family
        </h2>
        <p className="max-w-xl mx-auto mb-12 text-gray-400">
           Because no great company could exist without
           accountants, sellers, stock workers, and of course -
           paper.
        </p>
        <div className="flex flex-wrap -mx-8">
           <div className="md:w-1/3 p-8">
              <img
                 className="w-1/3 mx-auto mb-4 rounded-full"
                 src="./assets/placeholders-2-0/pictures/female_avatar.svg"
                 alt=""
              />
              <h3 className="text-xl mb-1 font-semibold font-heading">
                 Karen Filippelli
              </h3>
              <span>Regional Manager</span>
              <p className="mt-4 text-gray-400 leading-relaxed">
                 Started as a Sales representative at Stamford
                 branch, moved to Scranton.All of us left as soon
                 as possible except for Andy.
              </p>
           </div>
           <div className="md:w-1/3 p-8 md:border-l">
              <img
                 className="w-1/3 mx-auto mb-4 rounded-full"
                 src="./assets/placeholders-2-0/pictures/male_avatar.svg"
                 alt=""
              />
              <h3 className="text-xl mb-1 font-semibold font-heading">
                 Darryl Philbin
              </h3>
              <span>Marketing Director</span>
              <p className="mt-4 text-gray-400 leading-relaxed">
                 The warehouse is not a piece of cake, man.I
                 started there as an Assistant and finally got a
                 promotion to the Marketing Director.
              </p>
           </div>
           <div className="md:w-1/3 p-8 md:border-l">
              <img
                 className="w-1/3 mx-auto mb-4 rounded-full"
                 src="./assets/placeholders-2-0/pictures/female_avatar.svg"
                 alt=""
              />
              <h3 className="text-xl mb-1 font-semibold font-heading">
                 Kelly Kapoor
              </h3>
              <span>Customer Service</span>
              <p className="mt-4 text-gray-400 leading-relaxed">
                 I work for Dunder Mifflin for a few years now.I
                 learned a lot.You know, one person department is
                 not easy to manage.
              </p>
           </div>
        </div>
     </section>
  );
}

export default Team
