import { EyeIcon, EyeOffIcon, LockClosedIcon, MailIcon, UserIcon, UsersIcon } from "@heroicons/react/outline"

const LogInForm = () => {
  return (
     <div className="flex flex-col gap-8 justify-center items-center max-w-[27.25rem] mx-auto p-12 bg-white rounded-lg shadow-[0px_9px_20px_0px_rgba(16,87,66,0.2)]">
        <div className="flex flex-row gap-2.5 justify-start items-start overflow-hidden p-[0.94rem]">
           <p className="block text-2xl text-black  font-semibold">
              Log in or sign up
           </p>
        </div>
        <form action="" className="grid grid-cols-1 gap-y-6 ">
           {/* email */}
           <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                 <UserIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                 />
              </div>
              <input
                 type="email"
                 name="email"
                 id="email"
                 className="h-12  focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border border-gray-200 rounded-md"
                 placeholder="Email"
              />
           </div>
           {/* password */}
           <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                 <LockClosedIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                 />
                 <EyeIcon
                    className="h-5 w-5 text-gray-400 left"
                    aria-hidden="true"
                 />
              </div>
              <input
                 type="password"
                 name="password"
                 id="password"
                 autoComplete="current-password"
                 required
                 className="h-12  focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border border-gray-200 rounded-md"
                 placeholder="Password"
              />
           </div>

           <div className="flex flex-col gap-4 justify-start items-start w-[21.25rem]">
              <div>
                 <input
                    type="email"
                    name="email"
                    className="flex flex-row gap-4 justify-start items-center px-4 py-3 border-zinc-300 border rounded-DEFAULT"
                 />
                 <img
                    className="block"
                    src="./assets/image-79971.79099255873.svg"
                 />
                 <p className="block w-[15.25rem] text-sm text-neutral-400  font-light">
                    Email
                 </p>
                 <img
                    className="block"
                    src="./assets/image-56059.48391199185.svg"
                 />
              </div>
              <div className="flex flex-row gap-4 justify-start items-center px-4 py-3 border-zinc-300 border rounded-DEFAULT">
                 <img
                    className="block"
                    src="./assets/image-78529.06632208062.svg"
                 />
                 <p className="block w-[15.25rem] text-sm text-neutral-400  font-light">
                    Password
                 </p>
                 <img
                    className="block"
                    src="./assets/image-42429.675631409584.svg"
                 />
              </div>
              <div className="flex flex-row gap-[6.63rem] justify-start items-center">
                 <div className="flex flex-col gap-2.5 justify-start items-center">
                    <div className="flex flex-row gap-2 justify-start items-start">
                       <div className="rounded-DEFAULT">
                          <div>
                             <img
                                className="block"
                                src="./assets/image-27899.919588951372.png"
                             />
                             <img
                                className="block"
                                src="./assets/image-55199.285165458314.png"
                             />
                          </div>
                       </div>
                       <p className="block text-sm text-zinc-600 ">
                          Remember me
                       </p>
                    </div>
                 </div>
                 <p className="block text-sm text-indigo-400 ">
                    Forgot password
                 </p>
              </div>
           </div>
           <div className="flex flex-col gap-6 justify-center items-center w-full">
              <div className="flex flex-row gap-2.5 justify-center items-center w-[21.25rem] px-[1.63rem] py-3.5 bg-indigo-400 rounded-md">
                 <p className="block text-center text-white  font-semibold">
                    Log in
                 </p>
              </div>
              <p className="block text-center text-sm text-indigo-400 ">
                 Don’t have an account? Sign up
              </p>
           </div>
        </form>
     </div>
  );
}

export default LogInForm