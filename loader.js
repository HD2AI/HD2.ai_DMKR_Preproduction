export default function loader({ src, width, quality }) {
  const params = ['auto=format', 'fit=max'];
  if (width) {
    params.push(`w=${width}`);
  }
  if (quality) {
    params.push(`q=${quality}`);
  }
  return `${src}?${params.join('&')}`;
}