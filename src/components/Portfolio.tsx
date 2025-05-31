
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  const artworks = [
    {
      id: 1,
      title: "Portrait Study #1",
      medium: "Charcoal on Paper",
      date: "2024",
      category: "Traditional Art",
      description: "Detailed charcoal portrait showcasing light and shadow techniques.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
    },
    {
      id: 2,
      title: "JOOUST Event Branding",
      medium: "Digital Design",
      date: "2025",
      category: "Graphic Design",
      description: "Complete visual identity design for university event.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Abstract Landscape",
      medium: "Oil on Canvas",
      date: "2023",
      category: "Traditional Art",
      description: "Vibrant interpretation of African landscapes using bold color palettes.",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=600&fit=crop",
    },
    {
      id: 4,
      title: "Educational Poster Series",
      medium: "Digital Design",
      date: "2024",
      category: "Graphic Design",
      description: "Physics and Chemistry educational materials with modern design approach.",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=600&fit=crop",
    },
    {
      id: 5,
      title: "Water-based Portrait",
      medium: "Watercolor",
      date: "2024",
      category: "Traditional Art",
      description: "Expressive watercolor portrait with flowing color transitions.",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=600&fit=crop",
    },
    {
      id: 6,
      title: "Tech Conference Branding",
      medium: "Digital Design",
      date: "2024",
      category: "Graphic Design",
      description: "Modern branding package for technology conference including logos and materials.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=600&fit=crop",
    },
  ];

  const categories = ["All", "Traditional Art", "Graphic Design"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredArtworks = selectedCategory === "All" 
    ? artworks 
    : artworks.filter(artwork => artwork.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A curated collection showcasing the intersection of traditional artistry and modern digital design.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork) => (
            <Card 
              key={artwork.id} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge className="bg-white/20 text-white border-white/30 mb-2">
                    {artwork.medium}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                    {artwork.title}
                  </h3>
                  <span className="text-sm text-gray-500 font-medium">{artwork.date}</span>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {artwork.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <Badge variant="outline" className="border-purple-200 text-purple-700">
                    {artwork.category}
                  </Badge>
                  <button className="text-purple-600 hover:text-purple-800 font-medium text-sm transition-colors duration-300">
                    View Details →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
