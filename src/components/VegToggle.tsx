
import { Toggle } from "@/components/ui/toggle";

interface VegToggleProps {
  showVegOnly: boolean;
  setShowVegOnly: (value: boolean) => void;
}

const VegToggle = ({ showVegOnly, setShowVegOnly }: VegToggleProps) => {
  return (
    <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-lg shadow">
      <span className="text-sm font-medium">Filter:</span>
      <div className="flex">
        <button
          onClick={() => setShowVegOnly(false)}
          className={`px-4 py-1.5 text-sm font-medium rounded-l-md transition-all ${
            !showVegOnly
              ? 'bg-red-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Non-Veg
        </button>
        <button
          onClick={() => setShowVegOnly(true)}
          className={`px-4 py-1.5 text-sm font-medium rounded-r-md transition-all ${
            showVegOnly
              ? 'bg-green-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Veg
        </button>
      </div>
    </div>
  );
};

export default VegToggle;
