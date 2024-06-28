import WindowedSection from 'Components/UI/WindowedSection/WindowedSection';
import styles from './AboutSection.module.scss';

interface IAboutSectionProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const AboutSection = (props: IAboutSectionProps) => {
  return (
    <WindowedSection title='About' isOpen={props.open} close={() => props.setOpen(false)}>
      <div>noted! is a web app for taking notes and saving them locally.</div>
      <div>It was built with React and TypeScript, and <a href='https://github.com/martindylan/noted' target='_blank' rel='noreferrer'>here's a link</a> to the source code.</div>
      <hr></hr>
      <div>Other tech used:</div>
      <ul>
        <li><a href='https://github.com/hello-pangea/dnd' target='_blank' rel='noreferrer'>@hello-pangea/dnd</a></li>
        <li><a href='https://sass-lang.com/' target='_blank' rel='noreferrer'>Sass</a></li>
        <li><a href='https://github.com/eligrey/FileSaver.js' target='_blank' rel='noreferrer'>FileSaver.js</a></li>
      </ul>
      <div className={styles.foot}>
        <div>Dylan Martin, 2024</div>
      </div>
    </WindowedSection >
  )
}
export default AboutSection;