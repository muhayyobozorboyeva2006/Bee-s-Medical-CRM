"use client";

import IntegrationCard
    from "@/components/integrations/integrations-card";

import {
    useIntegrations,
} from "@/features/integrations/hooks/use-clinic.types";

export default function Page() {

    const {
        items,
        toggle,
    } = useIntegrations();

    return (
        <div className="p-6 space-y-6">

            {/* HEADER */}
            <div
                className="
          flex
          items-start
          justify-between
          gap-4
        "
            >

                <div>

                    <h1
                        className="
              text-4xl
              font-bold
            "
                    >
                        Integratsiyalar
                    </h1>

                    <p
                        className="
              text-gray-500
              mt-2
            "
                    >
                        SinoAI CRMni tashqi
                        platformalar bilan bog'lang.
                    </p>

                </div>

                <button
                    className="
            border
            rounded-full
            px-5
            py-3
            bg-white
          "
                >
                    ☰ Manbalar
                </button>

            </div>

            {/* GRID */}
            <div
                className="
          grid
          grid-cols-1
          lg:grid-cols-2
          xl:grid-cols-3
          gap-5
        "
            >

                {items.map((item) => (

                    <IntegrationCard
                        key={item.id}
                        item={item}
                        onToggle={toggle}
                    />

                ))}

            </div>

        </div>
    );
}