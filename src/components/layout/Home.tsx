import { EyeIcon } from "@heroicons/react/24/outline";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 bg-white border-r flex-col">
        <div className="p-6 font-bold text-xl text-blue-700">QIWA</div>
        <nav className="flex-1 px-4 space-y-2">
          {[
            "Home",
            "My information",
            "My current job",
            "My resume",
            "Services",
          ].map((item) => (
            <div
              key={item}
              className={`px-3 py-2 rounded-lg cursor-pointer text-sm ${
                item === "My current job"
                  ? "bg-blue-50 text-blue-600 font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {item}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Header */}
        <header className="bg-white border-b px-4 md:px-8 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold">My current job</h1>
          <div className="text-sm text-gray-600">MAHABUB ALAM</div>
        </header>

        {/* Tabs */}
        <div className="px-4 md:px-8 mt-6">
          <div className="flex flex-wrap gap-6 border-b text-sm">
            <span className="pb-2 border-b-2 border-blue-600 text-blue-600 font-medium">
              Current contract
            </span>
            <span className="pb-2 text-gray-500">Work policy</span>
            <span className="pb-2 text-gray-500">Salary certificates</span>
            <span className="pb-2 text-gray-500">
              End of Service Reward calculator
            </span>
          </div>
        </div>

        {/* Contract Card */}
        <section className="px-4 md:px-8 py-6">
          <div className="bg-white rounded-xl shadow-sm p-4 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold">شركة نباتات للمقاولات</h2>
                <p className="flex items-center gap-2 text-xl text-blue-600 cursor-pointer mt-4 underline">
                  <a
                    href="../../../public/contract-12334006 (2).pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <EyeIcon className="w-4 h-5" />
                    Contract preview
                  </a>
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  ID: 12334006 · Updated: 03/06/2025
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full w-fit">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                Active
              </span>
            </div>

            {/* Info Pills */}
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                Job position: <b>CONSTRUCTION LABOUR</b>
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                Type: Full time contract – 24 months
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                Basic Salary: ﷼ 3,200.00
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                Notice period: 90 days
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                Probation period: 90 days
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                Contract renewal: Indefinite
              </span>
            </div>

            {/* Progress */}
            <div className="mt-8">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>03/06/2025</span>
                <span>02/06/2027</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-600 rounded-full w-1/2"></div>
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>Contract start date</span>
                <span>Contract end date</span>
              </div>
            </div>

            {/* Action */}
            <div className="mt-8">
              <button className="border border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-50 transition">
                Terminate contract
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
