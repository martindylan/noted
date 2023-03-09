import React, { FunctionComponent } from 'react';
import WindowedSection from '../../../UI/WindowedSection/WindowedSection';
import styles from './AboutSection.module.css';

interface IAboutSectionProps {
  isOpen: any;
}

const AboutSection: FunctionComponent<IAboutSectionProps> = (props) => {
  return (
    <WindowedSection title='About' isOpen={props.isOpen}>
      <div>noted! is a web app for taking notes and saving them locally.</div>
      <div>It was built with React and TypeScript, and <a href='https://github.com/martindylan/noted' target='_blank'>here's a link</a> to the source code.</div>
      <hr></hr>
      <div>Other tech used:</div>
      <ul>
        <li><a href='https://github.com/eligrey/FileSaver.js' target='_blank'>FileSaver.js</a></li>
        <li><a href='https://github.com/peterh32/react-drag-drop-container' target='_blank'>react-drag-drop-container</a> (yet to be implemented)</li>
      </ul>
      <div className={styles.foot}>
        <div>Dylan Martin, 2023</div>
      </div>
    </WindowedSection >
  )
}
export default AboutSection;