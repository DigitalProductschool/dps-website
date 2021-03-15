import * as React from 'react';

interface ScheduleProps {
  url: string;
}

export const schedulesFriday = [
  { id: 1, time: '12:30 pm', name: 'Welcome & Introduction' },
  { id: 2, time: '01:00 pm', name: 'Keynote by Jeff Gothelf' },
  { id: 3, time: '02:00 pm', name: 'BREAK' },
  { id: 4, time: '02:15 pm', name: 't.b.a. by t.b.a.' },
  { id: 5, time: '03:00 pm', name: 't.b.a. by t.b.a.' },
  { id: 6, time: '03:45 pm', name: 'BREAK' },
  { id: 7, time: '04:00 pm', name: 'SPEED HIRING' },
  { id: 8, time: '05:00 pm', name: 'Networking' },
  { id: 9, time: '06:00 pm', name: 'End of day 1' },
];

export const schedulesSaturday = [
  { id: 1, time: '12:30 pm', name: 'Panel Discussion' },
  { id: 2, time: '01:30 pm', name: 'BREAK' },
  { id: 3, time: '01:45 pm', name: 't.b.a. by t.b.a.' },
  { id: 4, time: '02:15 pm', name: 't.b.a. by t.b.a.' },
  { id: 5, time: '02:45 pm', name: 'BREAK' },
  { id: 6, time: '03:45 pm', name: 'Workshop' },
  { id: 7, time: '04:00 pm', name: 'Networking & Party' },
  { id: 8, time: '05:00 pm', name: 'End of conference' },
];

class Alumni extends React.Component<ScheduleProps, {}> {
  renderTableData(date: { id: number; time: string; name: string }[]) {
    return date.map(
      (schedule: { id: number; time: string; name: string }, index: any) => {
        const { id, time, name } = schedule;
        return (
          <tr key={id}>
            <td>{time}</td>
            <td>{name}</td>
          </tr>
        );
      }
    );
  }

  render() {
    return (
      <section className="schedule-speakers u-content-wrapper">
        <div className="schedule-speakers__content u-content">
          <h2 className="u-title"> Schedule &amp; speakers </h2>
          <div className="schedule-speakers__content__description u-text">
            <div>
              <h1 className="schedule-speakers__tab__title">
                Friday, May 21, 2021
              </h1>
              <table>
                <tbody>{this.renderTableData(schedulesFriday)}</tbody>
              </table>
            </div>
            <div>
              <h1 className="schedule-speakers__tab__title">
                Saturday, May 22, 2021
              </h1>
              <table>
                <tbody>{this.renderTableData(schedulesSaturday)}</tbody>
              </table>
            </div>
          </div>
          <h1 className="schedule-speakers__tab__title">
            <b>Timezone: All times in CEST!</b>
          </h1>{' '}
          <br />
          <a
            className="u-button u-button__apply u-button--reversed schedule__button"
            href={this.props.url}
            target="_blank"
            style={{ margin: 'auto' }}
          >
            Get your ticket here!
          </a>
        </div>
      </section>
    );
  }
}

export default Alumni;
