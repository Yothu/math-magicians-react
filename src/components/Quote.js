import Header from './Header';
import './Style.css';

function Quote() {
  return (
    <div className="whole-page">
      <Header />
      <section id="quote-section" className="whole-section bg-light-blue container-fluid d-flex py-auto justify-content-center align-items-center px-sm-5 p-3">
        <p className="quote m-3 p-3 text-white bg-sea-blue">
          Without mathematics, theres nothing you can do.
          Everything around you is mathematics. Everything around you is
          numbers. - Shakuntala Devi
        </p>
      </section>
    </div>
  );
}

export default Quote;
