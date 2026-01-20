import logo from "../../public/image.png";

export default function WorkPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center px-4 py-8">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-sm p-4 md:p-8">
        {/* Title */}
        <h1 className="text-2xl font-bold mb-6">Work policy</h1>

        {/* Company Info */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold">شركة نباتات للمقاولات</h2>
          <p className="text-sm text-gray-500 mt-1">Updated at: 30/06/2021</p>
        </div>

        {/* Document Preview */}
        <div className="border rounded-lg bg-gray-100 p-3 md:p-4">
          <div className="relative bg-white rounded-lg shadow-inner h-[60vh] md:h-[70vh] overflow-y-auto flex items-center justify-center">
            {/* Fake document preview */}
            <div className="w-full max-w-3xl mx-auto p-6 md:p-10 text-center">
              <div className="mb-6">
                <img src={logo} alt="logo" className="mx-auto" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">
                شهادة اعتماد لائحة تنظيم العمل
              </h3>
              <p className="text-gray-500 leading-relaxed">
                هذا نموذج لمعاينة مستند سياسة العمل كما يظهر في منصة قوى. يمكن
                استبدال هذا المحتوى لاحقًا بملف PDF حقيقي.
              </p>
            </div>

            {/* Full size preview button */}
            <button className="absolute bottom-4 bg-black text-white text-sm px-4 py-2 rounded-full hover:bg-gray-800 transition">
              Full size preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
