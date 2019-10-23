import * as React from 'react';
import Footer from '../../components/shared/footer/index';
import CookieWarning from '../../components/shared/cookie-warning/index';
import Nav from '../../components/shared/nav/index';
import Modal from '../../components/shared/modal/index';
import { useState, useEffect } from 'react';

const members = [
  {
    name: 'Samreen Ashap',
    title: 'Head of know it all',
    shortDescription:
      'I previously founded startup projects and worked as a Business Developing Analyst at Rocket Internet GmbH. Later I pursued my Masters in Integrated Design...',
    description:
      'I previously founded startup projects and worked as a Business Developing Analyst at Rocket Internet GmbH. Later I pursued my Masters in Integrated Design from the Anhalt University of Applied Sciences in Germany. I am also an alumna from Digital Product School batch five 2018. Where as a Product Manager together with my team I built an application to assist parents travelling with their children. I am responsible for assisting the marketing team with communication by reaching out to potential and deserving talents from all around the world with an opportunity like Digital Product School. Also building a network and sustaining the community of alumni at Digital Product School.',
  },
  {
    name: 'Samreen Ashap',
    title: 'Head of know it all',
    shortDescription:
      'I previously founded startup projects and worked as a Business Developing Analyst at Rocket Internet GmbH. Later I pursued my Masters in Integrated Design...',
    description:
      'I previously founded startup projects and worked as a Business Developing Analyst at Rocket Internet GmbH. Later I pursued my Masters in Integrated Design from the Anhalt University of Applied Sciences in Germany. I am also an alumna from Digital Product School batch five 2018. Where as a Product Manager together with my team I built an application to assist parents travelling with their children. I am responsible for assisting the marketing team with communication by reaching out to potential and deserving talents from all around the world with an opportunity like Digital Product School. Also building a network and sustaining the community of alumni at Digital Product School.',
  },
  {
    name: 'Samreen Ashap',
    title: 'Head of know it all',
    shortDescription:
      'I previously founded startup projects and worked as a Business Developing Analyst at Rocket Internet GmbH. Later I pursued my Masters in Integrated Design...',
    description:
      'I previously founded startup projects and worked as a Business Developing Analyst at Rocket Internet GmbH. Later I pursued my Masters in Integrated Design from the Anhalt University of Applied Sciences in Germany. I am also an alumna from Digital Product School batch five 2018. Where as a Product Manager together with my team I built an application to assist parents travelling with their children. I am responsible for assisting the marketing team with communication by reaching out to potential and deserving talents from all around the world with an opportunity like Digital Product School. Also building a network and sustaining the community of alumni at Digital Product School.',
  },
  {
    name: 'Samreen Ashap',
    title: 'Head of know it all',
    shortDescription:
      'I previously founded startup projects and worked as a Business Developing Analyst at Rocket Internet GmbH. Later I pursued my Masters in Integrated Design...',
    description:
      'I previously founded startup projects and worked as a Business Developing Analyst at Rocket Internet GmbH. Later I pursued my Masters in Integrated Design from the Anhalt University of Applied Sciences in Germany. I am also an alumna from Digital Product School batch five 2018. Where as a Product Manager together with my team I built an application to assist parents travelling with their children. I am responsible for assisting the marketing team with communication by reaching out to potential and deserving talents from all around the world with an opportunity like Digital Product School. Also building a network and sustaining the community of alumni at Digital Product School.',
  },
];

function Card(props) {
  const { member } = props;

  return (
    <li className="team__card">
      <img
        src="/assets/team/samreen.jpg"
        className="team__card__profile-image"
        alt="profile"
      ></img>
      <h5
        style={{
          marginTop: '10px',
          marginBottom: 0,
        }}
      >
        {member.name}
      </h5>
      <h5
        style={{
          margin: 0,
          textTransform: 'uppercase',
          fontSize: '12px',
          marginTop: '2px',
          fontWeight: '300',
        }}
      >
        {member.title}
      </h5>
      <p className="team__card__description">{member.shortDescription}</p>
      <p
        className="team__card__readmore"
        onClick={() => props.setIsOpenId(props.index)}
      >
        Read more
      </p>
      <a href="/123" className="team__card__icon">
        <img src="/assets/icons/linkedin.svg" alt="linkedin-logo"></img>
      </a>
    </li>
  );
}

function Team() {
  const [openId, setIsOpenId] = useState(undefined);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.keyCode === 27) {
        setIsOpenId(undefined);
      }
    };

    document.addEventListener('keydown', handleKeyDown, false);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <React.Fragment>
      <div id="modal-root"></div>
      <CookieWarning />
      <section
        className={`team__header u-content-wrapper`}
        onClick={() => setIsOpenId(undefined)}
      >
        {openId !== undefined && (
          <Modal>
            <h4
              style={{
                marginBottom: '0',
              }}
            >
              {members[openId].name}
            </h4>
            <h5
              style={{
                marginTop: '5px',
                fontWeight: '300',
                textTransform: 'uppercase',
                fontSize: '12px',
              }}
            >
              {members[openId].title}
            </h5>
            <p>{members[openId].description}</p>
            <button className="u-button u-button--reversed"> close </button>
          </Modal>
        )}
        <Nav />
        <div className="team__header-content u-content">
          <h1 className="team__header-content__title">
            the heart-throbs of innovation
          </h1>
        </div>
      </section>
      <div className="team__image u-content-wrapper">
        <div className="team__image-content u-content">
          <div className="team__image-content__image">
            <p>
              Organized as an autonomous team itself, the core team mirrors the
              four tracks of DPS with at least one expert of each profession.
              These are supplemented by agile coaches and specialists in
              Business, Marketing and Operations. Before joining DPS they
              gathered long-standing experience in digital product development
              while working at tech-startups or big corporates and / or have a
              distinguished university career behind them. Together they
              support, guide and help the teams to develop a user-centric
              digital product in an agile team.
            </p>
          </div>
        </div>

        <div className="u-content">
          <h1
            style={{
              marginTop: '80px',
              fontWeight: '900',
            }}
          >
            OUR TEAM
          </h1>
          <ul className="team__cards">
            {members.map((member, index) => (
              <Card
                key={index}
                member={member}
                setIsOpenId={setIsOpenId}
                index={index}
              />
            ))}
          </ul>
        </div>
      </div>

      <Footer addSectionClass="u-section-margin-top" />
    </React.Fragment>
  );
}

export default Team;
