interface PageMeta {
  title: string;
  description: string;
}

export const setPageMeta = ({ title, description }: PageMeta) => {
  if (typeof document === 'undefined') return;

  document.title = title;
  const metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  }
};
