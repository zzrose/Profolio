import Image from "next/legacy/image";
import { FaHtml5, FaNodeJs, FaAngleRight, FaGithub, FaLaravel } from "react-icons/fa";
import { useState, Fragment } from "react";
import { clsx } from "clsx";
import Waypoints from "../dust/waypoints";

export default function Projects() {
    let gh = "https://github.com/zzrose";
    let [projects] = useState([
      {
        name: "Dashboard of Ponds",
        description:
          `This dashboard system mainly shows data charts from different ponds in the city of Vaughan. 
          Such as Water Temperature, Depth, PH, Turbidity, TDS, TSS... In order to better observe the 
          water quality of ponds.`,
        isLeft: true,
        link: "/Dashboard-of-Ponds",
        icon: {
          name: FaNodeJs,
          fill: clsx("group-hover:fill-[#689F63]"),
        },
        image: {
          src: "/img/projects/dashboard-of-pond.webp",
          alt: "Dashboard of Ponds",
          width: 448,
          height: 168,
        },
      },
      {
        name: "EHS App",
        description:
          `This is an internal system including a website and mobile app. Foresters can upload reports when 
          they go into the forest which can help themselves keep safe and trackable by company. 
          And also the web page is mainly for the admin to monitor the employees and report overviews.`,
        isLeft: true,
        link: "/EHS",
        icon: {
          name: FaNodeJs,
          fill: clsx("group-hover:fill-[#689F63]"),
        },
        image: {
          src: "/img/projects/EHS.webp",
          alt: "EHS App",
          width: 448,
          height: 168,
        },
      },
      {
        name: "TRMS",
        description:
          `This system is used for uploading teaching materials and managing student courses. 
          Teachers can upload their own materials or create new questions online, then make them 
          into a quiz. So students can have a quiz online.`,
        isLeft: true,
        link: "/TRMS",
        icon: {
          name: FaNodeJs,
          fill: clsx("group-hover:fill-[#689F63]"),
        },
        image: {
          src: "/img/projects/TRMS.webp",
          alt: "TRMS",
          width: 448,
          height: 168,
        },
      },
    ]);
    return (
      <>
        {/* Projects Starts */}

        <div className="px-6">
          <Waypoints target={'toprojects'}>
            <section id="projects" className="pt-28">
              <h1 className="text-2xl font-bold text-center" data-aos="fade-up">
                Some of My Projects
              </h1>
              <div className="flex justify-center">
                <span
                  className="bg-[#6C63FF] w-[150px] h-[5px]"
                  data-aos="fade-up"
                  data-aos-delay="400"
                ></span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-4">
                {projects.map(
                  ({ name, description, isLeft, link, icon, image }) => {
                    return (
                      <Fragment key={name}>
                        <div className="flex justify-center">
                          <div
                            className={`group hover:scale-110 ${
                              isLeft ? "hover:rotate-6" : "hover:-rotate-6"
                            } transition delay-75`}
                            href={gh + link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div
                              className="card max-w-md bg-base-100 shadow-xl image-full"
                              data-aos="fade-up"
                            >
                              <figure>
                                <Image {...image} />
                              </figure>
                              <div className="card-body">
                                <h2 className="card-title">
                                  <icon.name
                                    className={`${icon.fill} transition ease-in-out delay-150`}
                                  />
                                  {name}
                                </h2>
                                <p>{description}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div></div>
                        <div></div>
                      </Fragment>
                    );
                  }
                )}
              </div>

              <div className="text-center mt-20">
                <a
                  className="btn btn-wide"
                  href="https://github.com/ZzRose?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="mr-2 w-5 h-5" />
                  View all my Porjects. <FaAngleRight className="ml-2" />
                </a>
              </div>
            </section>
          </Waypoints>
        </div>

        {/* Projects Ends */}
      </>
    );
}