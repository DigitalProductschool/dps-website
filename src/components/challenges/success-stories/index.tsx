import React, { useState } from 'react';
import Section from '../../shared/components/content/section';
import Cutout from '../../shared/components/content/cutout';
import { Link } from 'gatsby';

interface SuccessStoriesProps {
  data: any;
}

export default function SuccessStories(props: SuccessStoriesProps) {
  let [width, setWidth] = useState(0);
  let [currentPosition, setCurrentPosition] = useState(0);

  const arrowRightClick = () => {
    if (currentPosition !== 2) {
      setCurrentPosition(currentPosition + 1);
      if (window.innerWidth > 600) {
        setWidth(width - 600);
      } else {
        setWidth(width - 400);
      }
    }
  };

  const arrowLeftClick = () => {
    if (currentPosition !== 0) {
      setCurrentPosition(currentPosition - 1);
      if (window.innerWidth > 600) {
        setWidth(width + 600);
      } else {
        setWidth(width + 400);
      }
    }
  };

  return (
    <div className="u-section-margin-top success__wrapper">
      <Section
        backgroundColor={'#051048'}
        textColor={'white'}
        title="Success Stories"
        className="u-section-margin-top"
      >
        <p className="u-text">
          We have enabled and guided many teams on their innovation adventure:{' '}
        </p>
        <div className="success__icons__wrapper">
          <img
            onClick={arrowLeftClick}
            src="/assets/challenges/mobility/arrow-small-left.svg"
          />
          <img
            onClick={arrowRightClick}
            src="/assets/challenges/mobility/arrow-small-right.svg"
          />
        </div>
      </Section>
      <div
        className="success__cut-out"
        style={{
          marginLeft: width,
        }}
      >
        <Cutout columns={3} section="success">
          {props.data.map(
            (
              story: {
                image: string;
                teamName: React.ReactNode;
                hmw: React.ReactNode;
                solution: React.ReactNode;
                more: React.ReactNode;
                url: string;
              },
              index: React.Key
            ) => (
              <div key={index}>
                <img
                  alt="success-story"
                  className="success__list__img"
                  src={story.image}
                />
                <div className="success__content__wrapper">
                  <p className="u-text bold">{story.teamName}</p>
                  <h3 className="u-text bold">{story.hmw}</h3>
                  <p className="u-text">{story.solution}</p>
                  <Link to={story.url} className="u-link" target="_blank">
                    <span>{story.more}</span>
                  </Link>
                </div>
              </div>
            )
          )}
        </Cutout>
      </div>
    </div>
  );
}
