import { useEffect } from 'react';
import useHeadingsInViewStore from '@store/useHeadingsInView';
import { useInView } from 'react-intersection-observer';

export default function Heading({ id, heading, size }) {
  const { inView, ref } = useInView({});

  const addHeadingsInView = useHeadingsInViewStore((state: any) => state.add);
  const removeHeadingsInView = useHeadingsInViewStore(
    (state: any) => state.remove
  );
  useEffect(() => {
    if (inView) {
      addHeadingsInView(id);
    } else {
      removeHeadingsInView(id);
    }
  }, [inView]);
  const text = heading.rich_text
    .map(({ text }) => {
      return text.content;
    })
    .join(' ');

  switch (size) {
    case 1:
      return (
        <h1 ref={ref} id={id}>
          {text}
        </h1>
      );
      break;
    case 2:
      return (
        <h2 ref={ref} id={id}>
          {text}
        </h2>
      );
      break;
    case 3:
      return (
        <h3 ref={ref} id={id}>
          {text}
        </h3>
      );
      break;
    case 4:
      return (
        <h4 ref={ref} id={id}>
          {text}
        </h4>
      );
      break;
  }
}
