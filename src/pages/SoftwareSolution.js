import React from "react";
import { Link } from "react-router-dom";
import { softwareSolutions } from "../data/softwareData";

const SoftwareSolutions = () => {
  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[3px] text-blue-400">
            Our Solutions
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            Software Solutions We Deliver
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            We develop secure, scalable and customized software solutions that
            help businesses automate operations and accelerate digital growth.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {softwareSolutions.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.slug}
                to={`/solutions/${item.slug}`}
                className="group"
              >
                <div className="flex h-56 flex-col items-center rounded-2xl border border-slate-700 bg-slate-800 px-4 py-5 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-slate-700 hover:shadow-2xl">
                  {/* Icon */}
                  <div className="flex h-16 items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-700 transition-all duration-300 group-hover:bg-blue-600">
                      <Icon
                        size={28}
                        className="text-blue-400 transition-all duration-300 group-hover:text-white"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="mt-3 flex h-12 items-center justify-center">
                    <h3 className="text-[15px] font-semibold leading-5 text-white">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="mt-2 flex h-12 items-start justify-center">
                    <p className="text-xs leading-5 text-slate-400">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Line */}
                  <div className="mt-auto h-[2px] w-10 rounded-full bg-blue-500 transition-all duration-300 group-hover:w-16"></div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SoftwareSolutions;
