import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./TableColumnDesktopLig.module.css";

const TableColumnDesktopLig = ({
  className = "",
  header,
  rowItem,
  rowItem1,
  rowItem2,
  rowItem3,
  rowItem4,
  propWidth,
}) => {
  const tableColumnDesktopLigStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={[styles.tableColumnDesktopLig, className].join(" ")}
      style={tableColumnDesktopLigStyle}
    >
      <div className={styles.tableHeaderDesktopLig}>
        <div className={styles.header}>{header}</div>
      </div>
      <div className={styles.rows}>
        <div className={styles.tableRowItemDesktopL}>
          <div className={styles.rowItem}>{rowItem}</div>
        </div>
        <div className={styles.tableRowItemDesktopL1}>
          <div className={styles.rowItem1}>{rowItem1}</div>
        </div>
        <div className={styles.tableRowItemDesktopL2}>
          <div className={styles.rowItem2}>{rowItem2}</div>
        </div>
        <div className={styles.tableRowItemDesktopL3}>
          <div className={styles.rowItem3}>{rowItem3}</div>
        </div>
        <div className={styles.tableRowItemDesktopL4}>
          <div className={styles.rowItem4}>{rowItem4}</div>
        </div>
      </div>
    </div>
  );
};

TableColumnDesktopLig.propTypes = {
  className: PropTypes.string,
  header: PropTypes.string,
  rowItem: PropTypes.string,
  rowItem1: PropTypes.string,
  rowItem2: PropTypes.string,
  rowItem3: PropTypes.string,
  rowItem4: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default TableColumnDesktopLig;
