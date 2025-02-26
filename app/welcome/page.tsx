export default async function Page() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
          <div className="max-w-lg text-center">
            <h1 className="animate-text bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent text-5xl font-black">
              Hi there lover
            </h1>
            <div className="py-6 text-left">
              <p className="p-1">
                This is an attempt at a handmade project. It&apos;s one that
                I&apos;ve put a fair amount of work into so I hope that you like
                it.
              </p>
              <p className="p-1">
                I love you so freaking much. Like, a lot a lot.
              </p>
              <p className="p-1">
                Nothing on the next pages will make up for being so late with
                this, I know that. I will always feel guilt about being so
                belated in giving you this.
              </p>
              <p className="p-1">
                I just want you to know that I care so much about you and never
                ever forgot about this.
              </p>
            </div>
            <a className="btn btn-secondary text-center" href="/welcome/login">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
