export default function IngredientsList() {
  const dryIngredients = [
    "2 cups almonds (badam)",
    "1 cup cashew nuts",
    "½ cup pistachios",
    "¼ cup raisins",
    "2 tbsp powdered sugar",
    "1 tbsp cardamom powder"
  ]

  const oilSpices = [
    "½ cup ghee",
    "¼ cup coconut oil",
    "2 cloves",
    "1 inch cinnamon stick",
    "2 bay leaves",
    "Pinch of saffron (optional)"
  ]

  return (
    <div>
      <h2 className="text-2xl font-semibold text-amber-900 mb-4">
        Ingredients
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-amber-50 rounded-lg p-4">
          <h3 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
            <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
            Dry Ingredients
          </h3>
          <ul className="space-y-2">
            {dryIngredients.map((ingredient, index) => (
              <li key={index} className="text-amber-700 flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                <span>{ingredient}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-orange-50 rounded-lg p-4">
          <h3 className="font-semibold text-orange-800 mb-3 flex items-center gap-2">
            <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
            Oil & Spices
          </h3>
          <ul className="space-y-2">
            {oilSpices.map((ingredient, index) => (
              <li key={index} className="text-orange-700 flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>{ingredient}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}