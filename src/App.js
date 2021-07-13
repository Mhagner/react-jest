import Link from "./Link";
import CheckboxWithLabel from './CheckboxWithLabel';

function App() {
  return (
    <>
      <h2>Hello World</h2>
      <Link page="http:wwww.facebook.com">Facebook</Link>
      <CheckboxWithLabel labelOn="On" labelOff="Off" />
    </>
  );
}

export default App;
