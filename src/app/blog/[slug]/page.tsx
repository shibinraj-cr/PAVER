import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, ArrowLeft, Calendar, Clock } from 'lucide-react'
import { blogPosts, getBlogPostBySlug } from '@/data/blog'
import { siteConfig } from '@/data/siteConfig'
import SchemaOrg from '@/components/ui/SchemaOrg'

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.keywords,
    openGraph: {
      title: post.seo.title,
      description: post.seo.description,
      url: `${siteConfig.url}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
    },
    alternates: { canonical: `${siteConfig.url}/blog/${post.slug}` },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug)
  if (!post) notFound()

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Organization', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.company,
      logo: { '@type': 'ImageObject', url: `${siteConfig.url}/images/logo.jpg` },
    },
    datePublished: post.date,
    url: `${siteConfig.url}/blog/${post.slug}`,
    image: `${siteConfig.url}${post.image}`,
    keywords: post.tags.join(', '),
  }

  return (
    <>
      <SchemaOrg schema={schema} />

      {/* Breadcrumb */}
      <div className="bg-brand-gray border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2 text-xs text-brand-mid-gray">
          <Link href="/" className="hover:text-brand-red transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link href="/blog" className="hover:text-brand-red transition-colors">Blog</Link>
          <ChevronRight size={12} />
          <span className="text-brand-dark font-600 truncate max-w-xs">{post.title}</span>
        </div>
      </div>

      {/* Article hero */}
      <section className="bg-brand-dark text-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <span className="badge badge-gold mb-4 inline-block">{post.category}</span>
          <h1 className="font-condensed font-800 text-4xl md:text-5xl text-white leading-tight mb-5">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-5 text-gray-400 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-1.5"><Clock size={14} />{post.readTime}</span>
            <span>{post.author}</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-condensed prose-headings:font-700 prose-headings:text-brand-dark
              prose-h2:text-3xl prose-h3:text-2xl prose-h3:text-brand-red
              prose-p:text-brand-mid-gray prose-p:leading-relaxed
              prose-li:text-brand-mid-gray
              prose-strong:text-brand-dark
              prose-a:text-brand-red hover:prose-a:text-brand-red-dark"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-gray-100 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="badge badge-dark text-xs">{tag}</span>
            ))}
          </div>

          {/* Nav */}
          <div className="mt-8">
            <Link href="/blog" className="flex items-center gap-2 text-brand-red font-condensed font-700 hover:gap-3 transition-all">
              <ArrowLeft size={16} /> Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
