import Link from "next/link";

export default function Example() {
  return (
    <>
      <main className="grid h-[90vh] place-items-center bg-white px-6  lg:px-8 justify-center">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            404
          </h1>
          <p className="mt-6 text-base leading-7 text-[#000]">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
