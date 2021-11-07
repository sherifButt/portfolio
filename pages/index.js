import React from "react";
import { useEffect, useRef } from "react";
import Head from "next/head";
import lottie from "lottie-web";
import Imgage from 'next/image'
import { motion, AnimatePresence } from "framer-motion";
// import Accordion from "https://framer.com/m/Accordion-DzH5.js@FxlVIUWgRmYyfA7RfgAS"

export default function Home () {
  const container = useRef( null );
  useEffect( () => {
    lottie.loadAnimation( {
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require( "../public/assets/lottie/social.json" ),
    } );
  }, [] );
  return (
    <>
      <section className="py-6 px-4">
        <div className="flex flex-wrap items-center text-center lg:text-left -mx-2">
          <div className="lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none">
            <h1 className="text-7xl mb-6 leading-tight font-semibold font-heading">
              No paper plane can be made without paper
            </h1>
            <p className="mb-8 text-gray-400 leading-relaxed">
              Professional, dedicated, local. Dunder Mifflin is on its best
              patch to change the way you think about paper. That’s us - people
              who sell limitless paper in the paperless world.
            </p>
            <motion.div
              initial={ { x: -500, opacity: 0 } }
              animate={ { scale: 1.1, x: 30, opacity: 1 } }
              transition={ {
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 1
              } }>

              <a className="inline-block py-4 px-8 mr-6 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow"
                href="#" >
                Sign up <span className="font-light">for free &rarr;</span>
              </a>
              <a className="text-indigo-600 hover:underline" href="#">
                Learn more
              </a>
            </motion.div >
          </div>

          <motion.div className="lg:w-1/2 px-2" drag="x"
            dragConstraints={ { left: -50, right: 50 } } initial={ { y: 300, opacity: 0 } } animate={ { y: 0, opacity: 1 } } transition={ {
              type: "spring",
              stiffness: 260,
              damping: 20,
            } }>
            <div className="container" ref={ container }></div>
          </motion.div>

        </div>
      </section>

      <section className="py-12 px-4">
        <h2 className="text-4xl mb-2 text-center leading-tight font-semibold font-heading">
          How to get Dunder Mifflined?
        </h2>
        <p className="text-center mb-12 text-gray-400">
          Let’s open a new chapter of your paper adventure!
        </p>
        <div>
          <div className="flex flex-wrap items-center -mx-8">
            <div className="md:w-1/2 px-8 mb-8">
              {/* <Accordion /> */}
              <img
                className="w-4/5 mx-auto right"
                src="/assets/placeholders-2-0/pictures/new_ideas.svg"
                alt=""
              />
              
            </div>
            <div className="md:w-1/2 px-8 mb-8">
              <span className="text-6xl">01</span>
              <h3 className="text-2xl mb-3 font-semibold font-heading">
                Contact our Sales
              </h3>
              <p className="text-gray-400 leading-relaxed">
                During the phone call we will be able to present you all details
                of cooperation, pricing and special offers, suited for your
                company.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center -mx-8">
            <div className="md:w-1/2 px-8 mb-8 md:order-1">
              <img
                className="w-4/5 mx-auto"
                src="/assets/placeholders-2-0/pictures/certificate.svg"
                alt=""
              />
            </div>
            <div className="md:w-1/2 px-8 md:text-right">
              <span className="text-6xl">02</span>
              <h3 className="text-2xl mb-3 font-semibold font-heading">
                Sign the documents
              </h3>
              <p className="text-gray-400 leading-relaxed">
                We can also talk during business meeting, or visit your office
                anytime you want! Our employees will provide proper contracts.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center -mx-8">
            <div className="md:w-1/2 px-8 mb-8 order-none">
              <img

                className="w-4/5 mx-auto"
                src="/assets/placeholders-2-0/pictures/waiting.svg"
                alt=""
              />
            </div>
            <div className="md:w-1/2 px-8">
              <span className="text-6xl">03</span>
              <h3 className="text-2xl mb-3 font-semibold font-heading">
                Wait for delivery!
              </h3>
              <p className="text-gray-400 leading-relaxed">
                You don’t buy a pig... or shall I say a paper in a poke. The
                supplies will be delivered to your company every first Monday of
                the month.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <h2 className="text-3xl text-center mb-12 font-semibold font-heading">
          Features of Dunder Mifflin copy paper
        </h2>
        <div className="flex flex-wrap -mx-4 mb-6">
          <div className="lg:w-1/4 px-4 mb-6">
            <svg
              className="text-indigo-600 w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewbox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              ></path>
            </svg>
            <h3 className="text-xl my-3 font-semibold font-heading">
              High durability
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Forget about paper jams with our increased stability product.
              Ideal for high-quality printing and photocopying.
            </p>
          </div>
          <div className="lg:w-1/4 px-4 mb-6">
            <svg
              className="text-indigo-600 w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewbox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
              ></path>
            </svg>
            <h3 className="text-xl my-3 font-semibold font-heading">
              Versatility
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Multi-functional paper for various office needs. Snow-white sheets
              will shine bright like diamond for many years.
            </p>
          </div>
          <div className="lg:w-1/4 px-4 mb-6">
            <svg
              className="text-indigo-600 w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewbox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
            <h3 className="text-xl my-3 font-semibold font-heading">
              Value-based price
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              The best combination of quality and economy comes with our paper.
              The offer includes wides ranges of density.
            </p>
          </div>
          <div className="lg:w-1/4 px-4 mb-6">
            <svg
              className="text-indigo-600 w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewbox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
            <h3 className="text-xl my-3 font-semibold font-heading">Variety</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              The offer includes paper in wide range of density and sizes. Ideal
              for high-quality printing and photocopying.
            </p>
          </div>
        </div>
        <div className="text-center">
          <a
            className="inline-block py-4 px-8 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded"
            href="#"
          >
            Sign up for free
          </a>
          <p className="text-sm text-gray-400 mt-5">
            Your own Dunder Mifflin account will serve you in the wonderful
            voyage through our products.
          </p>
        </div>
      </section>

      <section className="pt-8 px-4 text-center">
        <div className="max-w-2xl mx-auto mb-8">
          <h2 className="text-4xl leading-tight mb-6 font-semibold font-heading">
            What do our customers have to say about our services?
          </h2>
          <p className="text-gray-400 leading-relaxed">
            See how paper can change the way you think about business.
          </p>
        </div>
        <div className="flex flex-wrap -mx-8">
          <div className="w-1/2 md:w-1/6 px-8 mb-8">
            <img src="./assets/placeholders-2-0/logos/realweb.svg" alt="" />
          </div>
          <div className="w-1/2 md:w-1/6 px-8 mb-8">
            <img src="./assets/placeholders-2-0/logos/gitscape.svg" alt="" />
          </div>
          <div className="w-1/2 md:w-1/6 px-8 mb-8">
            <img src="./assets/placeholders-2-0/logos/k-hole.svg" alt="" />
          </div>
          <div className="w-1/2 md:w-1/6 px-8 mb-8">
            <img src="./assets/placeholders-2-0/logos/plucky.svg" alt="" />
          </div>
          <div className="w-1/2 md:w-1/6 px-8 mb-8">
            <img src="./assets/placeholders-2-0/logos/1stsight.svg" alt="" />
          </div>
          <div className="w-1/2 md:w-1/6 px-8 mb-8">
            <img src="./assets/placeholders-2-0/logos/tholio.svg" alt="" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-6xl mb-6 leading-tight font-semibold font-heading">
            3,133,700
          </h2>
          <p className="text-gray-400 leading-relaxed">
            We deliver our services with passion and dedication unmatched by
            other so called "big players". We create a friendly environment for
            our workers and that’s what makes their dedication soar to the
            maximum.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 text-center">
        <h2 className="text-4xl mb-2 leading-tight font-semibold font-heading">
          Dunder Mifflin Family
        </h2>
        <p className="max-w-xl mx-auto mb-12 text-gray-400">
          Because no great company could exist without accountants, sellers,
          stock workers, and of course - paper.
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
              Started as a Sales representative at Stamford branch, moved to
              Scranton.All of us left as soon as possible except for Andy.
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
              The warehouse is not a piece of cake, man.I started there as an
              Assistant and finally got a promotion to the Marketing Director.
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
              I work for Dunder Mifflin for a few years now.I learned a lot.You
              know, one person department is not easy to manage.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 text-center">
        <div className="w-full max-w-2xl mx-auto">
          <span className="text-sm font-semibold">TAGLINE</span>
          <h2 className="text-5xl mt-2 mb-6 leading-tight font-semibold font-heading">
            No paper plane can be made without paper
          </h2>
          <a className="text-indigo-600 hover:underline" href="#">
            Learn more »
          </a>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="flex flex-wrap text-center">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <div className="h-full flex flex-col py-8 px-6 border">
              <h3 className="text-4xl mb-2 font-semibold font-heading">
                Dunder cousin
              </h3>
              <p className="mb-auto text-gray-400 leading-relaxed">
                Just enough paper for small business. Not enough to waste it on
                fluffy animals photos.
              </p>
              <h4 className="text-3xl font-semibold font-heading">$9</h4>
              <p className="mb-4 text-gray-400">per user per month</p>
              <a
                className="inline-block w-full py-3 px-5 leading-none text-center text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow"
                href="#"
              >
                Contact sales
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <div className="relative h-full flex flex-col py-8 px-6 border-4 border-green-500 shadow-lg">
              <span className="absolute top-0 right-0 py-1 px-3 m-2 text-sm text-white font-semibold bg-green-500 rounded">
                MOST POPULAR
              </span>
              <h3 className="text-4xl mb-2 font-semibold font-heading">
                Dunder son
              </h3>
              <p className="mb-8 text-gray-400 leading-relaxed">
                That’s what we’re talking about! More reams of paper is a really
                reamful choice.
              </p>
              <h4 className="text-3xl font-semibold font-heading">$49</h4>
              <p className="mb-4 text-gray-400">per user per month</p>
              <a
                className="inline-block w-full py-3 px-5 leading-none text-center text-white bg-green-500 hover:bg-green-600 font-semibold rounded shadow"
                href="#"
              >
                Contact sales
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <div className="h-full flex flex-col py-8 px-6 border">
              <h3 className="text-4xl mb-2 font-semibold font-heading">
                Dunder mother
              </h3>
              <p className="mb-auto text-gray-400 leading-relaxed">
                Big business needs big amount of paper. The best quality comes
                with Dunder Mifflin paper.
              </p>
              <h4 className="text-3xl font-semibold font-heading">$99</h4>
              <p className="mb-4 text-gray-400">per user per month</p>
              <a
                className="inline-block w-full py-3 px-5 leading-none text-center text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow"
                href="#"
              >
                Contact sales
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-center mb-12 font-semibold font-heading">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-wrap -mx-8">
            <div className="lg:w-1/2 px-8 mb-8">
              <h3 className="text-lg mb-1 font-semibold font-heading font-semibold">
                How does Dunder Mifflin paper differ from other products?
              </h3>
              <p>
                Paper produced with love, devotion, passion - is not the same
                paper. Our supplies are extra strong, and you’re going to need
                the paper-tear up-master to destroy just one sheet. It’s also
                suited for every available printer.
              </p>
            </div>
            <div className="lg:w-1/2 px-8 mb-8">
              <h3 className="text-lg mb-1 font-semibold font-heading font-semibold">
                When I will receive the products?
              </h3>
              <p>
                If you buy one of our business plans, you will receive the
                supplies every first Monday of the month. However, you can also
                purchase paper separately. Our employees will make sure that you
                will receive the products in the next business days.
              </p>
            </div>
            <div className="lg:w-1/2 px-8 mb-8">
              <h3 className="text-lg mb-1 font-semibold font-heading font-semibold">
                Why choose Dunder Mifflin instead of some huge paper producer?
              </h3>
              <p>
                You know that feeling when you are waiting on the phone for
                hours to contact your supplier? Sometimes they even have a
                waiting time music prepared for that. In Dunder Mifflin, you can
                get help immediately, and each of our customers receives an
                individual assistant.
              </p>
            </div>
            <div className="lg:w-1/2 px-8 mb-8">
              <h3 className="text-lg mb-1 font-semibold font-heading font-semibold">
                What makes Dunder Mifflin so special among other companies?
              </h3>
              <p>
                We’re dedicated to ensuring the highest level of customer
                satisfaction based on long-term professional relationships. By
                creating a positive working environment, we’re enabling our
                employees to significantly improve not only their productivity
                but what’s more important – job satisfaction.
              </p>
            </div>
            <div className="lg:w-1/2 px-8 mb-8">
              <h3 className="text-lg mb-1 font-semibold font-heading font-semibold">
                Do you offer bargains for regular clients?
              </h3>
              <p>
                Thank you for asking, great question! We highly value long-term
                relationships with our clients, and that’s why we regularly
                thank them for their trust by giving significant discounts.
                Moreover, we offer a 10% rebate for every new customer! For more
                information, please contact our HQ in Scranton.
              </p>
            </div>
            <div className="lg:w-1/2 px-8 mb-8">
              <h3 className="text-lg mb-1 font-semibold font-heading font-semibold">
                How long does it take to finalize the deal?
              </h3>
              <p>
                The whole process depends on your decision. If you sign the
                contract immediately, we can start official cooperation in the
                next two business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="flex flex-wrap items-center max-w-6xl mx-auto">
          <div className="lg:w-1/2 px-4 mb-8 lg:mb-0">
            <div className="pt-10 pb-6 px-10 bg-white rounded shadow">
              <ul>
                <li className="mb-3">
                  <span className="inline-flex items-center justify-center h-8 w-8 mr-2 border rounded-full">
                    1
                  </span>
                  <span>
                    Our paper is literally tempting you to print something
                  </span>
                </li>
                <li className="mb-3">
                  <span className="inline-flex items-center justify-center h-8 w-8 mr-2 border rounded-full">
                    2
                  </span>
                  <span>Order our services without leaving your office</span>
                </li>
                <li className="mb-3">
                  <span className="inline-flex items-center justify-center h-8 w-8 mr-2 border rounded-full">
                    3
                  </span>
                  <span>We can prepare next-day delivery if necessary</span>
                </li>
                <li className="mb-3">
                  <span className="inline-flex items-center justify-center h-8 w-8 mr-2 border rounded-full">
                    4
                  </span>
                  <span>10% discount on the other paper supplies</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-1/2 px-4 lg:pl-20">
            <h2 className="text-3xl leading-tight font-semibold font-heading">
              The real business is done on paper
            </h2>
            <p className="mt-6 mb-8 text-gray-400 leading-relaxed">
              Are you a carte blanche of the paper industry? No worries, our
              team will help you in implementation process and dispel doubts.
            </p>
            <div>
              <a
                className="inline-block py-4 px-8 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow"
                href="#"
              >
                Sign up for free
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
