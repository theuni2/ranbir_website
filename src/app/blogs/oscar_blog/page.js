import Image from "next/image";
import Navbar from "@/app/component/nav";
import Footer from "@/app/component/footer";

export default function ArticlePage() {
  return (
    <section>
        <Navbar/>
    <main className="bg-[#0B1C2D] text-white min-h-screen">
      
      {/* HERO IMAGE */}
      <div className="relative w-full h-[350px] md:h-[450px]">
        <Image
          src="/blog/img_4.png"
          alt="Oscar Foundation Football Event"
          fill
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute bottom-10 left-6 md:left-20 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Report on Volunteering Experience at Oscar Foundation Event
          </h1>
          <p className="mt-3 text-gray-300 text-sm">
            Sports Volunteering • Mumbai • Football Event
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-12 text-gray-300 leading-relaxed">

        {/* Event Overview */}
        <section>
          <h2 className="text-2xl font-semibold text-green-400 mb-4">
            Event Overview
          </h2>
          <p>
            The Annual Football Day was organized by the Oscar Foundation in
            Mumbai, commencing from 6:30 a.m. onwards. The event was a
            large-scale sports initiative aimed at promoting football,
            teamwork, discipline, and overall development among children.
            It brought together young participants, organizers, coaches,
            referees, volunteers, and support staff to successfully conduct
            multiple football matches and related activities.
          </p>
          <p className="mt-4">
            The program focused on providing children with exposure to
            structured sports, a positive competitive environment, and
            learning through sports.
          </p>
        </section>

        {/* Participants */}
        <section>
          <h2 className="text-2xl font-semibold text-green-400 mb-4">
            Participants and Attendance
          </h2>
          <p>
            The event witnessed the participation of a significant number of
            children along with representatives from the Oscar Foundation,
            coaches, referees, event coordinators, and volunteers.
            Approximately 400–500 children took part, making the event
            vibrant, energetic, and logistically demanding. Volunteers
            played a crucial role in ensuring smooth coordination and
            maintaining order.
          </p>
        </section>

        {/* Role */}
        <section>
          <h2 className="text-2xl font-semibold text-green-400 mb-4">
            My Role and Responsibilities
          </h2>

          <ul className="list-disc pl-6 space-y-3">
            <li>Assisted in gallery and Hall of Fame setup.</li>
            <li>Supported ground preparation for matches.</li>
            <li>Recorded match scores and maintained systematic records.</li>
            <li>Identified Best Player, Top Scorer, and Best Goalkeeper.</li>
            <li>Provided 15 footballs and 2 marker cone sets.</li>
            <li>Raised ₹4,000 through fundraising initiatives.</li>
            <li>Managed and guided 400–500 children on the ground.</li>
          </ul>

          <p className="mt-4">
            This role demanded continuous communication, patience, and
            effective crowd management skills while ensuring safety and
            discipline.
          </p>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-semibold text-green-400 mb-4">
            Skills Developed and Learning Experience
          </h2>
          <p>
            The volunteering experience enhanced communication, teamwork,
            and interpersonal skills. Managing large groups improved
            decision-making, problem-solving, and leadership abilities.
          </p>
          <p className="mt-4">
            The event also expanded knowledge of football coordination,
            performance evaluation, and sports event management while
            boosting confidence and responsibility.
          </p>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-2xl font-semibold text-green-400 mb-4">
            Conclusion
          </h2>
          <p>
            Volunteering at the Oscar Foundation event proved to be a
            rewarding and impactful journey. It provided practical exposure
            to organizing large-scale sports initiatives while contributing
            positively to the development of young athletes. The experience
            strengthened interest in sports-related initiatives and built
            essential life skills valuable for both academic and professional
            growth.
          </p>
        </section>

      </div>
    </main>
    <Footer/>
    </section>
  );
}
