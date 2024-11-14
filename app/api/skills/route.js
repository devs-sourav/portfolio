export async function GET() {
    const skillsData = [
      {
        name: 'Figma',
        image: 'https://wpriverthemes.com/HTML/drake/assets/images/figma.png',
        percent: '92%',
      },
      {
        name: 'Framer',
        image: 'https://wpriverthemes.com/HTML/drake/assets/images/figma.png',
        percent: '85%',
      },
      {
        name: 'Webflow',
        image: 'https://wpriverthemes.com/HTML/drake/assets/images/figma.png',
        percent: '80%',
      },
      {
        name: 'React',
        image: 'https://wpriverthemes.com/HTML/drake/assets/images/figma.png',
        percent: '90%',
      },
      {
        name: 'WordPress',
        image: 'https://wpriverthemes.com/HTML/drake/assets/images/figma.png',
        percent: '86%',
      },
      {
        name: 'Laravel/PHP',
        image: 'https://wpriverthemes.com/HTML/drake/assets/images/figma.png',
        percent: '70%',
      },
    ];

    return new Response(JSON.stringify(skillsData), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
}
