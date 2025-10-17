import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./PrivacyPolicy.module.css";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Privacy Policy</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Hey there 👋</h2>
          <p className={styles.text}>
            I'm William, and this is my personal portfolio. I built this site to share my work and connect with people who appreciate what I do. Your privacy matters to me, so here's the straightforward story of how I handle your data.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Quick Version</h2>
          <p className={styles.text}>
            <strong>TL;DR:</strong> I don't track you, I don't sell your data, and I don't run ads. The only data I might see is if you email me directly. My hosting provider (Vercel) handles the technical stuff to keep the site running smoothly and securely.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What I Actually Collect</h2>
          
          <h3 className={styles.subTitle}>If you reach out to me</h3>
          <p className={styles.text}>
            When you send me an email, I'll have access to whatever you share — your name, email address, and the content of your message. I use this solely to respond to you. No marketing lists, no spam, no nonsense.
          </p>

          <h3 className={styles.subTitle}>Technical stuff (handled by Vercel)</h3>
          <p className={styles.text}>
            My website is hosted on Vercel's servers. When you visit, they automatically log some basic technical information to keep everything running:
          </p>
          <ul className={styles.list}>
            <li>Your browser type (Chrome, Firefox, Safari, etc.)</li>
            <li>Your operating system (Mac, Windows, Linux, etc.)</li>
            <li>The page you came from (if you clicked a link)</li>
            <li>Your IP address (for security and performance)</li>
            <li>When you visited</li>
          </ul>
          <p className={styles.text}>
            This data typically gets deleted within 24 hours. It's purely functional — think of it like security camera footage that gets auto-erased.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why I Need This Data</h2>
          <p className={styles.text}>
            <strong>Your emails:</strong> To actually respond to you. Pretty straightforward.
            <br /><br />
            <strong>Technical logs:</strong> To prevent attacks, fix bugs, and make sure the site loads fast for everyone. Vercel handles this automatically.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>About Vercel (My Hosting Provider)</h2>
          <p className={styles.text}>
            Vercel is based in California, USA, and they're the ones keeping this site online. They're GDPR-compliant and use Standard Contractual Clauses (SCCs) for data transfers between the EU and US.
          </p>
          <p className={styles.text}>
            Want the legal details? Check out their <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">privacy policy</a>.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Your Rights</h2>
          <p className={styles.text}>
            Under GDPR, you've got some solid rights when it comes to your data:
          </p>
          <ul className={styles.list}>
            <li><strong>Know what I have</strong> — Ask me what data I'm storing about you</li>
            <li><strong>Fix mistakes</strong> — Request corrections if something's wrong</li>
            <li><strong>Delete everything</strong> — Ask me to remove your data (unless I'm legally required to keep it)</li>
            <li><strong>Limit what I do</strong> — Restrict how I process your data</li>
            <li><strong>Take it with you</strong> — Get your data in a portable format</li>
            <li><strong>Say no</strong> — Object to certain types of processing</li>
          </ul>
          <p className={styles.text}>
            Just shoot me an email if you want to exercise any of these rights.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>How Long I Keep Your Data</h2>
          <p className={styles.text}>
            Email conversations? I keep them as long as they're relevant or until you ask me to delete them.
            <br />
            Technical logs? Vercel auto-deletes those within 24 hours.
            <br />
            If there's a legal reason to keep something longer (taxes, contracts, etc.), I'll retain it only as long as required by law.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Security</h2>
          <p className={styles.text}>
            This site uses HTTPS encryption (notice that padlock in your browser?). Your connection to my site is secure and encrypted.
            <br /><br />
            That said, nothing online is 100% bulletproof. Email, for example, can be intercepted. If you're sharing something super sensitive, consider using encrypted communication.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>No Spam Zone</h2>
          <p className={styles.text}>
            If you're thinking about using my contact info to send spam or promotional stuff — don't. I won't hesitate to take legal action against unsolicited marketing.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact Me</h2>
          <p className={styles.text}>
            <strong>William Lu</strong>
            <br />
            Based in Milan, Italy
            <br />
            Questions about privacy? Just send me an email through the contact info on this site.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Updates to This Policy</h2>
          <p className={styles.text}>
            I might update this policy occasionally as my site evolves or laws change. I'll keep the latest version here, so check back if you're curious.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;