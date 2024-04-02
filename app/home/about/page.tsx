import Timeline from '@/components/Timeline';
import React from 'react';

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow py-12">
        <div className="container mx-auto">
          <section className="mb-8">
            <h1 className="text-2xl font-bold mb-4">About all of this</h1>
            <p className="text-base-content">
              This may seem strange and it is. It is of course, but I thought it was a fun way to give this all to you.
            </p>
          </section>
          <section className="mb-8">
            <h1 className="text-2xl font-bold mb-4">Timeline</h1>
            <Timeline />
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-base-content">
              <li>Innovation</li>
              <li>Customer-centric Approach</li>
              <li>Integrity</li>
              <li>Collaboration</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;