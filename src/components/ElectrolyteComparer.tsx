import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, Zap, Droplet, Shield } from 'lucide-react'

const products = [
  {
    name: 'Electrolyte+',
    price: '$29.99',
    sodium: '500mg',
    potassium: '200mg',
    magnesium: '60mg',
    calories: '0',
    sugar: '0g',
    featured: true,
    benefits: ['Zero Sugar', '5 Minerals', 'Natural']
  },
  {
    name: 'Energy Boost',
    price: '$34.99',
    sodium: '450mg',
    potassium: '180mg',
    magnesium: '50mg',
    calories: '10',
    sugar: '0g',
    featured: false,
    benefits: ['100mg Caffeine', 'Energy', 'Endurance']
  },
  {
    name: 'Recovery Blend',
    price: '$32.99',
    sodium: '520mg',
    potassium: '220mg',
    magnesium: '100mg',
    calories: '5',
    sugar: '0g',
    featured: false,
    benefits: ['High Magnesium', 'Recovery', 'Anti-Cramp']
  }
]

export const ElectrolyteComparer = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Compare Electrolyte Formulas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find your perfect hydration match. All formulas are scientifically balanced for optimal performance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, idx) => (
            <Card 
              key={idx} 
              className={`relative overflow-hidden transition-all hover:shadow-xl ${
                product.featured ? 'border-2 border-primary shadow-lg' : ''
              }`}
            >
              {product.featured && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">{product.name}</CardTitle>
                <div className="text-3xl font-bold text-primary">{product.price}</div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {product.benefits.map((benefit, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {benefit}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b">
                    <div className="flex items-center gap-2">
                      <Droplet className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Sodium</span>
                    </div>
                    <span className="font-semibold">{product.sodium}</span>
                  </div>
                  
                  <div className="flex items-center justify-between py-2 border-b">
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-accent" />
                      <span className="text-sm font-medium">Potassium</span>
                    </div>
                    <span className="font-semibold">{product.potassium}</span>
                  </div>
                  
                  <div className="flex items-center justify-between py-2 border-b">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-secondary" />
                      <span className="text-sm font-medium">Magnesium</span>
                    </div>
                    <span className="font-semibold">{product.magnesium}</span>
                  </div>
                  
                  <div className="flex items-center justify-between py-2 border-b">
                    <span className="text-sm font-medium">Calories</span>
                    <span className="font-semibold">{product.calories}</span>
                  </div>
                  
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm font-medium">Sugar</span>
                    <div className="flex items-center gap-1">
                      <span className="font-semibold">{product.sugar}</span>
                      {product.sugar === '0g' && (
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}