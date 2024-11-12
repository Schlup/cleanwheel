import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer
      className={`${styles.footer} w-full h-165px flex justify-center items-center text-100px mt-auto bg-c10 text-w`}
    >
      © Copyright 2024 Clean Wheel Group.
    </footer>
  );
};

export default Footer;
