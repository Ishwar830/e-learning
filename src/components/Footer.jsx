export default function Footer() {
   return (
      <footer className="bg-slate-800 text-white p-8 grid gap-4">
         <section className="grid gap-4">
            <section className="grid gap-2">
               <h3 className="text-lg">About</h3>
               <ul className="text-sm grid gap-1">
                  <li>About us</li>
                  <li>Careers</li>
                  <li>Contact us</li>
                  <li>Blog</li>
                  <li>Investors</li>
               </ul>
            </section>
            <section className="grid gap-2">
               <h3 className="text-lg">Legal & Accessibility</h3>
               <ul className="text-sm grid gap-1">
                  <li>Accessibility Statement</li>
                  <li>Privacy policy</li>
                  <li>Sitemap</li>
                  <li>Terms</li>
               </ul>
            </section>
         </section>
         <section className="flex gap-4 items-center">
            <p className="text-xl">Logo</p>
            <p> &copy;2025 Odin,Inc. </p>
         </section>
      </footer>
   );
}
