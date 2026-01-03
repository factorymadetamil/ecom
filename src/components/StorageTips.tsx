import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

export default function StorageTips() {
  const [isOpen, setIsOpen] = useState(false)

  const tips = [
    "Let the badam mix cool completely before storing to prevent moisture buildup",
    "Store in an airtight glass or steel container to maintain freshness",
    "Shelf life: 2-3 weeks at room temperature, 1 month in refrigerator",
    "Serve as a snack with tea/coffee or as a festive sweet during celebrations"
  ]

  return (
    <div className="bg-amber-50 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-amber-100 transition-colors"
      >
        <h3 className="font-semibold text-amber-900 text-lg">
          Storage & Tips
        </h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-amber-700" />
        ) : (
          <ChevronDown className="w-5 h-5 text-amber-700" />
        )}
      </button>
      
      {isOpen && (
        <div className="px-4 pb-4">
          <ul className="space-y-2">
            {tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-amber-600 mt-1">✓</span>
                <span className="text-amber-700">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}