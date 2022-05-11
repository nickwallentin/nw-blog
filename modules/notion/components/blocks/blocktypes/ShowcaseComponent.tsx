import { ShowcaseToggle } from '@common/components/showcase/ShowcaseToggle';
interface ShowcaseComponentProps {
  component: any;
}

const ShowcaseComponent = ({ component }: ShowcaseComponentProps) => {
  const { expression } = component;
  const propsArr = expression
    .replace('>', '')
    .split(':')
    .splice(1, 99)
    .map((prop) => {
      const arr = prop.split('=');
      return { key: arr[0], value: arr[1] };
    });
  console.log('PROPSARR =>', propsArr);
  let props: any = {};
  for (let prop of propsArr) {
    props[prop.key] = prop.value;
  }

  if (expression.startsWith('<ToggleShowcase')) {
    return <ShowcaseToggle {...props} />;
  }
};

export default ShowcaseComponent;
