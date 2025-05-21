import { useState } from "react";
import { TabItem } from "./TabItem";

export const Tabs = ({
  tabs = [],
  onActiveTabChanged,
  initial = 0,
  getLabel,
}) => {
  const [activeTab, setActiveTab] = useState(tabs[initial]);
  if (tabs.length === 0) {
    return null;
  }
  const handleTabClick = (idx) => {
    const newActiveTab = tabs[idx];
    setActiveTab(newActiveTab);
    onActiveTabChanged(newActiveTab);
  };
  return (
    <div>
      {tabs.map((tab, idx) => (
        <TabItem
          key={tab.id}
          label={getLabel(tab)}
          isActive={tab === activeTab}
          onTabClick={() => handleTabClick(idx)}
        ></TabItem>
      ))}
    </div>
  );
};
