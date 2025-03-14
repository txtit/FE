import React from "react";

const BlogSection = () => {
  return (
    <section className="blog card">
      <div className="container">
        <div className="text-center flex justify-center items-center">
          <div className="title mb-[128px] max-w-[66%]">
            <h1 className="text-center text-6xl font-medium mb-6">
              We are Themesberg
            </h1>
            <p className="text-xl">
              Themesberg is an independent branding & experience design company
              working at the intersection of culture, design, and technology.
            </p>
          </div>
        </div>
        <div className="title mb-[128px] items-center flex justify-center">
          <a
            href="#"
            className="btn-primary btn text-center text-xl box-shadow hover:cursor-pointer hover:shadow-customInset"
          >
            <span className="fas fa-book-reader mr-2" />
            Our works
          </a>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="row border border-[#d1d9e6] box-shadowv3 rounded-[8.8px]">
                <div className="flex-[0_0_33.333%] max-w-[33.333%] px-6 py-12">
                  <div className="card-body flex-row justify-center items-center text-center">
                    <div className="icon icon-shape shadow-customInset text-4xl border-light rounded-circle mb-3">
                      <span className="fas fa-eye" />
                    </div>
                    <h2 className="text-2xl mr-2 mb-2">Audience</h2>
                    <p className="mb-0">
                      At Themesberg, we use human, brand, and cultural insights
                      to unlock strategic business opportunities for clients.
                    </p>
                  </div>
                </div>
                <div className="flex-[0_0_33.333%] max-w-[33.333%] px-6 py-12">
                  <div className="card-body flex-row justify-center items-center text-center">
                    <div className="icon icon-shape shadow-customInset text-4xl border-light rounded-circle mb-3">
                      <span className="fas fa-medal" />
                    </div>
                    <h2 className="text-2xl mr-2 mb-2">Branding</h2>
                    <p className="mb-0">
                      Despite being cautioned not to judge a book by its cover,
                      we all do it every day. We making your site looks better.
                    </p>
                  </div>
                </div>
                <div className="flex-[0_0_33.333%] max-w-[33.333%] px-6 py-12">
                  <div className="card-body flex-row justify-center items-center text-center">
                    <div className="icon icon-shape shadow-customInset text-4xl border-light rounded-circle mb-3">
                      <span className="fas fa-puzzle-piece" />
                    </div>
                    <h2 className="text-2xl mr-2 mb-2">Production</h2>
                    <p className="mb-0">
                      Today, truly creative sells. Get innovative ideas and
                      polished finish pieces from our creative agency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
