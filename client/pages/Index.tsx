export default function Index() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      {/* Header */}
      <header className="bg-charcoal text-ivory sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-wrap items-center justify-between">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold">ARZ Host</h1>
              <span className="text-warmtaupe">VPS Hong Kong</span>
            </div>
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <a
                href="https://arzhost.com/region-based-vps/"
                className="hover:text-warmtaupe transition-colors"
              >
                VPS Region
              </a>
              <a
                href="https://arzhost.com/vps/"
                className="hover:text-warmtaupe transition-colors"
              >
                VPS Server Hong Kong
              </a>
              <a
                href="https://arzhost.com/lifetime-web-hosting/"
                className="hover:text-warmtaupe transition-colors"
              >
                Lifetime Web Hosting
              </a>
              <a
                href="https://www.arzhost.com/about-us/"
                className="hover:text-warmtaupe transition-colors"
              >
                About Us
              </a>
              <a
                href="https://www.arzhost.com/contact-us/"
                className="hover:text-warmtaupe transition-colors"
              >
                Contact Us
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            China‑Ready <span className="text-warmtaupe">VPS Hosting</span>
          </h1>
          <p className="text-xl mb-8 text-ashgrey max-w-3xl mx-auto">
            Power your site from inside China—fast, compliant, and always on.
            Low‑latency servers, ICP‑license assistance, and enterprise‑grade
            security in one affordable package.
          </p>
          <a
            href="https://arzhost.com/vps/"
            className="inline-block bg-warmtaupe text-charcoal px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all"
          >
            ➜ Launch My China VPS
          </a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            💡 Why Host Inside Mainland China?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-ashgrey rounded-lg">
              <thead className="bg-charcoal text-ivory">
                <tr>
                  <th className="p-4 text-left">Benefit</th>
                  <th className="p-4 text-left">What It Means for You</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-ashgrey">
                  <td className="p-4 font-semibold">Ultra‑Low Latency</td>
                  <td className="p-4">
                    Pages open in milliseconds for visitors across Beijing,
                    Shanghai, Shenzhen, and beyond—no Great‑Firewall slow‑downs.
                  </td>
                </tr>
                <tr className="border-b border-ashgrey bg-ivory">
                  <td className="p-4 font-semibold">Baidu & Local‑SEO Boost</td>
                  <td className="p-4">
                    Search engines rank sites hosted on Chinese IPs higher,
                    giving you front‑page visibility for local keywords.
                  </td>
                </tr>
                <tr className="border-b border-ashgrey">
                  <td className="p-4 font-semibold">Legal Compliance</td>
                  <td className="p-4">
                    We walk you through ICP filing, keeping your brand 100% in
                    line with MIIT regulations.
                  </td>
                </tr>
                <tr className="bg-ivory">
                  <td className="p-4 font-semibold">Chinese CDN Access</td>
                  <td className="p-4">
                    Nationwide content delivery ensures lightning‑fast image,
                    video, and file loads—even during peak traffic.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            📦 VPS Plans & Pricing — Powered by{" "}
            <a
              href="https://arzhost.com/"
              className="text-warmtaupe hover:underline"
            >
              ARZ Host
            </a>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-ashgrey rounded-lg bg-white">
              <thead className="bg-charcoal text-ivory">
                <tr>
                  <th className="p-4 text-left">Plan</th>
                  <th className="p-4 text-left">CPU / RAM</th>
                  <th className="p-4 text-left">NVMe SSD</th>
                  <th className="p-4 text-left">Bandwidth</th>
                  <th className="p-4 text-left">Monthly Price*</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-ashgrey">
                  <td className="p-4 font-semibold">Starter VPS</td>
                  <td className="p-4">1 vCore / 2 GB</td>
                  <td className="p-4">20 GB</td>
                  <td className="p-4">250 Mbit</td>
                  <td className="p-4 font-bold text-warmtaupe">$12.50</td>
                </tr>
                <tr className="border-b border-ashgrey bg-ivory">
                  <td className="p-4 font-semibold">Value VPS</td>
                  <td className="p-4">1 vCore / 2 GB</td>
                  <td className="p-4">40 GB</td>
                  <td className="p-4">250 Mbit</td>
                  <td className="p-4 font-bold text-warmtaupe">$16.00</td>
                </tr>
                <tr className="border-b border-ashgrey">
                  <td className="p-4 font-semibold">Essential VPS</td>
                  <td className="p-4">2 vCores / 4 GB</td>
                  <td className="p-4">80 GB</td>
                  <td className="p-4">250 Mbit</td>
                  <td className="p-4 font-bold text-warmtaupe">$34.00</td>
                </tr>
                <tr className="border-b border-ashgrey bg-ivory">
                  <td className="p-4 font-semibold">Comfort VPS</td>
                  <td className="p-4">4 vCores / 8 GB</td>
                  <td className="p-4">160 GB</td>
                  <td className="p-4">250 Mbit</td>
                  <td className="p-4 font-bold text-warmtaupe">$54.00</td>
                </tr>
                <tr className="bg-warmtaupe text-charcoal">
                  <td className="p-4 font-semibold">Elite VPS</td>
                  <td className="p-4">8 vCores / 8–32 GB</td>
                  <td className="p-4">160–640 GB</td>
                  <td className="p-4">250 Mbit</td>
                  <td className="p-4 font-bold">$60.00 +</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center mt-4 text-ashgrey">
            *Pricing verified July 1 2025.{" "}
            <a
              href="https://arzhost.com/"
              className="text-warmtaupe hover:underline"
            >
              arzhost.com
            </a>
          </p>
          <div className="text-center mt-8">
            <a
              href="https://arzhost.com/vps/"
              className="inline-block bg-warmtaupe text-charcoal px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all"
            >
              Choose Plan
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            🔑 What's Included—Every Plan
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-ashgrey rounded-lg">
              <h3 className="font-bold text-lg mb-3">Full Root Access</h3>
              <p className="text-ashgrey">
                Install any OS or software stack; you're in total control.
              </p>
            </div>
            <div className="p-6 border border-ashgrey rounded-lg">
              <h3 className="font-bold text-lg mb-3">NVMe‑Backed Storage</h3>
              <p className="text-ashgrey">
                Up to 6× faster reads/writes than{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Serial_ATA"
                  className="text-warmtaupe hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SATA SSDs
                </a>{" "}
                for snappy databases and CMSs.
              </p>
            </div>
            <div className="p-6 border border-ashgrey rounded-lg">
              <h3 className="font-bold text-lg mb-3">KVM Virtualization</h3>
              <p className="text-ashgrey">
                Dedicated CPU & RAM, isolated from noisy neighbors for stable
                performance.
              </p>
            </div>
            <div className="p-6 border border-ashgrey rounded-lg">
              <h3 className="font-bold text-lg mb-3">DDoS Shield</h3>
              <p className="text-ashgrey">
                Always‑on mitigation keeps your site online when attacks strike.
              </p>
            </div>
            <div className="p-6 border border-ashgrey rounded-lg">
              <h3 className="font-bold text-lg mb-3">24/7 Bilingual Support</h3>
              <p className="text-ashgrey">
                Mandarin & English engineers on live chat, email, and phone.
              </p>
            </div>
            <div className="p-6 border border-ashgrey rounded-lg">
              <h3 className="font-bold text-lg mb-3">Weekly Snapshots</h3>
              <p className="text-ashgrey">
                Automated backups with single‑click restores safeguard your
                data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Recommendations */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            🎯 Which Plan Fits You?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white border border-ashgrey rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-warmtaupe">
                Starter / Value
              </h3>
              <p className="text-ashgrey">
                Perfect for personal blogs, small business sites, or staging
                servers. Two gigs of RAM keep WordPress, Joomla, or Ghost
                running smoothly while NVMe drives slash load times.
              </p>
            </div>
            <div className="p-6 bg-white border border-ashgrey rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-warmtaupe">
                Essential
              </h3>
              <p className="text-ashgrey">
                A dual‑core boost for growing stores or SaaS MVPs. Handles
                moderate traffic, small databases, and light API workloads
                without breaking the bank.
              </p>
            </div>
            <div className="p-6 bg-white border border-ashgrey rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-warmtaupe">Comfort</h3>
              <p className="text-ashgrey">
                Quad‑core muscle and 8 GB RAM deliver headroom for high‑traffic
                e‑commerce, multiple client sites, or real‑time apps. Great
                choice when uptime and speed drive revenue.
              </p>
            </div>
            <div className="p-6 bg-white border border-ashgrey rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-warmtaupe">Elite</h3>
              <p className="text-ashgrey">
                Enterprise horsepower for large catalogs, media platforms, or
                regional clusters. Scale RAM to 32 GB and storage to 640 GB as
                demand spikes—no migration needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            ⚙️ From Checkout to Go‑Live—in Three Steps
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-warmtaupe text-charcoal rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-lg mb-3">Pick a Plan</h3>
              <p className="text-ashgrey">
                Order online; servers provision in minutes.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-warmtaupe text-charcoal rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-lg mb-3">Submit ICP Docs</h3>
              <p className="text-ashgrey">
                We review and file with MIIT, guiding every requirement.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-warmtaupe text-charcoal rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-lg mb-3">Deploy & Scale</h3>
              <p className="text-ashgrey">
                Upload your code, attach a Chinese CDN, and expand resources
                anytime from your dashboard.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a
              href="https://arzhost.com/vps/"
              className="inline-block bg-warmtaupe text-charcoal px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all"
            >
              ➜ Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Learn More About VPS Hosting
          </h2>
          <div className="aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/p8qVXz_2mPI"
              title="VPS Server Hong Kong"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            ⭐ Client Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-ashgrey rounded-lg bg-ivory">
              <p className="text-lg mb-4 italic">
                "Switching to a mainland VPS cut our page load from 4s to under
                1s. Baidu rankings jumped within weeks."
              </p>
              <p className="font-semibold">
                — Liang Z., Head of E‑Commerce, Shenzhen
              </p>
            </div>
            <div className="p-6 border border-ashgrey rounded-lg bg-ivory">
              <p className="text-lg mb-4 italic">
                "The{" "}
                <a
                  href="https://arzhost.com/"
                  className="text-warmtaupe hover:underline"
                >
                  ARZ team
                </a>{" "}
                made the ICP process painless. Our China microsite was live
                ahead of schedule and under budget."
              </p>
              <p className="font-semibold">
                — Rachel M., Global Marketing Director
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            ❓ Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div className="p-6 bg-white border border-ashgrey rounded-lg">
              <h3 className="font-bold text-lg mb-3">
                Do I really need an ICP license?
              </h3>
              <p className="text-ashgrey">
                Yes. Any public website hosted on a Chinese server must display
                a valid ICP number. Hosting without one risks takedown by local
                ISPs. We handle the paperwork, translations, and direct
                submission so you can focus on launch day.
              </p>
            </div>
            <div className="p-6 bg-white border border-ashgrey rounded-lg">
              <h3 className="font-bold text-lg mb-3">
                Can a foreign‑owned company apply for ICP?
              </h3>
              <p className="text-ashgrey">
                Absolutely. You'll need a Chinese‑registered business entity or
                a local partner; we'll outline acceptable structures, gather the
                required ID & corporate docs, and liaise with MIIT until
                approval comes through (typically 2–3 weeks).
              </p>
            </div>
            <div className="p-6 bg-white border border-ashgrey rounded-lg">
              <h3 className="font-bold text-lg mb-3">
                What if my traffic suddenly spikes?
              </h3>
              <p className="text-ashgrey">
                Our on‑demand scaling adds CPU, RAM, or storage in seconds, with
                no downtime. Combined with unmetered 250 Mbit bandwidth and
                optional Chinese CDN nodes, your site stays quick—even during
                flash sales or viral campaigns.
              </p>
            </div>
            <div className="p-6 bg-white border border-ashgrey rounded-lg">
              <h3 className="font-bold text-lg mb-3">
                Is the VPS fully managed?
              </h3>
              <p className="text-ashgrey">
                By default, servers are self‑managed to give you maximum
                freedom. If you prefer hands‑off operations, add a
                managed‑service pack and our sysadmins will handle updates,
                hardening, and monitoring 24/7—backed by strict SLAs.
              </p>
            </div>
            <div className="p-6 bg-white border border-ashgrey rounded-lg">
              <h3 className="font-bold text-lg mb-3">How secure is my data?</h3>
              <p className="text-ashgrey">
                Each instance lives in an isolated{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Kernel-based_Virtual_Machine"
                  className="text-warmtaupe hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  KVM container
                </a>{" "}
                with its own firewall. Weekly snapshots plus optional daily
                backups let you roll back any time. Enterprise‑grade DDoS
                filtering and 24/7 security ops keep threats at bay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-charcoal text-ivory">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            🌟 Ready to Dominate the Chinese Market?
          </h2>
          <p className="text-xl mb-8 text-ashgrey">
            Launch a compliant, high‑performance VPS today—backed by local
            expertise and global‑grade infrastructure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://arzhost.com/vps/"
              className="inline-block bg-warmtaupe text-charcoal px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all"
            >
              Start My China VPS
            </a>
            <a
              href="https://www.arzhost.com/contact-us/"
              className="inline-block border-2 border-warmtaupe text-warmtaupe px-8 py-4 rounded-lg font-semibold text-lg hover:bg-warmtaupe hover:text-charcoal transition-all"
            >
              Live Chat
            </a>
          </div>
          <p className="mt-6 text-ashgrey">+86‑400‑123‑4567</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-ivory py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">ARZ Host</h3>
              <p className="text-ashgrey mb-4">
                Professional VPS hosting solutions for Hong Kong and China
                markets.
              </p>
              <p className="text-ashgrey">
                Website:{" "}
                <a
                  href="https://arzhost.com/"
                  className="text-warmtaupe hover:underline"
                >
                  arzhost.com
                </a>
                <br />
                Phone: +1 (631) 594-8060
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2 text-ashgrey">
                <li>
                  <a
                    href="https://arzhost.com/region-based-vps/"
                    className="hover:text-warmtaupe transition-colors"
                  >
                    VPS Region
                  </a>
                </li>
                <li>
                  <a
                    href="https://arzhost.com/vps/"
                    className="hover:text-warmtaupe transition-colors"
                  >
                    VPS Server Hong Kong
                  </a>
                </li>
                <li>
                  <a
                    href="https://arzhost.com/lifetime-web-hosting/"
                    className="hover:text-warmtaupe transition-colors"
                  >
                    Lifetime Web Hosting
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-ashgrey">
                <li>
                  <a
                    href="https://www.arzhost.com/about-us/"
                    className="hover:text-warmtaupe transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arzhost.com/contact-us/"
                    className="hover:text-warmtaupe transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2 text-ashgrey">
                <li>
                  <a
                    href="https://www.arzhost.com/terms-conditions/"
                    className="hover:text-warmtaupe transition-colors"
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arzhost.com/privacy-policy/"
                    className="hover:text-warmtaupe transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arzhost.com/disclaimer/"
                    className="hover:text-warmtaupe transition-colors"
                  >
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-ashgrey mt-8 pt-8 text-center text-ashgrey">
            <p>
              &copy; 2025 ARZ Host. All rights reserved. | VPS hosting hong kong
              solutions powered by{" "}
              <a
                href="https://arzhost.com/"
                className="text-warmtaupe hover:underline"
              >
                ARZ Host
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
