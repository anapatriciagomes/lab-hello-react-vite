import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';

function Icons() {
  return (
    <section>
      <ul>
        <li>
          <img src={icon1} alt="icon1" />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </li>
        <li>
          <img src={icon2} alt="icon2" />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state,</p>
        </li>
        <li>
          <img src={icon3} alt="icon3" />
          <h2>Single-Way</h2>
          <p>A state of immutable values are passed to the components.</p>
        </li>
        <li>
          <img src={icon4} alt="icon4" />
          <h2>JSX</h2>
          <p>Statically typed, designed to run on modern browsers.</p>
        </li>
      </ul>
    </section>
  );
}

export default Icons;
