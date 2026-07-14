import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Author: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const author = fileData.frontmatter?.author
  if (!author) return null // Jika tidak ada author, komponen tidak muncul

  return (
    <div class={displayClass}>
      <p class="author-text">Ditulis oleh: <strong>{author}</strong></p>
    </div>
  )
}

// Tambahkan CSS kustom untuk tampilan yang rapi
Author.css =
  .author-text {
    margin: 0.5rem 0 1.5rem 0;
    font-size: 0.95rem;
    color: var(--gray);
    opacity: 0.8;
  }
  .author-text strong {
    color: var(--dark);
    font-weight: 600;
  }


export default (() => Author) satisfies QuartzComponentConstructor
