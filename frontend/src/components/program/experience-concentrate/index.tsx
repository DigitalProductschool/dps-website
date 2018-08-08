import * as React from 'react'

class ExperienceConcentrate extends React.Component {

  render() {
    return (
      <section className="experience-concentrate u-content-wrapper">
        <div className="experience-concentrate__content u-content">
          <img className="experience-concentrate__title__image u-image" src="/assets/experience-concentrate-title.jpg" />
          <h2 className="u-title">TAKING IN THE EXPERIENCE CONCENTRATE</h2>
          <p className="u-text u-text--bold">
            In just 3 months the participants undertake a highly concentrated experience. The idea is to let the students live the life of an agile team player while gaining the knowledge and confidence they would usually collect within one or two years working in a cross-functional team or a lean start-up.
          </p>
          <div className="experience-concentrate__content__description">
            <p className="u-text">
              To enrich that experience, the DPS teams are not only solving problems through creating digital products – they also meet several senior people who will share their knowledge and their stories. They have the chance to take part in talks and workshops with experts from all over the world. And to chat with the start-ups from our in-house incubator xpreneurs.
              <br /><br />
              The DPS core team will mentor all participants, give guidance and react to challenges that come up at short notice.
              <br /><br />
              On top of that several meet-ups will take place at DPS so the participants can connect with the Munich tech scene and have the chance to grow their professional network.
            </p>
            <img className="experience-concentrate__content__description__image u-image" src="/assets/experience-concentrate-desc.jpg" />
          </div>
        </div>
      </section>
    );
  }
}

export default ExperienceConcentrate;
