"use client";
import { useEffect, useRef, useState } from "react";
import { GripVertical } from "lucide-react"; // Import Lucide icons
import Header from "./Header";
import Link from "next/link";

export default function PortfolioSection() {
  const [portfolio, setPortfolio] = useState([]);
  const [error, setError] = useState(null);
  const [isInViewport, setIsInViewport] = useState(false);
  const portfolioSectionRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // Observe the viewport
      rootMargin: "0px",
      threshold: 0.1, // Trigger when at least 50% of the element is in the viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry.intersectionRatio); // Log intersection ratio for debugging
        if (entry.intersectionRatio >= 0.1) {
          // Component is more than 50% in the viewport
          setIsInViewport(true);
        } else {
          // Component is less than 50% in the viewport
          setIsInViewport(false);
        }
      });
    }, options);

    if (portfolioSectionRef.current) {
      observer.observe(portfolioSectionRef.current);
    }

    return () => {
      if (portfolioSectionRef.current) {
        observer.unobserve(portfolioSectionRef.current);
      }
    };
  }, []);

  // Update the URL hash when isInViewport changes
  useEffect(() => {
    if (isInViewport) {
      window.location.hash = "portfolio";
    } else {
      window.location.hash = ""; // Clear hash if not in viewport
    }
  }, [isInViewport]);

  console.log(isInViewport);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await fetch("/api/portfolio");
        if (!response.ok) {
          throw new Error(`Failed to fetch portfolio data: ${response.status}`);
        }
        const data = await response.json();
        setPortfolio(data);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching portfolio:", error);
      }
    };

    fetchPortfolioData();
  }, []);

  if (error) return <p className="text-red-500 text-center">{error}</p>;
//   if (portfolio.length === 0)
//     return <p className="text-gray-500 text-center">Loading...</p>;

  return (
    <section
      ref={portfolioSectionRef}
      id="portfolio"
      data-section="portfolio"
      className="portfolio-area page-section scroll-to-page py-24 "
    >
      <div className="custom-container max-w-4xl">
        <div className="portfolio-content content-width">
          <div className="section-header mb-12">
            <div className="flex">
              <Header title="portfolio" HomeIcon={GripVertical} />
            </div>
            <h1 className="text-4xl mt-12 md:text-5xl font-light text-gray-800 dark:text-white leading-tight mb-16">
              Featured <span className="text-[#FFCC01]">Projects</span>
            </h1>
          </div>

          {/* First project (full width) */}
          <div className="row portfolio-items grid grid-cols-1 mb-14">
            {portfolio[0] && (
              <div>
                <div className="portfolio-item portfolio-full group">
                  <div className="portfolio-item-inner relative">
                    <Link href={"/"} data-lightbox="example-1">
                      <img
                        src={portfolio[0].image}
                        alt={portfolio[0].name}
                        className="w-full h-auto rounded-3xl"
                      />
                    </Link>

                    <ul className="portfolio-categories flex flex-wrap space-x-3 mt-10 absolute left-5 bottom-5">
                      {portfolio[0].categories.map((category, index) => (
                        <li
                          className="px-5 py-1.5 text-sm bg-white uppercase rounded-xl group-hover:bg-[#292929]  translate-all ease-linear duration-100"
                          key={index}
                        >
                          <Link
                            href=""
                            className="text-black group-hover:text-white  translate-all ease-linear duration-100"
                          >
                            {category}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <h2 className="text-white text-3xl mt-8 group-hover:underline transition-all ease-linear ">
                    <Link href="">{portfolio[0].name}</Link>
                  </h2>
                </div>
              </div>
            )}
          </div>

          {/* Second row with two items */}
          <div className="row portfolio-items grid grid-cols-2 gap-10 mb-14 pt-5">
            {portfolio[1] && (
              <div>
                <div className="portfolio-item portfolio-full group">
                  <div className="portfolio-item-inner relative">
                    <Link href={"/"} data-lightbox="example-1">
                      <img
                        src={portfolio[1].image}
                        alt={portfolio[1].name}
                        className="w-full h-auto rounded-3xl"
                      />
                    </Link>

                    <ul className="portfolio-categories flex flex-wrap space-x-2 mt-10 absolute left-3 bottom-3">
                      {portfolio[1].categories.map((category, index) => (
                        <li
                          className="px-5 py-1.5 text-xs bg-white uppercase rounded-xl group-hover:bg-[#292929]  translate-all ease-linear duration-100"
                          key={index}
                        >
                          <Link
                            href="/"
                            className="text-black group-hover:text-white  translate-all ease-linear duration-100"
                          >
                            {category}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <h2 className="text-white text-xl mt-4">
                    <a href="">{portfolio[1].name}</a>
                  </h2>
                </div>
              </div>
            )}

            {portfolio[2] && (
              <div>
                <div className="portfolio-item portfolio-full group">
                  <div className="portfolio-item-inner relative">
                    <Link href={"/"} data-lightbox="example-1">
                      <img
                        src={portfolio[2].image}
                        alt={portfolio[2].name}
                        className="w-full h-auto rounded-3xl"
                      />
                    </Link>

                    <ul className="portfolio-categories flex flex-wrap space-x-2 mt-10 absolute left-3 bottom-3">
                      {portfolio[2].categories.map((category, index) => (
                        <li
                          className="px-5 py-1.5 text-xs bg-white uppercase rounded-xl group-hover:bg-[#292929]  translate-all ease-linear duration-100"
                          key={index}
                        >
                          <Link
                            href=""
                            className="text-black group-hover:text-white  translate-all ease-linear duration-100"
                          >
                            {category}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <h2 className="text-white text-xl mt-4">
                    <a href="/">{portfolio[2].name}</a>
                  </h2>
                </div>
              </div>
            )}
          </div>

          {/* Remaining projects (grid layout) */}
          <div className="row portfolio-items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {portfolio.slice(3).map((project) => (
              <div key={project.id} className="col-md-12 group">
                <div className="portfolio-item portfolio-full ">
                  <div className="portfolio-item-inner relative">
                    <a href={project.image} data-lightbox="example-1">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-auto rounded-lg"
                      />
                    </a>

                    <ul className="portfolio-categories flex flex-wrap space-x-2 mt-4 absolute left-2.5 bottom-2.5">
                      {project.categories.map((category, index) => (
                        <li
                          className="px-5 py-1.5 text-xs bg-white uppercase rounded-xl group-hover:bg-[#292929]  translate-all ease-linear duration-100"
                          key={index}
                        >
                          <Link
                            href="/"
                            className="text-black group-hover:text-white  translate-all ease-linear duration-100"
                          >
                            {category}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <h2 className="text-white text-xl mt-4">
                    <a href="">{project.name}</a>
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
