import { footer } from "@/utils/data";

// Footer component
export default function Footer() {
  return (
    <>
      <footer className="border-b border-gray-500">
        <div className="mx-auto max-w-8xl px-4 xs:px-10">
          <div className="border-x border-gray-500 p-8 xs:p-20">
            <div className="text-center">
              <div className="mb-4 text-gray-50">{footer.copyright}</div>
              <div className="mx-auto max-w-2xl text-gray-500">
                {footer.text}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom bar */}
      <div className="mx-auto max-w-8xl px-4 xs:px-10">
        <div className="h-4 border-x border-gray-500 xs:h-16"></div>
      </div>
    </>
  );
}
