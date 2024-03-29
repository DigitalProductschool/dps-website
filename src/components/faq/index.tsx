import * as React from 'react';
import Seo from '../seo';
import Accordion from './accordion';

class Faq extends React.Component {
  render() {
    return (
      <section className="faq u-content-wrapper">
        <Seo />
        <div className="faq__content u-content">
          <Accordion title="Where does the DPS take place?">
            <p>
              The home of the DPS is the {' '}
                  <a
                    href="https://www.munich-urban-colab.de/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="u-link"
                  >
                    <span style={{ zIndex: 0 }}>Munich Urban Colab</span>
                  </a>
              , one of the most creative and 
              dynamic, entrepreneurial, and innovative nerve centers in Germany. Here you 
              will develop innovative ideas and new digital products together with your 
              team in your own team space. 
            </p>
          </Accordion>
          
          <Accordion title="Can I participate remotely?">
            <p>
              No. DPS is an on-site program where people with different backgrounds from 
              all over the came together in one office to build digital products, but 
              also to exchange, learn from each other, have fun together, and build new 
              friendships.<br />
              Creativity and innovation count for us. However, new ideas arise primarily 
              through direct exchange within the team. A strong team may accomplish incredible 
              feats. To do this, you have to get to know each other and experience first-hand 
              how to grow as a team, communicate, solve problems and get better week by week. 
              The best way to do that is to meet face-to-face in one place.<br />
              That's why it is mandatory to come to Munich for the duration of the DPS.
            </p>
          </Accordion>

          <Accordion title="Is it a full time program?">
            <p>
              Yes it’s a full time program. You will create new ideas, test assumptions and 
              decide in a team how to go on. Your teammates rely on you. <br />
              That’s why you are expected fully dedicate yourself to the program during 
              the twelve weeks for 40h per week during normal business hours. No side projects,
              no other jobs, no freelancing, no university classes, no master thesis.
            </p>
          </Accordion>

          <Accordion title="Why should I consider DPS?">
            <ol style={{ paddingLeft: '15px' }}>
              <li>Personal coaching</li>
              <li>
                Professional development by gaining practical work experience
              </li>
              <li>Experience working in a cross functional team</li>
              <li>Develop products that solve real world challenges</li>
              <li>
                Be part of the great network of DPS and UnternehmerTUM with a
                lot of possibilities to work and grow
              </li>
            </ol>
          </Accordion>

          <Accordion title="What will I do at DPS?">
            <p>
              You will build a user centric product and service that solves a
              real world challenge. Also you will get to work in a cross
              functional team and learn to apply valuable methods and
              techniques.
              <br />
              At DPS you will also get a chance to build a professional network
              and also exchange cultures with fellow participants from all
              around the world.
            </p>
          </Accordion>

          <Accordion title="Am I the right applicant to apply?">
            <p>
              We welcome students, graduates and early stage professionals who
              want to change careers or gain experience from all around the
              world. <br />
              In case you are employed at the moment and want your company to
              profit from the concept of customer-centric product development?
              Check out{' '}
              <a
                href="https://digitalbusinesslab.de"
                target="_blank"
                rel="noopener noreferrer"
                className="u-link"
              >
                <span style={{ zIndex: 0 }}>Digital Business Lab (DBL)</span>
              </a>{' '}
              where your company can take part with an own problem space and
              team.
            </p>
          </Accordion>

          <Accordion title="What kind of products we develop at Digital Product School?">
            <p>
              The products developed at the digital product school mostly
              address the problem space that reflects on areas like mobility or
              create a social impact. However the products can be Business to
              Business or Business to Consumer as a digital or a physical
              service.
            </p>
          </Accordion>

          <Accordion title="Can this program be counted as an internship?">
            <p>
              Yes it can be but as an enrolled student it also depends on your
              institution. In the past we have had participants from renowned
              institutions where they were able to successfully count it as an
              internship or earn credits. Please further check on with your
              institution before applying. We are more than happy to collaborate
              and provide support.
            </p>
          </Accordion>

          <Accordion title="Do you accept applications from non-european countries?">
            <p>
              We welcome international applications and support the idea of
              diversity. Depending on the country you are living in it might be
              more or less difficult to get a visa for the European Union. We
              will support you with getting it but unfortunately there is no
              guarantee. It also might take time to get the visa. So if you need
              one you are advised to apply early in advance!
            </p>
          </Accordion>

          <Accordion title="Is there any program fee?">
            <p>
              Digital Product School is a non profit program that is free of
              cost.
            </p>
          </Accordion>

          <Accordion title="Do I get paid?">
            <p>
              We offer you a scholarship of € 1,000.- per month for three months; 
              € 3.000.- in total.
              <br />
              Everyone who is accepted to DPS receives the Scholarship. An extra
              separate application is not necessary.
              <br />
              You can support the program and waive the payment if you do not need 
              the scholarship. Please address this in your interview or contact us 
              separately.
            </p>
          </Accordion>

          <Accordion title="Do you provide accommodation?">
            <p>
              We can support finding housing, but can not provide housing
              itself.
              <br />
              However after you are accepted we have a slack channel where the
              DPS community shares housing offers from Munich. Also we send
              links to the channels through which you can find suitable
              accommodation for yourself.
              <br />
              <br />
              Also to bring to your attention that there are a lot of fraud
              listings available online that you should be aware of. It is
              recommended that you don’t make any money transfers to book
              accommodation without exchanging identification, relevant
              documents and at least a video meeting from the apartment in
              offer.
            </p>
          </Accordion>

          <Accordion title="Do I need to be enrolled as a student to apply?">
            <p>
              Students or fresh graduates can be part of DPS. So you do not only
              have to be enrolled as a student to apply, but if you are already
              employed we recommend you apply through our{' '}
              <a
                href="https://digitalbusinesslab.de"
                target="_blank"
                rel="noopener noreferrer"
                className="u-link"
              >
                <span style={{ zIndex: 0 }}>Digital Business Lab (DBL)</span>
              </a>
              .
            </p>
          </Accordion>

          <Accordion title="What is the hiring process?">
            <p>
              After you apply we shortlist you for one on one online interview
              with track heads. The interview is more like a conversation to get
              to know you better and your motivation to apply. Also we like to
              know about your future goals and expectations from our program.
              Our application process is ongoing. You can apply on our website.
              We try to have a look at your application as soon as you send it
              but please consider that we might be covered with training the
              current batch and need some time to get back to you.
            </p>
          </Accordion>

          <Accordion title="Which time zone counts for the application deadline?">
            <p>
              The application deadline is on the date stated at 11:59 pm Central
              European Time (CET / UTC+1) during winter time and Central
              European Summer Time (CEST / UTC+2) during summer time.
            </p>
          </Accordion>

          <Accordion
            title="What happens to the products I develop together in a team during the
            program?"
          >
            <p>
              As a part of a wild team at DPS you along with your team own the
              project and the product. It is up to you and your team to take the
              project forward and pitch it to an incubation further or keep it
              as a great learning experience. Where as if you get to work in a
              company team the project and the product is in ownership of the
              company.
            </p>
          </Accordion>
          <Accordion title="What kind of certificate will I be awarded?">
            <p>
              You will be awarded with a certificate at the end of the program
              in an off boarding ceremony. The certificate will state all the
              research methods and tools you learned and applied during the
              program to build a product together in a team.
            </p>
          </Accordion>
          <Accordion
            title="What are the job perspectives after I complete Digital Product
            School?"
          >
            <p>
              We at the Digital Product School do everything that is necessary
              to empower you to connect with suitable job opportunities in
              future.
            </p>
          </Accordion>

          <p className="faq__title" style={{ marginTop: '40px' }}>
            {`Feel free to reach out to us in case of further queries `}
            <a
              href="mailto:hello@dpschool.io"
              className="u-link"
              style={{ fontWeight: 900, cursor: 'pointer' }}
            >
              <span style={{ zIndex: 0 }}>hello@dpschool.io</span>
            </a>
          </p>
        </div>
      </section>
    );
  }
}

export default Faq;
