import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

import styles from "./ThuesdaysWithMorrie.module.css";

const ThuesdaysWithMorrie: React.FC = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className={styles.title}>THUESDAYS WITH MORRIE</div>
        <div className={styles.label}>a review by dawillu (March 2025) </div>

        <div className={styles.mainContainer}>
          <div className={styles.imgContainer}>
            <img src="/assets/images/ThuesdaysWithMorrie/book.jpg" alt="" />
          </div>
          <div className={styles.description}>
            <div className={styles.subheading}>1. A Book by Mitch Albom</div>
            <div className={styles.paragraphTitle}>Overview</div>
            <div className={styles.text}>
              This deeply inspirational memoir, "Tuesdays with Morrie", authored
              by Mitch Albom, captures his moving conversations with his former
              college instructor, Morrie Schwartz, who is presently suffering
              from ALS. It embodies their meetings, where they touched upon
              profound issues of life, regret, love, forgiveness, and everything
              that comes with it.
            </div>
            <div className={styles.paragraphTitle}>Lessons on Life</div>
            <div className={styles.text}>
              Even when faced with death, Morrie makes sure to tell you how to
              live life without looking back at it with regret. Instead, he
              focuses on telling you how best to view life, in a manner that
              seeks to reeducate every notion placed on achieving success and
              happiness. For memoirs, this is the quintessential piece that
              helps one understand the power of motivation and inspiration
              deeply.
            </div>
            <div className={styles.subheading}>
              2. How I Ended Up Reading This Book
            </div>
            <div className={styles.paragraphTitle}>Initial Excitement</div>
            <div className={styles.text}>
              Initially, I was excited about reading this book because it seemed
              as if everyone was raving about it for being "so wishy-washy" and
              "so deep" and life-changing. Many people have said it changed
              their lives, and it often made them cry. I thought to myself,
              "Okay, this book must be something special."
            </div>
            <div className={styles.text}>
              <div className={styles.paragraphTitle}>First Impressions</div>
              However, upon reading the book, I was left wondering "Is this what
              people were sobbing over?" I felt that Morrie offered some good
              lessons here and there, but many of them felt like words I had
              read over and over again. Be kind, appreciate others, don't chase
              after money, I get it. He said these things so often that it all
              felt a bit exhausting.
            </div>
            <div className={styles.paragraphTitle}>
              Reiteration of Life Lessons
            </div>
            <div className={styles.text}>
              I understood the primary message and was happy that Mitch learned
              what was actually most important in life. However, I felt that
              much of it was simply reiterating previous life lessons that have
              already been discussed over and over again in self-care books. In
              fact, it seemed to fall more into the category of a "how-to" for
              feeling than an actual exploration of emotions. Maybe if I had
              read this book in another time in my life, I would have cared more
              or had more of a connection to it. But at this time, it just
              didn't speak to me the way I was hoping.
            </div>
            <div className={styles.paragraphTitle}>Idealized Wisdom</div>
            <div className={styles.text}>
              I also felt many times that Morrie was almost idealized in nature,
              and that everything he said was good wisdom. Some of his thoughts
              I felt were simple common sense, and I marveled at how well these
              philosophical notions would hold up in the harsh reality of
              everyday life. For instance, it is nice to say, "money isn't
              everything," "everything is love," but you still have to pay your
              bills and deal with the realities of life.
            </div>
            <div className={styles.text}>
              <div className={styles.paragraphTitle}>Final Thoughts</div>
              But overall, I wouldn't go as far to say I disliked the book, but
              I wouldn't call it something special either. It was more of a
              "that was very average." If you are looking for something
              life-changing or moving, this is not the book for you.
            </div>
            <div className={styles.subheading}>
              3. A Different Perspective on Tuesdays with Morrie
            </div>
            <div className={styles.paragraphTitle}>Emotional Connections</div>
            <div className={styles.text}>
              I can see why so many have strong emotional connections to
              "Tuesdays with Morrie", and I do see the value in it. But it
              didn't resonate with me the way I had hoped. The lessons Morrie
              shares are very valid, and it's easy to see why many people
              believe in these principles. Being open to the present moment,
              putting relationships first instead of the progression of a
              career, not letting fear govern you, etc., are extremely important
              lessons.
            </div>
            <div className={styles.paragraphTitle}>Redundancy of Lessons</div>
            <div className={styles.text}>
              However, it felt a bit redundant for me as, more or less, I have
              read some version of these concepts in other texts and/or personal
              experiences. Its simplicity makes it digestible, and I could
              imagine it being very comforting for someone going through a tough
              time. I think my overall context was detrimental to my experience
              with the book. Had I read it at a different time, I may have
              connected more deeply.
            </div>
            <div className={styles.paragraphTitle}>
              Reaffirming the Important Things
            </div>
            <div className={styles.text}>
              I appreciate what it called attention to in terms of being focused
              on what's important, but the clarity it uplifted was not
              exceptionally shocking or enlightening for me. I do think that
              "Tuesdays with Morrie" is an excellent suggestion for someone
              looking to read something light-hearted, heartfelt, and
              introspective. It is definitely this type of book that may impact
              someone deeply.
            </div>
            <div className={styles.paragraphTitle}>Context Matters</div>
            <div className={styles.text}>
              For me, although it didn't leave me feeling attached, I recognized
              emotional engagement as something one may have experienced (as I
              have often!) after initially hearing the dramatic impact of others
              after reading the book. It is important to understand that
              "Tuesdays with Morrie" probably speaks more powerfully to
              individuals in a reflective life stage or undergoing personal
              challenges. For people in a period of loss, going through
              difficult life transitions, or just wanting to look at life
              through a different lens, the book's themes of love, forgiveness,
              and living fully would likely resonate more.
            </div>
          </div>
        </div>
        <div className={styles.quote}>
          "The most important thing in life is to learn how to give out love,
          and let it come in."
          <div className={styles.quoteAuthor}>- Morrie Schwartz</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ThuesdaysWithMorrie;
