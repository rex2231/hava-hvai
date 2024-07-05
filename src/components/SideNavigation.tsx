import PropTypes from "prop-types";
import styles from "./SideNavigation.module.css";

const SideNavigation = ({ className = "" }) => {
  return (
    <div className={[styles.sideNavigation, className].join(" ")}>
      <div className={styles.section}>
        <div className={styles.navigationItem}>
          <img className={styles.icon} alt="" src="/icon2.svg" />
          <div className={styles.labelContainer}>
            <a className={styles.label}>Home</a>
          </div>
        </div>
        <div className={styles.navigationItem1}>
          <img className={styles.icon1} alt="" src="/icon-1.svg" />
          <div className={styles.labelContainer1}>
            <a className={styles.label1}>Dashboard</a>
          </div>
        </div>
      </div>
      <div className={styles.section1}>
        <div className={styles.navigationHeader}>
          <img className={styles.icon2} alt="" src="/icon-1.svg" />
          <div className={styles.headerContainer}>
            <a className={styles.header}>Services</a>
          </div>
        </div>
        <div className={styles.navigationItem2}>
          <img className={styles.icon3} alt="" src="/icon3.svg" />
          <div className={styles.labelContainer2}>
            <div className={styles.label2}>Airports</div>
          </div>
        </div>
        <div className={styles.navigationItem3}>
          <img className={styles.icon4} alt="" src="/icon4.svg" />
          <div className={styles.labelContainer3}>
            <div className={styles.label3}>Videos</div>
          </div>
        </div>
      </div>
      <div className={styles.section2}>
        <div className={styles.navigationHeader1}>
          <img className={styles.icon5} alt="" src="/icon-1.svg" />
          <div className={styles.headerContainer1}>
            <div className={styles.header1}>Others</div>
          </div>
        </div>
        <div className={styles.navigationItem4}>
          <img className={styles.icon6} alt="" src="/icon5.svg" />
          <div className={styles.labelContainer4}>
            <div className={styles.label4}>List 1</div>
          </div>
        </div>
        <div className={styles.navigationItem5}>
          <img className={styles.icon7} alt="" src="/icon4.svg" />
          <div className={styles.labelContainer5}>
            <div className={styles.label5}>List 2</div>
          </div>
        </div>
        <div className={styles.navigationItem6}>
          <img className={styles.icon8} alt="" src="/icon4.svg" />
          <div className={styles.labelContainer6}>
            <div className={styles.label6}>List 3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

SideNavigation.propTypes = {
  className: PropTypes.string,
};

export default SideNavigation;
