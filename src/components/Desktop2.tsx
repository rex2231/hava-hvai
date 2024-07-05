import CardDesktopLight1 from "./CardDesktopLight1";
import CardDesktopLight from "./CardDesktopLight";
import SideNavigation from "./SideNavigation";
import PropTypes from "prop-types";
import styles from "./Desktop2.module.css";

const Desktop2 = ({ className = "" }) => {
  return (
    <form className={[styles.desktop3, className].join(" ")}>
      <div className={styles.pickerDesktopLight}>
        <div className={styles.labelContainer}>
          <div className={styles.label}>Category</div>
          <div className={styles.asteriskContainer}>
            <img className={styles.asteriskIcon} alt="" src="/asterisk.svg" />
          </div>
        </div>
        <div className={styles.fieldButton}>
          <div className={styles.labelContainer1}>
            <div className={styles.value}>Option 1</div>
          </div>
          <div className={styles.chevronContainer}>
            <img
              className={styles.chevrondownIcon}
              alt=""
              src="/chevrondown.svg"
            />
          </div>
        </div>
        <div className={styles.helpTextContainer}>
          <div className={styles.helpText}>Help text</div>
        </div>
      </div>
      <div className={styles.pickerDesktopLight1}>
        <div className={styles.labelContainer2}>
          <div className={styles.label1}>Sub Category</div>
          <div className={styles.asteriskContainer1}>
            <img className={styles.asteriskIcon1} alt="" src="/asterisk.svg" />
          </div>
        </div>
        <div className={styles.fieldButton1}>
          <div className={styles.labelContainer3}>
            <div className={styles.value1}>Option 1</div>
          </div>
          <div className={styles.chevronContainer1}>
            <img
              className={styles.chevrondownIcon1}
              alt=""
              src="/chevrondown.svg"
            />
          </div>
        </div>
        <div className={styles.helpTextContainer1}>
          <div className={styles.helpText1}>Help text</div>
        </div>
      </div>
      <div className={styles.switchDesktopLight}>
        <div className={styles.switchWrapper}>
          <div className={styles.switch}>
            <div className={styles.handle} />
          </div>
        </div>
        <div className={styles.label2}>Show image</div>
      </div>
      <div className={styles.buttonDesktopLight}>
        <img className={styles.shareIcon} alt="" src="/share.svg" />
        <div className={styles.label3}>upload image</div>
      </div>
      <div className={styles.textFieldDesktopLight}>
        <div className={styles.labelCountContainer}>
          <div className={styles.labelContainer4}>
            <div className={styles.label4}>Service Name</div>
            <div className={styles.asteriskContainer2}>
              <img className={styles.asteriskIcon2} alt="" />
            </div>
          </div>
          <div className={styles.characterCounter}>
            <div className={styles.count}>50</div>
          </div>
        </div>
        <div className={styles.field}>
          <input
            className={styles.value2}
            placeholder={`Lost & found`}
            type="text"
          />
          <div className={styles.validationCheckmark}>
            <img className={styles.checkmark50Icon} alt="" />
          </div>
        </div>
        <div className={styles.helpTextContainer2}>
          <div className={styles.helpText2}>Help text</div>
        </div>
      </div>
      <div className={styles.textFieldDesktopLight1}>
        <div className={styles.labelCountContainer1}>
          <div className={styles.labelContainer5}>
            <div className={styles.label5}>Description</div>
            <div className={styles.asteriskContainer3}>
              <img className={styles.asteriskIcon3} alt="" />
            </div>
          </div>
          <div className={styles.characterCounter1}>
            <div className={styles.count1}>50</div>
          </div>
        </div>
        <div className={styles.field1}>
          <input
            className={styles.value3}
            placeholder="type here"
            type="text"
          />
          <div className={styles.validationCheckmark1}>
            <img className={styles.checkmark50Icon1} alt="" />
          </div>
        </div>
        <div className={styles.helpTextContainer3}>
          <div className={styles.helpText3}>Help text</div>
        </div>
      </div>
      <div className={styles.tableRowItemDesktopL}>
        <div className={styles.rowItem}>{`Lost & found`}</div>
      </div>
      <div className={styles.quickActionDesktopLight}>
        <div className={styles.background} />
        <div className={styles.leftIcon}>
          <img className={styles.editIcon} alt="" src="/edit.svg" />
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
      <div className={styles.tableRowItemDesktopL1}>
        <div className={styles.rowItem1}>Lounge</div>
      </div>
      <div className={styles.quickActionDesktopLight1}>
        <div className={styles.background1} />
        <div className={styles.leftIcon1}>
          <img className={styles.editIcon1} alt="" src="/edit.svg" />
        </div>
        <div className={styles.centerIcon1}>
          <img className={styles.copyIcon1} alt="" src="/copy.svg" />
        </div>
        <div className={styles.rightIcon1}>
          <img className={styles.deleteIcon1} alt="" src="/delete.svg" />
        </div>
      </div>
      <div className={styles.tableRowItemDesktopL2}>
        <div className={styles.rowItem2}>Money Exchange</div>
      </div>
      <div className={styles.quickActionDesktopLight2}>
        <div className={styles.background2} />
        <div className={styles.leftIcon2}>
          <img className={styles.editIcon2} alt="" src="/edit.svg" />
        </div>
        <div className={styles.centerIcon2}>
          <img className={styles.copyIcon2} alt="" src="/copy.svg" />
        </div>
        <div className={styles.rightIcon2}>
          <img className={styles.deleteIcon2} alt="" src="/delete.svg" />
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.textContainer}>
          <h3 className={styles.section1}>Services</h3>
        </div>
        <div className={styles.divider} />
      </div>
      <CardDesktopLight1 />
      <CardDesktopLight />
      <button className={styles.buttonDesktopLight1}>
        <div className={styles.label6}>+Add Terminal</div>
      </button>
      <button className={styles.buttonDesktopLight2}>
        <div className={styles.label7}>Save</div>
      </button>
      <div className={styles.tabUnitDesktopLight}>
        <div className={styles.divider1} />
        <div className={styles.tab1}>
          <img className={styles.icon} alt="" src="/icon.svg" />
          <div className={styles.labelContainer6}>
            <div className={styles.label8}>Terminals</div>
          </div>
          <div className={styles.selectionIndicator} />
        </div>
        <div className={styles.tab2Wrapper}>
          <div className={styles.tab2}>
            <img className={styles.icon1} alt="" src="/icon1.svg" />
            <div className={styles.labelContainer7}>
              <a className={styles.label9}>Transport</a>
            </div>
          </div>
        </div>
        <div className={styles.tab3Wrapper}>
          <div className={styles.tab3}>
            <img className={styles.icon2} alt="" src="/icon1.svg" />
            <div className={styles.labelContainer8}>
              <div className={styles.label10}>Contact details</div>
            </div>
          </div>
        </div>
      </div>
      <h1 className={styles.text}>Indira Gandhi International Airport</h1>
      <div className={styles.breadcrumbListDesktopLi}>
        <div className={styles.truncationMenu}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </div>
        <img className={styles.chevron75Icon} alt="" />
        <div className={styles.breadcrumbItem1}>
          <div className={styles.breadcrumbItem}>Genres</div>
        </div>
        <img className={styles.chevron75Icon1} alt="" src="/chevron75.svg" />
        <div className={styles.breadcrumbItem2}>
          <a className={styles.breadcrumbItem3}>Airports</a>
        </div>
        <div className={styles.chevron75Wrapper}>
          <img
            className={styles.chevron75Icon2}
            loading="lazy"
            alt=""
            src="/chevron75.svg"
          />
        </div>
        <div className={styles.breadcrumbTitle}>
          <div className={styles.breadcrumbTitle1}>
            Indira Gandhi International Airport
          </div>
        </div>
      </div>
      <SideNavigation />
      <img className={styles.desktop3Child} alt="" src="/group-11@2x.png" />
      <footer className={styles.desktop3Item} />
      <div className={styles.alertDialogDesktopLightParent}>
        <div className={styles.alertDialogDesktopLight}>
          <div className={styles.titleDescription}>
            <div className={styles.titleDivider}>
              <div className={styles.title}>Terminal title</div>
              <img className={styles.dividerIcon} alt="" src="/divider.svg" />
            </div>
            <div className={styles.description}>Description</div>
          </div>
          <div className={styles.buttons}>
            <button className={styles.secondaryButton}>
              <div className={styles.label11}>Cancel</div>
            </button>
            <button className={styles.primaryButton}>
              <div className={styles.label12}>Continue</div>
            </button>
          </div>
        </div>
        <div className={styles.buttonDesktopLightWrapper}>
          <button className={styles.buttonDesktopLight3}>
            <img className={styles.shareIcon1} alt="" src="/share.svg" />
            <div className={styles.label13}>upload image</div>
          </button>
        </div>
      </div>
    </form>
  );
};

Desktop2.propTypes = {
  className: PropTypes.string,
};

export default Desktop2;
