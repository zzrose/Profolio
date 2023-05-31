import Image from "next/image";
import sAge from "s-age";
import { useState, useEffect } from "react";
import Waypoints from "../dust/waypoints";

export default function About() {
  let umur = sAge("Nov 16 2007");
  let [gh, setGh] = useState('Fetching...');
  useEffect(() => {
    (async() => {
      try {
        const res = await fetch("https://github.com/zzrose");
        const data = await res.json();
        setGh(data);
      } catch {
        setGh({ public_repos: "several" })
      }
    })()
  }, [])

  return (
    <>
      {/* About Starts */}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        fill="#e3f2fd"
      >
        <path
          fillOpacity={1}
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-[#e3f2fd] px-6">
        <Waypoints target={'toabout'}>
          <section id="about" className="text-black py-20">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex justify-center md:mb-0 mb-20 py-5">
                <Image
                  className="z-50"
                  src="/img/about.svg"
                  alt="about me"
                  width={200}
                  height={200}
                  data-aos="fade-up-right"
                />
                <Image
                  src="/img/blob/2.svg"
                  className="mt-5 md:mt-20 absolute"
                  alt="blob"
                  width={350}
                  height={350}
                  data-aos="fade-up-right"
                  data-aos-duration="1500"
                />
              </div>
              <div className="ml-10 mr-10 pt-10">
                <h1 className="text-3xl font-bold leading-9" data-aos="fade-up">
                  About Me
                </h1>
                <div
                  className="bg-[#6C63FF] w-[150px] h-[5px]"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                ></div>
                <p className="mt-2">
                  I am a <span className="font-bold">full-stack software developer</span> based in Toronto with 11 years of experience in 
                  computer science and 5 years of professional experience in developing, maintaining, and 
                  building different projects, and working in an <span className="font-bold">Agile team</span>. I’m currently working for 
                  FRMG, which is engaged in forest research and tree data collection. My main job is 
                  developing a website called Geospatial Platform, and maintaining the current app 
                  including EHS App and FireFridge App and cloud server. And my last job was at Luci.AI, 
                  in that company, my job was developing a system called Dashboard of Ponds. This dashboard 
                  system mainly shows the data from different ponds in the city of Vaughan. So users can 
                  monitor every data of these ponds. Before that, I worked in SavvyPro Edu. our main project 
                  is an ERP system. Hundreds of employees use it every day. Such as call center, course schedule, 
                  student attendance, and employee salary accounting. Those are my experiences and my main 
                  programming language is JavaScript including React.js, Vue.js, and Node.js. And also I have 
                  experience with UI design, database design, cloud server development, and mobile app development.
                </p>
                {/* <p className="mt-5">
                  One more thing, I have created{" "}
                  <span className="font-bold">{gh.public_repos}</span> public
                  repository on my Github. Various repositories such as
                  templates or even just a package to make things easier. There
                  are several serious projects but now they are rarely developed
                  due to conflicts with school work.
                </p> */}
                {/* <div class="tooltip tooltip-open tooltip-right mt-5" data-tip={`${gh.followers} Followers, ${gh.following} Following`}>
                <button class="btn"><FaGithub className="mr-2 w-5 h-5" /> Github</button>
              </div> */}
              </div>
            </div>
          </section>
        </Waypoints>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        fill="#e3f2fd"
      >
        <path
          fillOpacity={1}
          d="M0,160L40,138.7C80,117,160,75,240,64C320,53,400,75,480,106.7C560,139,640,181,720,197.3C800,213,880,203,960,170.7C1040,139,1120,85,1200,80C1280,75,1360,117,1400,138.7L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>

      {/* About Ends */}
    </>
  );
}