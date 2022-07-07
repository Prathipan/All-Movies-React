export function ColorBox({ color }) {
  const styles = {
    background: color,
    height: "30px",
    width: "250px",
    marginTop: "25px",
  };

  return <div style={styles}></div>;
}
