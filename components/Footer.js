import Logo from "./Logo"

/* This example requires Tailwind CSS v2.0+ */
const navigation = [
   {
      name: "GitHub",
      href: "https://github.com/sherifButt",
      icon: props => (
         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
               fillRule="evenodd"
               d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
               clipRule="evenodd"
            />
         </svg>
      ),
   },
   {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/sherif-butt-966187234/",
      icon: props => (
         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
               fillRule="evenodd"
               d="M 2.3824 8.2152 h 4.3225 V 21.2825 h -4.3225 z m 15.4779 -0.4322 c -1.8952 0 -3.0257 0.6982 -4.2227 2.2277 v -1.7955 H 9.315 V 21.2825 h 4.3557 V 14.2002 c 0 -1.4962 0.7647 -2.9592 2.4937 -2.9592 s 2.7597 1.463 2.7597 2.926 V 21.2825 H 23.28 V 13.8677 c 0 -5.1537 -3.4912 -6.0847 -5.4197 -6.0847 z M 4.5602 1.8645 C 3.1305 1.8645 2 2.8952 2 4.1587 s 1.1305 2.2942 2.5602 2.2942 s 2.5602 -1.0307 2.5602 -2.2942 S 5.99 1.8645 4.5602 1.8645 z"
               clipRule="evenodd"
            />
         </svg>
      ),
   },
];

export default function Footer() {
  return (
    <footer className="">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">&copy; 2022 All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
