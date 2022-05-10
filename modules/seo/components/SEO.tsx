import { NextSeo } from 'next-seo';
interface SEOProps {
  title: string;
  description: string;
}

const SEO = ({ title, description }: SEOProps) => {
  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        type: 'website',
        url: 'https://www.example.com/page',
        title: title,
        description: description,
        images: [
          {
            url: 'https://www.example.ie/og-image.jpg',
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
          },
        ],
      }}
    />
  );
};

export default SEO;
