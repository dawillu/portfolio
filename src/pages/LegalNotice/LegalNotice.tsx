import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./LegalNotice.module.css";

const LegalNotice: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Legal Notice</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Official Stuff 📜</h2>
          <p className={styles.text}>
            Look, I know legal pages are boring. But if you're in the EU (especially Italy), you gotta have one. So here we go.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Who Runs This Show?</h2>
          <p className={styles.text}>
            Just me. No company, no team, no corporate overlords.
            <br /><br />
            <strong>William Lu</strong>
            <br />
            Based in Milan, Italy
            <br />
          </p>
          <p className={styles.text}>
            <em>Legal translation:</em> In accordance with Italian Legislative Decree 70/2003 and EU E-Commerce Directive requirements, I'm the sole data controller and website operator.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What Is This Place?</h2>
          <p className={styles.text}>
            This is my portfolio. Think of it as a digital résumé meets creative playground. I showcase projects I've built, share what I'm learning, and maybe connect with cool people who want to collaborate.
            <br /><br />
            <strong>What it's NOT:</strong> A store, a business, a subscription service, or anything that makes me money. Just passion projects and proof I know how to code.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Where Does It Live?</h2>
          <p className={styles.text}>
            This site is hosted on <strong>Vercel</strong> servers:
            <br />
            Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA
            <br />
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>
          </p>
          <p className={styles.text}>
            They handle the technical infrastructure (servers, CDN, SSL certificates, etc.) so this site loads fast and stays online. Check their <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">privacy policy</a> if you're curious about their data practices.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Copyright & Intellectual Property</h2>
          <p className={styles.text}>
            © {new Date().getFullYear()} William Lu. All rights reserved.
          </p>
          <p className={styles.text}>
            Everything original on this site — the code, designs, text, images, videos — is mine. It's protected by copyright law, both in Italy and internationally.
          </p>
          
          <h3 className={styles.subTitle}>What You Can Do:</h3>
          <ul className={styles.list}>
            <li>Link to my work and share it on social media</li>
            <li>Reference it in articles, blog posts, or presentations (with attribution)</li>
            <li>Get inspired by my designs and code (everyone learns from each other)</li>
          </ul>

          <h3 className={styles.subTitle}>What You Can't Do:</h3>
          <ul className={styles.list}>
            <li>Copy my content and claim it as yours</li>
            <li>Use it commercially without my permission</li>
            <li>Remove credits, watermarks, or attribution</li>
            <li>Redistribute my work in any form without consent</li>
          </ul>

          <p className={styles.text}>
            Want to use something in a way not covered here? Just ask. I'm usually cool with it if you give proper credit.
          </p>

          <h3 className={styles.subTitle}>Third-Party Content</h3>
          <p className={styles.text}>
            Some stuff on here (fonts, icons, open-source libraries) comes from other creators. I've done my best to follow their licenses and give proper attribution. If I missed something or got it wrong, let me know immediately.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The "Cover My Ass" Section</h2>
          
          <h3 className={styles.subTitle}>Accuracy</h3>
          <p className={styles.text}>
            I try to keep everything accurate and up-to-date. But I'm human. Typos happen. Projects evolve. Technologies change. If you spot an error, give me a heads up.
          </p>

          <h3 className={styles.subTitle}>Availability</h3>
          <p className={styles.text}>
            I can't promise this site will be online 24/7/365. Servers crash, DNS fails, my hosting provider might have issues, or I might be tweaking something. It happens.
          </p>

          <h3 className={styles.subTitle}>Not Professional Advice</h3>
          <p className={styles.text}>
            Nothing here is legal advice, financial advice, career advice, or any other kind of professional guidance. I'm a developer sharing my work, not a certified expert in everything.
            <br /><br />
            If you need real advice, hire a real professional.
          </p>

          <h3 className={styles.subTitle}>Liability</h3>
          <p className={styles.text}>
            To be blunt: I'm not responsible if something goes wrong while you're using this site. Used some code from my project and it broke your app? Followed a tutorial and it didn't work? That's on you.
            <br /><br />
            <em>(Italian law requires me to say this, but seriously — use common sense and test everything in your own environment first.)</em>
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Your Privacy</h2>
          <p className={styles.text}>
            I take your privacy seriously. For the full breakdown of what data gets collected (spoiler: not much) and how it's handled, check my <a href="/privacypolicy">Privacy Policy</a>.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Legal Jurisdiction</h2>
          <p className={styles.text}>
            Since I'm in Italy, Italian law applies to this site. Any legal disputes would go through courts in Milan.
            <br /><br />
            But honestly? If you have an issue, just email me. I'd rather have a conversation than deal with lawyers.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>No Spam, Please</h2>
          <p className={styles.text}>
            My contact info is public for genuine inquiries and networking. Don't abuse it.
            <br /><br />
            Using my email for unsolicited marketing, spam, or shady stuff? That's not cool, and I reserve the right to take legal action if it becomes a problem.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Changes</h2>
          <p className={styles.text}>
            I might update this page occasionally — maybe I move cities, change hosting providers, or add new legal requirements. The "Last updated" date below will reflect any changes.
            <br /><br />
            By continuing to use this site after updates, you're accepting the new terms. (Standard internet protocol stuff.)
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default LegalNotice;