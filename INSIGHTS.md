# Writing a New Insight

Insights use MDX, so each article can contain Markdown and React components.

## 1. Add the article metadata

Open `src/lib/insights.ts` and add a new item at the beginning of the
`insights` array:

```ts
{
  slug: "your-article-slug",
  title: "Your Article Title",
  excerpt: "A short summary shown on article cards and in search metadata.",
  category: "Analytics Category",
  publishedAt: "2026-07-27",
  displayDate: "July 27, 2026",
  readingTime: "6 min read",
  tools: ["SQL", "Python", "Power BI"],
}
```

Use lowercase words separated by hyphens for the slug.

## 2. Create the article

Create a matching file in `src/content/insights`:

```text
your-article-slug.mdx
your-article-slug.id.mdx
```

The first file contains the English article and the `.id.mdx` file contains
its Indonesian version. Both filenames must exactly match the metadata slug. A
useful article structure is:

```mdx
## Business question

Explain the decision or problem behind the analysis.

## Data and preparation

Describe the dataset, definitions, cleaning, and limitations.

## Method

Explain the analytical approach.

## Key findings

- Finding one
- Finding two

## Recommendation

Connect the findings to a practical action.

## Limitations

Explain what the available data cannot prove.
```

The new article will automatically appear on `/insights`, in the sitemap, and
in the homepage's latest-three section according to its position in the
metadata array.
