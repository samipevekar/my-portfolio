

// Dummy logos (apne assets ke path yaha use karein)
import hirwalLogo from "../assets/hirwal.png";
import ibsarLogo from "../assets/ibsar.png";

// Education Data
const educationData = [
  {
    id: 2,
    institution: "Institute Of Business Studies And Research, Navi Mumbai",
    degree: "Master of Science - Computer Applications",
    duration: "Jul 2025 - June 2027",
    grade: "",
    description:
      "I am persuing my Master's degree in Computer Applications at Institute Of Business Studies And Research, Navi Mumbai.",
    logo: ibsarLogo,
  },
  {
    id: 1,
    institution: "Hirwal Education Trust, Mahad",
    degree: "Bachelor of Science - Computer Science",
    duration: "June 2022 - April 2025",
    grade: "9.81 CGPA",
    description:
      "I completed my Bachelor's degree in Computer Science at Hirwal Education Trust, Mahad.",
    logo: hirwalLogo,
  },
];

export const EducationSection = () => {
  return (
    <section
      id="education"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-8">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight opacity-0 animate-fade-in">
            My <span className="text-primary">Education</span>
          </h2>

          {/* Education Cards */}
          <div className="space-y-6">
            {educationData.map((edu) => (
              <div
                key={edu.id}
                className="bg-card border border-border rounded-lg shadow-lg p-6 flex items-start gap-4 text-left opacity-0 animate-fade-in-delay-1"
              >
                {/* Logo */}
                <img
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  className="w-16 h-16 object-contain bg-white rounded-md border border-muted"
                />

                {/* Details */}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-primary">
                    {edu.institution}
                  </h3>
                  <p className="text-base font-medium">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground">
                    {edu.duration}
                  </p>
                  {edu.grade && <p className="text-sm text-muted-foreground">
                    Grade: {edu.grade}
                  </p>}
                  {/* <p className="text-base text-foreground leading-relaxed">
                    {edu.description}
                  </p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
