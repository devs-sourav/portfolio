// This file serves the portfolio data

export async function GET() {
    // Sample portfolio data
    const portfolioData = [
      {
        id: 0,
        name: "Bureau - Architecture Studio Website",
        image: "https://wpriverthemes.com/HTML/drake/assets/images/portfolio1.jpg",
        categories: ["Figma", "Framer", "WordPress"],
      },
      {
        id: 1,
        name: "Moonex WordPress Theme",
        image: "https://wpriverthemes.com/HTML/drake/assets/images/portfolio1.jpg",
        categories: ["WordPress", "Laravel/PHP"],
      },
      {
        id: 2,
        name: "Taskly Dashboard",
        image: "https://wpriverthemes.com/HTML/drake/assets/images/portfolio1.jpg",
        categories: ["Figma", "Webflow"],
      },
      {
        id: 3,
        name: "Hinterland - Real Estate Site Redesign",
        image: "https://wpriverthemes.com/HTML/drake/assets/images/portfolio1.jpg",
        categories: ["Figma", "React"],
      },
      {
        id: 4,
        name: "Lewis Portfolio Framer Template",
        image: "https://wpriverthemes.com/HTML/drake/assets/images/portfolio1.jpg",
        categories: ["Framer"],
      },
    ];
  
    return new Response(JSON.stringify(portfolioData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
  