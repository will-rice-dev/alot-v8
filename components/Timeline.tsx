"use client";

import AboutPopup from "./AboutPopup";

export default function Timeline() {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <li>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start md:text-end mb-10">
          <time className="font-mono italic">June 26, 2023</time>
          <div>
            <AboutPopup title="Home Again" images={[1,2]} />
          </div>
          We return from our fabulous honeymoon refreshed and ready to move. Of
          course, at the same time I had big plans of finally starting and
          finishing my secret anniversary project. I knew that you had made good
          headway on yours and I was excited to do the same.
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end mb-10">
          <time className="font-mono italic">July 7, 2023</time>
          <div>
            <AboutPopup title="Appendicitis Eve" images={[3,4,5]} />
          </div>
          After an incredibly fast and busy two weeks, we are not far away from
          both our move and our anniversary. I had begun to run into some
          technical issues moving forward with my plan to put something together
          that encompassed our texting relationship over our five years of
          dating. I was also beginning to feel a bit ill, but surely that was
          nothing. I spend all of Friday not working for 3M at all while you
          help Hannah and Sean move, instead I spend hours and hours focusing on
          getting these texts to work. At this point I am beginning to panic and
          think about backup plans for new anniversary project ideas.
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start md:text-end mb-10">
          <time className="font-mono italic">July 8, 2023</time>
          <div className="text-lg font-black">Appendicitis</div>I have a feeling
          that you remember this one pretty well.
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end mb-10">
          <time className="font-mono italic">July 17, 2023</time>
          <div className="text-lg font-black">We Move!</div>
          Such an exciting time, such a lovely place.
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start md:text-end mb-10">
          <time className="font-mono italic">August 7, 2023</time>
          <div className="text-lg font-black">The Car is Ours!</div>
          Capping off a crazy few weeks, the car is finally in our name! At this
          point I am also worry again about the Anniversary project. I am
          fearful of it and know that I will not complete it by the one month
          late mark. For this, I feel guilt.
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end mb-10">
          <time className="font-mono italic">August 16, 2023</time>
          <div className="text-lg font-black">Storm Knocks Out Power</div>
          For several days we are without power. It is around this time that I
          explain some of my fears and feelings around the Anniversary Project.
          You, unsurprisingly, are an incredible listener and even better
          partner. You explain that you are disappointed but also that you
          understand. I feel leave feeling so freaking good knowing that I
          married such an understanding person.
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start md:text-end mb-10">
          <time className="font-mono italic">July 8, 2023</time>
          <div className="text-lg font-black">Appendicitis</div>I have a feeling
          that you remember this one pretty well.
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end mb-10">
          <time className="font-mono italic">July 17, 2023</time>
          <div className="text-lg font-black">We Move!</div>
          Such an exciting time, such a lovely place.
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start md:text-end mb-10">
          <time className="font-mono italic">July 8, 2023</time>
          <div className="text-lg font-black">Appendicitis</div>I have a feeling
          that you remember this one pretty well.
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end mb-10">
          <time className="font-mono italic">July 17, 2023</time>
          <div className="text-lg font-black">We Move!</div>
          Such an exciting time, such a lovely place.
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start md:text-end mb-10">
          <time className="font-mono italic">2015</time>
          <div className="text-lg font-black">Apple Watch</div>
          The Apple Watch is a line of smartwatches produced by Apple Inc. It
          incorporates fitness tracking, health-oriented capabilities, and
          wireless telecommunication, and integrates with iOS and other Apple
          products and services
        </div>
      </li>
    </ul>
  );
}
