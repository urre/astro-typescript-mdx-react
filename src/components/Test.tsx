export const Test = ({ title }: { title?: string }) => (
  <p style={{ padding: '2rem', backgroundColor: 'salmon' }}>
    Test component {title ? <em>{title}</em> : null}
  </p>
);
