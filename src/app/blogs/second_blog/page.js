"use client";

import { motion } from "framer-motion";
import Navbar from "@/app/component/nav";
import Footer from "@/app/component/footer";


const events = [
  {
    month: "January",
    title: "National School Games – Athletics",
    location: "Delhi",
    sport: "Athletics",
  },
  {
    month: "February",
    title: "Junior Football League Trials",
    location: "Mumbai",
    sport: "Football",
  },
  {
    month: "March",
    title: "State Level Swimming Championship",
    location: "Bangalore",
    sport: "Swimming",
  },
  {
    month: "April",
    title: "National Badminton Ranking Tournament",
    location: "Hyderabad",
    sport: "Badminton",
  },
  {
    month: "May",
    title: "Inter-School Basketball Cup",
    location: "Pune",
    sport: "Basketball",
  },
  {
    month: "June",
    title: "Football Talent Hunt Trials",
    location: "Kolkata",
    sport: "Football",
  },
  {
    month: "July",
    title: "National Table Tennis League",
    location: "Chennai",
    sport: "Table Tennis",
  },
  {
    month: "August",
    title: "Independence Day Marathon",
    location: "Ahmedabad",
    sport: "Running",
  },
  {
    month: "September",
    title: "Junior Cricket Championship",
    location: "Lucknow",
    sport: "Cricket",
  },
  {
    month: "October",
    title: "National Boxing Trials",
    location: "Patiala",
    sport: "Boxing",
  },
  {
    month: "November",
    title: "All India Tennis Open",
    location: "Delhi",
    sport: "Tennis",
  },
  {
    month: "December",
    title: "Winter Sports Festival",
    location: "Shimla",
    sport: "Multi-Sport",
  },
];

export default function EventsPage() {
  return (
    <section>
        <Navbar/>
    <main className="min-h-screen bg-gradient-to-br from-[#0B1A3A] via-[#0F2A5F] to-black text-white px-6 py-14">
      
      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold">
          Sports Events Across India
        </h1>
        <p className="mt-4 text-gray-300">
          A curated list of tournaments, trials, and championships happening
          across India to help young athletes stay updated and never miss an opportunity.
        </p>
      </div>

      {/* EVENTS LIST */}
      <div className="max-w-5xl mx-auto grid gap-8">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white text-gray-800 rounded-2xl shadow-xl p-6 border-l-4 border-green-500"
          >
            <div className="flex justify-between items-center flex-wrap gap-2">
              <h2 className="text-xl font-semibold">{event.title}</h2>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                {event.sport}
              </span>
            </div>

            <p className="mt-3 text-gray-600">
              <span className="font-medium">{event.month}</span> • {event.location}
            </p>
          </motion.div>
        ))}
      </div>

      {/* BOTTOM ACCENT */}
      <div className="w-40 h-1 bg-green-400 mx-auto mt-16 rounded-full"></div>
    </main>
    <Footer/>
    </section>
  );
}
