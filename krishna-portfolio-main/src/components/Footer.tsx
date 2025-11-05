import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Krishna Reddy</h3>
            <p className="text-primary-foreground/80">
              Mobile App Developer passionate about building intelligent, user-focused applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Skills", "Projects", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Hyderabad, Telangana, India</p>
              <a
                href="mailto:srikrishnareddy1234@gmail.com"
                className="block hover:text-accent transition-colors"
              >
                srikrishnareddy1234@gmail.com
              </a>
              <a
                href="tel:+919441123328"
                className="block hover:text-accent transition-colors"
              >
                +91 9441123328
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/80 text-sm flex items-center gap-1">
            © {currentYear} Krishna Reddy.  
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/krishnareddy066"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-primary-foreground/20 hover:border-accent hover:bg-accent/10 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/katkarlakrishnareddy"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-primary-foreground/20 hover:border-accent hover:bg-accent/10 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:srikrishnareddy1234@gmail.com"
              className="p-2 rounded-lg border border-primary-foreground/20 hover:border-accent hover:bg-accent/10 transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
