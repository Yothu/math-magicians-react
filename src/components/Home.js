import React from 'react';
import Header from './Header';
import './Style.css';

function Home() {
  return (
    <div className="whole-page">
      <Header />
      <section id="home-section" className="whole-section container-fluid px-sm-5 p-3 bg-light-blue">
        <h2 className="text-white py-3">Welcome to Math!</h2>
        <div className="home-text-container bg-sea-blue p-3">
          <p className="text-white py-3">
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur elementum vitae lacus eget dapibus. Aliquam volutpat, turpis
            interdum dapibus placerat, est neque imperdiet nisl, quis placerat
            tortor diam non erat. Suspendisse ultrices bibendum orci, eget varius
            eros gravida ac. Donec quis risus quis nulla semper ullamcorper. Mauris
            tristique mi dolor, ac aliquet nisi tristique sed. Ut bibendum, magna
            at consequat accumsan, nibh quam egestas lorem, rhoncus varius est augue
            nec nibh. Nulla facilisi.
            {' '}
          </p>
          <p className="text-white py-3">
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur elementum vitae lacus eget dapibus. Aliquam volutpat, turpis
            interdum dapibus placerat, est neque imperdiet nisl, quis placerat
            tortor diam non erat. Suspendisse ultrices bibendum orci, eget varius
            eros gravida ac. Donec quis risus quis nulla semper ullamcorper. Mauris
            tristique mi dolor, ac aliquet nisi tristique sed. Ut bibendum, magna
            at consequat accumsan, nibh quam egestas lorem, rhoncus varius est augue
            nec nibh. Nulla facilisi.
            {' '}
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
