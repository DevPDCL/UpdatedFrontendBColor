import React from "react";
import { Sidemenu } from "../components";

import { LateTaheraAkhter } from "../assets";
const Chairman = () => {
  return (
    <div className="bg-[#F5FFFA]">
      <Sidemenu />
      <div className="overflow-hidden  bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 shadow-2xl bg-gray-100/5 p-5 rounded gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8  lg:pt-4">
              <div className="lg:max-w-lg">
                <div className="me-auto h-auto w-auto">
                  <h1 className="text-gray-900 pt-10 text-[36px] font-bold">
                    Late Tahera Akhter
                  </h1>
                  <p className="text-[#006642] text-[20px] font-medium">
                    Chairman
                  </p>
                  <img src={LateTaheraAkhter} className="h-auto  p-5 w-auto" />
                </div>
              </div>
            </div>
            <div className=" m-1 p-10   text-start">
              <div className="flex flex-row  max-w-7xl   ">
                <div className="me-auto h-auto w-auto">
                  <p className="text-gray-500 p-5">
                    After the liberation war, the health sector of Bangladesh
                    was completely deprived due to various political instability
                    and uncertainity. Unfortunately a significant number of
                    people of this country died on that time only because of
                    incomplete diagnosis of disease and lack of better
                    treatment. When the sufferings were beyond the limit, at
                    that time we established Popular Diagnostic Centre Ltd. in
                    Elephant Road, Dhaka. Our goal was to ensure modern
                    treatment facilities for the mass people of the country.
                    <br></br>
                    Popular started its journey in June 1983 and within few days
                    due to its accuracy of the reports and quality of the
                    service Popular became an unparallel symbol of reliability
                    and trust from the end of respective doctors and the people
                    of our country.<br></br>
                    To meet the demand of the respective doctors we ensured a
                    modern setup of latest high-tech machineries one after
                    another for complete diagnosis of patients with utmost
                    accuracy. Popular Diagnostic is the first private
                    organization which ensured world latest medical equipments
                    and technology in this country.<br></br>
                    Popular is committed to render the possible standard service
                    to the people of the country at an affordable cost. This
                    will definitely reduce the burden of the government and will
                    make the path of "Health for all" more smooth and effective.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chairman;
