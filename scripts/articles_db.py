#!/usr/bin/env python3
"""
Articles Database Manager for lend.ro
Prevents duplicate articles, enables interlinking
"""

import json
import os
from datetime import datetime, timedelta
from typing import List, Dict, Optional

DB_PATH = "/data/.openclaw/workspace/projects/lend-ro-nextjs/ARTICLES_DATABASE.json"

def load_db() -> dict:
    """Load articles database"""
    if not os.path.exists(DB_PATH):
        return {
            "version": "1.0",
            "lastUpdated": datetime.now().isoformat(),
            "articles": [],
            "stats": {"totalArticles": 0, "byCategory": {}, "last30Days": 0}
        }
    
    with open(DB_PATH, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_db(db: dict):
    """Save articles database"""
    db['lastUpdated'] = datetime.now().isoformat()
    with open(DB_PATH, 'w', encoding='utf-8') as f:
        json.dump(db, f, indent=2, ensure_ascii=False)

def search_similar(keywords: List[str], category: str, days_back: int = 30) -> List[dict]:
    """
    Search for similar articles in last N days
    Returns list of matching articles sorted by relevance
    """
    db = load_db()
    cutoff_date = datetime.now() - timedelta(days=days_back)
    
    similar = []
    for article in db['articles']:
        # Check date
        pub_date = datetime.fromisoformat(article['publishedAt'])
        if pub_date < cutoff_date:
            continue
        
        # Check category match
        if article['category'] != category:
            continue
        
        # Calculate keyword overlap
        article_keywords = set(kw.lower() for kw in article['keywords'])
        search_keywords = set(kw.lower() for kw in keywords)
        overlap = article_keywords & search_keywords
        
        if len(overlap) >= 2:  # At least 2 keywords match
            similarity_score = len(overlap) / max(len(article_keywords), len(search_keywords))
            similar.append({
                **article,
                'similarity': similarity_score,
                'matching_keywords': list(overlap)
            })
    
    # Sort by similarity (highest first)
    similar.sort(key=lambda x: x['similarity'], reverse=True)
    return similar

def add_article(
    slug: str,
    title: str,
    category: str,
    keywords: List[str],
    url: str,
    sources: List[str],
    excerpt: str = "",
    related_articles: List[str] = None
) -> dict:
    """
    Add new article to database
    Returns article object with generated ID
    """
    db = load_db()
    
    # Generate new ID
    new_id = str(len(db['articles']) + 1).zfill(3)
    
    article = {
        'id': new_id,
        'slug': slug,
        'title': title,
        'category': category,
        'keywords': keywords,
        'publishedAt': datetime.now().isoformat(),
        'url': url,
        'sources': sources,
        'excerpt': excerpt,
        'relatedArticles': related_articles or []
    }
    
    db['articles'].append(article)
    
    # Update stats
    db['stats']['totalArticles'] = len(db['articles'])
    if category not in db['stats']['byCategory']:
        db['stats']['byCategory'][category] = 0
    db['stats']['byCategory'][category] += 1
    
    # Count last 30 days
    cutoff = datetime.now() - timedelta(days=30)
    db['stats']['last30Days'] = sum(
        1 for a in db['articles'] 
        if datetime.fromisoformat(a['publishedAt']) >= cutoff
    )
    
    save_db(db)
    return article

def get_article_by_id(article_id: str) -> Optional[dict]:
    """Get article by ID"""
    db = load_db()
    for article in db['articles']:
        if article['id'] == article_id:
            return article
    return None

def update_article(article_id: str, updates: dict) -> bool:
    """Update existing article"""
    db = load_db()
    for i, article in enumerate(db['articles']):
        if article['id'] == article_id:
            db['articles'][i].update(updates)
            save_db(db)
            return True
    return False

def get_stats() -> dict:
    """Get database statistics"""
    db = load_db()
    return db['stats']

def cleanup_old(days: int = 90):
    """Archive articles older than N days (keep in db but mark as archived)"""
    db = load_db()
    cutoff = datetime.now() - timedelta(days=days)
    
    for article in db['articles']:
        pub_date = datetime.fromisoformat(article['publishedAt'])
        if pub_date < cutoff and 'archived' not in article:
            article['archived'] = True
    
    save_db(db)

# CLI interface
if __name__ == "__main__":
    import sys
    
    if len(sys.argv) < 2:
        print("Usage:")
        print("  python articles_db.py search <keywords> <category>")
        print("  python articles_db.py add <slug> <title> <category> <keywords>")
        print("  python articles_db.py stats")
        sys.exit(1)
    
    command = sys.argv[1]
    
    if command == "search":
        keywords = sys.argv[2].split(',')
        category = sys.argv[3]
        results = search_similar(keywords, category)
        
        if results:
            print(f"Found {len(results)} similar articles:")
            for r in results:
                print(f"\n  ID: {r['id']}")
                print(f"  Title: {r['title']}")
                print(f"  Similarity: {r['similarity']:.2%}")
                print(f"  Matching keywords: {', '.join(r['matching_keywords'])}")
                print(f"  URL: {r['url']}")
        else:
            print("No similar articles found.")
    
    elif command == "add":
        slug = sys.argv[2]
        title = sys.argv[3]
        category = sys.argv[4]
        keywords = sys.argv[5].split(',')
        
        article = add_article(
            slug=slug,
            title=title,
            category=category,
            keywords=keywords,
            url=f"/blog/{slug}",
            sources=["manual"]
        )
        print(f"✅ Article added: {article['id']} - {article['title']}")
    
    elif command == "stats":
        stats = get_stats()
        print(f"Total articles: {stats['totalArticles']}")
        print(f"Last 30 days: {stats['last30Days']}")
        print("\nBy category:")
        for cat, count in stats['byCategory'].items():
            print(f"  {cat}: {count}")
    
    else:
        print(f"Unknown command: {command}")
