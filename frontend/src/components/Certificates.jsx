import { useEffect, useState } from "react";
import api from "../api/api";

export default function Certificates() {
  const [certificates, setCertificates] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchCertificates = async () => {
    try {
      const res = await api.get("/certificates");
      setCertificates(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  return (
    <section id="certificates" className="py-20 bg-slate-900 text-white">
      <h1 className="text-4xl text-center font-bold mb-10">Certificates</h1>

      <div className="grid md:grid-cols-3 gap-6 px-10">
        {certificates.map((certificate) => (
          <div
            key={certificate._id}
            // onClick={() => setSelectedImage(certificate.image)}
            className="bg-slate-800 p-4 rounded-xl hover:scale-105 transition cursor-pointer"
          >
            <img
              src={certificate.image}
              alt={certificate.title}
              className="rounded-lg w-full h-56 object-cover"
            />

            <h2 className="text-xl mt-3 font-bold">{certificate.title}</h2>

            <p className="text-gray-400">{certificate.issuer}</p>

            <p
              onClick={() => setSelectedImage(certificate.image)}
              className="text-blue-400 mt-3"
            >
              View Certificate
            </p>
          </div>
        ))}
      </div>

      {certificates.length === 0 && (
        <p className="text-center text-gray-400 mt-8">No certificates found</p>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-5 right-8 text-white text-4xl"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="certificate full view"
            className="max-w-[90%] max-h-[90vh] rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
