import { Button } from "../button/button";
import styles from "./tabs.module.css";

export const Tabs = ({
  tabs = [],
  activeTab,
  onActiveTabChanged,
  getLabel,
}) => {
  if (tabs.length === 0) {
    return null;
  }
  return (
    <>
      {tabs.map((tab, idx) => (
        <Button
          key={tab.id}
          onClick={() => onActiveTabChanged(tabs[idx])}
          isActive={tab === activeTab}
          className={styles.tab}
        >
          <span>{getLabel(tab)}</span>
        </Button>
      ))}
    </>
  );
};
