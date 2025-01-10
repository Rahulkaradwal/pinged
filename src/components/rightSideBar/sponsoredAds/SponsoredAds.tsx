import UserNameAndPhoto from "@/components/ui/UserNameAndPhoto";
import Image from "next/image";

const SponsoredAds = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      {/* Top */}
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsored Ads</span>
        <Image src={"/more.png"} alt="" width={16} height={16} />
      </div>
      {/* Bottom */}
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-46"
          }`}
        >
          <Image
            src="https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg"
            alt=""
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <UserNameAndPhoto />
        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {size === "sm"
            ? "Lorum ipsum small"
            : size === "md"
            ? "Lorum ipsum medium"
            : "Lorum ipsum other"}
        </p>
        <button className="bg-gray-200 p-2 text-xs rounded-lg">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default SponsoredAds;
