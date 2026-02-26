/**
 * Widget — универсальный боковой виджет
 */
function Widget({ title, children }) {
  return (
    <>
      <h3>{title}</h3>
      {children}
    </>
  );
}

export default Widget;
