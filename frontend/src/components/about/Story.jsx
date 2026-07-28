import "./Story.css";

function Story() {
  return (
    <section className="story">

      <div className="story-container">

        <div className="story-image">

          <img
            src="/images/about/story.jpg"
            alt="Our Story"
          />

        </div>

        <div className="story-content">

          <p className="story-subtitle">
            OUR STORY
          </p>

          <h2>
            Bringing Nature,
            Learning &
            Childhood Together
          </h2>

          <p>
            At TumbleWood, we believe every child deserves toys that
            inspire creativity, imagination, and joyful learning.
            Our handcrafted wooden toys are thoughtfully designed
            to encourage open-ended play while ensuring the highest
            standards of safety and sustainability.
          </p>

          <p>
            Every product is made using responsibly sourced wood,
            finished with child-safe paints, and crafted to become
            treasured companions through every stage of childhood.
          </p>

          <button className="story-btn">
            Explore Collection
          </button>

        </div>

      </div>

    </section>
  );
}

export default Story;