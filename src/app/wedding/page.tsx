"use client";

import Image from "next/image";
import localFont from "next/font/local";
import { Bounce, Fade, JackInTheBox, Slide, Zoom } from "react-awesome-reveal";
import Link from "next/link";
import "flowbite";
import Countdown from "react-countdown";
import NoSSR from "@mpth/react-no-ssr";
import { initializeApp } from "firebase/app";
import { useState, useEffect } from "react";
import firebaseConfig from "@/lib/firebaseConfig";
import { setCookie, getCookie } from "cookies-next";
import { useQRCode } from "next-qrcode";

const adine = localFont({ src: "../../fonts/Adine Kirnberg.ttf" });
const aramisi = localFont({ src: "../../fonts/aramisi.ttf" });
const bungasai = localFont({ src: "../../fonts/Bungasai.ttf" });
const elsie = localFont({ src: "../../fonts/Elsie-Regular.ttf" });
const lucien = localFont({ src: "../../fonts/Lucian Schoenschrift CAT.ttf" });
const stylish = localFont({
  src: "../../fonts/StylishCalligraphyDemo-XPZZ.ttf",
});
const bright = localFont({
  src: "../../fonts/BrightDiamondPersonalUseOnl-OV2Ze.otf",
});
const app = initializeApp(firebaseConfig);

export default function Wedding() {
  const [isSended, setIsSended] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState("");
  const [guest, setGuest] = useState("");
  const { Canvas } = useQRCode();

  useEffect(() => {
    setGuest(localStorage.getItem("guest")!);

    // playSound
    const lagu = document.getElementById("myAudio") as HTMLAudioElement;
    lagu.autoplay = true;
    lagu.loop = true;
    lagu.controls = false;
    setCookie("fromWedding", "iya");
  }, []);

  function menuClick(param: string) {
    if (typeof document !== "undefined") {
      document.getElementById(param)!.scrollIntoView({ behavior: "smooth" });
    }
  }

  function imageClick(param: string) {
    setSelectedGallery(param);
  }

  function kirimPesan() {
    if (typeof document !== "undefined") {
      const nama = document.getElementById("nama") as HTMLInputElement;
      const pesan = document.getElementById("message") as HTMLTextAreaElement;
      const kehadiran = document.querySelector(
        'input[name="kehadiran"]:checked'
      ) as HTMLInputElement;

      if (nama.value && kehadiran.value && pesan.value) {
        nama.value = "";
        pesan.value = "";

        bacaPesan();
      } else {
        alert("Mohon isi semua data yang diperlukan");
      }
    }
  }

  function bacaPesan() {
    setIsSended(true);
  }

  return (
    <main
      className="flex min-h-screen flex-col justify-items-center items-center"
      style={{
        backgroundImage: `url("/img/bg.jpeg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        WebkitBackgroundSize: "100% 100%",
        backgroundAttachment: "scroll",
      }}
      id="beranda"
    >
      <Image
        src={"/img/top2.png"}
        width={0}
        height={0}
        alt=""
        sizes="100vw"
        style={{ width: "100%", height: "12rem" }}
        id="beranda"
      />

      <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg p-2">
        <div className="text-right text-base text-white">
          <Fade triggerOnce direction="down">
            <p className="-mt-32 mb-5 pr-3">
              <span
                className={[
                  bright.className,
                  "text-2xl md:text-3xl lg:text-5xl",
                ].join(" ")}
              >
                <b>Assalamu&lsquo;alaikum Wr. Wb.</b>
              </span>
            </p>
          </Fade>
        </div>

        <div
          className={[
            "font-mono -mt-3 text-center justify-items-center items-center max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700",
          ].join(" ")}
          style={{
            backgroundImage: `url("/img/bg-card.jpeg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            WebkitBackgroundSize: "100% 100%",
          }}
        >
          <Zoom triggerOnce direction="up">
            <p className="mb-2 text-base md:text-lg lg:text-xl">
              Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i
              serta kerabat sekalian untuk menghadiri acara pernikahan kami:
            </p>
          </Zoom>
          <div
            className="relative mt-5 pt-5 pb-5 md:pt-14 md:pb-14 lg:pt-20 lg:pb-20"
            id="mempelai"
          >
            <Zoom triggerOnce direction="down">
              <div className="w-3/6 md:w-1/4 lg:w-1/4 mx-auto">
                <Image
                  src={"/img/woman.jpg"}
                  width={0}
                  height={0}
                  alt=""
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <p className="mb2 mt-2">
                <span
                  className={[
                    adine.className,
                    "text-4xl md:text-5xl lg:text-6xl text-[#DAA520]",
                  ].join(" ")}
                >
                  <b>Lacus Clyne</b>
                </span>
                <br />
                <span className="text-sm md:text-base lg:text-base">
                  Putri dari <br /> Bapak ...
                  <br />
                  Ibu ...
                </span>
              </p>
            </Zoom>
            <Zoom triggerOnce>
              <p
                className={[
                  stylish.className,
                  "m-5 text-xl md:text-2xl lg:text-2xl",
                ].join(" ")}
              >
                <b>~ With ~</b>
              </p>
            </Zoom>
            <Zoom triggerOnce direction="up">
              <div className="w-3/6 md:w-1/4 lg:w-1/4 mx-auto">
                <Image
                  src={"/img/man.jpg"}
                  width={0}
                  height={0}
                  alt=""
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <p className="mb-2 mt-2">
                <span
                  className={[
                    adine.className,
                    "text-4xl md:text-5xl lg:text-6xl text-[#DAA520]",
                  ].join(" ")}
                >
                  <b>Kira Yamato</b>
                </span>
                <br />
                <span className="text-sm md:text-base lg:text-base">
                  Putra dari
                  <br />
                  Bapak ...
                  <br />
                  Ibu ...
                </span>
              </p>
            </Zoom>
          </div>
          <div id="acara" className="mt-10">
            <Bounce triggerOnce>
              <Image
                src={"/img/divider2.png"}
                width={0}
                height={0}
                alt=""
                sizes="100vw"
                style={{ width: "75%", height: "5rem" }}
                className="mx-auto"
              />
            </Bounce>
            <Zoom triggerOnce direction="up">
              <p className="mb-2 mt-10 text-base md:text-lg lg:text-xl">
                Dengan memohon rahmat dan ridho Allah SWT kami bermaksud
                menyelenggarakan acara pernikahan kami :
              </p>
            </Zoom>
            <Slide triggerOnce direction="left">
              <span
                className={[
                  bungasai.className,
                  "text-base md:text-lg lg:text-xl",
                ].join(" ")}
              >
                Akad
              </span>
              <br />
              <NoSSR>
                <Countdown
                  autoStart
                  date={1719709200000}
                  className="text-3xl"
                ></Countdown>
              </NoSSR>
              <br />
              <span className="text-base md:text-lg lg:text-xl">
                Minggu, 30 Juni 2024
                <br />
                Pukul 08.00 - 09.00 WIB
              </span>
            </Slide>
            <br />
            <br />
            <Slide triggerOnce direction="right">
              <span
                className={[
                  bungasai.className,
                  "text-base md:text-lg lg:text-xl",
                ].join(" ")}
              >
                Resepsi
              </span>
              <br />
              <NoSSR>
                <Countdown
                  autoStart
                  date={1719720000000}
                  className="text-3xl"
                ></Countdown>
              </NoSSR>
              <br />
              <span className="text-base md:text-lg lg:text-xl">
                Minggu, 30 Juni 2024
                <br />
                Pukul 11.00 - 13.00 WIB
              </span>
            </Slide>
            <br />
            <br />
            <Zoom triggerOnce>
              <span
                className={[
                  bungasai.className,
                  "text-base md:text-lg lg:text-xl",
                ].join(" ")}
              >
                Lokasi Akad & Resepsi
              </span>
              <br />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.8075420688656!2d112.73550067359238!3d-7.26273137135351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f95d8d585dff%3A0x8eb808da01602d4!2sSheraton%20Surabaya%20Hotel%20%26%20Towers!5e0!3m2!1sid!2sid!4v1719985251009!5m2!1sid!2sid"
                width="100%"
                height="auto"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full md:w-[32rem] lg:w-[40rem] mx-auto"
              ></iframe>
              <br />
              <span className="text-base md:text-lg lg:text-xl">
                Nama Venue
                <br />
                Alamat Venue
              </span>
            </Zoom>
          </div>
          <JackInTheBox triggerOnce>
            <Link
              href={"/img/couple-old.jpg"}
              download
              target="_blank"
              className="inline-flex md:text-lg lg:text-xl mt-5 text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <svg
                className="w-4 h-4 text-white-500 dark:text-white-400 lg:mt-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
              &nbsp;&nbsp;
              <span className={elsie.className}>Save the date</span>
            </Link>
          </JackInTheBox>
        </div>

        <div className="text-center mt-10 mb-5" id="galeri">
          <Fade triggerOnce direction="up">
            <span
              className={[
                lucien.className,
                "text-white text-5xl mx-auto text-center",
              ].join(" ")}
            >
              ~ Galeri Photo ~
            </span>
          </Fade>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          <Fade triggerOnce direction="up" cascade>
            <button
              style={{ border: 0, backgroundColor: "transparent" }}
              data-modal-target="default-modal"
              data-modal-toggle="default-modal"
              onClick={() => imageClick("/img/couple-old.jpg")}
            >
              <Image
                src={"/img/couple-old.jpg"}
                width={0}
                height={0}
                alt=""
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="mx-auto"
              />
            </button>

            <button
              style={{ border: 0, backgroundColor: "transparent" }}
              data-modal-target="default-modal"
              data-modal-toggle="default-modal"
              onClick={() => imageClick("/img/man.jpg")}
            >
              <Image
                src={"/img/man.jpg"}
                width={0}
                height={0}
                alt=""
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="mx-auto"
              />
            </button>

            <button
              style={{ border: 0, backgroundColor: "transparent" }}
              data-modal-target="default-modal"
              data-modal-toggle="default-modal"
              onClick={() => imageClick("/img/woman.jpg")}
            >
              <Image
                src={"/img/woman.jpg"}
                width={0}
                height={0}
                alt=""
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="mx-auto"
              />
            </button>
          </Fade>
        </div>

        <div className="text-center mt-10 mb-5 text-white" id="rsvp">
          <Fade triggerOnce direction="up">
            <span
              className={[
                lucien.className,
                "text-5xl mx-auto text-center",
              ].join(" ")}
            >
              ~ RSVP ~
            </span>
            <span
              className={[
                aramisi.className,
                "text-base md:text-lg lg:text-2xl",
              ].join(" ")}
            >
              Buku Tamu & Ucapan
            </span>

            <form className="max-w-lg mx-auto mt-5">
              <div className="mb-5">
                <label
                  htmlFor="nama"
                  className={[
                    aramisi.className,
                    "block mb-2 text-base md:text-lg lg:text-xl text-left",
                  ].join(" ")}
                >
                  <b>Nama Anda</b>
                </label>
                <input
                  type="text"
                  id="nama"
                  className="bg-gray-400 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  disabled
                  value={guest}
                />
              </div>
              <div className="mb-5">
                <label
                  className={[
                    aramisi.className,
                    "block mb-2 text-base md:text-lg lg:text-xl text-left",
                  ].join(" ")}
                >
                  <b>Kehadiran</b>
                </label>
                <fieldset>
                  <legend className="sr-only">Info Kehadiran</legend>

                  <div className="flex items-center mb-4">
                    <input
                      id="hadir"
                      type="radio"
                      name="kehadiran"
                      value="Hadir"
                      defaultChecked={true}
                      className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="hadir"
                      className={[
                        aramisi.className,
                        "block ms-2 text-base md:text-lg lg:text-xl text-left",
                      ].join(" ")}
                    >
                      Hadir
                    </label>
                  </div>

                  <div className="flex items-center mb-4">
                    <input
                      id="tidak-hadir"
                      type="radio"
                      name="kehadiran"
                      value="Tidak Hadir"
                      className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="tidak-hadir"
                      className={[
                        aramisi.className,
                        "block ms-2 text-base md:text-lg lg:text-xl text-left",
                      ].join(" ")}
                    >
                      Tidak Hadir
                    </label>
                  </div>
                </fieldset>
                <div className="mb-5">
                  <label
                    htmlFor="message"
                    className={[
                      aramisi.className,
                      "block mb-2 text-base md:text-lg lg:text-xl text-left",
                    ].join(" ")}
                  >
                    <b>Ucapan/Pesan</b>
                  </label>
                  <br />
                  <textarea
                    id="message"
                    disabled={isSended ? true : false}
                    rows={4}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  ></textarea>
                </div>
              </div>

              {isSended ? (
                <button
                  disabled
                  type="button"
                  className={[
                    aramisi.className,
                    "text-white bg-gray-400 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center",
                  ].join(" ")}
                >
                  <i>Terima kasih anda sudah melakukan RSVP + ucapan</i>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => kirimPesan()}
                  className={[
                    aramisi.className,
                    "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
                  ].join(" ")}
                >
                  Kirim
                </button>
              )}
            </form>
          </Fade>
        </div>

        <div
          className="text-center justify-items-center items-center max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          style={{
            backgroundImage: `url("/img/bg-card.jpeg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            WebkitBackgroundSize: "100% 100%",
          }}
        >
          <Fade triggerOnce delay={0.5}>
            <p
              className={[
                aramisi.className,
                "mb-2 text-base md:text-lg lg:text-xl",
              ].join(" ")}
            >
              Dan diantara tanda-tanda kekuasaan-Nya ialah diciptakan-Nya untuk
              pasangan hidup dari jenismu sendiri, supaya kamu mendapat
              ketenangan dan dijadikan-Nya diantara kamu kasih sayang.
              Sesungguhnya yang demikian itu merupakan tanda-tanda kebesaran-Nya
              bagi orang-orang yang berfikir.
              <br />
              <b>(QS. Ar-Rum: 21)</b>
            </p>
          </Fade>
        </div>

        <div className="text-center text-base md:text-lg lg:text-xl text-white">
          <Fade triggerOnce direction="up" delay={0.4}>
            <p className={[elsie.className, "m-5"].join(" ")}>
              Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
              Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do&lsquo;a
              restu
              <br />
            </p>
          </Fade>
        </div>

        <div className="text-base md:text-lg lg:text-xl text-white">
          <Fade triggerOnce direction="up" delay={0.8}>
            <p className="m-5">
              <span
                className={[
                  bright.className,
                  "text-2xl md:text-3xl lg:text-5xl",
                ].join(" ")}
              >
                <b>Wassalamu&lsquo;alaikum Wr. Wb.</b>
              </span>
            </p>
          </Fade>
        </div>

        <div
          id="checkin"
          className="mx-auto mt-20 text-center justify-items-center items-center w-full md:w-3/4 lg:w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          style={{
            backgroundImage: `url("/img/bg-card.jpeg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            WebkitBackgroundSize: "100% 100%",
          }}
        >
          <Fade triggerOnce delay={0.5}>
            <p className="font-mono text-center">
              Gunakan QrCode ini untuk check-in di lokasi
            </p>
            <div className="flex flex-col items-center">
              <Canvas
                text={getCookie("guestId") as string}
                options={{
                  margin: 2,
                  scale: 5,
                  width: 150,
                  color: {
                    dark: "#010599FF",
                    light: "#FFFFFF",
                  },
                }}
                logo={{
                  src: "/img/couple.jpg",
                  options: {
                    width: 35,
                    x: undefined,
                    y: undefined,
                  },
                }}
              />
            </div>
          </Fade>
        </div>

        <div className="fixed z-50 w-screen h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-1 left-1/2 dark:bg-gray-700 dark:border-gray-600">
          <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
            <button
              onClick={() => menuClick("mempelai")}
              className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
            >
              <svg
                className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z"
                  clipRule="evenodd"
                />
              </svg>
              <span
                className={[
                  elsie.className,
                  "text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500",
                ].join(" ")}
              >
                Mempelai
              </span>
            </button>

            <button
              onClick={() => menuClick("acara")}
              type="button"
              className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
            >
              <svg
                className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                  clipRule="evenodd"
                />
              </svg>

              <span
                className={[
                  elsie.className,
                  "text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500",
                ].join(" ")}
              >
                Acara
              </span>
            </button>

            <button
              onClick={() => menuClick("galeri")}
              type="button"
              className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
            >
              <svg
                className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 6H5m2 3H5m2 3H5m2 3H5m2 3H5m11-1a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2M7 3h11a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm8 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                />
              </svg>

              <span
                className={[
                  elsie.className,
                  "text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500",
                ].join(" ")}
              >
                Galeri
              </span>
            </button>

            <button
              onClick={() => menuClick("rsvp")}
              type="button"
              className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
            >
              <svg
                className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m3.62 6.389 8.396 6.724 8.638-6.572-7.69-4.29a1.975 1.975 0 0 0-1.928 0L3.62 6.39Z" />
                <path d="m22 8.053-8.784 6.683a1.978 1.978 0 0 1-2.44-.031L2.02 7.693a1.091 1.091 0 0 0-.019.199v11.065C2 20.637 3.343 22 5 22h14c1.657 0 3-1.362 3-3.043V8.053Z" />
              </svg>

              <span
                className={[
                  elsie.className,
                  "text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500",
                ].join(" ")}
              >
                RSVP
              </span>
            </button>

            <button
              onClick={() => menuClick("checkin")}
              type="button"
              className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
            >
              <svg
                className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 0 0-1 1H6a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2a1 1 0 0 0-1-1H9Zm1 2h4v2h1a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2h1V4Zm5.707 8.707a1 1 0 0 0-1.414-1.414L11 14.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z"
                  clipRule="evenodd"
                />
              </svg>

              <span
                className={[
                  elsie.className,
                  "text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500",
                ].join(" ")}
              >
                Checkin
              </span>
            </button>
          </div>
        </div>
      </div>
      <Image
        src={"/img/bottom3.png"}
        width={0}
        height={0}
        alt=""
        sizes="100vw"
        style={{ width: "75%", height: "5.3rem", opacity: 0.7 }}
        className="mt-5 mb-6 md:mt-10 lg:mt-10"
      />

      <audio id="myAudio" style={{ display: "none" }}>
        <source src={"/audio/audio.mp3"} type="audio/mpeg" />
      </audio>

      <div
        id="default-modal"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden bg-gray-300 bg-opacity-70 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full md:inset-0 max-h-full"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              {selectedGallery && (
                <Image
                  src={selectedGallery}
                  id="galeri-modal"
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="mx-auto"
                  width={0}
                  height={0}
                  alt="selected gallery"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
