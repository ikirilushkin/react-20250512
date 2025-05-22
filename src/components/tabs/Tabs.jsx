import { TabItem } from "./TabItem";

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
    <div>
      {tabs.map((tab, idx) => (
        <TabItem
          key={tab.id}
          label={getLabel(tab)}
          isActive={tab === activeTab}
          onTabClick={() => onActiveTabChanged(tabs[idx])}
        />
      ))}
    </div>
  );
};
