import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { NewsletterSection } from '@/components/NewsletterSection';
import { ElectrolyteComparer } from '@/components/ElectrolyteComparer';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { Droplet, Zap, Award, TrendingUp } from 'lucide-react';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';

/**
 * EDITABLE UI - IndexUI
 * 
 * Sporty functional beverages & hydration store homepage
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    selectedCollectionId,
    filteredProducts,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  // Separate products by category
  const proteinProducts = filteredProducts.filter(p => 
    p.tags?.includes('protein') || p.tags?.includes('RTD')
  );
  
  const electrolyteProducts = filteredProducts.filter(p => 
    p.tags?.includes('electrolyte') || p.tags?.includes('hydration')
  );

  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-20 md:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Award className="h-5 w-5" />
                <span className="text-sm font-semibold">Premium Sports Nutrition</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                Hydrate & <span className="text-secondary">Perform</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
                Fuel your workouts with scientifically-formulated hydration and protein solutions. Zero compromises, maximum results.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all"
                  onClick={() => {
                    document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Start Hydration
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white hover:text-primary font-bold text-lg px-8 py-6 rounded-full"
                  onClick={() => {
                    document.getElementById('comparer-section')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Compare Products
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20">
                <div className="text-center">
                  <Droplet className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-sm opacity-90">Minerals</div>
                </div>
                <div className="text-center">
                  <Zap className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-2xl font-bold">0g</div>
                  <div className="text-sm opacity-90">Sugar</div>
                </div>
                <div className="text-center">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-2xl font-bold">30g</div>
                  <div className="text-sm opacity-90">Protein</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/30 to-accent/30 rounded-3xl blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=900&fit=crop" 
                alt="Athletic hydration"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Electrolyte Comparer Section */}
      <div id="comparer-section">
        <ElectrolyteComparer />
      </div>

      {/* Protein RTD Section */}
      <section id="products-section" className="py-16 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Protein Ready-to-Drink
              </h2>
              <p className="text-muted-foreground text-lg">
                Fast-absorbing protein shakes for post-workout recovery
              </p>
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-muted rounded-lg h-96 animate-pulse"></div>
              ))}
            </div>
          ) : proteinProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {proteinProducts.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No protein products available.</p>
            </div>
          )}
        </div>
      </section>

      {/* Gym Bundles Section */}
      {!loadingCollections && collections.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-accent/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Gym Bundles
              </h2>
              <p className="text-muted-foreground text-lg">
                Complete nutrition packs for serious athletes
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {collections.map((collection) => (
                <CollectionCard 
                  key={collection.id} 
                  collection={collection} 
                  onViewProducts={handleViewCollectionProducts} 
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Hydration Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                {selectedCollectionId 
                  ? `${collections.find(c => c.id === selectedCollectionId)?.name || 'Collection'}` 
                  : 'All Hydration Products'
                }
              </h2>
              <p className="text-muted-foreground text-lg">
                Electrolyte-packed formulas for peak performance
              </p>
            </div>
            {selectedCollectionId && (
              <Button 
                variant="outline" 
                onClick={handleShowAllProducts}
                className="border-2"
              >
                See All Products
              </Button>
            )}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-muted rounded-lg h-96 animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No products available.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      <FloatingCart />
    </EcommerceTemplate>
  );
};