/**
 * The original pages each shipped their own <style> block (and the inner pages also loaded
 * Navpagescss.css). They are injected only while that page is mounted, so rules such as
 * `.reveal` never leak between routes.
 */
export default function PageStyle({ css }: { css: string[] }) {
  return <style dangerouslySetInnerHTML={{ __html: css.join('\n') }} />;
}
