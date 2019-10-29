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
    shortDescription: `I have more than 17 years professional experience in applied Artificial Intelligence R&D. I completed my PhD at Swiss Federal Institute of Technology Lausanne on the robustness of machine ... `,
    description: `I have more than 17 years professional experience in applied Artificial Intelligence R&D. I completed my PhD at Swiss Federal Institute of Technology Lausanne on the robustness of machine learning in commercial applications. My contributions were recognized by community awards and granted several million Euros of national & international funding.<br>
I advise and coach our teams with exploring the AI applications, their feasibility, and risks for problem-solution fits. In a multi-disciplinary setup, I support them with challenges on how a data-driven solution should be developed and evaluated and how to transform the assumptions and data requirements to product vision and market opportunities.`,
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
    shortDescription: `I previously founded startup projects and worked as a Business Developing Analyst at Rocket Internet GmbH. Later I pursued my Masters in Integrated Design from the Anhalt University ...`,
    description: `I previously founded startup projects and worked as a Business Developing Analyst at Rocket Internet GmbH. Later I pursued my Masters in Integrated Design from the Anhalt University of  Applied Sciences in Germany. I am also an alumna from Digital Product School batch five 2018. Where as a Product Manager together with my team I built an application to assist parents travelling with their children.<br>
I am responsible for assisting the marketing team with communication by reaching out to potential and deserving talents from all around the world with an opportunity like Digital Product School. Also  building a network and sustaining the community of alumni at Digital Product School.
`,
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
    shortDescription: `After getting my masters degree in computer science at ELTE in Budapest I worked as a researcher at the university. Later I moved to Germany and worked for different companies in the machine ...`,
    description: `After getting my masters degree in computer science at ELTE in Budapest I worked as a researcher at the university. Later I moved to Germany and worked for different companies in the machine learning and data analytics areas shifting more and more focus also to people management.<br>
After getting my masters degree in computer science at ELTE in Budapest I worked as a researcher at the university. Later I moved to Germany and worked for different companies in the machine learning and data analytics areas shifting more and more focus also to people management.
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
    shortDescription: `After my dual vocational training as a specialist in media and information services at the publishing house Sueddeutscher Verlag in Munich I became Junior Project Manager at the ...`,
    description: `After my dual vocational training as a specialist in media and information services at the publishing house Sueddeutscher Verlag in Munich I became Junior Project Manager at the communication agency SZ Scala. During the last 2,5 years, I acquired project management and marketing skills and how to optimize processes efficiently in particular.<br>
My role is to organize all events at DPS and throw best batch closing parties. Apart from that I assist the marketing team with operations and I am also your contact person for all matters  like office supplies and access card.
`,
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
    shortDescription: `I studied Management and Technology at Technische Universität München and hustled in Startups among different industries ...`,
    description: `I studied Management and Technology at Technische Universität München and hustled in Startups among different industries.<br>
I am taking care of the business side of your project. I support you in any aspects of how to make money with your idea.
`,
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
    shortDescription: `I am a trained journalist and somehow slipped into Product Management and user research. I helped launching the online stores ...`,
    description: `I am a trained journalist and somehow slipped into Product Management and user research. I helped launching the online stores for software and toys for Amazon and made products useful to the customers of Weltbild. I developed dozens of digital products for Haymarket Media and established user research at Gutefrage.net<br>
I help teams at Digital Product School to discover promising problems and to create ideas that join the dots discovered through user research.  Of course also supporting them to turn those ideas into reality. And I love to stir things up with provoking questions.
`,
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
    shortDescription: `In the last 15 years I helped to successfully develop and launch digital products in various sectors including Automotive, Health Care ... `,
    description: `In the last 15 years I helped to successfully develop and launch digital products in various sectors including Automotive, Health Care, Manufacturing, and Finance. As a Coach I helped teams to have more impact and discover better ways of working together - from Product Teams to CEOs. Today I run the Digital Product School as Managing Director.<br>
At Digital Product School I focus on helping the DPS Core Team to do an amazing job as well as managing partner relations. Let me know if I can connect you with the UnternehmerTUM network to enhance your experience here at DPS even more.
`,
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
    shortDescription: `I am in the final semester of my masters studies in Computer Science at TUM. Before joining DPS, I worked as a frontend web developer at TUM ...`,
    description: `I am in the final semester of my masters studies in Computer Science at TUM. Before joining DPS, I worked as a frontend web developer at TUM and HomeFox Gmbh where I gained some skills in ReactJS and VueJS. Then later I was a SE participant in batch #5 at DPS where my team developed a chrome plugin for personalized Google search using VueJS.<br>
At DPS, I assist with various software engineering tasks. I learn by trying and failing and then making it work. So that's how I help the teams as well. As I was a participant at DPS, I can support them through what I learnt during my DPS journey. Moreover, if they have any SE queries, I can help them find a way through it.
`,
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
    shortDescription: `At the DPS I am responsible for the Marketing: Telling the story of DPS and motivating students & graduates to apply. Before joining DPS in February ...`,
    description: `At the DPS I am responsible for the Marketing: Telling the story of DPS and motivating students & graduates to apply. Before joining DPS in February 2017 I had a small startup in the online advertising business and worked for an advertising agency in Munich for 13 years. I have a Bachelor's degree in Social Sciences and an MBA in Marketing.<br>
At DPS I can help you with all Marketing related questions: finding test persons, creating landing pages, running small campaigns to get users on your landing page, creating small advertisements and everything else that helps you to test your hypotheses.
`,
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
    shortDescription: `I am an experienced scrum master. I have a background in business administration from HTWG Constance. Earlier in my career I realised that agile and scrum ...`,
    description: `I am an experienced scrum master. I have a background in business administration from HTWG Constance. Earlier in my career I realised that agile and scrum methods play a crucial role in product development. This is when I decided to pursue this and become a scrum master. <br>
As your Agile Coach at Digital Product School I support your team to overcome obstacles by having smooth communication. I not only equip you to learn Agile methods but also apply them to have a valuable workflow building a product. 
`,
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
    shortDescription: `I studied Computer Science at LMU and besides worked part-time at early stage Start-ups. During this time, I figured out that I enjoy working on Data ...`,
    description: `I studied Computer Science at LMU and besides worked part-time at early stage Start-ups. During this time, I figured out that I enjoy working on Data Engineering topics. After graduation, I joined gutefrage.net and we established the usage of Machine Learning in Germany's biggest Q&A platform.<br>
At Digital Product School I help the teams to identify technical risks in their solution and enable them to come up with a feasible first version of the product. During Code Reviews, I give feedback on code-related issues. In addition to that, I can help teams to improve their overall teamwork.
`,
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
            <p>{members[openId].description}</p>
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
Organized as an autonomous team, the Digital Product School core team consists of experts in a roles typically found in a successful startup: Product Management, Design, Software Engineering, Artificial Intelligence (AI), Agile Coaching, Business Development, Marketing and Operations. Before joining DPS they gathered long-standing experience in digital product development while working at tech-startups, big corporates and academia. Together they support, guide and help the teams to develop a user-centric digital product in an agile team.
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
