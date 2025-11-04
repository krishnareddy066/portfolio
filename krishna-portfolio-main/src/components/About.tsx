import { GraduationCap, Award, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating impactful mobile applications with cutting-edge technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-6 animate-fade-in-up">
            <Card className="p-6 border-2 hover:border-accent/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Location & Contact</h3>
                  <p className="text-muted-foreground">Hyderabad, Telangana, India</p>
                  <p className="text-sm text-muted-foreground mt-1">srikrishnareddy1234@gmail.com</p>
                  <p className="text-sm text-muted-foreground">+91 9441123328</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 hover:border-accent/50 transition-all">
              <p className="text-foreground/90 leading-relaxed">
                I'm a Computer Science Engineering student passionate about mobile app development,
                UI/UX design, and AI-powered applications. With hands-on experience in{" "}
                <span className="text-accent font-medium">Flutter</span>,{" "}
                <span className="text-accent font-medium">Firebase</span>, and{" "}
                <span className="text-accent font-medium">Android Studio</span>, I've developed
                impactful, award-winning projects that combine technical knowledge, creativity,
                and collaboration to build user-focused, scalable digital solutions.
              </p>
            </Card>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6 animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-6">Education</h3>

            <Card className="p-6 border-l-4 border-l-accent hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold">Bachelor of Technology (B.Tech)</h4>
                  <p className="text-accent font-medium">Computer Science and Engineering</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Vignan Institute of Technology and Science, Hyderabad
                  </p>
                  <p className="text-sm text-muted-foreground">2023 – 2026</p>
                  <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                    CGPA: 8.45 / 10
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-[hsl(190,80%,55%)] hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[hsl(190,80%,55%)]/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-[hsl(190,80%,55%)]" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold">Diploma in Civil Engineering</h4>
                  <p className="text-[hsl(190,80%,55%)] font-medium">Civil Engineering</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Sanjay Gandhi Govt Polytechnic College, Adilabad
                  </p>
                  <p className="text-sm text-muted-foreground">2020 – 2023</p>
                  <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full bg-[hsl(190,80%,55%)]/10 text-[hsl(190,80%,55%)] text-sm font-medium">
                    CGPA: 9.52 / 10
                  </div>
                </div>
              </div>
            </Card>

            {/* Certifications Highlight */}
            <Card className="p-6 bg-gradient-to-br from-accent/5 to-[hsl(190,80%,55%)]/5 border-2 border-accent/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3">Key Certifications</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      NPTEL: Data Structures & Algorithms (IIT)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      Cisco: IT Fundamentals (C, Python, Modern AI)
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
