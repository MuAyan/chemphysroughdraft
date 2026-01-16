import { BookOpen } from "lucide-react";

export default function Sources() {
  return (
    <section
      id="sources"
      className="min-h-screen py-32 bg-gradient-to-b from-slate-800 to-slate-900"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 fade-in-section">
          <div className="inline-block p-4 bg-blue-100 rounded-2xl mb-6">
            <BookOpen className="w-12 h-12 text-blue-600" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Sources
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            References used for physics and chemistry concepts
          </p>
        </div>

        <div className="space-y-16">

          {/* CHEMISTRY */}
          <div className="fade-in-section bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-8">Chemistry</h3>
            <div className="space-y-6 text-gray-200 text-sm leading-relaxed break-words">

              <p>
                OpenStax. (2019). <i>Chemistry 2e.</i> Rice University.  
                https://openstax.org/details/books/chemistry-2e  
                <br />
                <span className="text-gray-300">
                  Used for: stoichiometry, gas laws, thermochemistry, solutions.
                </span>
              </p>

              <p>
                Khan Academy. (n.d.). <i>Chemistry library.</i>  
                https://www.khanacademy.org/science/chemistry  
                <br />
                <span className="text-gray-300">
                  Used for: combustion, reactions, enthalpy, and mole concepts.
                </span>
              </p>

              <p>
                Chemistry LibreTexts. (n.d.). <i>Stoichiometry.</i>  
                https://chem.libretexts.org/Bookshelves/General_Chemistry/Introductory_Chemistry_(Liberman)/03%3A_Stoichiometry  
                <br />
                <span className="text-gray-300">
                  Used for: balancing equations and mole ratios.
                </span>
              </p>

              <p>
                Chemistry LibreTexts. (n.d.). <i>Colligative properties.</i>  
                https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Physical_Properties_of_Matter/Colligative_Properties  
                <br />
                <span className="text-gray-300">
                  Used for: antifreeze and freezing point depression.
                </span>
              </p>

              <p>
                Encyclopaedia Britannica. (n.d.). <i>Combustion.</i>  
                https://www.britannica.com/science/combustion-chemical-reaction  
                <br />
                <span className="text-gray-300">
                  Used for: fuel burning in engines.
                </span>
              </p>

              <p>
                Encyclopaedia Britannica. (n.d.). <i>Nylon.</i>  
                https://www.britannica.com/science/nylon  
                <br />
                <span className="text-gray-300">
                  Used for: material properties in airbags and seatbelts.
                </span>
              </p>

              <p>
                Prestone. (n.d.). <i>How antifreeze works.</i>  
                https://prestone.com/news/how-antifreeze-works/  
                <br />
                <span className="text-gray-300">
                  Used for: real-world application of colligative properties.
                </span>
              </p>

            </div>
          </div>

          {/* PHYSICS */}
          <div className="fade-in-section bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-8">Physics</h3>
            <div className="space-y-6 text-gray-200 text-sm leading-relaxed break-words">

              <p>
                OpenStax. (2022). <i>College Physics 2e.</i> Rice University.  
                https://openstax.org/details/books/college-physics-2e  
                <br />
                <span className="text-gray-300">
                  Used for: motion, Newton’s laws, momentum, energy, waves.
                </span>
              </p>

              <p>
                Khan Academy. (n.d.). <i>Physics library.</i>  
                https://www.khanacademy.org/science/physics  
                <br />
                <span className="text-gray-300">
                  Used for: kinematics, forces, momentum, electricity, waves.
                </span>
              </p>

              <p>
                The Physics Classroom. (n.d.). <i>Newton’s laws.</i>  
                https://www.physicsclassroom.com/class/newtlaws  
                <br />
                <span className="text-gray-300">
                  Used for: force and motion concepts.
                </span>
              </p>

              <p>
                The Physics Classroom. (n.d.). <i>Stopping distance.</i>  
                https://www.physicsclassroom.com/class/refrn/Lesson-3/Stopping-Distance  
                <br />
                <span className="text-gray-300">
                  Used for: braking distance and reaction time.
                </span>
              </p>

              <p>
                The Physics Classroom. (n.d.). <i>Light and optics.</i>  
                https://www.physicsclassroom.com/class/refrn  
                <br />
                <span className="text-gray-300">
                  Used for: mirrors, headlights, and reflection.
                </span>
              </p>

              <p>
                HowStuffWorks. (n.d.). <i>How car brakes work.</i>  
                https://auto.howstuffworks.com/brake.htm  
                <br />
                <span className="text-gray-300">
                  Used for: friction and braking systems.
                </span>
              </p>

              <p>
                HowStuffWorks. (n.d.). <i>How airbags work.</i>  
                https://auto.howstuffworks.com/car-driving-safety/safety-regulatory-devices/airbag.htm  
                <br />
                <span className="text-gray-300">
                  Used for: impulse, momentum change, and collisions.
                </span>
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
