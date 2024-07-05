import PropTypes from "prop-types";
import styles from "./CardDesktopLight.module.css";

const CardDesktopLight = ({ className = "" }) => {
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
          <div className={styles.title}>Terminal 1</div>
          <img className={styles.moreIcon} alt="" src="/more.svg" />
        </div>
        <div className={styles.metadata}>
          Optional metadata should be two lines.
        </div>
      </div>
      <div className={styles.quickActions}>
        <div className={styles.cardQuickActionsDesktop}>
          <div className={styles.background} />
          <div className={styles.iconContainer}>
            <div className={styles.selectedCheckbox}>
              <img className={styles.shapeIcon} alt="" src="/shape.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CardDesktopLight.propTypes = {
  className: PropTypes.string,
};

export default CardDesktopLight;
