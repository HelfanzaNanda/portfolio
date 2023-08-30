"use client";
import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Link from "next/link";
import Cursor from "../components/Cursor";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
    // Ref
    const homeRef = useRef();
    const aboutRef = useRef();
    const skillRef = useRef();
    const experienceRef = useRef();
    const projectRef = useRef();
    const textOne = useRef();
    const textTwo = useRef();
    const textThree = useRef();
    const textFour = useRef();

    // Handling Scroll
    const handleHomeScroll = () => {
        window.scrollTo({
            top: homeRef.current.offsetTop,
            left: 0,
            behavior: "smooth",
        });
    };
    
    

    const handleAboutScroll = () => {
        window.scrollTo({
            top: aboutRef.current.offsetTop,
            left: 0,
            behavior: "smooth",
        });
    };

    const handleSkillScroll = () => {
        window.scrollTo({
            top: skillRef.current.offsetTop,
            left: 0,
            behavior: "smooth",
        });
    };

    const handleExperienceScroll = () => {
        window.scrollTo({
            top: experienceRef.current.offsetTop,
            left: 0,
            behavior: "smooth",
        });
    };
    const handleProjectScroll = () => {
        window.scrollTo({
            top: projectRef.current.offsetTop,
            left: 0,
            behavior: "smooth",
        });
    };

    

    useIsomorphicLayoutEffect(() => {
        stagger(
            [textOne.current, textTwo.current, textThree.current, textFour.current],
            { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
            { y: 0, x: 0, transform: "scale(1)" }
        );
    }, []);

    return (
        <div className="relative">
            {/* <Cursor /> */}
            <Head>
                <title>{data.name}</title>
            </Head>
            {/* This button should not go into production */}
            {/* {process.env.NODE_ENV === "development" && (
                <div className="fixed bottom-5 right-5">
                    <Link href="/edit">
                        <Button type="primary">Edit Data</Button>
                    </Link>
                </div>
            )} */}
            <div className="gradient-circle"></div>
            <div className="gradient-circle-bottom"></div>

            <div className="container mx-auto mb-10">
                <Header
                    // handleWorkScroll={handleWorkScroll}
                    // handleAboutScroll={handleAboutScroll}
                    handleHomeScroll={handleHomeScroll}
                    handleAboutScroll={handleAboutScroll}
                    handleSkillScroll={handleSkillScroll}
                    handleExperienceScroll={handleExperienceScroll}
                    handleProjectScroll={handleProjectScroll}
                    // handleContactScroll={handleContactScroll}
                />
                <div className="laptop:mt-20 mt-10" ref={homeRef}>
                    <div className="mt-5">
                        <h1
                            ref={textOne}
                            className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
                        >
                            {data.headerTaglineOne}
                        </h1>
                        <h1
                            ref={textTwo}
                            className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
                        >
                            {data.headerTaglineTwo}
                        </h1>
                        <h1
                            ref={textThree}
                            className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
                        >
                            {data.headerTaglineThree}
                        </h1>
                        <h1
                            ref={textFour}
                            className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
                        >
                            {data.headerTaglineFour}
                        </h1>
                    </div>

                    <Socials className="mt-2 laptop:mt-5" />
                </div>
                <div className="mt-10 p-2 laptop:p-0" ref={aboutRef}>
                    <h1 className="tablet:m-10 text-2xl text-bold">About.</h1>
                    {/* <div className="divide-y md:divide-none divide-gray-400 gap-y-3"> */}
                        <p className="tablet:m-10 mt-2 text-xl laptop:text-xl w-full laptop:w-full">
                            {data.aboutme}
                        </p>
                        <p className="tablet:m-10 mt-2 text-xl laptop:text-xl w-full laptop:w-full">
                            {data.subTitle}
                        </p>
                        <p className="tablet:m-10 mt-2 text-xl laptop:text-xl w-full laptop:w-full">
                            {data.description}
                        </p>
                    {/* </div> */}
                </div>

                <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={experienceRef}>
                    <h1 className="tablet:m-10 text-2xl text-bold">Experience.</h1>
                    <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
                        <Experience experiences={data.experiences} />
                    </div>
                </div>
                <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={skillRef}>
                    <h1 className="tablet:m-10 text-2xl text-bold">Skills.</h1>
                    <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
                        <Skills skills={data.skills} />
                    </div>
                </div>

                <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={projectRef}>
                    <h1 className="text-2xl text-bold">Portfolio</h1>
                    <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
                        {data.projects.map((project) => (
                            <WorkCard
                                key={project.id}
                                img={project.imageSrc}
                                name={project.title}
                                description={project.description}
                                technologies={project.technologies}
                                onClick={() => window.open(project.url)}
                            />
                        ))}
                    </div>
                </div>
                
                
                <Footer />
            </div>
        </div>
    );
}