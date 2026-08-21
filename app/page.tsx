const projects = [
  { no: "01", meta: "Fashion · Tokyo · 2024—25", title: "Nila Baharuddin", lead: "Taking an Indonesian fashion story from Ginza to Daimaru.", detail: "360° project direction for two Tokyo pop-ups, from brand story and partnerships to on-ground execution.", className: "project projectInk" },
  { no: "02", meta: "Hospitality · Jakarta · Now", title: "Holywings Group", lead: "Turning audience insight into new reasons to gather.", detail: "Creative strategy, campaigns, brand activations and original event concepts across the Holywings ecosystem.", className: "project projectCoral" },
  { no: "03", meta: "Music · Jakarta · 2013", title: "Hyper Wave Festival", lead: "One stage. Two music cultures. A shared pulse.", detail: "A two-day live experience uniting A-list Japanese and Indonesian musicians, presented by Honda One Heart.", className: "project projectLime" },
];

const experience = [
  ["2025—Now", "Holywings Group", "Creative / Marketing Strategist"],
  ["2023—Now", "Nila Baharuddin", "Brand Marketing Manager"],
  ["2012—Now", "Japanese Station", "PR & Marketing Manager"],
  ["2021—23", "Parallax Network", "Head of PR / Creative"],
  ["2016—18", "7Dimension", "Head of Creative"],
  ["2015—18", "Zygma", "Co-founder / Chief Creative Officer"],
  ["2017", "Amazon Fashion Week Tokyo", "Project Manager"],
  ["2011—12", "Dentsu / JKT48", "Media Relations & Event Manager"],
];

export default function Home() {
  return (
    <main>
      <a className="skipLink" href="#content">Skip to content</a>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Rinintha Pradiza, home">RP<span>.</span></a>
        <div className="navLinks">
          <a href="#work">Work</a><a href="#approach">Approach</a><a href="#about">About</a>
          <a className="navCta" href="mailto:rininthapradiza@gmail.com">Let’s talk ↗</a>
        </div>
      </nav>

      <div id="content">
        <section className="hero" id="top">
          <div className="eyebrow"><span>Jakarta ↔ Tokyo</span><span>Brand · Culture · Experience</span></div>
          <h1>I make brands<br />feel <em>alive.</em></h1>
          <div className="heroBottom">
            <p>Rinintha Pradiza is a brand marketing and creative strategist shaping stories, communities, and live experiences across Indonesia and Japan.</p>
            <a className="roundLink" href="#work" aria-label="Explore selected work">↓</a>
          </div>
          <div className="marquee" aria-hidden="true"><span>STRATEGY — STORYTELLING — CULTURE — CAMPAIGNS — EXPERIENCES — STRATEGY — STORYTELLING — CULTURE — CAMPAIGNS — EXPERIENCES — </span></div>
        </section>

        <section className="work" id="work">
          <div className="sectionHead"><p className="sectionLabel">Selected impact / 01—03</p><h2>Ideas that moved<br /><em>into the real world.</em></h2></div>
          <div className="projectList">
            {projects.map((project) => <article className={project.className} key={project.no}>
              <div className="projectTop"><span>{project.no}</span><span>{project.meta}</span></div>
              <h3>{project.title}</h3><p className="projectLead">{project.lead}</p><p className="projectDetail">{project.detail}</p>
            </article>)}
          </div>
        </section>

        <section className="approach" id="approach">
          <div className="approachTitle"><p className="sectionLabel">How I work</p><h2>Strategy with<br />its sleeves <em>rolled up.</em></h2></div>
          <div className="principles">
            <article><span>01</span><h3>Find the human truth</h3><p>Start with the audience, the culture around them, and the tension worth resolving.</p></article>
            <article><span>02</span><h3>Build the big idea</h3><p>Turn insight into a distinct narrative that can travel across content, partnerships, and place.</p></article>
            <article><span>03</span><h3>Make it happen</h3><p>Bring the right people together, protect the idea, and stay hands-on through the last detail.</p></article>
          </div>
        </section>

        <section className="numbers" aria-label="Career highlights">
          <div><strong>10<span>+</span></strong><p>years building brands<br />and communities</p></div>
          <div><strong>2</strong><p>markets at the heart<br />of the work</p></div>
          <div><strong>360<span>°</span></strong><p>from strategy through<br />live execution</p></div>
        </section>

        <section className="about" id="about">
          <div className="aboutIntro"><p className="sectionLabel">About Rinintha</p><p className="bigCopy">I work where <em>brand</em>, entertainment, fashion, hospitality, and pop culture overlap.</p></div>
          <div className="aboutGrid">
            <div className="bio"><p>For more than a decade, I’ve moved between boardroom strategy and production floors—developing brand narratives, leading 360° campaigns, creating live experiences, and building partnerships across Indonesia and Japan.</p><p>I’m at my best when the brief needs equal parts cultural instinct, commercial thinking, and calm execution.</p>
              <div className="tags" aria-label="Areas of expertise"><span>Brand strategy</span><span>Creative direction</span><span>PR & media</span><span>Events & activations</span><span>Partnerships</span><span>Cross-cultural growth</span></div>
            </div>
            <div className="sideNotes"><p className="sectionLabel">Side notes</p><ul><li>Advisor to Little Tokyo Ennichisai and CLAS:H</li><li>Indonesian translator and vocal guide contributor for JKT48</li><li>Host at Indonesia Comic Con, POP CON ASIA, and Ennichisai</li><li>Music-festival regular, pop-culture enthusiast, and cat person</li></ul></div>
          </div>
        </section>

        <section className="experience" aria-labelledby="experience-title">
          <div className="experienceHead"><p className="sectionLabel">Selected experience</p><h2 id="experience-title">Built across<br /><em>many worlds.</em></h2></div>
          <div className="experienceRows">{experience.map(([year, company, role]) => <div className="experienceRow" key={`${year}-${company}`}><span>{year}</span><strong>{company}</strong><span>{role}</span></div>)}</div>
        </section>

        <footer className="contact">
          <p className="sectionLabel">Start a conversation</p><h2>Have an idea<br />with a <em>pulse?</em></h2>
          <div className="contactBottom"><a href="mailto:rininthapradiza@gmail.com">rininthapradiza@gmail.com ↗</a><a href="tel:+6281289168740">+62 812 8916 8740</a><span>Jakarta, Indonesia · Available for select collaborations</span></div>
          <div className="footerMark">RP<span>.</span></div>
        </footer>
      </div>
    </main>
  );
}
