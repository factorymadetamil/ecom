import { Clock, Users, ChefHat } from 'lucide-react'

export default function RecipeHeader() {
  return (
    <div className="text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-2">
        Badam Mix
      </h1>
      <p className="text-amber-700 text-lg mb-6">
        Ammavin Kairusi - Traditional South Indian Almond Snack
      </p>
      
      <div className="flex justify-center gap-6 md:gap-8 text-sm md:text-base">
        <div className="flex items-center gap-2 text-amber-800">
          <Clock className="w-5 h-5" />
          <span className="font-medium">30 min</span>
        </div>
        <div className="flex items-center gap-2 text-amber-800">
          <Users className="w-5 h-5" />
          <span className="font-medium">4 servings</span>
        </div>
        <div className="flex items-center gap-2 text-amber-800">
          <ChefHat className="w-5 h-5" />
          <span className="font-medium">Easy</span>
        </div>
      </div>
    </div>
  )
}