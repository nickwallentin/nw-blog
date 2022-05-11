import getSeries from '@lib/notion/getSeries';

export const getStaticProps = async (context) => {
  const series = await getSeries();
  console.log('SERIES =>', series);
  return { props: { series } };
};

interface SeriesPageProps {
  series: any;
}

const SeriesPage = ({ series }: SeriesPageProps) => {
  console.log('SERIES', series);
  return <></>;
};

export default SeriesPage;
