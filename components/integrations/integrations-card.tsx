"use client";

import {
    Send,
    Link2,
    ExternalLink,
    Settings2,
    Image as ImageIcon,
} from "lucide-react";

import { IntegrationItem } from "@/features/integrations/types/integrations.types";

type Props = {
    item: IntegrationItem;
    onToggle: (id: number) => void;
};

export default function IntegrationCard({
    item,
    onToggle,
}: Props) {

    const renderIcon = () => {

        // INSTAGRAM
        if (item.title === "Instagram") {
            return (
                <div className="relative w-11 h-11">

                    <div
                        className="
              absolute
              inset-0
              rounded-2xl
              bg-gradient-to-br
              from-pink-500
              via-orange-400
              to-blue-500
              blur-[10px]
              opacity-40
            "
                    />

                    <div
                        className="
              relative
              w-11
              h-11
              rounded-2xl
              bg-white
              flex
              items-center
              justify-center
              shadow-sm
            "
                    >
                        <ImageIcon size={20} className="text-pink-500" />
                    </div>

                </div>
            );
        }

        // TELEGRAM
        if (item.title === "Telegram Bot") {
            return (
                <div
                    className="
            w-11
            h-11
            rounded-2xl
            bg-sky-500
            flex
            items-center
            justify-center
            text-white
          "
                >
                    <Send size={20} />
                </div>
            );
        }

        // WEBHOOK
        return (
            <div
                className="
          w-11
          h-11
          rounded-2xl
          bg-slate-700
          flex
          items-center
          justify-center
          text-white
        "
            >
                <Link2 size={20} />
            </div>
        );
    };

    return (
        <div
            className="
        bg-white
        rounded-[26px]
        p-6
        shadow-sm
        border
        border-[#edf1f5]
        flex
        flex-col
        justify-between
        min-h-[270px]
      "
        >

            {/* TOP */}
            <div>

                <div className="flex items-start justify-between gap-4">

                    {/* LEFT */}
                    <div className="flex gap-4">

                        {renderIcon()}

                        <div>

                            <h2
                                className="
                  text-[18px]
                  font-semibold
                  text-[#0f172a]
                "
                            >
                                {item.title}
                            </h2>

                            <p
                                className="
                  text-[14px]
                  text-slate-500
                  leading-6
                  mt-2
                  max-w-[330px]
                "
                            >
                                {item.description}
                            </p>

                        </div>

                    </div>

                    {/* STATUS */}
                    <div
                        className="
              border
              border-[#e6ebf2]
              rounded-full
              px-3
              py-1
              text-[12px]
              text-slate-500
              whitespace-nowrap
            "
                    >
                        {item.connected
                            ? "Ulangan"
                            : "Ulanmagan"}
                    </div>

                </div>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mt-5">

                    {item.tags.map((tag) => (

                        <div
                            key={tag}
                            className="
                h-8
                px-3
                rounded-full
                border
                border-[#e6ebf2]
                flex
                items-center
                text-[12px]
                text-slate-500
              "
                        >
                            {tag}
                        </div>

                    ))}

                </div>

            </div>

            {/* BOTTOM */}
            <div
                className="
          border-t
          border-[#edf1f5]
          pt-5
          mt-5
          flex
          items-center
          justify-between
          gap-4
        "
            >

                <button
                    onClick={() => onToggle(item.id)}
                    className="
            h-12
            px-8
            rounded-2xl
            bg-[#12b981]
            hover:bg-[#0ea371]
            text-white
            text-[15px]
            font-medium
            flex
            items-center
            justify-center
            gap-2
            transition
            shadow-lg
            shadow-green-100/70
          "
                >
                    <Settings2 size={16} />
                    Sozlamalar
                </button>

                <button
                    className="
            flex
            items-center
            gap-1
            text-[14px]
            text-slate-600
          "
                >
                    Qo‘llanma
                    <ExternalLink size={15} />
                </button>

            </div>
        </div>
    );
}