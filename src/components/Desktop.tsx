import TableColumnDesktopLig from "./TableColumnDesktopLig";
import SideNavigation from "./SideNavigation";
import PropTypes from "prop-types";
import styles from "./Desktop.module.css";

const Desktop = ({ className = "" }) => {
  return (
    <form className={[styles.desktop1, className].join(" ")}>
      <section className={styles.tableDesktopLight}>
        <div className={styles.tableSelectionColumnDes}>
          <div className={styles.tableHeaderCheckboxDe}>
            <input className={styles.unselectedCheckbox} type="checkbox" />
          </div>
          <div className={styles.rows}>
            <div className={styles.tableRowItemCheckbox}>
              <input className={styles.unselectedCheckbox1} type="checkbox" />
            </div>
            <div className={styles.tableRowItemCheckbox1}>
              <input className={styles.unselectedCheckbox2} type="checkbox" />
            </div>
            <div className={styles.tableRowItemCheckbox2}>
              <input className={styles.unselectedCheckbox3} type="checkbox" />
            </div>
            <div className={styles.tableRowItemCheckbox3}>
              <input className={styles.unselectedCheckbox4} type="checkbox" />
            </div>
            <div className={styles.tableRowItemCheckbox4}>
              <input className={styles.unselectedCheckbox5} type="checkbox" />
            </div>
          </div>
        </div>
        <div className={styles.tableColumnDesktopLig}>
          <div className={styles.tableHeaderDesktopLig}>
            <div className={styles.header}>All Airports</div>
            <img
              className={styles.arrowIcon}
              loading="lazy"
              alt=""
              src="/arrow@2x.png"
            />
          </div>
          <div className={styles.rows1}>
            <div className={styles.tableRowItemDesktopL}>
              <div className={styles.rowItem}>
                Indra Gandhi International Airport
              </div>
            </div>
            <div className={styles.tableRowItemDesktopL1}>
              <div className={styles.rowItem1}>Dubai International Airport</div>
            </div>
            <div className={styles.tableRowItemDesktopL2}>
              <div className={styles.rowItem2}>Heathrow Airport</div>
            </div>
            <div className={styles.tableRowItemDesktopL3}>
              <div className={styles.rowItem3}>Istanbul Airport</div>
            </div>
            <div className={styles.tableRowItemDesktopL4}>
              <div className={styles.rowItem4}>
                Rajiv Gandhi International Airport
              </div>
            </div>
          </div>
        </div>
        <TableColumnDesktopLig
          header="Country"
          rowItem="India"
          rowItem1="UAE"
          rowItem2="England"
          rowItem3="Turkey"
          rowItem4="Texas"
        />
        <TableColumnDesktopLig
          header="Code"
          rowItem="DEL"
          rowItem1="DXB"
          rowItem2="LHR"
          rowItem3="IST"
          rowItem4="DFW"
          propWidth="95px"
        />
        <TableColumnDesktopLig
          header="Terminals"
          rowItem="3"
          rowItem1="5"
          rowItem2="6"
          rowItem3="3"
          rowItem4="14"
          propWidth="95px"
        />
      </section>
      <div className={styles.section}>
        <div className={styles.textContainer}>
          <a className={styles.section1}>Airports</a>
        </div>
        <div className={styles.divider} />
      </div>
      <button className={styles.buttonDesktopLight}>
        <div className={styles.label}>+ Add new</div>
      </button>
      <div className={styles.quickActionDesktopLight}>
        <div className={styles.background} />
        <div className={styles.leftIcon}>
          <img
            className={styles.editIcon}
            loading="lazy"
            alt=""
            src="/edit.svg"
          />
        </div>
        <div className={styles.centerIcon}>
          <img className={styles.copyIcon} alt="" src="/copy.svg" />
        </div>
        <div className={styles.rightIcon}>
          <img
            className={styles.deleteIcon}
            loading="lazy"
            alt=""
            src="/delete.svg"
          />
        </div>
      </div>
      <div className={styles.quickActionDesktopLight1}>
        <div className={styles.background1} />
        <div className={styles.leftIcon1}>
          <img
            className={styles.editIcon1}
            loading="lazy"
            alt=""
            src="/edit.svg"
          />
        </div>
        <div className={styles.centerIcon1}>
          <img className={styles.copyIcon1} alt="" src="/copy.svg" />
        </div>
        <div className={styles.rightIcon1}>
          <img
            className={styles.deleteIcon1}
            loading="lazy"
            alt=""
            src="/delete.svg"
          />
        </div>
      </div>
      <div className={styles.quickActionDesktopLight2}>
        <div className={styles.background2} />
        <div className={styles.leftIcon2}>
          <img
            className={styles.editIcon2}
            loading="lazy"
            alt=""
            src="/edit.svg"
          />
        </div>
        <div className={styles.centerIcon2}>
          <img className={styles.copyIcon2} alt="" src="/copy.svg" />
        </div>
        <div className={styles.rightIcon2}>
          <img
            className={styles.deleteIcon2}
            loading="lazy"
            alt=""
            src="/delete.svg"
          />
        </div>
      </div>
      <div className={styles.quickActionDesktopLight3}>
        <div className={styles.background3} />
        <div className={styles.leftIcon3}>
          <img
            className={styles.editIcon3}
            loading="lazy"
            alt=""
            src="/edit.svg"
          />
        </div>
        <div className={styles.centerIcon3}>
          <img className={styles.copyIcon3} alt="" src="/copy.svg" />
        </div>
        <div className={styles.rightIcon3}>
          <img
            className={styles.deleteIcon3}
            loading="lazy"
            alt=""
            src="/delete.svg"
          />
        </div>
      </div>
      <div className={styles.quickActionDesktopLight4}>
        <div className={styles.background4} />
        <div className={styles.leftIcon4}>
          <img
            className={styles.editIcon4}
            loading="lazy"
            alt=""
            src="/edit.svg"
          />
        </div>
        <div className={styles.centerIcon4}>
          <img className={styles.copyIcon4} alt="" src="/copy.svg" />
        </div>
        <div className={styles.rightIcon4}>
          <img
            className={styles.deleteIcon4}
            loading="lazy"
            alt=""
            src="/delete.svg"
          />
        </div>
      </div>
      <SideNavigation />
      <img className={styles.desktop1Child} alt="" src="/group-11@2x.png" />
    </form>
  );
};

Desktop.propTypes = {
  className: PropTypes.string,
};

export default Desktop;
