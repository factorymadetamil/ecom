export default function StepsList() {
  const steps = [
    "Heat ghee and coconut oil in a heavy-bottomed pan over medium heat",
    "Add whole spices (cloves, cinnamon, bay leaves) and sauté for 30 seconds",
    "Add almonds and fry until they turn golden brown, about 5-7 minutes",
    "Add cashew nuts and pistachios, fry for another 3-4 minutes",
    "Add raisins and fry for 1 minute until they puff up",
    "Remove from heat and let it cool for 10 minutes",
    "Add powdered sugar, cardamom powder, and saffron (if using)",
    "Mix well and store in an airtight container"
  ]

  return (
    <div>
      <h2 className="text-2xl font-semibold text-amber-900 mb-4">
        Instructions
      </h2>
      
      <div className="space-y-3">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-3">
            <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
              {index + 1}
            </div>
            <p className="text-amber-700 pt-1">{step}</p>
          </div>
        ))}
      </div>
    </div>
  )
}