import Drawing from "@/components/home/drawing";
import Icons from "@/components/svgs/icons";
import portrait from "@/components/home/portrait.jpg";

// Portrait component
export default function Portrait() {
  return (
    <div className="order-1 col-span-12 flex border-x border-gray-500 px-4 pt-4 xs:px-8 xs:pt-8 md:order-2 md:col-span-6 md:border-l-0 md:border-r md:pb-8 min-[896px]:col-span-5 xl:order-3 xl:col-span-4">
      {/* Image */}
      <div
        className="relative flex h-80 w-64 rounded-2xl border-t border-gray-50/20 bg-gray-1000 bg-cover bg-center p-2 md:h-auto md:w-full"
        style={{ backgroundImage: `url("${portrait.src}")` }}
      >
        {/* Drawing */}
        <Drawing className="absolute inset-0 z-10 hidden cursor-draw md:block" />

        {/* Border */}
        <div className="flex w-full items-end rounded-xl border border-gray-50/20 p-3">
          {/* Label */}
          <div className="flex items-center space-x-3">
            <Icons.Photo className="h-4 text-white/50" />
            <div className="text-sm font-bold uppercase">IMG_0526.jpg</div>
          </div>
        </div>
      </div>
    </div>
  );
}
