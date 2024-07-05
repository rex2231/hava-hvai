import PropTypes from "prop-types";
import styles from "./CardDesktopLight1.module.css";

const CardDesktopLight1 = ({ className = "" }) => {
  return (
    <div className={[styles.cardDesktopLight, className].join(" ")}>
      <img
        className={styles.imageIcon}
        loading="lazy"
        alt=""
        src="/image@2x.png"
      />
      <div className={styles.textContent}>
        <div className={styles.header}>
          <div className={styles.title}>Terminal 2</div>
          <img className={styles.moreIcon} alt="" src="/more.svg" />
        </div>
        <div className={styles.metadata}>
          Optional metadata should be two lines.
        </div>
      </div>
    </div>
  );
};

CardDesktopLight1.propTypes = {
  className: PropTypes.string,
};

export default CardDesktopLight1;
