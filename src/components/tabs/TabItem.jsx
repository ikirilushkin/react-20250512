export const TabItem = ({ label, onTabClick, isActive = true }) => {
  return (
    <button onClick={onTabClick}>
      <span style={{ fontWeight: isActive ? 600 : 400 }}>{label}</span>
    </button>
  );
};
