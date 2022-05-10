import useTheme from '@store/useTheme';
const ThemeButton = () => {
  const theme = useTheme((state: any) => state.active);
  const toggleTheme = useTheme((state: any) => state.toggle);
  return (
    <button onClick={() => toggleTheme()}>
      <svg
        className='w-6 h-6 fill-current'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 48 48'
      >
        <path d='M24 7.5Q23.35 7.5 22.925 7.075Q22.5 6.65 22.5 6V3.5Q22.5 2.85 22.925 2.425Q23.35 2 24 2Q24.65 2 25.075 2.425Q25.5 2.85 25.5 3.5V6Q25.5 6.65 25.075 7.075Q24.65 7.5 24 7.5ZM24 46Q23.35 46 22.925 45.575Q22.5 45.15 22.5 44.5V42Q22.5 41.35 22.925 40.925Q23.35 40.5 24 40.5Q24.65 40.5 25.075 40.925Q25.5 41.35 25.5 42V44.5Q25.5 45.15 25.075 45.575Q24.65 46 24 46ZM42 25.5Q41.35 25.5 40.925 25.075Q40.5 24.65 40.5 24Q40.5 23.35 40.925 22.925Q41.35 22.5 42 22.5H44.5Q45.15 22.5 45.575 22.925Q46 23.35 46 24Q46 24.65 45.575 25.075Q45.15 25.5 44.5 25.5ZM3.5 25.5Q2.85 25.5 2.425 25.075Q2 24.65 2 24Q2 23.35 2.425 22.925Q2.85 22.5 3.5 22.5H6Q6.65 22.5 7.075 22.925Q7.5 23.35 7.5 24Q7.5 24.65 7.075 25.075Q6.65 25.5 6 25.5ZM36.05 11.9Q35.6 11.45 35.6 10.825Q35.6 10.2 36.05 9.75L37.2 8.6Q37.6 8.2 38.25 8.175Q38.9 8.15 39.35 8.6Q39.8 9.05 39.8 9.675Q39.8 10.3 39.35 10.75L38.15 11.95Q37.75 12.35 37.125 12.35Q36.5 12.35 36.05 11.9ZM8.7 39.35Q8.25 38.9 8.25 38.275Q8.25 37.65 8.7 37.2L9.85 36.05Q10.25 35.65 10.9 35.625Q11.55 35.6 12 36.05Q12.45 36.5 12.45 37.125Q12.45 37.75 12 38.2L10.8 39.4Q10.4 39.8 9.775 39.8Q9.15 39.8 8.7 39.35ZM37.2 39.35 36 38.2Q35.6 37.8 35.575 37.15Q35.55 36.5 36 36.05Q36.45 35.6 37.075 35.6Q37.7 35.6 38.15 36.05L39.35 37.25Q39.75 37.65 39.775 38.275Q39.8 38.9 39.35 39.35Q38.9 39.8 38.275 39.8Q37.65 39.8 37.2 39.35ZM9.85 11.9 8.65 10.75Q8.25 10.35 8.225 9.7Q8.2 9.05 8.65 8.6Q9.1 8.15 9.725 8.15Q10.35 8.15 10.8 8.6L12 9.8Q12.4 10.2 12.425 10.825Q12.45 11.45 12 11.9Q11.55 12.35 10.925 12.35Q10.3 12.35 9.85 11.9ZM24 35.25Q19.3 35.25 16.025 31.975Q12.75 28.7 12.75 24Q12.75 19.3 16.025 16.025Q19.3 12.75 24 12.75Q28.7 12.75 31.975 16.025Q35.25 19.3 35.25 24Q35.25 28.7 31.975 31.975Q28.7 35.25 24 35.25ZM24 32.25Q27.45 32.25 29.85 29.85Q32.25 27.45 32.25 24Q32.25 20.55 29.85 18.15Q27.45 15.75 24 15.75Q20.55 15.75 18.15 18.15Q15.75 20.55 15.75 24Q15.75 27.45 18.15 29.85Q20.55 32.25 24 32.25ZM24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Z' />
      </svg>
    </button>
  );
};
export default ThemeButton;
