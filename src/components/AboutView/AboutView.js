import React from 'react';
import styled from 'react-emotion';

import { UNIT, UNITS_IN_PX } from '../../constants';

import StaticLayout from '../StaticLayout';
import Emoji from '../Emoji';
import Spacer from '../Spacer';
import Link from '../Link';
import Paragraph from '../Paragraph';

const AboutView = () => (
  <StaticLayout title="About Track-TV">
    <Section>
      <Paragraph size="large">
        <EmojiRotater>
          {/*
                ESLint doesn't like my Emoji wrapper :/
                I'm following the a11y rules, but it can't tell.
              */}
          {/* eslint-disable jsx-a11y/accessible-emoji */}
          <Emoji size={40}>👋</Emoji>.
          {/* eslint-enable jsx-a11y/accessible-emoji */}
        </EmojiRotater>{' '}
        Hi! I'm Nick. I built Track-TV.
      </Paragraph>

      <Paragraph size="large">
        I spent countless nights after work binge watching
        some of my favorite TV shows, but I was always looking 
        for the next one to watch.
      </Paragraph>

      <Paragraph size="large">
        Finding something to watch was tricky, though. Unless we binge-watch a
        series, it's hard to remember where we left off when we return to it.
        Worse, sometimes I'd totally forget that a great show even existed;
        months after a season ends, how do you remember to check to see if there
        are new episodes?
      </Paragraph>

      <Paragraph size="large">
        I tried some of the existing options but found that they were bloated
        overcomplicated. I wanted a quick, fun way to check what shows were
        available for me to watch, and nothing I found did the trick.
      </Paragraph>

      <Paragraph size="large">
        As a software developer and semi-competent designer, I realized that
        this was a problem I could solve, and Track-TV was built!{' '}
        {/*
                ESLint doesn't like my Emoji wrapper :/
                I'm following the a11y rules, but it can't tell.
              */}
        {/* eslint-disable jsx-a11y/accessible-emoji */}
        <Emoji>✨</Emoji>
        {/* eslint-enable jsx-a11y/accessible-emoji */}
      </Paragraph>

      <Paragraph size="large">
        This was a school final project for the University Of Central 
        Florida's Full-Stack Coding BootCamp so I had limited time to 
        get things together and borrowed a lot of ideas on how to set 
        things up with react and passport so I will be continuously
        adding to the site to make it better!
      </Paragraph>

      <Paragraph size="large">
        The goal of Track-TV is not to become a business, or to make money. It's
        something I wanted to exist, and a good excuse to practice my design/dev
        skills. If, by some miracle, it becomes popular, I may have to introduce
        some monetization, to cover its costs.
      </Paragraph>

      <Paragraph size="large">
        I hope you enjoy Track-TV! If it helps, please{' '}
        <Link to="/contact">reach out and let me know</Link>!
      </Paragraph>

      <Signed>Nicholas Donato</Signed>

      <Spacer size={UNIT * 4} />

      <Paragraph size="small">
        PS, for Fellow devs: if it interests you, the source is{' '}
        <Link external href="https://github.com/njd/1228/Tello-Final-Project">
          available on GitHub
        </Link>
        .
      </Paragraph>
    </Section>
  </StaticLayout>
);

const EmojiRotater = styled.span`
  display: inline-block;
  margin-left: -14px;
`;

const Section = styled.div`
  margin: ${UNITS_IN_PX[3]} auto;
  max-width: 800px;
`;

const Signed = styled.div`
  text-align: right;
  font-size: 32px;
  font-family: 'Raleway';
  font-weight: bold;

  &:before {
    content: '- ';
  }
`;

export default AboutView;
