export default function ImageGallery() {
  const images = [
    {
      id: 1,
      caption: "Raw almonds and nuts ready for frying",
      color: "bg-amber-100"
    },
    {
      id: 2,
      caption: "Frying until golden brown in ghee",
      color: "bg-orange-100"
    },
    {
      id: 3,
      caption: "Mixing with spices and sugar",
      color: "bg-yellow-100"
    },
    {
      id: 4,
      caption: "Final badam mix in storage jar",
      color: "bg-amber-50"
    }
  ]

  return (
    <div>
      <h2 className="text-2xl font-semibold text-amber-900 mb-4">
        Visual Guide
      </h2>
      
      <div className="overflow-x-auto custom-scrollbar pb-2">
        <div className="flex gap-4 whitespace-nowrap">
          {images.map((image) => (
            <div key={image.id} className="flex-shrink-0 w-64">
              <div className={`${image.color} border-2 border-dashed border-amber-300 rounded-lg aspect-video flex items-center justify-center mb-2`}>
                <span className="text-amber-600 font-medium">Image {image.id}</span>
              </div>
              <p className="text-sm text-amber-700">{image.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}