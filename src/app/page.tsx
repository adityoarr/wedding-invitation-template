"use client";

import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import "flowbite";
import { initializeApp } from "firebase/app";
import firebaseConfig from "@/lib/firebaseConfig";
import { useEffect, Suspense } from "react";
import { setCookie, hasCookie, deleteCookie } from "cookies-next";

const aramisi = localFont({ src: "../fonts/aramisi.ttf" });
const app = initializeApp(firebaseConfig);

export default function Home() {
  if (hasCookie("fromWedding")) {
    deleteCookie("fromWedding");
  }

  function UrlParam() {
    useEffect(() => {
      localStorage.setItem("guest", "Kamu");
      setCookie("guestId", "Kamu");
    }, []);
    return <div></div>;
  }

  return (
    <main
      className="flex min-h-screen flex-col justify-items-center items-center"
      style={{
        backgroundImage: `url("/img/bg-cover2.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        WebkitBackgroundSize: "100% 100%",
        backgroundAttachment: "scroll",
        overflow: "hidden",
      }}
    >
      <Suspense>
        <UrlParam />
      </Suspense>

      <div className="my-auto">
        <p
          className={[
            aramisi.className,
            "text-white text-2xl md:text-3xl lg:text-4xl text-center",
          ].join(" ")}
        >
          The Wedding Of
        </p>
        <div className="mx-auto w-1/2 lg:w-[45%] mt-5">
          <Image
            src={"/img/couple.jpg"}
            width={0}
            height={0}
            alt=""
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </div>
        <p
          className={[
            aramisi.className,
            "text-white text-3xl md:text-4xl lg:text-5xl mt-5 text-center",
          ].join(" ")}
          style={{ color: "#DAA520" }}
        >
          <b>~ Kira & Lacus ~</b>
        </p>
        <p
          className={[
            aramisi.className,
            "text-white text-base md:text-md lg:text-lg text-center",
          ].join(" ")}
        >
          Kepada Yth. Bapak/Ibu/Saudara/i:
        </p>
        <div className="block mt-5 max-w-sm px-20 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="text-md font-bold tracking-tight text-gray-900 dark:text-white text-center">
            Kamu
          </h5>
        </div>

        <div className="flex flex-col items-center">
          <Link
            href={"/wedding"}
            className={[
              "mt-10 lg:mt-5 py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex",
            ].join(" ")}
            data-modal-target="loadingModal"
            data-modal-toggle="loadingModal"
          >
            <svg
              fill="#000000"
              width="20px"
              height="20px"
              viewBox="0 0 1000 1000"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              enableBackground="new 0 0 1000 1000"
              xmlSpace="preserve"
            >
              <g>
                <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
                  <path d="M4677.5,4601.8c-68.1-20-156.3-54.1-196.4-78.1c-40.1-24-945.7-689.3-2011.6-1478.7C1109.1,2035.1,496,1568.3,407.8,1476.1c-142.3-150.3-252.5-344.6-284.5-498.9c-32.1-150.3-30.1-4468.1,0-4616.4c74.1-348.6,408.7-683.2,755.4-755.4c150.3-32.1,8092.7-32.1,8242.9,0c354.6,74.1,689.2,416.8,757.4,777.4c28.1,148.3,28.1,4424,0,4572.3c-12,60.1-46.1,162.3-78.2,228.4c-122.2,260.5-176.3,304.6-2268.1,1857.4c-1074,795.4-1987.6,1466.6-2031.7,1492.7C5312.7,4637.8,4920,4671.9,4677.5,4601.8z M5138.4,4050.8c38.1-16,589.1-414.8,1226.2-887.6c639.2-472.8,1326.4-983.8,1530.8-1134l368.7-274.5H5004.1c-1793.2,0-3259.9,2-3259.9,6c0,4,42.1,38.1,96.2,76.1c52.1,36.1,725.3,537,1496.7,1108c771.4,573,1442.6,1063.9,1490.7,1088C4930,4084.8,5040.2,4090.8,5138.4,4050.8z M8696.8,1125.5c-94.2-88.1-3490.3-2608.7-3556.4-2638.8c-102.2-46.1-178.3-46.1-280.5,0c-62.1,28.1-3484.3,2570.7-3564.5,2648.8c-12,10,1450.6,18,3704.7,18C8179.9,1153.5,8720.9,1149.5,8696.8,1125.5z M2126.9-233C2896.3-810,3525.5-1284.9,3525.5-1290.9c0-8-2646.8-1987.6-2783-2081.8c-40.1-26-40.1-22-40.1,2079.8c0,1158.1,6,2105.8,14,2105.8C722.4,812.9,1357.5,342.1,2126.9-233z M9297.9-1292.9c0-1677-6-2101.8-24-2089.8c-64.1,40.1-2791.1,2077.8-2795.1,2089.8c-4,12,2779,2101.8,2805.1,2103.8C9291.9,812.9,9297.9-134.8,9297.9-1292.9z M4230.7-1813.9c104.2-78.1,232.4-164.3,286.5-192.3c196.4-100.2,484.9-130.2,735.3-78.1c172.3,38.1,266.5,86.2,488.9,250.4c100.2,74.1,192.4,142.3,206.4,150.3c16,10,531-362.6,1458.6-1053.9l1432.6-1067.9l-1913.5-6c-1051.9-2-2779-2-3838.9,0l-1925.5,6l1428.6,1065.9c785.4,587.1,1434.6,1065.9,1440.6,1067.9C4036.4-1671.6,4126.5-1735.7,4230.7-1813.9z" />
                </g>
              </g>
            </svg>
            &nbsp;&nbsp;
            <span
              className={[
                aramisi.className,
                "text-base md:text-md lg:text-lg",
              ].join(" ")}
            >
              Buka Undangan
            </span>
          </Link>

          <div
            id="loadingModal"
            data-modal-backdrop="static"
            tabIndex={-1}
            aria-hidden="true"
            className="hidden bg-gray-300 bg-opacity-70 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full"
          >
            <div className="relative p-4 w-full max-w-2xl max-h-full text-center">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="p-10 space-y-4">
                  <h2 className="inline-flex">
                    <svg
                      aria-hidden="true"
                      className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    &nbsp;&nbsp;
                    <span className={[aramisi.className, "text-xl"].join(" ")}>
                      {" "}
                      Mohon Tunggu...
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
