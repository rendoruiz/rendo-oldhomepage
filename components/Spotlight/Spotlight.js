import { useRouter } from "next/router";
import { scroller } from 'react-scroll'

const Spotlight = () => {
  return (  
    <section className="px-5">
      <div className="mx-auto py-20 w-full max-w-screen-sm">
        <div className="grid gap-1 mb-10">
          <h1 className="font-bold text-4xl text-gray-900 dark:text-white">
            Hello, I'm Rendo.
          </h1>
          <p className="font-bold text-xl text-gray-500 dark:text-gray-300">
            I do front-end dev.
          </p>
        </div>
          
        <div className="grid gap-5 leading-loose">
          <p>
            I am the front-end developer lead at BridgeIT Tech Solutions. I graduated last year from NAIT under the Digital Media & IT program in the Computer Software Development concentration. I enjoy working on front-end and also on the back-end when needed.
          </p>
          <p>
            My current toolset and techstack includes: HTML, CSS, JavaScript, PHP, Tailwind CSS, Laravel, Alpine.js, React, Next.js, Git, GitHub, Visual Studio Code.
          </p>

          <p>
            <span>Scroll down for </span>
            <ScrollTrigger 
              anchor="portfolio"
              displayText="my portfolio"
            />,
            <br />
            <span>and a little bit more for </span>
            <ScrollTrigger 
              anchor="contact"
              displayText="my contact"
            />.
          </p>
        </div>
      </div>
    </section>
  );
}

const ScrollTrigger = ({ anchor, displayText }) => {
  const router = useRouter();

  const scrollToAnchor = (id) => {
    const scrollDuration = 800;

    // scroll to element
    scroller.scrollTo(id, { 
      duration: scrollDuration, 
      delay: 0, 
      smooth: 'easeInOutCubic' 
    });

    // change route after scrolling
    setTimeout(() => {
      router.push(`/#${id}`, undefined, { shallow: true });
    }, scrollDuration);
  }

  return (
    <span
      className="relative font-bold text-primary cursor-pointer sm:hover:after:bg-primary sm:hover:after:scale-x-100 sm:after:absolute sm:after:inset-x-0 sm:after:bottom-0 sm:after:rounded-full sm:after:mx-auto sm:after:h-1 sm:after:w-full sm:after:bg-primary/40 sm:after:scale-x-[0.25] sm:after:transition sm:after:ease-out sm:after:duration-200 dark:sm:after:bg-primary/70" 
      onClick={() => scrollToAnchor(anchor)}
    >
      { displayText }
    </span>
  );
}
 
export default Spotlight;