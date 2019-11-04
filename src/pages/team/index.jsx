import * as React from 'react';
import Footer from '../../components/shared/footer/index';
import CookieWarning from '../../components/shared/cookie-warning/index';
import Nav from '../../components/shared/nav/index';
import Modal from '../../components/shared/modal/index';
import { useState, useEffect } from 'react';

let members = [
  {
    name: 'Afsaneh Asaei',
    title: 'Head of Artificial Intelligence',
    shortDescription: `I advise and coach our teams in exploring AI applications. More ... `,
    description: `I have more than 17 years professional experience in applied artificial intelligence research and development. I completed my PhD at the Swiss Federal Institute of Technology, Lausanne, on the robustness of machine learning in commercial applications. My contributions were recognized via community awards and I was granted several million Euros of national & international funding.<br>
I advise and coach our teams in exploring AI applications, their feasibility and risks during problem-solution fits. In a multi-disciplinary environment, I support the participants to understand how to transform assumptions and data requirements into a product vision, alongside exploring market opportunities and how a data-driven solution should be evaluated. `,
    pic: 'afsaneh.jpg',
    social: [
      {
        icon: '/assets/icons/linkedin.svg',
        link: 'https://www.linkedin.com/in/afsaneh-asaei-490b6621',
        alt: 'linkedin',
      },
    ],
  },
  {
    name: 'Samreen Azam',
    title: 'Junior Marketing & Community Manager',
    shortDescription: `I take care of the social media channels of DPS and the alumni network. More ...`,
    description: `analyst at Rocket Internet GmbH. Later, I pursued my Masters degree in integrated design from the Anhalt University of Applied Sciences in Germany. I am also an alumna from DPS batch five in 2018. There, as a product manager together with my team, I built an application to assist parents travelling with their children.<br>
I am responsible for the marketing for Digital Product School: taking ongoing care of the social media channels and reaching out to potential and deserving talents from all around the world who might benefit from the opportunity of attending DPS. I also build the DPS network and sustain the community of alumni. `,
    pic: 'samreen.jpg',
    social: [
      {
        icon: '/assets/icons/linkedin.svg',
        link: 'https://www.linkedin.com/in/samreen-azam-803760140/',
        alt: 'linkedin',
      },
    ],
  },
  {
    name: 'Daniel Bedö',
    title: 'Head of Software Engineering',
    shortDescription: `I hope with my expertise I can help our teams avoid the same mistakes I made at the beginning of my career. More ...`,
    description: `After receiving my master’s degree in computer science at ELTE in Budapest, I worked as a researcher at the university. Later, I moved to Germany and worked for different companies in the subject areas of machine learning and data analytics before shifting my focus towards people management.<br>
During my time at university I accumulated a lot of knowledge in data structures and algorithms, but it was only when I started working within the industry that I realised how much it takes to be a good software engineer. I hope with my expertise I can help our teams avoid the same mistakes I made at the beginning of my career.
`,
    pic: 'daniel.jpg',
    social: [
      {
        icon: '/assets/icons/linkedin.svg',
        link: 'https://www.linkedin.com/in/danielbedo/',
        alt: 'linkedin',
      },
    ],
  },
  {
    name: 'Natthagorn Bunnet',
    title: 'Team and Event Manager',
    shortDescription: `I organize all events at DPS and throw the best batch closing parties. More ...`,
    description: `After my dual vocational training as a specialist in media and information services at the publishing house Sueddeutscher Verlag in Munich, I became a junior project manager at the communication agency SZ Scala. During the last 2.5 years, I acquired project management and marketing skills, in particular how to optimize processes efficiently.<br>
My role is to organize all events at DPS and throw the best batch closing parties. Alongside this, I assist the marketing team with operations and I am also the contact person for all matters like office supplies and access cards. `,
    pic: 'natt.jpg',
    social: [
      {
        icon: '/assets/icons/insta.svg',
        link: 'https://www.instagram.com/natt_chanida/',
        alt: 'instagram',
      },
    ],
  },
  {
    name: 'Lorenz Hutterer',
    title: 'Business Developer',
    shortDescription: `I help the teams to make money through their ideas. More ...`,
    description: `I studied management and technology at Technische Universität München and hustled in startups throughout different industries.<br>
I take care of the business side of projects at DPS and support our teams in how to make money through their ideas. `,
    pic: 'lorenz.jpg',
    social: [
      {
        icon: '/assets/icons/xing.svg',
        link: 'https://www.xing.com/profile/Lorenz_Hutterer2/cv',
        alt: 'xing',
      },
    ],
  },
  {
    name: 'Steffen Kastner',
    title: 'Head of Product Management',
    shortDescription: `I love to stir things up with provocative questions. More ...`,
    description: `I am a trained journalist who somehow slipped into product management and user research. I launched the online stores for software and toys for Amazon and made products useful to the customers of Weltbild. I went on to develop dozens of digital products for Haymarket Media and established user research at Gutefrage.net.<br>
I help teams at DPS to spot problems and create ideas that join the dots discovered through user research. I also support them in turning those ideas into reality, plus I love to stir things up with provocative questions. `,
    pic: 'steffen.jpg',
    social: [
      {
        icon: '/assets/icons/linkedin.svg',
        link: 'https://www.linkedin.com/in/steffen-kastner-177494a9/',
        alt: 'linkedin',
      },
    ],
  },
  {
    name: 'Sascha Rehbock',
    title: 'Managing Director Digital Product School',
    shortDescription: `I help the core team to do an amazing job. More ...`,
    description: `Over the last 15 years I successfully developed and launched digital products in various sectors including automotive, health care, manufacturing, and finance. As a coach, I also helped teams have more impact and discover better ways of working together – from product teams to CEOs. Today, I run DPS as its managing director.<br>
At DPS,  I focus on helping the core team to do an amazing job as well as managing partner relations. Let me know if I can connect you with the UnternehmerTUM network to enhance your experience at DPS further. `,
    pic: 'sascha.jpg',
    social: [
      {
        icon: '/assets/icons/linkedin.svg',
        link: 'https://www.linkedin.com/in/sascharehbock/',
        alt: 'linkedin',
      },
    ],
  },
  {
    name: 'Bhawna Saini',
    title: 'Junior Software Engineer',
    shortDescription: `I help the teams to find a way through any software engineering queries. More ...`,
    description: `I am in the final semester of my master’s studies in computer science at TUM. Before joining DPS, I worked as a frontend web developer at TUM and HomeFox Gmbh where I gained some skills in ReactJS and VueJS. Later, I was a participant in the software engineering track in batch 5 at DPS where my team developed a chrome plugin for personalized Google searches using VueJS.<br>
At DPS, I assist with various software engineering tasks. I learn by trying and failing and then making it work: that's how I help the teams, too. As I was a participant at DPS, I support the teams through my own learnings during my DPS journey. Moreover, if participants have any software engineering queries, I help them find a way through. `,
    pic: 'bhawna.jpg',
    social: [
      {
        icon: '/assets/icons/linkedin.svg',
        link: 'https://www.linkedin.com/in/bhawnasaini03',
        alt: 'linkedin',
      },
    ],
  },
  {
    name: 'Bastian Rieder',
    title: 'Head of Performance Marketing',
    shortDescription: `I spread the word about DPS and motivate talents to apply. More ...`,
    description: `At the DPS I am responsible for marketing: telling the story of DPS and motivating students and graduates to apply. Before joining DPS in February 2017, I had a small startup in the online advertising business and worked for an advertising agency in Munich for 13 years. I have a Bachelor's degree in social sciences and an MBA in marketing.<br>
At DPS I help the teams with all marketing-related questions: finding test persons, creating landing pages, running small campaigns to get users on the landing page, creating small advertisements, and everything else that helps the teams to test their hypotheses. `,
    pic: 'basti.jpg',
    social: [
      {
        icon: '/assets/icons/linkedin.svg',
        link: 'https://www.linkedin.com/in/bastian-rieder-marketingmba/',
        alt: 'linkedin',
      },
    ],
  },
  {
    name: 'Annina Schaupp',
    title: 'Agile Coach',
    shortDescription: `I equip the teams with agile methods and bring them into a meaningful workflow. More ...`,
    description: `I am an experienced scrum master. I have a background in business administration from HTWG Constance, Germany.  Early in my career I realised that agile and scrum methods play a crucial role in product development. This is when I decided to pursue this topic and become a scrum master.<br>
As an agile coach at DPS, I support teams to overcome obstacles through practicing smooth communication. I equip them to learn agile methods and also show them how to apply these methods so they can adopt a meaningful workflow when building a product. `,
    pic: 'annina.jpg',
    social: [
      {
        icon: '/assets/icons/linkedin.svg',
        link: 'https://www.linkedin.com/in/annina-schaupp-18a913177/v',
        alt: 'linkedin',
      },
    ],
  },
  {
    name: 'Michael Stockerl',
    title: 'Head of Software Engineering',
    shortDescription: `I help teams to identify and overcome technical risks in their solutions. More ...`,
    description: `I studied computer science at LMU in Munich and, alongside this, worked part time in early-stage startups. During this time, I figured out that I enjoy working on data engineering topics. After graduation, I joined gutefrage.net and we established the use of machine learning in Germany's biggest Q&A platform.<br>
At DPS, I help teams to identify technical risks in their solution and enable them to come up with a feasible first version of their product. During code reviews, I give feedback on code-related issues. In addition to this, I help groups to improve their overall teamwork. `,
    pic: 'michi.jpg',
    social: [
      {
        icon: '/assets/icons/linkedin.svg',
        link: 'https://www.linkedin.com/in/michael-stockerl-8584a347/',
        alt: 'linkedin',
      },
    ],
  },
];

members.sort((m1, m2) => (m1.name > m2.name ? 1 : -1));

function Card(props) {
  const { member } = props;

  return (
    <li className="team__card">
      <img
        src={`/assets/team/${member.pic}`}
        className="team__card__profile-image"
        alt={member.name}
        title={`${member.name}, ${member.title} at Digital Product School`}
        onClick={() => props.setIsOpenId(props.index)}
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
      {member.social.map(item => (
        <a
          href={item.link}
          className="team__card__icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={item.icon} alt={item.alt}></img>
        </a>
      ))}
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
      <Nav />
      <section className={`team__header u-content-wrapper`}>
        {openId !== undefined && (
          <Modal onClose={() => setIsOpenId(undefined)}>
            <span
              style={{
                position: 'absolute',
                top: '12px',
                right: '20px',
                fontSize: '24px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
              onClick={() => setIsOpenId(undefined)}
            >
              x
            </span>
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
            <p
              dangerouslySetInnerHTML={{ __html: members[openId].description }}
            ></p>
            <button
              className="u-button u-button--reversed"
              onClick={() => setIsOpenId(undefined)}
            >
              close
            </button>
          </Modal>
        )}
        <div className="team__header-content u-content">
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.56)',
              zIndex: '-1',
            }}
          ></div>
          <h1 className="team__header-content__title">
            the heart-throbs of innovation
          </h1>
        </div>
      </section>
      <div className="team__image u-content-wrapper">
        <div className="team__image-content u-content">
          <div className="team__image-content__image">
            <p>
The Digital Product School (DPS) core team consists of an autonomous group of experts in roles typically found in a successful startup: product management, design, software engineering, artificial intelligence (AI), agile coaching, business development, and marketing and operations.<br>
Before joining DPS they gained long-term experience in digital product development while working at tech-startups, corporates and in academia. Together they support, guide and help the participants to develop a user-centric digital product in an agile team.
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
            THE DIGITAL PRODUCT SCHOOL CORE TEAM
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
