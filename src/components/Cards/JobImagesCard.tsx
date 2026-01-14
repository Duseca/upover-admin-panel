const JobImagesCard = ({ images }: { images: string[] }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
    <h2 className="text-xl font-bold text-gray-900 mb-4">Job Images</h2>
    <div className="space-y-4">
      {images.map((img, idx) => (
        <div key={idx} className="relative group overflow-hidden rounded-lg">
          <img
            src={img}
            alt={`Job Image ${idx + 1}`}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  </div>
);

export default JobImagesCard;
