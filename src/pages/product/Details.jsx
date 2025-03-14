const Details = () => {
  return (
    <section className="detail">
      <div className="container">
        <div className="row items-center justify-content-around">
          <div className="col-md-6">
            <div className="card">
              <img
                className="organic-radius box-shadowv3 border border-[rgba(243,247,250,0.05)] p-4"
                src="https://demo.themesberg.com/neumorphism-ui/assets/img/about-us-1.jpg"
                alt="About Us"
              />
            </div>
          </div>
          <div className="col-xl-5 flex-[0_0_41.67%] max-w-[41.67%]">
            <h2 className="text-[2.5rem] mb-6 font-medium text-[#31344b] text-start">
              Design with us, Develop Anything.
            </h2>
            <p className="text-xl font-light mb-6">
              Themesberg is an experienced and passionate group of designers,
              developers, project managers, writers and artists. Every client we
              work with becomes a part of the team. Together we face the
              challenges and celebrate the victories.
            </p>
            <p className="text-xl font-light mb-6">
              Our small team is active in the creative community, endlessly
              interested in what’s next, and generally pleasant to be around.
            </p>
            <img
              src="https://demo.themesberg.com/neumorphism-ui/assets/img/signature.svg"
              alt="signature"
              className="mt-4"
              width="150"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Details;
