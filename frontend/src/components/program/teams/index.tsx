import * as React from 'react'

class Teams extends React.Component {

  render() {
    return (
      <section className="teams u-content-wrapper">
        <div className="teams__content u-content">
          <img className="teams__title__image u-image" src="/assets/teams-title.jpg" />
          <h2 className="u-title">Employees and Talents together</h2>
          <p className="teams__content__companies u-text">
            At DPS students, graduates and staff from companies master all the challenges that come when working on a real project. And to ensure that – well, we let them work on real projects! We have teams where employees from our partner companies are mixed together with the young talents from all over the world.
            <br /><br />
            They tackle a problem space assigned by our partners. But that does not mean they are bound to the constraints a corporate environment might bring. They enjoy the freedom of discovering and validating potential problems before deciding what solution to build. Together employees and talents explore the realms of modern product development.
            <br /><br />
            The teams experience how to work like a real tech start-up. We attach importance on self-organization. We encourage teamwork, but also the accountability of each team member for her or his own tasks. 
            According to the agile working model and using scrum methods the teams have their kanban boards and do daily stand-ups. They work on their the team spirit in retrospectives every week. They present their progress in sprint reviews every Friday and plan their next tasks as a team in planning meetings.
          </p>
          <div className="teams__wild">
            <h3 className="u-title">Wild Teams</h3>
            <div className="teams__content__wild">
            <p className="u-text">
              Besides the company teams we have teams that consists of graduates only. They are not bound by a problem space set by a partner. Rather, they decide for themselves where they want to look for user problems. The only constraint for them is to solve a problem regarding either mobility or any topic with social impact.
            </p>
            <img className="teams__content__wild__image u-image" src="/assets/teams-map.jpg" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Teams;
