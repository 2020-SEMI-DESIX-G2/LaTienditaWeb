import React, { Fragment } from "react";

const Testimonial = () => {
  return (
    <Fragment>
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://i.imgur.com/PUIuMzB.jpg"
                />
                <p className="leading-relaxed">
                Me ha ayudado a hidratar mi cabello, ya que, ha sido procesado exageradamente por los químicos habidos y por haber, 
                mi cabello estaba desidratado, con falta de brillo y volumen todo esto ha cambiado gracias a la disciplina que te adoptado 
                de utilizar habitualmente el  tratamiento capilar de dreams organic.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://i.imgur.com/TSLtIQW.jpg"
                />
                <p className="leading-relaxed">
                Dreams organic ha cambiado la forma en la que se ve mi cabello, en especial
                le dio un brillo natural a mi cabello y me ha crecido mucho en poco tiempo.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://i.imgur.com/WHxxnKc.jpg"
                />
                <p className="leading-relaxed">
                Dreams Organic ya es parte de mi día a día uso toda la linea desde la cabeza a los pies 
                y es una experiencia increíble como todos sus productos dan resultados desde su primer uso.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Testimonial;
