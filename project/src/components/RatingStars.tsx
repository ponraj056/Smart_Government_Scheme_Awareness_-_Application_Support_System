import React, { useState } from "react";
import { Star } from "lucide-react";

interface RatingStarsProps {
  value: number;
  onChange?: (value: number) => void;
  readonly?: boolean;
}

export const RatingStars: React.FC<RatingStarsProps> = ({
  value,
  onChange,
  readonly = false,
}) => {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={readonly}
          onClick={() => onChange && onChange(star)}
          onMouseEnter={() => !readonly && setHover(star)}
          onMouseLeave={() => !readonly && setHover(null)}
          className="focus:outline-none"
        >
          <Star
            className={`w-6 h-6 transition ${
              (hover || value) >= star
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        </button>
      ))}
    </div>
  );
};
