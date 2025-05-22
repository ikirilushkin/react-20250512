export const Layout = ({ children }) => {
  return (
    <div>
      <header style={{ background: "#81D4DF", padding: 10 + "px" }}>
        <h3>Restaurants</h3>
      </header>
      {children}
      <footer style={{ background: "#81D4DF", padding: 10 + "px" }}>
        <span>React course</span>
      </footer>
    </div>
  );
};
