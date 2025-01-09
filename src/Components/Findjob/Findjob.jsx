

const Findjob = () => {
  return (
    <div className="max-w-6xl mx-auto mt-14">
      <h2 className="text-center font-bold text-4xl border border-b-indigo-500 shadow-lg text-white py-3 rounded-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">Find Job Openings</h2>
      <p className="text-center mt-3">Thank you for your interest in employment with the U.S. Mission in Bangladesh. To view a current list of all available positions at the U.S. Mission in Bangladesh and to apply online, please visit our ERA site.All applications must be submitted through ERA to be considered.</p>
      {/* Job Opportunities */}
      <div className="grid grid-cols-2 mt-16 gap-7">
        <div>
          <h1 className="text-3xl font-bold">--Job Opportunities</h1>
          <div className="flex mt-2 gap-4">
            <p className="text-xl">View a current list of all available positions at the U.S. Mission. Bangladesh is seeking eligible and qualified applicants for the Escort and Administrative Rover in the Dhaka, Bangladesh office.</p>
            <img className="" src="../../../public/1.jpg" alt="" />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold">--Job Applicant User</h1>
          <div className="flex mt-2 gap-4">
            <p className="text-xl">Fill out Personal and Contact Information including First Name, Last Name, US Citizen status, Address, State/Province/Territory, Telephone type, Telephone Number. </p>
            <img src="../../../public/2.jpg" alt="" />
          </div>
        </div>
      </div>
      {/* Local Opportunities */}
      <div className="grid grid-cols-2 mt-16 gap-7">
        <div>
          <h1 className=" text-3xl font-bold">--Local Opportunities</h1>
          <ul className=" text-xl list-none mt-4 grid gap-4">
            <li>Family Member Employment</li>
            <li>8 Qualities of LES</li>
            <li>ERA Account Creation Guide</li>
            <li>Recuitment Application :Privacy Policy and Disclaimer</li>
          </ul>
        </div>
        <div>
          <h1 className="text-3xl font-bold ">--Family Menber Employment</h1>
          <p className="text-xl mt-4 grid gap-4">The Family Liaison Office has a dedicated team of professionals working to expand employment options and information resources for family members, both at home and abroad. Learn more about our programs or begin your employment planning. </p>

        </div>
      </div>
      {/* Department Career */}
      <div className="grid grid-cols-2 mt-16 gap-7">
        <div>
          <h1 className=" text-3xl font-bold">--Department Career Paths</h1>
          <ul className=" text-xl list-none mt-4 grid gap-6">
            <li>Internships and Fellowships</li>
            <li>DOSCareers Mobile App</li>
            <li>Diplomats in Residence</li>
            <li>Forign Service Careers</li>
          </ul>
        </div>
        <div>
          <h1 className="text-3xl font-bold ">--Internships and Fellowships</h1>
          <p className="text-xl mt-4 grid gap-4">Whether you’re an undergraduate or postgraduate student seeking a substantive internship or fellowship supporting U.S. foreign policy, there’s no limit as to how far our opportunities can take you. You’ll have the opportunity to gain insight into U.S. foreign policy and diplomacy, explore new career avenues, and acquire lifelong skills as you represent America to the world.. </p>
        </div>
      </div>
      <div className="grid mt-16 gap-4">
        <h1 className=" text-3xl font-bold">--You May Be Interested</h1>
        <div className="grid grid-cols-3 ">
          <div>
            <p className="text-2xl font-semibold">-News</p>
            <p className="text-2xl mt-4">NASA's Chief Astronaut, Joseph M. Acaba, concludes Historic Visit to Bangladesh</p>
          </div>
          <div>
            <p className="text-2xl font-semibold">-News</p>
            <p className="text-2xl mt-4">Bangladesh Armed Forces visit USINDOPACOM for Bilateral Defense Dialogue</p>
          </div>
          <div>
            <p className="text-2xl font-semibold">-News</p>
            <h1 className="text-2xl mt-4">NASA Astronaut Visits Bangladesh for the First Time</h1>
            <p className="text-xl mt-2">In a historic first for Bangladesh, NASA Astronaut,&nbsp;Joseph M. Acaba, will “touch down” in Dhaka to engage with local youth, academia, and the media.&nbsp;Acaba’s visit is a significant milestone, marking the first time NASA’s Chief of…</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Findjob;