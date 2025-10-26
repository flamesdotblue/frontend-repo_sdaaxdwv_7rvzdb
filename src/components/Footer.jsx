export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">TechAk</h3>
            <p className="mt-3 text-sm text-gray-600 max-w-xs">
              A product-first studio crafting fast, beautiful, and secure digital experiences.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a className="hover:text-gray-900" href="#about">About</a></li>
              <li><a className="hover:text-gray-900" href="#work">Work</a></li>
              <li><a className="hover:text-gray-900" href="#services">Services</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Resources</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a className="hover:text-gray-900" href="#">Blog</a></li>
              <li><a className="hover:text-gray-900" href="#">Guides</a></li>
              <li><a className="hover:text-gray-900" href="#">Open Source</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Get in touch</h4>
            <p className="mt-3 text-sm text-gray-600">Have a brief? Let’s talk.</p>
            <a
              href="mailto:hello@techak.in"
              className="mt-4 inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/90"
            >
              hello@techak.in
            </a>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-black/5 pt-6">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} TechAk Studio. All rights reserved.</p>
          <div className="text-xs text-gray-500">Made with ❤️</div>
        </div>
      </div>
    </footer>
  );
}
