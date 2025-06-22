'use client'

import { useState } from 'react'
import Link from 'next/link'

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  author: string
  publishedAt: string
  readTime: string
  category: string
  image: string
  featured: boolean
}

interface BlogFilterProps {
  posts: BlogPost[]
  categories: string[]
}

export default function BlogFilter({ posts, categories }: BlogFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState('All Posts')

  const filteredPosts = selectedCategory === 'All Posts' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory)

  const featuredPosts = filteredPosts.filter(post => post.featured)
  const recentPosts = filteredPosts.filter(post => !post.featured)

  return (
    <>
      {/* Categories Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button 
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">🔥 Featured Articles</h2>
            <p className="text-gray-600">Our most popular money-saving guides</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {featuredPosts.map((post, index) => (
              <Link 
                key={post.id}
                href={`/blog/${post.slug}`}
                className={`group ${index === 0 ? 'lg:col-span-2' : ''}`}
              >
                <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border border-gray-200 group-hover:border-blue-300">
                  <div className={`relative ${index === 0 ? 'h-64' : 'h-48'}`}>
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors ${
                      index === 0 ? 'text-xl' : 'text-lg'
                    }`}>
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {selectedCategory === 'All Posts' ? 'Recent Articles' : `${selectedCategory} Articles`}
            </h2>
            <p className="text-gray-600">
              {selectedCategory === 'All Posts' 
                ? 'Latest tips and strategies for smart shopping'
                : `Latest articles about ${selectedCategory.toLowerCase()}`
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Link 
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border border-gray-200 group-hover:border-blue-300">
                  <div className="relative h-48">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{post.author}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* No Posts Message */}
      {filteredPosts.length === 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">
              No articles found for "{selectedCategory}". Try selecting a different category.
            </p>
          </div>
        </div>
      )}
    </>
  )
}
