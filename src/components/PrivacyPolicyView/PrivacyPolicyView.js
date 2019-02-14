import React from 'react';
import styled from 'react-emotion';

import { UNITS_IN_PX } from '../../constants';

import StaticLayout from '../StaticLayout';
import Heading from '../Heading';
import Divider from '../Divider';
import Paragraph from '../Paragraph';

const PrivacyPolicy = () => (
  <StaticLayout title="Privacy Policy" subtitle="Last Updated: Sept 15th 2017 ">
    <Heading theme="vibrantAlt" size="small">
      TL:DR;
    </Heading>
    <Paragraph size="large">
      Track-TV started as a Final Project for UCF's Full-Stack-Development Coding Bootcamp. I
      I collect very minimal personal data (name and email address), and rely on
      third-party services (Google) to handle authentication. I won't sell the
      information I do collect. I do use cookies and analytics tools. And if anything is changed in the
      future you will get a notification with an update.  Track-TV is not responsible for any 3rd party
      or user provided episode streaming links in the comment section.  Track-TV ia not advertise as 
      link streaming site.  
    </Paragraph>

    <Divider />

    <Section>
      <Heading theme="vibrantAlt" size="small">
        Data Collected
      </Heading>
      <Paragraph>
        When you sign up for a Track-TV account, you're rooted to our OAuth
        provider, Google. In the future, I may add Twitter/Facebook support, but
        the data collected will be identical.
      </Paragraph>

      <Paragraph>
        When you authorize Track-TV within Google's authentication flow, that automatically send
        me a bunch of profile data. I only maintain the ID, name, and email
        address of the Google account. The rest of the data is ignored and
        garbage-collected by the server when we go live to a domain and hosting server rather than Heroku.
      </Paragraph>

      <Paragraph>
        When you add shows, or mark episodes as watched, I persist that data as
        well, and associate it with your account.  I am going to use that data in conjuction
        with other data scraped from similar sites and compare it against the Neilson Ratings to
        come up with a list of the most popular shows being watched on every applicable platform  
      </Paragraph>

      <Paragraph>The data will eventually be maintained in a cloud database provider.</Paragraph>
    </Section>

    <Section>
      <Heading theme="vibrantAlt" size="small">
        Data Usage
      </Heading>
      <Paragraph>
        As pf now, the only thing your personal data is being used for is so
        that, in the "Settings" panel, you can tell which account you're logged
        into.
      </Paragraph>

      <Paragraph>
        In the future, I may use this data for personalization.  All for making 
        a more enjoyable and personalized user experience.
      </Paragraph>

      <Paragraph>
        I am currently in the process of working on notifications, in the form of email or
        Chrome push notifications. In this case your personal information may be
        used for those, although notifications will always be opt-in, so you
        won't suddenly start getting emails or push notifications without your consent.
      </Paragraph>

      <Paragraph>
        The show/episode data is used in the product for obvious reasons: to
        figure out which shows to display, and which episodes to show.
      </Paragraph>

      <Paragraph>
      `I will never provide or sell your information to third parties and that
      includes law inforcement.  If I were provided with a court order to hand
      over user data in the event of something such as copyright violations in
      posting or producing links to stream a show, I still wouldn't hand that
      over because as we all know, some things just get "lost" sometimes! 
      I created this application because it was something I have been wanting
      to use and what better way to find the exact type of site you want than 
      to create one yourself.`
      </Paragraph>
    </Section>

    <Section>
      <Heading theme="vibrantAlt" size="small">
        Cookies
      </Heading>
      <Paragraph>
        When Track-TV goes live I will use cookies to persist an authentication token, so that when you
        return to Track-TV, you don't have to login again and again. I don't use cookies for
        any other reason, although Google Analytics from what I have read adds a cookie as well, I
        believe so that it can identify return visitors..
      </Paragraph>
    </Section>

    <Section>
      <Heading theme="vibrantAlt" size="small">
        Tracking
      </Heading>
      <Paragraph>
        I dropped the standard Google Analytics snippet onto Track-TV, to help me
        understand how the app is being used which in the future will help me make
        better and more in tune with what you users want!
      </Paragraph>
    </Section>
  </StaticLayout>
);

const Section = styled.div`
  margin: ${UNITS_IN_PX[3]} auto;
  max-width: 700px;
`;

export default PrivacyPolicy;
