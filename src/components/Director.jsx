import React from 'react'
import { Nav, Navbar, Sidemenu, Tech, Bottommenu } from "../components";

import { DrMostafizurRahman } from "../assets";
const Director = () => {
  return (
    <section className="bg-[#F5FFFA]">
      <Sidemenu />
      <Bottommenu />
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 shadow-2xl bg-gray-100/5 p-5 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <div className="me-auto h-auto w-auto">
                  <h1 className="text-gray-900 pt-10 text-[36px] font-bold">
                    Dr. Mostafizur Rahman
                  </h1>
                  <p className="text-[#006642] text-[20px] font-medium">
                    Managing Director
                  </p>
                  <img
                    src={DrMostafizurRahman}
                    className="h-auto  p-5 w-auto"
                  />
                </div>
              </div>
            </div>
            <div className=" m-1 p-10   text-start">
              <div className="flex flex-row  max-w-7xl   ">
                <div className="me-auto h-auto w-auto">
                  <p className="text-gray-500 p-5">
                    Popular started its journey as diagnostic centre in June
                    1983 with a Promise to render the possible standard service
                    to the people of the country at an affordable cost and in
                    turn to limit the outflow of the patient abroad at the
                    expense of heard earn foreign currency. When I started
                    working in pathology department of Dhaka Medical College
                    Hospital, I saw that thousands of people of our country are
                    going to abroad every year only for treatment. The country
                    was losing millions of taka worth foreign currency. That
                    time I felt, as a Doctor I must do something about it. I had
                    the spirit but didn't have the resources. From that
                    inspiration I started Popular Diagnostic.<br></br>
                    Bangladesh is a developing country. We have tremendous scope
                    and potentiality in our industry especially in health
                    sector. Basically my father was a Doctor. None of my family
                    members were engaged in business. My dream was to be a
                    surgeon. But necessity and circumstances force me to start
                    diagnostic business. Challenges and problems are many. But
                    solving strategies are very few and precise. As a
                    businessman we should relentlessly concern about our
                    commitment and quality.<br></br>
                    To achieve the goal and ensure the quality service need
                    highly skilled manpower who will continue to produce high
                    level productivity relentlessly maintaining high standard of
                    medical services. I always higher the skilled manpower and
                    motivate them. Being an entrepreneur of a health services
                    provider organization I always concern to ensure the right
                    man in the right place. I believe that if a person whether
                    he is a doctor or not works hard, has merit, good behaviour
                    and remains honest, he will be a successful businessman.
                    Success is nothing but a goal of achievement. In an every
                    success has positive productivity, which is dedicated for
                    the welfare of mankind. Almighty God, Honorable Doctors and
                    my beloved colleagues are always inspired me to do good and
                    take challenges. My all afford to happy them..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Director 