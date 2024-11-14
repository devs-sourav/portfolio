// app/api/resume/route.js

export async function GET(request) {
  // Define resume data as a JavaScript object
  const resumeData = {
    header: {
      subtitle: "Resume",
      title: "Work Experience",
    },
    timeline: [
      {
        id: 1,
        date: "01 June, 2024 - Present",
        roles: [
          {
            title: "Associated Software Engineer",
            company: "Okobiz",
            link: "http://www.okobiz.com",
            description:
              "Responsible for designing and developing UI components in Framer.",
          },
        ],
      },
    ],
  };

  // Return JSON response with status 200
  return new Response(JSON.stringify(resumeData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
