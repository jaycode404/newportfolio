"use client";
import React, { useEffect, useState } from "react";

export default function Clients() {
  const [isClient, setIsClient] = useState(false);

  // Ejecutar este efecto solo en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Palabras de{" "}
        <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">
          clientes satisfechos
        </span>
      </h1>

      {/* PROJECT CARDS */}
      <div className="flex flex-col items-center mt-20 ">
        {/* Solo carga el script si estamos en el cliente */}
        {isClient && (
          <>
            <script
              src="https://static.elfsight.com/platform/platform.js"
              async
            ></script>
            <div
              className="elfsight-app-47029fd4-1e99-4ff9-bf0a-76b54b862ef9"
              data-elfsight-app-lazy
            ></div>
          </>
        )}
      </div>
    </div>
  );
}
