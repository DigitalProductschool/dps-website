import * as React from 'react'

class Teams extends React.Component {
  render() {
    return (
      <section className="teams u-section-margin-top u-content-wrapper">
        <div className="teams__content u-content">
          <img
            alt="teams"
            className="teams__title__image u-image"
            src="/assets/program/teams/title.jpg"
          />
          <h2 className="u-title">Autonomous &amp; Agile teams</h2>
          <p className="teams__content__general u-text">
            In a team at DPS product managers, interaction designers, software
            engineers and artificial intelligence specialists work together in
            interdisciplinary teams. Equipped with all the competences and
            knowledge of these four roles, each team can work autonomously and
            develop a digital product on its own.
            <br />
            <br />
            The teams experience how to work like a real tech start-up. We
            attach importance on self-organization. We encourage teamwork, but
            also the accountability of each team member for his or her own
            tasks. 
            <br />
            <br />
            According to the agile working model and using scrum methods the
            teams have their kanban boards and do daily stand-ups. They work on
            their team spirit in retrospectives every week. They present their
            progress in sprint reviews every Friday and plan their next tasks as
            a team in planning meetings.
          </p>
          <div className="teams__content__companies">
            <h3 className="u-title">
              COMPANY TEAMS: EMPLOYEES &amp; TALENTS TOGETHER
            </h3>
            <div className="teams__content__companies__desc">
              <img
                alt="company-teams"
                className="teams__content__companies__image u-image"
                src="/assets/program/teams/companies.jpg"
              />
              <p className="u-text">
                In so-called company teams, students, graduates and staff from
                partner companies explore the realms of modern product
                development.
                <br />
                They tackle a problem space assigned by our partners. But that
                does not mean they are bound by the constraints a corporate
                environment might bring. They enjoy the freedom of discover and
                validate potential problems before deciding what solution to
                build.
              </p>
            </div>
          </div>
          <div className="teams__content__wild">
            <h3 className="u-title">Wild Teams</h3>
            <div className="u-grid-4-6">
              <p className="u-text">
                Besides the company teams we have teams that consists of
                graduates only. They are not bound by a problem space set by a
                partner. Rather, they decide for themselves where they want to
                look for user problems. The only constraint for them is to solve
                a problem regarding either mobility or any topic with social
                impact.
              </p>
              <img
                alt="wild-teams"
                className="teams__content__wild__image u-image"
                src="/assets/program/teams/wild.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Teams
