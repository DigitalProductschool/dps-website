import * as React from 'react';

class Teams extends React.Component {
  render() {
    return (
      <section className="teams u-section-margin-top u-content-wrapper">
        <div className="teams__content u-content">
          <img
            alt="teams"
            className="teams__title__image u-image"
            src="/assets/program/teams/title.webp"
          />
          <h2 className="u-title uppercase">Autonomous &amp; Agile teams</h2>
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
            <h3 className="u-title uppercase">
              COMPANY PARTNERS &amp; TALENTS TOGETHER
            </h3>
            <div className="teams__content__companies__desc">
              <img
                alt="company-teams"
                className="teams__content__companies__image u-image"
                src="/assets/program/teams/companies.webp"
              />
              <p className="u-text">
                The teams work closely with  teams, students, graduates and staff from
                partner companies explore the realms of modern product
                development.
                <br />
                They tackle a problem space assigned by one of our industry partners. 
                But that does not mean they are bound by the constraints a corporate
                environment might bring. They enjoy the freedom of discover and
                validate potential problems before deciding what solution to
                build.
                <br />
                The given challenge is significant for the partner's product range and 
                business. Therefore, the team will work very closely with the partner's 
                representatives and will gain deep insights into the company's products,
                operations, and processes. However, the team is independent in its 
                decisions. These should always be made on the basis of the findings from 
                research and user tests.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Teams;
