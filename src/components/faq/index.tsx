import * as React from 'react';
import Seo from '../seo';

class Faq extends React.Component {
  render() {
    return (
      <section className="faq u-content-wrapper">
        <Seo />
        <div className="faq__header u-content">
          <h1 className="faq__header-title">ANY UNANSWERED QUESTIONS?</h1>
          <p className="faq__header-description">Find the answers here!</p>
        </div>
        <div className="faq__content u-content">
          <h2>Is it an online program?</h2>
          <p>
            Digital Product School (DPS) is all about Teamwork. You learn how to
            work together in an interdisciplinary team: how to create ideas, how
            to structure your work and how to make decisions.We believe that’s
            only possible when you are physically together in a team
            space.That’s why we don’t offer it as an online program.
          </p>

          <h2>Is it a full time program?</h2>
          <p>
            Yes it’s a full time program. You will work fast. You will work as a
            team. You will permanently create new ideas, test assumptions and
            decide on how to go on. Your teammates rely on you. That’s why you
            have to be present at DPS the whole day - at least the normal office
            hours.
          </p>

          <h2>Why should I consider DPS?</h2>
          <ol>
            <li>Personal coaching</li>
            <li>
              Professional development by gaining practical work experience
            </li>
            <li>Experience working in a cross functional team</li>
            <li>Develop products that solve real world challenges</li>
            <li>
              Be part of the great network of DPS and UnternehmerTUM with a lot
              of possibilities to work and grow
            </li>
          </ol>

          <h2>What will I do at DPS?</h2>
          <p>
            You will build a user centric product and service that solves a real
            world challenge. Also you will get to work in a cross functional
            team and learn to apply valuable methods and techniques.
            <br />
            At DPS you will also get a chance to build a professional network
            and also exchange cultures with fellow participants from all around
            the world.
          </p>

          <h2>Am I the right applicant to apply?</h2>
          <p>
            We welcome students, graduates and early stage professionals who
            want to change careers or gain experience from all around the world.
            In case you are employed at the moment and want your company to
            profit from the concept of customer-centric product development?
            Check out{' '}
            <a href="https://digitalbusinesslab.de" className="u-link">
              <span>Digital Business Lab (DBL)</span>
            </a>{' '}
            where your company can take part with an own problem space and team.
          </p>

          <h2>What kind of products we develop at Digital Product School?</h2>
          <p>
            The products developed at the digital product school mostly address
            the problem space that reflects on subject areas like mobility or
            create a social impact. However the products can be Business to
            Business or Business to Consumer as a digital or a physical service.
          </p>

          <h2>Can this program be counted as an internship?</h2>
          <p>
            Yes it can be - but as an enrolled student it depends on your
            university. We have had participants from renowned institutions like
            the Technical University of Munich and CODE University Berlin where
            they were able to successfully count it as an internship or earn
            credits.
            <br />
            Please further check in with your institution before applying and we
            are open to collaborate and provide support.
          </p>

          <h2>Do you accept applications from non-european countries?</h2>
          <p>
            We welcome international applications and support the idea of
            diversity. Depending on the country you are living in it might be
            more or less difficult to get a visa for the European Union. We will
            support you with getting it but unfortunately there is no guarantee.
            It also might take time to get the visa. So if you need one you are
            advised to apply early in advance!
          </p>

          <h2>Is there any program fee?</h2>
          <p>
            Digital Product School is a non profit program that is free of cost.
          </p>

          <h2>Do I get paid?</h2>
          <p>
            We can offer you stipend of EUR 750.- per month / EUR 2.250.- in
            total for three months. Just don’t forget to select it in the
            application process.
          </p>

          <h2>Do you provide accommodation?</h2>
          <p>
            We currently provide limited accommodation where we consider
            international applicants as a priority. However after you are
            accepted we have a slack channel where the DPS community shares
            accommodation offers from Munich and also we send links to the
            channels through which you can find suitable accommodation for
            yourself.
            <br />
            Attention: There are a lot of fraud listings available online that
            you should be aware of. It is recommended that you don’t make any
            money transfers to book accommodation without exchanging
            identification, relevant documents and at least a video meeting from
            the apartment in offer.
          </p>

          <h2>Do I need to be enrolled as a student to apply?</h2>
          <p>
            Students or fresh graduates can be part of DPS. So you do not only
            have to be enrolled as a student to apply, but if you are already
            employed we recommend you apply through our{' '}
            <a href="https://digitalbusinesslab.de" className="u-link">
              <span>DBL Program</span>
            </a>
            .
          </p>

          <h2>What is the hiring process?</h2>
          <p>
            After you apply we shortlist you for one on one online interview
            with track heads. The interview is more like a conversation to get
            to know you better and your motivation to apply. Also we like to
            know about your future goals and expectations from our program. Our
            application process is ongoing. You can apply on our website. We try
            to have a look at your application as soon as you send it, but
            please consider that we might be covered with training the current
            batch and need some time to get back on you.
          </p>

          <h2>
            What happens to the products I develop together in team during the
            program?
          </h2>
          <p>
            As a part of a wild team you along with your team own the project
            and product together. It is up to you and your team to take the
            project forward and pitch it to an incubation further or keep it as
            a great learning experience.
            <br />
            However if you get to work in a company team the project and the
            product is in ownership of the company.
          </p>

          <h2>What kind of certificate I will be awarded with?</h2>
          <p>
            You will earn a certificate stating all the research tools and
            methods you applied to build the product with your team at the
            Digital Product School. The certificate will be awarded at the end
            of the program on an off boarding ceremony.
          </p>

          <h2>
            What are the job perspectives after I complete Digital Product
            School?
          </h2>
          <p>
            We at the Digital Product School do everything that is necessary to
            empower you to connect with suitable job opportunities in future.
          </p>
        </div>

        <div className="faq__call u-content">
          <p>
            Feel free to reach out to us in case of further queries{' '}
            <a href="mailto:hello@dpschool.io" className="u-link">
              <span>hello@dpschool.io</span>
            </a>
          </p>
        </div>
      </section>
    );
  }
}

export default Faq;
